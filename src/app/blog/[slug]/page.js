import React from "react";
import BlogPostClient from "@/page-components/blog/BlogPostClient";
import { GET_BLOG_BY_SLUG } from "@/lib/graphql/blog";
import client from "@/lib/apolloClient";

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  try {
    const { data } = await client.query({
      query: GET_BLOG_BY_SLUG,
      variables: { slug: params.slug },
    });

    const blog = data?.blogBySlug;

    if (!blog) {
      return {
        title: 'Blog Post Not Found | BNG Logistics Network',
      };
    }

    return {
      title: blog.metaDescription || `${blog.title} | BNG Logistics Network Blog`,
      description: blog.metaDescription || blog.excerpt || blog.title,
      openGraph: {
        title: blog.ogTitle || blog.title,
        description: blog.ogDescription || blog.metaDescription || blog.excerpt,
        type: 'article',
        publishedTime: blog.publishedAt,
        modifiedTime: blog.updatedAt,
        images: blog.ogImage || blog.featuredImage ? [
          {
            url: blog.ogImage || blog.featuredImage,
            alt: blog.featuredImageAlt || blog.title,
          }
        ] : [],
        authors: ['BNG Logistics Network'],
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.title,
        description: blog.metaDescription || blog.excerpt,
        images: blog.featuredImage ? [blog.featuredImage] : [],
      },
      alternates: {
        canonical: blog.canonicalUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${blog.slug}`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post | BNG Logistics Network',
    };
  }
}

export default function BlogPostPage({ params }) {
  return <BlogPostClient slug={params.slug} />;
}
