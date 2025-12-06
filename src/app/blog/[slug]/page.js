import React from "react";
import BlogPostClient from "@/page-components/blog/BlogPostClient";
import { GET_BLOG_BY_SLUG } from "@/lib/graphql/blog";
import client from "@/lib/apolloClient";

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  try {
    //  important: await params
    const { slug } = await params;

    const { data } = await client.query({
      query: GET_BLOG_BY_SLUG,
      variables: { slug },
    });

    const blog = data?.blogBySlug;

    if (!blog) {
      return {
        title: "Blog Post Not Found | BNG Logistics Network",
      };
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";

    return {
      title:
        blog.metaTitle ||
        blog.metaDescription ||
        `${blog.title} | BNG Logistics Network Blog`,
      description: blog.metaDescription || blog.excerpt || blog.title,
      openGraph: {
        title: blog.ogTitle || blog.title,
        description: blog.ogDescription || blog.metaDescription || blog.excerpt,
        type: "article",
        publishedTime: blog.publishedAt,
        modifiedTime: blog.updatedAt,
        images:
          blog.ogImage || blog.featuredImage
            ? [
                {
                  url: blog.ogImage || blog.featuredImage,
                  alt: blog.featuredImageAlt || blog.title,
                },
              ]
            : [],
        authors: ["BNG Logistics Network"],
        url: `${siteUrl}/blog/${blog.slug}`,
      },
      twitter: {
        card: "summary_large_image",
        title: blog.twitterTitle || blog.title,
        description: blog.twitterDescription || blog.metaDescription || blog.excerpt,
        images: blog.twitterImage
          ? [blog.twitterImage]
          : blog.featuredImage
          ? [blog.featuredImage]
          : [],
      },
      alternates: {
        canonical:
          blog.canonicalUrl || `${siteUrl}/blog/${blog.slug}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Post | BNG Logistics Network",
    };
  }
}

// Page component
export default async function BlogPostPage({ params }) {
  //  important: await params here too
  const { slug } = await params;

  return <BlogPostClient slug={slug} />;
}
