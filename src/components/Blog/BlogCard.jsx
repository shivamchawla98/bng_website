"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, Heart, MessageSquare, ArrowRight } from "lucide-react";
import {
  formatDate,
  truncateText,
  formatViewCount,
} from "@/lib/utils/blogUtils";

const BlogCard = ({ blog }) => {
  const router = useRouter();
  const {
    slug,
    title,
    excerpt,
    content,
    featuredImage,
    featuredImageAlt,
    publishedAt,
    category,
    tags = [],
    viewCount = 0,
    likeCount = 0,
    commentCount = 0,
  } = blog;

  const getContentPreview = () => {
    if (!content) return excerpt;
    const truncated = truncateText(content, 1100);
    return truncated;
  };
  const previewContent = getContentPreview();

  const handleNavigateToPost = () => {
    router.push(`/blog/${slug}`);
  };

  return (
    // md:px-10 lg:px-10
    <article className="w-full border-b border-gray-200  transition-colors">
      <div className="flex flex-col gap-3">
        {/* HEADING (only this + button navigate to post) */}
        {/* text-3xl sm:text-4xl md:text-[52px] */}
        <h2 className="text-2xl font-bold text-primary hover:text-purple-900">
          <button
            type="button"
            onClick={handleNavigateToPost}
            className="text-left inline-block group focus:outline-none"
          >
            <span className="relative inline-block">
              <span className=" group-hover:text-primary/80 transition-colors">
                {title.substring(0, 5)}
              </span>
              <span className="group-hover:text-primary/80 transition-colors">
                {title.substring(5)}
              </span>
              {/* <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-200" /> */}
            </span>
          </button>
        </h2>

      <div className = 'w-full flex flex-row justify-between items-center mt-3'>
        {/* DATE */}
        <div className="text-base sm:text-[18px] text-gray-600">
           <span className="font-medium">{formatDate(publishedAt)}</span>
        </div>

        {/* CATEGORY & TAGS */}
        <div className="flex flex-wrap items-center gap-2 text-base sm:text-[18px]">
          {category && (
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-primary font-semibold">
              {category.name}
            </span>
          )}

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <Link
                  key={tag.id}
                  href={`/blog/tag/${tag.slug}`}
                  className="text-base sm:text-[18px] bg-gray-100 text-gray-600 px-2 py-1 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  #{tag.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        </div>
        

        {/* CONTENT PREVIEW */}
        <div
          className="text-gray-600 mt-3 text-base sm:text-[18px] line-clamp-[10] prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: previewContent }}
        />

        {/* FOOTER: STATS + CTA */}
        <div className=" pt-3 flex flex-wrap items-center gap-3 border-t border-gray-100">
          {/* STATS */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {formatViewCount(viewCount)}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {likeCount}
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare className="w-4 h-4" />
              {commentCount}
            </span>
          </div>

          {/* SPACER */}
          <div className="flex-1" />

          {/* CONTINUE READING BUTTON (also navigates) */}
          <button
            type="button"
            onClick={handleNavigateToPost}
            className="inline-flex items-center gap-2 rounded-lg  transform hover:translate-x-2 duration-300  px-4 py-2 text-md text-white bg-[#6853db] hover:bg-primary hover:shadow-md transition-all"
          >
            Continue Reading
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* <div className="bg-gray-200 h-[1px] mt-3 w-full" /> */}
    </article>
  );
};

export default BlogCard;
