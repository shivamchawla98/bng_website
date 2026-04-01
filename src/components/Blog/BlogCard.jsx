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
  stripHtml,
} from "@/lib/utils/blogUtils";

const BlogCard = ({ blog }) => {
  const router = useRouter();
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
    authorName = "Unknown Author",
    authorTitle = "",
  } = blog;

  const handleNavigateToPost = () => {
    router.push(`/blog/${slug}`);
  };

  const handleShare = (platform) => {
    const url = `${typeof window !== "undefined" ? window.location.origin : ""}/blog/${slug}`;
    const text = title;
    
    switch(platform) {
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`);
        break;
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
        break;
      default:
        break;
    }
  };

  return (
    <article className="w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="flex flex-col">
        {/* 1. IMAGE */}
        <div className="relative w-full h-[380px] md:h-[440px] overflow-hidden bg-gray-100">
          {featuredImage ? (
            <Image
              src={featuredImage}
              alt={featuredImageAlt || title}
              fill
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <span className="text-gray-400">No image</span>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-grow">
          {/* 2. DATE AND AUTHOR */}
          <div className="flex flex-col gap-1 mb-4 pb-4 border-b border-gray-200">
            <p className="text-sm text-gray-500">
              <span className="font-medium">{formatDate(publishedAt)}</span>
              {authorName && (
                <span className="text-gray-600"> • By <span className="font-semibold text-gray-800">{authorName}</span></span>
              )}
              {authorTitle && <span className="text-gray-600 text-xs"> ({authorTitle})</span>}
            </p>
          </div>

          {/* 3. HEADING/TITLE */}
          <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors line-clamp-2">
            <button
              type="button"
              onClick={handleNavigateToPost}
              className="text-left inline-block w-full focus:outline-none"
            >
              {title}
            </button>
          </h2>

          {/* 4. CATEGORY & TAGS */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {category && (
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-primary font-semibold text-xs">
                {category.name}
              </span>
            )}
            {tags.length > 0 && (
              <>
                {tags.slice(0, 3).map((tag) => (
                  <Link
                    key={tag.id}
                    href={`/blog/tag/${tag.slug}`}
                    className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-colors font-medium"
                  >
                    #{tag.name}
                  </Link>
                ))}
              </>
            )}
          </div>

          {/* 5. EXCERPT */}
          <p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-3 flex-grow">
            {stripHtml(excerpt) || truncateText(stripHtml(blog.content), 150)}
          </p>

          {/* 6. CONTINUE READING */}
          <div className="w-full justify-end flex">
            <button
            type="button"
            onClick={handleNavigateToPost}
            className="inline-flex items-center gap-2 bg-primary p-2 rounded-lg hover:translate-x-1 transition-all duration-200 font-semibold hover:text-white/90 hover:bg-primary/90  mb-6 self-start"
          >
            Continue Reading
            <ArrowRight className="w-4 h-4" />
          </button>
          </div>

          {/* 7. SOCIAL URLS + LIKES, COMMENTS AND VIEWS */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            {/* Social Share Icons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleShare("twitter")}
                className="p-2 text-gray-500 hover:text-blue-400 hover:bg-blue-50 rounded-lg transition-colors"
                title="Share on Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" /></svg>
              </button>
              <button
                onClick={() => handleShare("facebook")}
                className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="Share on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z" /></svg>
              </button>
              <button
                onClick={() => handleShare("linkedin")}
                className="p-2 text-gray-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                title="Share on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
              </button>
            </div>

            {/* Views, Likes and Comments */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                <Eye className="w-4 h-4" />
                {formatViewCount(viewCount)}
              </span>
              <span className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
                <Heart className="w-4 h-4" />
                {likeCount}
              </span>
              <span className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                <MessageSquare className="w-4 h-4" />
                {commentCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
