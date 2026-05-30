"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Filter } from "lucide-react";
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
                  className="group block h-full"
                >
                  <article className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                    {/* Banner with logo, name & category overlay */}
                    <div
                      className="relative h-44 bg-gradient-to-br from-primary to-purple-700 bg-cover bg-center"
                      style={
                        vendor.backgroundImage?.src
                          ? { backgroundImage: `url(${vendor.backgroundImage.src})` }
                          : undefined
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-3">
                        {/* Logo chip */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-md p-1.5">
                          <div className="relative w-full h-full">
                            <Image
                              src={vendor.logo}
                              alt={vendor.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-white font-bold text-lg leading-tight drop-shadow line-clamp-1">
                            {vendor.name}
                          </h3>
                          <span className="inline-block mt-1 px-2.5 py-0.5 rounded-md bg-white/90 text-gray-800 text-xs font-medium">
                            {vendor.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex-1 flex flex-col">
                      {vendor.tagline && (
                        <p className="text-gray-900 font-medium mb-3 line-clamp-1">
                          {vendor.tagline}
                        </p>
                      )}

                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
                        {vendor.about}
                      </p>

                      {/* View Details */}
                      <div className="mt-auto flex items-center justify-end">
                        <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm">
                          View Details
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </article>
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
