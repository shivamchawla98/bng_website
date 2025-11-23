"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import BlogCard from "@/components/Blog/BlogCard";
import { BlogCardSkeleton } from "@/components/Blog/BlogCardSkeleton";
import { GET_BLOGS } from "@/lib/graphql/blog";
import { BlogStatus } from "@/lib/types/blog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/**
 * LatestBlogPosts - Homepage section showing latest 4 blog posts
 * Replaces/supplements the News section with real blog data
 */
const LatestBlogPosts = () => {
  const { data, loading, error } = useQuery(GET_BLOGS, {
    variables: {
      filters: {
        status: BlogStatus.PUBLISHED,
        page: 1,
        limit: 4,
        sortBy: 'publishedAt',
        sortOrder: 'DESC',
      },
    },
    fetchPolicy: 'cache-and-network',
  });

  const blogs = data?.blogs?.blogs || [];

  if (error) {
    // Silently fail - don't show section if error
    return null;
  }

  if (loading) {
    return (
      <section className="py-14 md:py-20 bg-primaryBg relative overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative mb-12 sm:mb-16">
            <h2 className="text-4xl font-bold lg:text-[55px] text-[#27293B] text-center mb-2 relative z-10">
              Latest <span className="text-primary">Blog Posts</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) {
    // Don't show section if no blogs
    return null;
  }

  return (
    <section className="py-14 md:py-20 bg-primaryBg relative overflow-hidden">
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
        {/* Section Header */}
        <div className="relative mb-12 sm:mb-16">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-4xl font-bold lg:text-[55px] text-[#27293B] relative z-10">
              Latest <span className="text-primary">Blog Posts</span>
            </h2>
            <Link
              href="/blog"
              className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <h2
            className="absolute w-full text-center top-[-40px] lg:top-[-59px] left-1/2 transform -translate-x-1/2 text-5xl md:text-8xl font-bold text-[#27293B] opacity-[3%] leading-none z-0 select-none"
            aria-hidden="true"
          >
            Latest Blog Posts
          </h2>
        </div>

        {/* Desktop Grid (hidden on mobile/tablet) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Mobile/Tablet Swiper */}
        <div className="lg:hidden relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 25 },
            }}
            navigation={{
              nextEl: ".blog-swiper-button-next",
              prevEl: ".blog-swiper-button-prev",
            }}
            pagination={{
              el: ".blog-swiper-pagination",
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            centeredSlides={true}
            grabCursor={true}
            className="blog-swiper pb-12"
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <BlogCard blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="blog-swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-primary rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all duration-300 z-10 border border-gray-200">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="blog-swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-primary rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all duration-300 z-10 border border-gray-200">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
          <div className="blog-swiper-pagination mt-8 flex justify-center gap-1"></div>
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            View All Posts
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .blog-swiper {
          padding: 10px;
        }

        .blog-swiper .swiper-slide {
          opacity: 0.5;
          transform: scale(0.95);
          transition: all 0.4s ease;
        }

        .blog-swiper .swiper-slide-active,
        .blog-swiper .swiper-slide-duplicate-active {
          opacity: 1;
          transform: scale(1);
        }

        .blog-swiper .swiper-slide-next,
        .blog-swiper .swiper-slide-prev {
          opacity: 0.8;
          transform: scale(0.98);
        }

        .blog-swiper-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 0.7;
          transition: all 0.3s ease;
          margin: 0 6px !important;
        }

        .blog-swiper-pagination .swiper-pagination-bullet-active {
          background: #5216ab;
          opacity: 1;
          width: 30px;
          border-radius: 6px;
        }

        @media (max-width: 768px) {
          .blog-swiper-button-next,
          .blog-swiper-button-prev {
            display: none;
          }

          .blog-swiper {
            padding-bottom: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default LatestBlogPosts;
