"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { GET_BLOGS } from "@/lib/graphql/blog";
import { BlogStatus } from "@/lib/types/blog";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const News = () => {
  // Fetch blog data from GraphQL
  const { data, loading, error } = useQuery(GET_BLOGS, {
    variables: {
      filters: {
        status: BlogStatus.PUBLISHED,
        page: 1,
        limit: 4,
        sortBy: "publishedAt",
        sortOrder: "DESC",
      },
    },
    fetchPolicy: "cache-and-network",
  });

  const blogs = data?.blogs?.blogs || [];

  // Show skeleton while loading
  if (loading) {
    return (
      <section className="pt-16 lg:pt-24 pb-12 lg:pb-12  bg-primaryBg relative overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl lg:text-[55px] font-bold text-gray-900 mb-4">
              Latest <span className="text-primary">  News & Updates </span> 
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg bg-white animate-pulse">
                <div className="h-48 sm:h-56 bg-gray-300"></div>
                <div className="p-5 sm:p-6">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-6 bg-gray-300 rounded mb-3"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-300 rounded"></div>
                    <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Don't show section if error or no blogs
  if (error || blogs.length === 0) {
    return null;
  }

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className="pt-16 lg:pt-24 pb-12 lg:pb-12  bg-primaryBg relative overflow-hidden">
      {/* Gradient Background Elements */}
      <div
        className="absolute top-0 left-8 w-[200px] h-[200px] rounded-full"
        style={{
          background: "linear-gradient(180deg, #6853DB 10%, #6853DB 90%)",
          filter: "blur(100.8px)",
        }}
      ></div>
      <div
        className="absolute bottom-10 right-10 w-[150px] h-[150px] rounded-full"
        style={{
          background: "linear-gradient(180deg, #6853DB 10%, #6853DB 90%)",
          filter: "blur(80px)",
          opacity: 0.3,
        }}
      ></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Watermark */}
         <div className="text-center mb-12 relative">
          <h2 className="text-4xl lg:text-[55px] font-bold text-gray-900 mb-4">
            Latest <span className="text-primary">  News & Updates </span> 
          </h2>
          <h2
            className="absolute top-[-34px] lg:top-[-60px] left-0 lg:left-[0%] text-center w-full text-[40px]  lg:text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-0"
            aria-hidden="true"
          >
            Latest News & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Latest updates, announcements, and highlights from the BNG network
          </p>
        </div>

        {/* Enhanced Swiper Slider */}
        <div className="relative ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 25 },
              1280: { slidesPerView: 3, spaceBetween: 30 },
            }}
            navigation={{
              nextEl: ".news-swiper-button-next",
              prevEl: ".news-swiper-button-prev",
            }}
            pagination={{
              el: ".news-swiper-pagination",
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            grabCursor={true}
            className="news-swiper pb-12"
          >
            {blogs.map(
              ({ id, title, slug, excerpt, featuredImage, featuredImageAlt, category, publishedAt }) => {
                // Truncate excerpt to consistent length
                const truncatedExcerpt = excerpt 
                  ? excerpt.length > 80 
                    ? excerpt.substring(0, 80) + "..." 
                    : excerpt
                  : "Discover more insights and updates...";
                
                return (
                  <SwiperSlide key={id} className="!h-auto">
                    <Link href={`/blog/${slug}`} className="block h-full flex justify-center">
                      <div className="group relative rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-500 hover:shadow-xl w-full h-full flex flex-col cursor-pointer">
                        {/* Image with Gradient Overlay */}
                        <div className="relative w-full h-50 sm:h-56 overflow-hidden flex-shrink-0">
                          <Image
                            src={featuredImage || "/blog/blog-banner.jpg"}
                            alt={featuredImageAlt || title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                          <div className="absolute bottom-4 left-4">
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full">
                              {category?.name || "Blog"}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 sm:p-6 flex-grow flex flex-col">
                          <span className="text-sm text-gray-500 mb-2">{formatDate(publishedAt)}</span>
                          <h3 className="text-lg sm:text-xl text-[#27293B] font-bold mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                            {title}
                          </h3>
                          <p className="text-gray-600 text-sm flex-grow line-clamp-2">
                            {truncatedExcerpt}
                          </p>
                          <div className="mt-auto">
                            <span className="inline-flex items-center text-primary font-medium group-hover:text-indigo-700 transition-colors">
                              Read More
                              <svg
                                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              },
            )}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="news-swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-primary rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all duration-300 z-20 border border-gray-200 hover:shadow-xl">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="news-swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-primary rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all duration-300 z-20 border border-gray-200 hover:shadow-xl">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="news-swiper-pagination flex justify-center gap-1 mt-8 mb-4"></div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .news-swiper {
          padding: 10px 0;
          overflow: visible;
        }

        .news-swiper .swiper-slide {
          opacity: 1;
          transform: scale(1);
          transition: all 0.4s ease;
          display: flex;
          justify-content: center;
          align-items: stretch;
          height: auto;
          min-height: 450px;
          padding: 20px 15px;
        }

        .news-swiper .swiper-slide > a {
          display: flex;
          width: 100%;
          max-width: 400px;
        }

        .news-swiper .swiper-slide-active,
        .news-swiper .swiper-slide-duplicate-active {
          opacity: 1;
          transform: scale(1);
        }

        .news-swiper .swiper-slide-next,
        .news-swiper .swiper-slide-prev {
          opacity: 1;
          transform: scale(1);
        }

        .news-swiper-pagination {
          position: relative !important;
          bottom: auto !important;
          margin-top: 24px;
        }

        .news-swiper-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 0.7;
          transition: all 0.3s ease;
          margin: 0 6px !important;
        }

        .news-swiper-pagination .swiper-pagination-bullet-active {
          background: #6853db;
          opacity: 1;
          width: 30px;
          border-radius: 6px;
        }

        @media (max-width: 768px) {
          .news-swiper-button-next,
          .news-swiper-button-prev {
            display: none;
          }

          .news-swiper {
            padding-bottom: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default News;
