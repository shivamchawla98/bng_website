import React from "react";
import VendorListingClient from "@/page-components/Vendor/VendorListingClient";

export const metadata = {
  title: "Vendor Partners | BNG Logistics Network - Quality Services & Solutions",
  description: "Explore BNG Logistics Network's trusted vendor and partner network. Management consulting, debt recovery, IT solutions, and industry exhibitions.",
  openGraph: {
    title: "Vendor Partners | BNG Logistics Network",
    description: "Discover our network of trusted vendors and partners providing quality services to the logistics industry.",
    type: "website",
  },
};

export default function VendorPartnersPage() {
  return <VendorListingClient />;
}
