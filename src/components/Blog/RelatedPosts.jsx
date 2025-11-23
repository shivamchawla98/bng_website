"use client";

import React from "react";
import BlogCard from "./BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

/**
 * RelatedPosts Component - Shows related blog posts
 */
const RelatedPosts = ({ posts = [] }) => {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-14 md:py-16 bg-primaryBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#27293B] mb-2 relative z-10">
            Related <span className="text-primary">Articles</span>
          </h2>
          <h2
            className="absolute w-full top-[-30px] md:top-[-40px] left-0 text-4xl md:text-6xl font-bold text-[#27293B] opacity-[3%] leading-none z-0 select-none"
            aria-hidden="true"
          >
            Related Articles
          </h2>
          <p className="text-gray-600 mt-2">
            Continue reading with these related posts
          </p>
        </div>

        {/* Posts Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 25 },
            }}
            navigation={{
              nextEl: ".related-swiper-button-next",
              prevEl: ".related-swiper-button-prev",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="related-posts-swiper"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id}>
                <BlogCard blog={post} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="related-swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white text-primary rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all duration-300 z-10 border border-gray-200">
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
          <button className="related-swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white text-primary rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all duration-300 z-10 border border-gray-200">
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
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
