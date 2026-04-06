"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight, Filter } from "lucide-react";
import BannerSection from "@/components/Blog/BlogPageBanner";
import { vendorsData, getAllVendorCategories } from "@/data/vendors";

const VendorListingClient = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...getAllVendorCategories()];

  const filteredVendors =
    selectedCategory === "All"
      ? vendorsData
      : vendorsData.filter((vendor) => vendor.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Banner */}
      <BannerSection
        title="Our Vendors & Partners"
        subtitle="Trusted Partners Supporting the BNG Ecosystem"
        backOnly={false}
        backgroundImage={{
          src: "/blog/blog-banner.jpg"
        }}
      />

      <div className="bg-white">
        {/* Filters and Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Filter Section */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center gap-2 mr-4">
                <Filter className="w-5 h-5 text-primary" />
                <span className="font-semibold text-gray-900">Filter by:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <p className="text-gray-600 text-sm mt-4">
              Showing {filteredVendors.length} vendor{filteredVendors.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Vendors Grid */}
          {filteredVendors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVendors.map((vendor) => (
                <Link
                  key={vendor.id}
                  href={`/vendor-partners/${vendor.slug}`}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 h-full flex flex-col">
                    {/* Header Section */}
                    <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 p-6 border-b border-gray-200">
                      <div className="relative w-full h-24 mb-4 flex items-center justify-center">
                        <Image
                          src={vendor.logo}
                          alt={vendor.name}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform"
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition line-clamp-2">
                        {vendor.name}
                      </h3>

                      <p className="text-sm font-semibold text-primary mb-4">
                        {vendor.category}
                      </p>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {vendor.tagline}
                      </p>

                      <p className="text-gray-700 text-sm mb-4 flex-1 line-clamp-3">
                        {vendor.about}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-3 mb-4 pt-4 border-t border-gray-200">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(vendor.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900">
                            {vendor.rating}
                          </span>
                          <span className="text-xs text-gray-600">
                            ({vendor.reviewCount} reviews)
                          </span>
                        </div>
                      </div>

                      {/* View Details Button */}
                      <button className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition group-hover:shadow-lg">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">
                No vendors found in this category.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-primary to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in Partnering With Us?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            We're always looking for quality vendors and partners to support our ecosystem and members.
          </p>
          <a
            href="mailto:partnerships@bnglogisticsnetwork.com"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-purple-50 transition shadow-lg"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default VendorListingClient;
