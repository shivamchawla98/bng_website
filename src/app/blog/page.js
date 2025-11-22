import React, { Suspense } from "react";
import BlogListingClient from "@/page-components/blog/BlogListingClient";

export const metadata = {
  title: 'Blog | BNG Logistics Network - Insights & Industry Updates',
  description: 'Explore the latest logistics insights, industry trends, and expert advice from BNG Logistics Network. Stay informed with our comprehensive blog covering freight forwarding, supply chain management, and global trade.',
  openGraph: {
    title: 'Blog | BNG Logistics Network',
    description: 'Expert insights on logistics, freight forwarding, and global supply chain management.',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BlogListingClient />
    </Suspense>
  );
}
