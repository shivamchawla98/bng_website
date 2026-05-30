"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { vendorsData, getVendorsByCategory, getAllVendorCategories } from "@/data/vendors";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const VendorPartners = () => {
  // Get all categories and their vendors
  const categoryMap = {
    "Management Consultants": {
      gradient: "from-blue-500/10 to-indigo-500/10",
      borderColor: "border-blue-500/20",
      vendors: vendorsData.filter(v => v.category === "Management Consultants"),
    },
    "Debt Recovery": {
      gradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20",
      vendors: vendorsData.filter(v => v.category === "Debt Recovery"),
    },
    "IT & Digital": {
      gradient: "from-indigo-500/10 to-purple-500/10",
      borderColor: "border-indigo-500/20",
      vendors: vendorsData.filter(v => v.category === "IT & Digital"),
    },
    "Exhibition Partners": {
      gradient: "from-pink-500/10 to-rose-500/10",
      borderColor: "border-pink-500/20",
      vendors: vendorsData.filter(v => v.category === "Exhibition Partners"),
    },
  };

  return (
    <section className="relative bg-[#EFF6FF] py-16 lg:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div>
            <h2 className="text-4xl lg:text-[55px] font-bold text-[#27293B] text-center mb-4 sm:mb-4 lg:mb-4 relative z-10">
              Our Vendors &{" "} <span className="text-primary">Partnerships</span>
            </h2>
            <h2
              className="absolute top-[-34px] lg:top-[-60px] left-0 lg:left-[0%] text-center w-full text-[40px]  lg:text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-0"
              aria-hidden="true"
            >
              Our Vendors & Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted vendors and partners supporting the BNG ecosystem
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {Object.entries(categoryMap).map(([categoryName, categoryData]) => (
            <div key={categoryName} className="group relative">
              {/* Category Card */}
              <div
                className={`flex flex-col bg-gradient-to-br ${categoryData.gradient} backdrop-blur-sm rounded-2xl border ${categoryData.borderColor} p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 min-h-[320px] w-full min-w-[300px]`}
              >
                {/* Category Title */}
                <div className="mb-4 pb-3 border-b border-gray-200/50">
                  <h3 className="text-xl font-semibold text-gray-900 text-center tracking-tight">
                    {categoryName}
                  </h3>
                </div>

                {/* Vendors Slider */}
                <div className="w-full flex-1">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={categoryData.vendors.length > 1}
                    autoplay={
                      categoryData.vendors.length > 1
                        ? {
                            delay: 3000,
                            disableOnInteraction: false,
                          }
                        : false
                    }
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    className="vendor-slider"
                  >
                    {categoryData.vendors.map((vendor) => (
                      <SwiperSlide key={vendor.id}>
                        <div className="w-full pb-10">
                          {/* Vendor Card - Clickable */}
                          <Link href={`/vendor-partners/${vendor.slug}`} className="block group/vendor">
                            <div className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                              {/* Logo */}
                              <div className="relative w-full h-32 flex items-center justify-center mb-4">
                                <Image
                                  src={vendor.logo}
                                  alt={vendor.name}
                                  fill
                                  className="object-contain group-hover/vendor:scale-105 transition-transform duration-300"
                                />
                              </div>

                              {/* Vendor Name */}
                              {/* <h4 className="font-bold text-gray-900 text-center mb-2 group-hover/vendor:text-primary transition line-clamp-2">
                                {vendor.name}
                              </h4> */}

                              {/* Rating */}
                              {/* <div className="flex items-center justify-center gap-1 mb-3">
                                <div className="flex gap-0.5">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`w-3 h-3 ${
                                        i < Math.floor(vendor.rating)
                                          ? "fill-yellow-400 text-yellow-400"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-xs font-semibold text-gray-600">
                                  {vendor.rating}
                                </span>
                              </div> */}

                              {/* View Details Link */}
                              {/* <div className="mt-auto flex items-center justify-center gap-2 text-sm font-medium text-primary hover:text-purple-700 transition-colors group/link">
                                <span>View Details</span>
                                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                              </div> */}
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorPartners;
