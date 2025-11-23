"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDate, truncateText, formatViewCount } from "@/lib/utils/blogUtils";
import { Eye, Heart, MessageSquare } from "lucide-react";

/**
 * BlogCard Component - Reusable card for blog posts
 * Used in blog listing, category, tag, and related posts sections
 */
const BlogCard = ({ blog, featured = false }) => {
  const {
    slug,
    title,
    excerpt,
    featuredImage,
    featuredImageAlt,
    publishedAt,
    category,
    tags = [],
    viewCount = 0,
    likeCount = 0,
    commentCount = 0,
  } = blog;

  const cardClasses = featured
    ? "group relative rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-500 hover:shadow-2xl w-full h-[500px] md:h-[600px]"
    : "group relative rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-500 hover:shadow-xl w-full flex flex-col";

  const imageClasses = featured
    ? "relative w-full h-full"
    : "relative h-48 sm:h-56 overflow-hidden";

  return (
    <Link href={`/blog/${slug}`}>
      <div className={cardClasses}>
        {/* Image with Gradient Overlay */}
        <div className={imageClasses}>
          {featuredImage ? (
            <Image
              src={featuredImage}
              alt={featuredImageAlt || title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes={featured ? "(max-width: 1200px) 100vw, 1200px" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <span className="text-4xl text-primary opacity-50">BNG</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          {/* Category Badge */}
          {category && (
            <div className="absolute top-4 left-4 z-10">
              <Link
                href={`/blog/category/${category.slug}`}
                onClick={(e) => e.stopPropagation()}
                className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
              >
                {category.name}
              </Link>
            </div>
          )}

          {/* Stats Overlay */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            {featured && (
              <div className="flex items-center gap-4 text-white/90 text-sm mb-3">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{formatViewCount(viewCount)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>{likeCount}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  <span>{commentCount}</span>
                </div>
              </div>
            )}
            <span className="text-sm text-white/80">{formatDate(publishedAt)}</span>
            {featured && (
              <>
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mt-2 mb-3 leading-tight group-hover:text-primary/90 transition-colors">
                  {title}
                </h3>
                {excerpt && (
                  <p className="text-white/90 text-base md:text-lg line-clamp-2">
                    {truncateText(excerpt, 150)}
                  </p>
                )}
              </>
            )}
          </div>
        </div>

        {/* Content (for non-featured cards) */}
        {!featured && (
          <div className="p-5 sm:p-6 flex-grow flex flex-col">
            <span className="text-sm text-gray-500 mb-2">{formatDate(publishedAt)}</span>
            <h3 className="text-xl sm:text-[22px] text-[#27293B] font-bold mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
            {excerpt && (
              <p className="text-gray-600 mb-4 text-base flex-grow line-clamp-3">
                {truncateText(excerpt, 120)}
              </p>
            )}

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.slice(0, 3).map((tag) => (
                  <Link
                    key={tag.id}
                    href={`/blog/tag/${tag.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded hover:bg-primary hover:text-white transition-colors"
                  >
                    #{tag.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Stats */}
            <div className="flex items-center gap-4 text-gray-500 text-sm border-t border-gray-100 pt-4">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{formatViewCount(viewCount)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span>{likeCount}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4" />
                <span>{commentCount}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default BlogCard;
