"use client";

import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useRouter, useSearchParams } from "next/navigation";
import BlogCard from "@/components/Blog/BlogCard";
import { BlogListSkeleton } from "@/components/Blog/BlogCardSkeleton";
import Breadcrumbs from "@/components/Blog/Breadcrumbs";
import { GET_BLOGS } from "@/lib/graphql/blog";
import { BlogStatus, BlogSortOptions } from "@/lib/types/blog";
import { generateBreadcrumbs, debounce } from "@/lib/utils/blogUtils";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";

const BlogSearchClient = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const initialQuery = searchParams.get('q') || '';
  const initialPage = parseInt(searchParams.get('page')) || 1;
  const initialSort = searchParams.get('sort') || BlogSortOptions.NEWEST;

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [sortBy, setSortBy] = useState(initialSort);

  // Debounced search
  useEffect(() => {
    const handler = debounce(() => {
      setDebouncedQuery(searchQuery);
      setCurrentPage(1); // Reset to first page on new search
    }, 500);

    handler();
  }, [searchQuery]);

  // Update URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (debouncedQuery) params.set('q', debouncedQuery);
    if (currentPage > 1) params.set('page', currentPage.toString());
    if (sortBy !== BlogSortOptions.NEWEST) params.set('sort', sortBy);

    const queryString = params.toString();
    router.push(`/blog/search${queryString ? `?${queryString}` : ''}`, { scroll: false });
  }, [debouncedQuery, currentPage, sortBy, router]);

  // Build filters
  const buildFilters = () => {
    const filters = {
      status: BlogStatus.PUBLISHED,
      page: currentPage,
      limit: 10,
    };

    if (debouncedQuery) {
      filters.search = debouncedQuery;
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
  const { data, loading } = useQuery(GET_BLOGS, {
    variables: { filters: buildFilters() },
    skip: !debouncedQuery,
    fetchPolicy: 'cache-and-network',
  });

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    setCurrentPage(1);
  };

  const breadcrumbs = generateBreadcrumbs('/blog/search');
  const blogs = data?.blogs?.blogs || [];
  const total = data?.blogs?.total || 0;
  const totalPages = data?.blogs?.totalPages || 1;

  return (
    <div className="min-h-screen bg-primaryBg">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        {/* Search Header */}
        <div className="relative mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#27293B] mb-6">
            Search <span className="text-primary">Blog</span>
          </h1>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for blog posts..."
              className="w-full pl-14 pr-14 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Search Hint */}
          {!searchQuery && (
            <p className="text-gray-600 mt-4 text-sm">
              Try searching for "logistics", "freight", "supply chain", or any topic you're interested in
            </p>
          )}
        </div>

        {/* Results Header */}
        {debouncedQuery && (
          <div className="flex items-center justify-between mb-8 bg-white rounded-lg shadow-md p-4">
            <p className="text-gray-600">
              {loading ? (
                "Searching..."
              ) : (
                <>
                  {total} {total === 1 ? 'result' : 'results'} for <span className="font-semibold">"{debouncedQuery}"</span>
                </>
              )}
            </p>
            {!loading && total > 0 && (
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value={BlogSortOptions.NEWEST}>Newest First</option>
                <option value={BlogSortOptions.OLDEST}>Oldest First</option>
                <option value={BlogSortOptions.POPULAR}>Most Popular</option>
              </select>
            )}
          </div>
        )}

        {/* Loading State */}
        {loading && debouncedQuery && <BlogListSkeleton />}

        {/* No Search Query */}
        {!debouncedQuery && !loading && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Start Searching</h3>
            <p className="text-gray-600">
              Enter a search term above to find relevant blog posts
            </p>
          </div>
        )}

        {/* No Results */}
        {!loading && debouncedQuery && blogs.length === 0 && (
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
            <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any posts matching "{debouncedQuery}"
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Search Results */}
        {!loading && debouncedQuery && blogs.length > 0 && (
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

export default BlogSearchClient;
