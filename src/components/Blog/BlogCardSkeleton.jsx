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
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      {/* Featured Post Skeleton */}
      <div className="mb-12">
        <BlogCardSkeleton featured={true} />
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {[...Array(9)].map((_, index) => (
          <BlogCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
