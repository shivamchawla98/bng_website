import React from "react";
import BlogTagClient from "@/page-components/blog/BlogTagClient";
import { GET_TAGS } from "@/lib/graphql/blog";
import client from "@/lib/apolloClient";

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  try {
    const { data } = await client.query({
      query: GET_TAGS,
    });

    const tag = data?.tags?.find(t => t.slug === params.slug);

    if (!tag) {
      return {
        title: 'Tag Not Found | BNG Logistics Network Blog',
      };
    }

    return {
      title: `#${tag.name} - Blog Tag | BNG Logistics Network`,
      description: `Browse all blog posts tagged with #${tag.name} from BNG Logistics Network.`,
      openGraph: {
        title: `#${tag.name} | BNG Blog`,
        description: `Explore articles tagged with #${tag.name}`,
        type: 'website',
      },
    };
  } catch (error) {
    return {
      title: 'Blog Tag | BNG Logistics Network',
    };
  }
}

export default function BlogTagPage({ params }) {
  return <BlogTagClient slug={params.slug} />;
}
