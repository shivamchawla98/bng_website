import React, { Suspense } from "react";
import BlogSearchClient from "@/page-components/blog/BlogSearchClient";

export const metadata = {
  title: 'Search Blog Posts | BNG Logistics Network',
  description: 'Search through our blog posts to find insights on logistics, freight forwarding, and supply chain management.',
  robots: 'noindex, follow',
};

export default function BlogSearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BlogSearchClient />
    </Suspense>
  );
}
