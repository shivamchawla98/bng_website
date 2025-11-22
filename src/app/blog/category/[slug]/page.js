import React from "react";
import BlogCategoryClient from "@/page-components/blog/BlogCategoryClient";
import { GET_CATEGORIES } from "@/lib/graphql/blog";
import client from "@/lib/apolloClient";

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  try {
    const { data } = await client.query({
      query: GET_CATEGORIES,
    });

    const category = data?.categories?.find(cat => cat.slug === params.slug);

    if (!category) {
      return {
        title: 'Category Not Found | BNG Logistics Network Blog',
      };
    }

    return {
      title: `${category.name} - Blog Category | BNG Logistics Network`,
      description: category.description || `Browse all blog posts in the ${category.name} category from BNG Logistics Network.`,
      openGraph: {
        title: `${category.name} | BNG Blog`,
        description: category.description || `Explore ${category.name} articles`,
        type: 'website',
      },
    };
  } catch (error) {
    return {
      title: 'Blog Category | BNG Logistics Network',
    };
  }
}

export default function BlogCategoryPage({ params }) {
  return <BlogCategoryClient slug={params.slug} />;
}
