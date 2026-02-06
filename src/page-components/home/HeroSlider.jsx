"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import bg from "@/app/images/home/Ellipse2.png";
import bg1 from "../../../public/hero/heroslide.png";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000); // Changed to normal timing
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % 2); // Changed to 2 slides
    
    // Reset transitioning flag after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Changed to normal timing
  };

  const goToSlide = (index) => {
    if (isTransitioning || currentSlide === index) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  // Helper function to get slide position class
  const getSlidePosition = (slideIndex) => {
    if (slideIndex === currentSlide) {
      return "translate-x-0 opacity-100";
    }
    
    // Calculate the position based on circular order with 2 slides
    const diff = (slideIndex - currentSlide + 2) % 2;
    
    if (diff === 1) {
      // Next slide
      return "translate-x-full opacity-0";
    } else {
      // Previous slide (including when going from 1 to 0)
      return "-translate-x-full opacity-0";
    }
  };

  return (
    <div className="min-h-[661px] h-[661px] relative overflow-hidden">
      {/* Slide 1 - Country Exclusive Network (Now slide 0) */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          getSlidePosition(0)
        }`}
        style={{
          transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1), opacity 1s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className="absolute top-10 left-0 w-[100px] h-[100px] md:w-[200px] md:h-[200px] blur-2xl rounded-full"
          style={{
            background: "linear-gradient(-145deg, #6853DB 16%, #6853DB 40.86%, #97b6f6 30%)",
            zIndex: 1,
            filter: "blur(50px)",
            WebkitFilter: "blur(100px)",
            backdropFilter: "blur(100px)",
          }}
        ></div>

        {/* Right-middle Patch - Adjusted position and size for mobile */}
        <div
          className="absolute top-1/2 right-0 md:right-12 transform translate-x-1/2 -translate-y-1/2 w-[80px] h-[40%] md:w-[160px] md:h-[70%] rounded-full"
          style={{
            background: "linear-gradient(-145deg, #6853DB 16%, #6853DB 40.86%, #97b6f6 30%)",
            zIndex: 1,
            filter: "blur(110px)",
          }}
        ></div>

        {/* Content and Globe Container (z-20) */}
        <div className="container py-8 md:py-12 lg:py-16 mx-auto  flex flex-col lg:flex-row items-center relative z-20 h-full">
          {/* Left side content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="container relative z-20 h-full py-12 md:py-16 lg:py-20 mx-auto  flex items-center">
              <div className="text-[#27293B] max-w-3xl">
                <h1 className="text-[30px] sm:text-[40px] md:text-[60px] font-bold mb-2 leading-tight">
                  <span className="bg-clip-text text-transparent bg-[#5216ab]">
                    BNG
                  </span>{" "}
                  <span className="text-gray-600">Global Convention</span>
                </h1>

                <div className="mb-6 inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 ml-1 px-4 py-3 border-l-4 border-[#5216ab]">
                  <div className="flex items-center gap-2 text-base sm:text-lg">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>
                      June 14<sup className="text-xs">th</sup> – June 17
                      <sup className="text-xs">th</sup>, 2026
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-base sm:text-lg">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Royal Cliff Beach Hotel, Pattaya</span>
                  </div>
                </div>

                <p className="text-xl sm:text-2xl md:text-3xl mb-2 font-light">
                  <span>The Global </span>
                  <span className="font-bold bg-clip-text text-transparent bg-[#5216ab]">
                    Freight Stage
                  </span>
                </p>

                <p className="text-sm sm:text-base text-gray-800 mb-6">
                  Powered by{" "}
                  <a
                    href="https://www.bnglogisticsnetwork.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold hover:text-[#5216ab]"
                  >
                    BNG Logistics Network
                  </a>
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://conference.bnglogisticsnetwork.com/register"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 px-8 py-4 rounded-lg text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl text-center"
                  >
                    Register Now
                  </Link>
                  <a
                    href="https://conference.bnglogisticsnetwork.com/download/BNG Global Convention 2026.pdf"
                    download
                    className="bg-white hover:bg-gray-100 px-8 py-4 rounded-lg text-gray-900 font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl text-center"
                  >
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="lg:w-1/2 relative">
            <Image
              src={bg1}
              alt="Globe"
              className="lg:ml-40 relative z-50"
              priority={true}
              style={{
                transform: `translateX(${Math.min(scrollY * 0.2, 100)}px)`,
                transition: "transform 0.3s ease-out",
                zIndex: 9999
              }}
            />
          </div>
        </div>
      </div>

      {/* Slide 2 - Country Exclusive Network (Slide 1) */}
      <div
        className={`absolute inset-0 lg:px-0 md:px-0 xl:px-0 px-4 transition-all duration-1000 ${
          getSlidePosition(1)
        }`}
        style={{
          transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1), opacity 1s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className="absolute top-10 left-0 w-[100px] h-[100px] md:w-[200px] md:h-[200px] blur-2xl rounded-full"
          style={{
            background: "linear-gradient(-145deg, #6853DB 16%, #6853DB 40.86%, #97b6f6 30%)",
            zIndex: 1,
            filter: "blur(50px)",
            WebkitFilter: "blur(100px)",
            backdropFilter: "blur(100px)",
          }}
        ></div>

        {/* Right-middle Patch - Adjusted position and size for mobile */}
        <div
          className="absolute top-1/2 right-0 md:right-12 transform translate-x-1/2 -translate-y-1/2 w-[80px] h-[40%] md:w-[160px] md:h-[70%] rounded-full"
          style={{
            background: "linear-gradient(-145deg, #6853DB 16%, #6853DB 40.86%, #97b6f6 30%)",
            zIndex: 1,
            filter: "blur(110px)",
          }}
        ></div>

        {/* Content and Globe Container (z-20) */}
        <div className="container py-8 md:py-12 lg:py-16 mx-auto  flex flex-col lg:flex-row items-center relative z-20 h-full">
          {/* Left side content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-[28px] sm:text-[35px] md:text-[50px] mb-4 text-[#27293B]">
              <span className="text-[30px] sm:text-[40px] md:text-[60px] font-bold">
                Country
              </span>
              <span className="text-[#5216ab] font-bold text-[30px] sm:text-[40px] md:text-[60px]">
                {" "}
                Exclusive Network
              </span>
              <br />
              Built for
              <span className="text-[#5216ab]"> Top 1% </span>
            </h1>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              <span className="text-base sm:text-lg md:text-[20px] font-semibold">A network not for everyone</span>—built for elite freight forwarders who value country exclusivity, real business opportunities, payment protection, and long-term global partnerships.{" "}
            </p>
            <div className="flex w-60 flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <Link
                href="https://app.bnglogisticsnetwork.com/register"
                className="group bg-gradient-to-tr from-[#6853DB] to-[#6853DB] rounded-lg text-white px-6 py-3 cursor-pointer flex items-center hover:bg-[#5216ab] hover:from-transparent transition-all duration-300 bg-primary transform hover:translate-x-2"
              >
                Become a Member
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right side: Animated globe (z-30) */}
          <div className="lg:w-1/2 relative">
            <Image
              src={bg}
              alt="Globe"
              className="lg:ml-20 relative z-50"
              priority={true}
              style={{
                transform: `translateX(${Math.min(scrollY * 0.2, 100)}px)`,
                transition: "transform 0.3s ease-out",
                zIndex: 9999
              }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Only Next */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 pointer-events-auto"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-[#5216ab]" />
      </button>

      {/* Slide Indicators - Only 2 dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {[0, 1].map((index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-[#5216ab] w-8"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;