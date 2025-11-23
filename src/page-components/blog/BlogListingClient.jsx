"use client";

import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useRouter, useSearchParams } from "next/navigation";
import BlogCard from "@/components/Blog/BlogCard";
import FilterBar from "@/components/Blog/FilterBar";
import { BlogListSkeleton } from "@/components/Blog/BlogCardSkeleton";
import Breadcrumbs from "@/components/Blog/Breadcrumbs";
import { GET_BLOGS, GET_CATEGORIES, GET_TAGS } from "@/lib/graphql/blog";
import { BlogStatus, BlogSortOptions } from "@/lib/types/blog";
import { generateBreadcrumbs } from "@/lib/utils/blogUtils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BlogListingClient = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get initial filters from URL
  const initialPage = parseInt(searchParams.get('page')) || 1;
  const initialSearch = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || '';
  const initialTags = searchParams.get('tags')?.split(',').filter(Boolean).map(Number) || [];
  const initialSort = searchParams.get('sort') || BlogSortOptions.NEWEST;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [filters, setFilters] = useState({
    categoryId: initialCategory ? parseInt(initialCategory) : undefined,
    tagIds: initialTags,
    sortBy: initialSort,
  });

  // Fetch categories and tags for filters
  const { data: categoriesData } = useQuery(GET_CATEGORIES);
  const { data: tagsData } = useQuery(GET_TAGS);

  // Build GraphQL filters
  const buildFilters = () => {
    const graphqlFilters = {
      status: BlogStatus.PUBLISHED,
      page: currentPage,
      limit: 10,
    };

    if (searchTerm) {
      graphqlFilters.search = searchTerm;
    }

    if (filters.categoryId) {
      graphqlFilters.categoryId = filters.categoryId;
    }

    if (filters.tagIds && filters.tagIds.length > 0) {
      graphqlFilters.tagIds = filters.tagIds;
    }

    // Handle sorting
    if (filters.sortBy === BlogSortOptions.OLDEST) {
      graphqlFilters.sortBy = 'createdAt';
      graphqlFilters.sortOrder = 'ASC';
    } else if (filters.sortBy === BlogSortOptions.POPULAR) {
      graphqlFilters.sortBy = 'viewCount';
      graphqlFilters.sortOrder = 'DESC';
    } else if (filters.sortBy === BlogSortOptions.TRENDING) {
      graphqlFilters.sortBy = 'likeCount';
      graphqlFilters.sortOrder = 'DESC';
    } else {
      // Default: newest first
      graphqlFilters.sortBy = 'publishedAt';
      graphqlFilters.sortOrder = 'DESC';
    }

    return graphqlFilters;
  };

  // Fetch blogs
  const { data, loading, error } = useQuery(GET_BLOGS, {
    variables: { filters: buildFilters() },
    fetchPolicy: 'cache-and-network',
  });

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (currentPage > 1) params.set('page', currentPage.toString());
    if (searchTerm) params.set('q', searchTerm);
    if (filters.categoryId) params.set('category', filters.categoryId.toString());
    if (filters.tagIds && filters.tagIds.length > 0) params.set('tags', filters.tagIds.join(','));
    if (filters.sortBy !== BlogSortOptions.NEWEST) params.set('sort', filters.sortBy);

    const queryString = params.toString();
    const newUrl = queryString ? `/blog?${queryString}` : '/blog';
    
    router.push(newUrl, { scroll: false });
  }, [currentPage, searchTerm, filters, router]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page when search changes
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const breadcrumbs = generateBreadcrumbs('/blog');
  const blogs = data?.blogs?.blogs || [];
  const total = data?.blogs?.total || 0;
  const totalPages = data?.blogs?.totalPages || 1;
  const featuredBlog = blogs[0];
  const remainingBlogs = blogs.slice(1);

  if (error) {
    return (
      <div className="min-h-screen bg-primaryBg py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              We couldn't load the blog posts. Please try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primaryBg">
      {/* Gradient Background Elements */}
      <div
        className="absolute top-20 left-8 w-[200px] h-[200px] rounded-full"
        style={{
          background: "linear-gradient(180deg, #6853DB 10%, #6853DB 90%)",
          filter: "blur(100.8px)",
          opacity: 0.3,
        }}
      ></div>
      <div
        className="absolute top-40 right-10 w-[150px] h-[150px] rounded-full"
        style={{
          background: "linear-gradient(180deg, #6853DB 10%, #6853DB 90%)",
          filter: "blur(80px)",
          opacity: 0.2,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        {/* Page Header */}
        <div className="relative mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-[55px] font-bold text-[#27293B] mb-3 relative z-10">
            Latest <span className="text-primary">Insights</span>
          </h1>
          <h1
            className="absolute w-full top-[-40px] lg:top-[-59px] left-0 text-5xl md:text-8xl font-bold text-[#27293B] opacity-[3%] leading-none z-0 select-none"
            aria-hidden="true"
          >
            Latest Insights
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl relative z-10">
            Explore expert insights on logistics, freight forwarding, and global supply chain management
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          categories={categoriesData?.categories || []}
          tags={tagsData?.tags || []}
          onFilterChange={handleFilterChange}
          onSearch={handleSearch}
          initialFilters={{ search: searchTerm, ...filters }}
        />

        {/* Loading State */}
        {loading && <BlogListSkeleton />}

        {/* No Results */}
        {!loading && blogs.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <svg
              className="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search term
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilters({ sortBy: BlogSortOptions.NEWEST });
                setCurrentPage(1);
              }}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Blog Posts */}
        {!loading && blogs.length > 0 && (
          <>
            {/* Featured Post */}
            {featuredBlog && currentPage === 1 && (
              <div className="mb-12">
                <BlogCard blog={featuredBlog} featured={true} />
              </div>
            )}

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              {remainingBlogs.map((blog) => (
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
                    // Show first, last, current, and adjacent pages
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

            {/* Results Count */}
            <div className="text-center text-gray-600 mt-6">
              Showing {(currentPage - 1) * 10 + 1} - {Math.min(currentPage * 10, total)} of {total} posts
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogListingClient;
