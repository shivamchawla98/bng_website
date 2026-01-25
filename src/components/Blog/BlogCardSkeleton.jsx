"use client";
import React from "react";

/**
 * BlogCardSkeleton - Loading skeleton for BlogCard
 */
export const BlogCardSkeleton = ({ featured = false }) => {
  if (featured) {
    return (
      <div className="relative rounded-xl overflow-hidden shadow-lg bg-white w-full h-[500px] md:h-[600px] animate-pulse">
        <div className="w-full h-full bg-gray-200"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-4 w-16 bg-white/30 rounded"></div>
            <div className="h-4 w-16 bg-white/30 rounded"></div>
            <div className="h-4 w-16 bg-white/30 rounded"></div>
          </div>
          <div className="h-4 w-24 bg-white/30 rounded mb-2"></div>
          <div className="h-10 bg-white/30 rounded mb-2"></div>
          <div className="h-6 bg-white/30 rounded w-3/4"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg bg-white w-full flex flex-col animate-pulse">
      {/* Image Skeleton */}
      <div className="relative h-48 sm:h-56 bg-gray-200"></div>
      {/* Content Skeleton */}
      <div className="p-5 sm:p-6 flex-grow flex flex-col">
        <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
        <div className="h-6 bg-gray-200 rounded mb-2"></div>
        <div className="h-6 bg-gray-200 rounded w-2/3 mb-3"></div>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-4/5 mb-4"></div>
        {/* Tags Skeleton */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="h-6 w-16 bg-gray-200 rounded"></div>
          <div className="h-6 w-20 bg-gray-200 rounded"></div>
          <div className="h-6 w-18 bg-gray-200 rounded"></div>
        </div>
        {/* Stats Skeleton */}
        <div className="flex items-center gap-4 border-t border-gray-100 pt-4 mt-auto">
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

/**
 * BlogListSkeleton - Loading skeleton for blog listing page
 */
export const BlogListSkeleton = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Skeleton on LEFT */}
        <aside className="lg:col-span-4">
          <div className="bg-gradient-to-br from-white to-primary/5 rounded-xl shadow-md border border-primary/10 p-3 sticky top-32 h-[500px] animate-pulse">
            <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>
            <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="w-full rounded-lg px-3 py-2 bg-gray-100 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </aside>
        {/* Main blog list Skeleton on RIGHT */}
        <div className="lg:col-span-8">
          {/* Featured Post Skeleton */}
          <div className="mb-6">
            <BlogCardSkeleton featured={true} />
          </div>
          {/* Grid Skeleton */}
          <div className="flex flex-wrap gap-6 md:gap-8 mb-12">
            {[...Array(6)].map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </div>
          {/* Pagination Skeleton */}
          <div className="flex items-center justify-center gap-2">
            <div className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 w-24 animate-pulse"></div>
            <div className="flex items-center gap-2">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="w-10 h-10 rounded-lg bg-gray-200 animate-pulse"></div>
              ))}
            </div>
            <div className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 w-24 animate-pulse"></div>
          </div>
          <div className="text-center text-gray-600 mt-6">
            <div className="h-4 w-48 bg-gray-200 rounded mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
