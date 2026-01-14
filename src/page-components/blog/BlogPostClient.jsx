"use client";

import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  GET_BLOG_BY_SLUG,
  GET_RELATED_BLOGS,
  TRACK_BLOG_VIEW,
} from "@/lib/graphql/blog";
import ShareButtons from "@/components/Blog/ShareButtons";
import TableOfContents from "@/components/Blog/TableOfContents";
import RelatedPosts from "@/components/Blog/RelatedPosts";
import Newsletter from "@/components/Blog/Newsletter";
import BackToTop from "@/components/Blog/BackToTop";
import { formatDate, injectHeadingIds } from "@/lib/utils/blogUtils";
import {
  Eye,
  Heart,
  MessageSquare,
  Calendar,
  Tag,
  Folder,
} from "lucide-react";
import BlogPageBanner from "@/components/Blog/BlogPageBanner";

const BlogPostClient = ({ slug }) => {
  const router = useRouter();
  const [processedContent, setProcessedContent] = useState("");

  // Fetch blog post
  const { data, loading, error } = useQuery(GET_BLOG_BY_SLUG, {
    variables: { slug },
    fetchPolicy: "cache-and-network",
  });

  const blog = data?.blogBySlug;
  console.log(blog);

  // Fetch related posts
  const { data: relatedData } = useQuery(GET_RELATED_BLOGS, {
    variables: { blogId: blog?.id, limit: 3 },
    skip: !blog?.id,
  });

  // Track view mutation
  const [trackView] = useMutation(TRACK_BLOG_VIEW);

  // Track page view
  useEffect(() => {
    if (blog?.id) {
      trackView({ variables: { blogId: blog.id } }).catch(console.error);
    }
  }, [blog?.id, trackView]);

  // Process content to inject IDs for TOC
  useEffect(() => {
    if (blog?.content) {
      const contentWithIds = injectHeadingIds(blog.content);
      setProcessedContent(contentWithIds);
    }
  }, [blog?.content]);

  // Generate breadcrumbs with current post as last non-clickable item
  const breadcrumbs = blog
    ? [
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: blog.title }, // current page (no href)
      ]
    : [];

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-primaryBg py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-8"></div>
            <div className="h-96 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error or not found
  if (error || !blog) {
    return (
      <div className="min-h-screen bg-primaryBg py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Blog Post Not Found
            </h2>
            <p className="text-gray-600 mb-8">
              The blog post you're looking for doesn't exist or has been
              removed.
            </p>
            <Link
              href="/blog"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";
  const postUrl = `${siteUrl}/blog/${blog.slug}`;

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            image: blog.featuredImage || `${siteUrl}/logo.png`,
            datePublished: blog.publishedAt,
            dateModified: blog.updatedAt,
            author: {
              "@type": "Organization",
              name: "BNG Logistics Network",
            },
            publisher: {
              "@type": "Organization",
              name: "BNG Logistics Network",
              logo: {
                "@type": "ImageObject",
                url: `${siteUrl}/logo.png`,
              },
            },
            description: blog.metaDescription || blog.excerpt,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": postUrl,
            },
          }),
        }}
      />

      <div className="min-h-screen bg-primaryBg">
        {/* Sticky Share Buttons (Desktop) */}
        <ShareButtons
          url={postUrl}
          title={blog.title}
          description={blog.excerpt}
          sticky={true}
        />

        {/* Back to Top Button */}
        <BackToTop />

        {/* HEADER / BANNER WITH BREADCRUMBS & TITLE */}
        <BlogPageBanner
          backOnly={true}
          date={formatDate(blog.publishedAt)}
          title={blog.title}
          subtitle={blog.excerpt}
          authorName={blog.authorName}
          authorTitle={blog.authorTitle}
        />


        {/* MAIN CONTENT */}
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sidebar - MOVED TO LEFT */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                <TableOfContents content={processedContent} />

                {/* Newsletter Sidebar (Desktop) */}
                <div className="hidden lg:block pt-4">
                  <Newsletter />
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Article Header */}
              <header className="mb-8">
                {/* Category */}
                {blog.category && (
                  <Link
                    href={`/blog/category/${blog.category.slug}`}
                    className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 hover:bg-primary/20 transition-colors"
                  >
                    <Folder className="w-3 h-3 inline mr-1" />
                    {blog.category.name}
                  </Link>
                )}

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {blog.title}
                </h1>

                {/* Excerpt */}
                {blog.excerpt && (
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {blog.excerpt}
                  </p>
                )}

                {/* Author & Date */}
                {(blog.authorName || blog.authorTitle) && (
                  <div className="mb-4 text-gray-600">
                    <p className="text-base">
                      By{' '}
                      {blog.authorName && <span className="font-medium text-gray-900">{blog.authorName}</span>}
                      {blog.authorName && blog.authorTitle && ', '}
                      {blog.authorTitle && <span className="text-gray-600">{blog.authorTitle}</span>}
                    </p>
                  </div>
                )}

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={blog.publishedAt}>{formatDate(blog.publishedAt)}</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>{blog.viewCount} views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    <span>{blog.likeCount} likes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>{blog.commentCount} comments</span>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              {blog.featuredImage && (
                <div className="relative w-full h-[380px] md:h-[440px] rounded-xl overflow-hidden mb-10 shadow-lg">
                  <Image
                    src={blog.featuredImage}
                    alt={blog.featuredImageAlt || blog.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                    priority
                  />
                </div>
              )}

              {/* Article Content - clean, no white box */}
              <div
                className="prose prose-lg max-w-none mb-8 text-xl
                  prose-headings:text-gray-900 prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3
                  prose-h4:text-xl prose-h4:mt-4 prose-h4:mb-2
                  prose-p:text-gray-900 prose-p:leading-relaxed prose-p:mb-4 prose-p:text-[15px]
                  prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900 prose-strong:font-bold
                  prose-ul:my-4 prose-ol:my-4
                  prose-li:text-gray-900 prose-li:my-1
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-800 prose-blockquote:bg-primary/5 prose-blockquote:py-2
                  prose-code:bg-gray-200 prose-code:text-gray-900 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
                  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto
                  prose-img:rounded-lg prose-img:shadow-md prose-img:my-6
                  prose-table:text-gray-900
                  prose-th:text-gray-900 prose-th:font-bold
                  prose-td:text-gray-900"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />

              <div className="flex flex-row justify-between">
                 {/* Row 1: Category + Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                {blog.category && (
                  <Link
                    href={`/blog/category/${blog.category.slug}`}
                    className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-md font-semibold hover:bg-primary/20 transition-colors"
                  >
                    <Folder className="w-3 h-3 mr-1" />
                    {blog.category.name}
                  </Link>
                )}

                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <Link
                        key={tag.id}
                        href={`/blog/tag/${tag.slug}`}
                        className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-md font-medium hover:bg-primary hover:text-white transition-colors"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Row 2: Date */}
              <div className="flex items-center gap-2 text-gray-600 text-md mb-4">
                <Calendar className="w-4 h-4" />
                <time dateTime={blog.publishedAt}>
                  {formatDate(blog.publishedAt)}
                </time>
              </div>
              </div>


             

               {/* Row 3: Stats - MOVED TO END */}
              <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm pt-3 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{blog.viewCount} views</span>
                </div>

                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  <span>{blog.likeCount} likes</span>
                </div>

                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>{blog.commentCount} comments</span>
                </div>
              </div>
              <div className="w-full flex items-center gap-2 mt-3">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-grow p-3 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="button"
                  className="px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all transform hover:translate-x-2 duration-300 flex items-center gap-1"
                >
                  Send
                </button>
              </div>


              

              {/* Newsletter Signup (Inline) */}
              <div className="mt-4 mb-6">
                <Newsletter variant="inline" />
              </div>

             

              {/* Mobile Share Buttons */}
              <div className="lg:hidden mt-10">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Share this post
                </h3>
                <ShareButtons
                  url={postUrl}
                  title={blog.title}
                  description={blog.excerpt}
                />
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedData?.relatedBlogs && relatedData.relatedBlogs.length > 0 && (
          <RelatedPosts posts={relatedData.relatedBlogs} />
        )}
      </div>
    </>
  );
};

export default BlogPostClient;
