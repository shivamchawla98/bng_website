"use client";

import React from "react";
import Image from "next/image";
import newsImg1 from "@/app/images/home/News-The-Future-of-Logistics.png";
import newsImg2 from "@/app/images/home/News-BNG-Welcomes-100-New-Members-in-Record-Time.png";
import newsImg3 from "@/app/images/home/News-Global-Freight-Trends.png";
import newsImg4 from "@/app/images/home/news4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const newsData = [
  {
    id: 1,
    src: newsImg1,
    alt: "News Item 1",
    title: "The Future of Logistics: Embracing Digital Transformation",
    description:
      "Discover how advanced technologies like AI, IoT, and blockchain are reshaping logistics and supply chain management for a smarter future.",
    link: "#",
    date: "May 15, 2024",
    category: "Technology"
  },
  {
    id: 2,
    src: newsImg2,
    alt: "News Item 2",
    title: "BNG Welcomes 100 New Members in Record Time!",
    description:
      "Our network continues to grow rapidly, with over 100 new freight forwarders and logisticians joining this month. Explore the opportunities.",
    link: "#",
    date: "April 28, 2024",
    category: "Community"
  },
  {
    id: 3,
    src: newsImg3,
    alt: "News Item 3",
    title: "Global Freight Trends: Challenges and Opportunities in 2024",
    description:
      "Get insights into shifting global trade patterns, rising fuel costs, and how businesses can stay resilient in a dynamic market.",
    link: "#",
    date: "April 10, 2024",
    category: "Industry"
  },
  {
    id: 4,
    src: newsImg4,
    alt: "News Item 4",
    title: "BNG Expands Strategic Partnerships to Strengthen Global Trade Lanes",
    description:
      "BNG strengthens global trade by expanding strategic partnerships, enhancing route access, and creating new growth opportunities for network members worldwide.",
    link: "#",
    date: "March 22, 2024",
    category: "Partnerships"
  },
];

const News = () => {
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
          opacity: 0.3
        }}
      ></div>
      
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Watermark */}
        <div className="relative mb-12 sm:mb-16">
          <h2 className="text-4xl font-bold lg:text-[55px] text-[#27293B] text-center mb-2 relative z-10">
            Latest <span className="text-primary">News</span>
          </h2>
      
          <h2
            className="absolute w-full  text-center top-[-40px] lg:top-[-59px] left-1/2 transform -translate-x-1/2 text-5xl md:text-8xl font-bold text-[#27293B] opacity-[3%] leading-none z-0 select-none"
            aria-hidden="true"
          >
            Latest News
          </h2>
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
            centeredSlides={true}
            grabCursor={true}
            className="news-swiper pb-12"
          >
            {newsData.map(({ id, src, alt, title, description, link, date, category }) => (
              <SwiperSlide key={id}>
                <div className="group relative rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-500 hover:shadow-xl mx-auto w-full max-w-[380px] h-full flex flex-col">
                  {/* Image with Gradient Overlay */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={src}
                      alt={alt}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full">
                        {category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5 sm:p-6 flex-grow flex flex-col">
                    <span className="text-sm text-gray-500 mb-2">{date}</span>
                    <h3 className="text-xl sm:text-[22px] text-[#27293B] font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                      {title}
                    </h3>
                    <p className="text-gray-600 mb-5 text-base flex-grow">
                      {description}
                    </p>
                    <div className="mt-auto">
                      <a 
                        href={link} 
                        className="inline-flex items-center text-primary font-medium hover:text-indigo-700 transition-colors"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-2"
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
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="news-swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-primary rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all duration-300 z-10 border border-gray-200">
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
          <button className="news-swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-primary rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all duration-300 z-10 border border-gray-200">
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
          <div className="news-swiper-pagination mt-8 flex justify-center gap-1"></div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .news-swiper {
          padding: 10px;
        }
        
        .news-swiper .swiper-slide {
          opacity: 0.5;
          transform: scale(0.95);
          transition: all 0.4s ease;
        }
        
        .news-swiper .swiper-slide-active,
        .news-swiper .swiper-slide-duplicate-active {
          opacity: 1;
          transform: scale(1);
        }
        
        .news-swiper .swiper-slide-next,
        .news-swiper .swiper-slide-prev {
          opacity: 0.8;
          transform: scale(0.98);
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
          background: #6853DB;
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