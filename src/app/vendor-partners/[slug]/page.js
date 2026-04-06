import React from "react";
import VendorDetailClient from "@/page-components/Vendor/VendorDetailClient";
import { getVendorBySlug, vendorsData } from "@/data/vendors";

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const vendor = getVendorBySlug(slug);

  if (!vendor) {
    return {
      title: "Vendor Not Found | BNG Logistics Network",
      description: "The vendor page you're looking for doesn't exist.",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    title: `${vendor.name} | BNG Logistics Network Vendors`,
    description: vendor.about.substring(0, 160),
    openGraph: {
      title: vendor.name,
      description: vendor.about.substring(0, 160),
      type: "website",
      url: `${siteUrl}/vendor-partners/${vendor.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Generate static paths for all vendors
export async function generateStaticParams() {
  return vendorsData.map((vendor) => ({
    slug: vendor.slug,
  }));
}

export default async function VendorDetailPage({ params }) {
  const { slug } = await params;
  const vendor = getVendorBySlug(slug);

  if (!vendor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Vendor Not Found</h1>
          <Link href="/vendor-partners" className="text-primary hover:underline">
            Back to Vendors
          </Link>
        </div>
      </div>
    );
  }

  return <VendorDetailClient slug={slug} />;
}
