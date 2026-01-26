"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const VendorPartners = () => {
  const categories = [
    {
      title: "Management Consultants",
      gradient: "from-blue-500/10 to-indigo-500/10",
      borderColor: "border-blue-500/20",
      logos: [
        {
          src: "/vendor-partners/onesto.png",
          alt: "Onesto Management Consultancy",
          link: null,
        },
      ],
    },
    {
      title: "Debt Recovery",
      gradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20",
      logos: [
        {
          src: "/vendor-partners/fdrs.png",
          alt: "FDRS Debt Recovery",
          link: null,
        },
      ],
    },
    {
      title: "IT & Digital",
      gradient: "from-indigo-500/10 to-purple-500/10",
      borderColor: "border-indigo-500/20",
      logos: [
        {
          src: "/vendor-partners/exacodel.png",
          alt: "Exacodel IT & Digital",
          link: null,
        },
      ],
    },
    {
      title: "Exhibition Partners",
      gradient: "from-pink-500/10 to-rose-500/10",
      borderColor: "border-pink-500/20",
      logos: [
        {
          src: "/vendor-partners/iics.png",
          alt: "IICS International Cargo Show 2025",
          link: null,
        },
        {
          src: "/vendor-partners/intermodal.png",
          alt: "Intermodal Asia",
          link: "https://www.intermodal.com.hk/en",
        },
      ],
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-purple-50 to-white py-16 lg:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
              Trusted By
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Vendors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Partners</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver exceptional value and service to our network
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Category Card */}
              <div className={`flex flex-col bg-gradient-to-br ${category.gradient} backdrop-blur-sm rounded-2xl border ${category.borderColor} px-6 py-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 min-h-[320px]`}>
                {/* Category Title */}
                <div className="mb-4 pb-3 border-b border-gray-200/50">
                  <h3 className="text-xl font-semibold text-gray-900 text-center tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Logos Slider */}
                <div className="w-full flex-1">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={category.logos.length > 1}
                    autoplay={category.logos.length > 1 ? {
                      delay: 3000,
                      disableOnInteraction: false,
                    } : false}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    className="vendor-slider"
                  >
                    {category.logos.map((logo, logoIndex) => (
                      <SwiperSlide key={logoIndex}>
                        <div className="w-full pb-10">
                          {/* Logo Card */}
                          <div className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group/logo">
                            <div className="relative w-full h-32 flex items-center justify-center">
                              <Image
                                src={logo.src}
                                alt={logo.alt}
                                fill
                                className="object-contain group-hover/logo:scale-105 transition-transform duration-300"
                              />
                            </div>
                          </div>
                          
                          {/* Link if available */}
                          {logo.link && (
                            <a
                              href={logo.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-primary hover:text-purple-700 transition-colors group/link"
                            >
                              <span>Visit Website</span>
                              <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </a>
                          )}
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

        {/* Bottom CTA (optional) */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-sm">
            Interested in partnering with us?{" "}
            <a href="/contact" className="text-primary font-semibold hover:underline">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default VendorPartners;
