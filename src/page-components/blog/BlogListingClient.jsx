"use client";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useRouter, useSearchParams } from "next/navigation";
import BlogCard from "@/components/Blog/BlogCard";
import FilterBar from "@/components/Blog/FilterBar";
import { BlogListSkeleton } from "@/components/Blog/BlogCardSkeleton";
import { GET_BLOGS, GET_CATEGORIES, GET_TAGS } from "@/lib/graphql/blog";
import { BlogStatus, BlogSortOptions } from "@/lib/types/blog";
import { generateBreadcrumbs, formatDate } from "@/lib/utils/blogUtils";
import { ChevronLeft, ChevronRight, Newspaper } from "lucide-react";
import BlogPageBanner from "@/components/Blog/BlogPageBanner";

const BlogListingClient = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialPage = parseInt(searchParams.get("page")) || 1;
  const initialSearch = searchParams.get("q") || "";
  const initialCategory = searchParams.get("category") || "";
  const initialTags =
    searchParams.get("tags")?.split(",").filter(Boolean).map(Number) || [];
  const initialSort = searchParams.get("sort") || BlogSortOptions.NEWEST;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [filters, setFilters] = useState({
    categoryId: initialCategory ? parseInt(initialCategory) : undefined,
    tagIds: initialTags,
    sortBy: initialSort,
  });

  const { data: categoriesData } = useQuery(GET_CATEGORIES);
  const { data: tagsData } = useQuery(GET_TAGS);

  const buildFilters = () => {
    const graphqlFilters = {
      status: BlogStatus.PUBLISHED,
      page: currentPage,
      limit: 10,
    };

    if (searchTerm) graphqlFilters.search = searchTerm;
    if (filters.categoryId) graphqlFilters.categoryId = Number(filters.categoryId);
    if (filters.tagIds?.length > 0) {
      graphqlFilters.tagIds = filters.tagIds.map((id) => Number(id));
    }

    if (filters.sortBy === BlogSortOptions.OLDEST) {
      graphqlFilters.sortBy = "createdAt";
      graphqlFilters.sortOrder = "ASC";
    } else if (filters.sortBy === BlogSortOptions.POPULAR) {
      graphqlFilters.sortBy = "viewCount";
      graphqlFilters.sortOrder = "DESC";
    } else if (filters.sortBy === BlogSortOptions.TRENDING) {
      graphqlFilters.sortBy = "likeCount";
      graphqlFilters.sortOrder = "DESC";
    } else {
      graphqlFilters.sortBy = "publishedAt";
      graphqlFilters.sortOrder = "DESC";
    }

    return graphqlFilters;
  };

  const graphqlFilters = buildFilters();

  const { data, loading, error } = useQuery(GET_BLOGS, {
    variables: { filters: graphqlFilters },
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    const params = new URLSearchParams();
    if (currentPage > 1) params.set("page", currentPage.toString());
    if (searchTerm) params.set("q", searchTerm);
    if (filters.categoryId) params.set("category", filters.categoryId.toString());
    if (filters.tagIds?.length > 0) params.set("tags", filters.tagIds.join(","));
    if (filters.sortBy !== BlogSortOptions.NEWEST)
      params.set("sort", filters.sortBy);

    const newUrl = params.toString() ? `/blog?${params.toString()}` : "/blog";
    router.push(newUrl, { scroll: false });
  }, [currentPage, searchTerm, filters, router]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const breadcrumbs = generateBreadcrumbs("/blog");
  const blogs = data?.blogs?.blogs || [];
  const total = data?.blogs?.total || 0;
  const totalPages = data?.blogs?.totalPages || 1;

  const featuredBlog = blogs[0];
  const remainingBlogs = blogs.slice(1);

  if (error && !loading && blogs.length === 0) {
    return (
      <div className="min-h-screen bg-primaryBg py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Error Loading Blogs
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
      {/* Dark background gradient circles */}
      <div
        className="absolute top-20 left-8 w-[200px] h-[200px] rounded-full 
        bg-[linear-gradient(90deg,#0d0a1a_10%,#1a1340_90%)]
        blur-[100px] opacity-50"
      />
      <div
        className="absolute top-40 right-10 w-[150px] h-[150px] rounded-full 
        bg-[linear-gradient(90deg,#0d0a1a_20%,#1a1340_80%)]
        blur-[80px] opacity-40"
      />

      {/* HEADER */}
      <BlogPageBanner
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
        title="Latest Insights"
        subtitle="Explore expert insights on logistics, freight forwarding, and global supply chain management"
      />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        <FilterBar 
          categories={categoriesData?.categories || []}
          tags={tagsData?.tags || []}
          onFilterChange={handleFilterChange}
          onSearch={handleSearch}
          initialFilters={{ search: searchTerm, ...filters }}
        />

        {loading && <BlogListSkeleton />}

        {!loading && blogs.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No posts found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search term
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilters({ sortBy: BlogSortOptions.NEWEST });
                setCurrentPage(1);
              }}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {!loading && blogs.length > 0 && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Sidebar on LEFT */}
              <aside className="lg:col-span-4">
                <div className="bg-white rounded-lg shadow-md border border-primary/10 p-3 sticky top-32 ">
                  <div className="flex flex-row gap-2">
                    <Newspaper color='black'/>
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    Recent Posts
                  </h2>
                  </div>
                  

                  <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
                    {blogs.map((blog) => (
                      <button
                        key={blog.id}
                        onClick={() => router.push(`/blog/${blog.slug}`)}
                        className="w-full text-left rounded-lg px-3 py-2 hover:bg-primary/5 transition-colors group"
                      >
                        <div className="text-lg font-semibold text-gray-800 group-hover:text-black line-clamp-2">
                          {blog.title}
                        </div>
                        <div className="text-md text-gray-700 mt-1">
                          {formatDate(blog.publishedAt)}
                                            <div className='h-[1px] w-full bg-gray-300'/>

                        </div>
                      </button>
                      
                    ))}
                    
                  </div>
                </div>
              </aside>

              {/* Main blog list on RIGHT */}
              <div className="lg:col-span-8">
                {featuredBlog && currentPage === 1 && (
                  <div className="mb-6">
                    <BlogCard blog={featuredBlog} featured={true} />
                  </div>
                )}

                <div className="flex flex-wrap gap-6 md:gap-8 mb-12">
                  {remainingBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 flex items-center gap-2"
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
                                  ? "bg-primary text-white"
                                  : "border border-gray-300 hover:bg-gray-50"
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
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 flex items-center gap-2"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                <div className="text-center text-gray-600 mt-6">
                  Showing {(currentPage - 1) * 10 + 1}–
                  {Math.min(currentPage * 10, total)} of {total} posts
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogListingClient;
