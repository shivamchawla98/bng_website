"use client";

import React, { useState, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { useRouter, useSearchParams } from "next/navigation";
import BlogCard from "@/components/Blog/BlogCard";
import { BlogListSkeleton } from "@/components/Blog/BlogCardSkeleton";
import Breadcrumbs from "@/components/Blog/Breadcrumbs";
import { GET_BLOGS, GET_TAGS } from "@/lib/graphql/blog";
import { BlogStatus, BlogSortOptions } from "@/lib/types/blog";
import { generateBreadcrumbs } from "@/lib/utils/blogUtils";
import { ChevronLeft, ChevronRight, Tag } from "lucide-react";

const BlogTagClient = ({ slug }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const initialPage = parseInt(searchParams.get('page')) || 1;
  const initialSort = searchParams.get('sort') || BlogSortOptions.NEWEST;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [sortBy, setSortBy] = useState(initialSort);

  // Fetch tags
  const { data: tagsData } = useQuery(GET_TAGS);
  
  // Find current tag
  const tag = useMemo(() => {
    return tagsData?.tags?.find(t => t.slug === slug);
  }, [tagsData, slug]);

  // Build filters
  const buildFilters = () => {
    const filters = {
      status: BlogStatus.PUBLISHED,
      page: currentPage,
      limit: 10,
    };

    if (tag?.id) {
      filters.tagIds = [tag.id];
    }

    // Handle sorting
    if (sortBy === BlogSortOptions.OLDEST) {
      filters.sortBy = 'createdAt';
      filters.sortOrder = 'ASC';
    } else if (sortBy === BlogSortOptions.POPULAR) {
      filters.sortBy = 'viewCount';
      filters.sortOrder = 'DESC';
    } else {
      filters.sortBy = 'publishedAt';
      filters.sortOrder = 'DESC';
    }

    return filters;
  };

  // Fetch blogs
  const { data, loading, error } = useQuery(GET_BLOGS, {
    variables: { filters: buildFilters() },
    skip: !tag?.id,
    fetchPolicy: 'cache-and-network',
  });

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    const params = new URLSearchParams();
    if (newPage > 1) params.set('page', newPage.toString());
    if (sortBy !== BlogSortOptions.NEWEST) params.set('sort', sortBy);
    
    const queryString = params.toString();
    router.push(`/blog/tag/${slug}${queryString ? `?${queryString}` : ''}`, { scroll: false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    setCurrentPage(1);
    const params = new URLSearchParams();
    if (newSort !== BlogSortOptions.NEWEST) params.set('sort', newSort);
    
    const queryString = params.toString();
    router.push(`/blog/tag/${slug}${queryString ? `?${queryString}` : ''}`, { scroll: false });
  };

  const breadcrumbs = tag
    ? generateBreadcrumbs(`/blog/tag/${slug}`, { tagName: tag.name })
    : [];

  const blogs = data?.blogs?.blogs || [];
  const total = data?.blogs?.total || 0;
  const totalPages = data?.blogs?.totalPages || 1;

  if (!tag && !loading) {
    return (
      <div className="min-h-screen bg-primaryBg py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tag Not Found</h2>
            <p className="text-gray-600 mb-6">
              The tag you're looking for doesn't exist.
            </p>
            <a
              href="/blog"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Back to Blog
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primaryBg">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        {/* Tag Header */}
        <div className="relative mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Tag className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#27293B]">
              #{tag?.name || 'Tag'}
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl ml-15">
            Browse all posts tagged with <span className="font-semibold">#{tag?.name}</span>
          </p>
        </div>

        {/* Sort Options */}
        <div className="flex items-center justify-between mb-8 bg-white rounded-lg shadow-md p-4">
          <p className="text-gray-600">
            {total} {total === 1 ? 'post' : 'posts'} found
          </p>
          <select
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value={BlogSortOptions.NEWEST}>Newest First</option>
            <option value={BlogSortOptions.OLDEST}>Oldest First</option>
            <option value={BlogSortOptions.POPULAR}>Most Popular</option>
          </select>
        </div>

        {/* Loading State */}
        {loading && <BlogListSkeleton />}

        {/* Error State */}
        {error && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600">Failed to load posts. Please try again later.</p>
          </div>
        )}

        {/* No Results */}
        {!loading && blogs.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">No posts yet</h3>
            <p className="text-gray-600 mb-6">
              There are no published posts with this tag yet.
            </p>
          </div>
        )}

        {/* Blog Grid */}
        {!loading && blogs.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>

                <div className="flex items-center gap-2">
                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                            currentPage === page
                              ? 'bg-primary text-white'
                              : 'border border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {page}
                        </button>
                      );
                    } else if (
                      page === currentPage - 2 ||
                      page === currentPage + 2
                    ) {
                      return <span key={page}>...</span>;
                    }
                    return null;
                  })}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BlogTagClient;
