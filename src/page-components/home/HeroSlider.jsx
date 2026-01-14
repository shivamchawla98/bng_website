"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bg from "@/app/images/home/Ellipse2.png";
import Widget from "./Widget";
import office from '../../../public/herosectionicon/offices.png';
import cities from '../../../public/herosectionicon/cities.png';
import member from '../../../public/herosectionicon/member.png';
import country from '../../../public/herosectionicon/contries.png';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 2);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 2) % 2);

  return (
    <div className="min-h-[59vh] relative overflow-hidden">
      {/* Top-left Patch */}
      <div
        className="absolute top-10 left-0 w-[100px] h-[100px] md:w-[200px] md:h-[200px] blur-2xl rounded-full z-10"
        style={{
          background: "linear-gradient(-145deg, #6853DB 16%, #6853DB 40.86%, #97b6f6 30%)",
          filter: "blur(50px)",
          WebkitFilter: "blur(100px)",
          backdropFilter: "blur(100px)",
        }}
      />

      {/* Right-middle Patch */}
      <div
        className="absolute top-1/2 right-0 md:right-12 transform translate-x-1/2 -translate-y-1/2 w-[80px] h-[40%] md:w-[160px] md:h-[70%] rounded-full z-10"
        style={{
          background: "linear-gradient(-145deg, #6853DB 16%, #6853DB 40.86%, #97b6f6 30%)",
          filter: "blur(110px)",
        }}
      />

      {/* Slide 1 - Conference Style */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          currentSlide === 0 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        <div className="container py-6 mx-auto px-4 flex flex-col lg:flex-row items-center relative z-20 h-full">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-[32px] sm:text-[40px] md:text-[55px] mb-4 text-[#27293B]">
              <span className="text-[40px] sm:text-[50px] md:text-[70px] font-bold">
                Global Freight
              </span>
              <br />
              <span className="text-[#5216ab] font-bold text-[40px] sm:text-[50px] md:text-[70px]">
                Forwarders Network
              </span>
            </h1>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Join the most trusted network of freight forwarders worldwide.{" "}
              <span className="text-base sm:text-lg md:text-[20px] font-semibold">
                Build partnerships, expand your reach, and grow your business globally.
              </span>
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
          <div className="lg:w-1/2 relative">
            <Image
              src={bg}
              alt="Global Network"
              className="lg:ml-20"
              priority={true}
              style={{
                transform: `translateX(${Math.min(scrollY * 0.2, 100)}px)`,
                transition: "transform 0.3s ease-out",
              }}
            />
          </div>
        </div>
      </div>

      {/* Slide 2 - Original with Stats */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          currentSlide === 1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
        }`}
      >
        <div className="container py-6 mx-auto px-4 flex flex-col lg:flex-row items-center relative z-20 h-full">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-[32px] sm:text-[40px] md:text-[55px] mb-4 text-[#27293B]">
              <span className="text-[40px] sm:text-[50px] md:text-[70px] font-bold">
                Connect &
              </span>
              <span className="text-[#5216ab] font-bold text-[40px] sm:text-[50px] md:text-[70px]">
                {" "}
                Collaborate
              </span>
              <br />
              with
              <span className="text-[#5216ab]"> Forwarders </span>
              daily
            </h1>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Experience the next generation of forwarder networks. Tired of
              investing in multiple networks with minimal returns?{" "}
              <span className="text-base sm:text-lg md:text-[20px] font-semibold">
                Discover a fresh approach to partnership here!
              </span>
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
          <div className="lg:w-1/2 relative">
            <Image
              src={bg}
              alt="Background Image"
              className="lg:ml-20"
              priority={true}
              style={{
                transform: `translateX(${Math.min(scrollY * 0.2, 100)}px)`,
                transition: "transform 0.3s ease-out",
              }}
            />
          </div>
        </div>

        {/* Stats Widget - Only on slide 2 */}
        <div className="relative">
          <Widget />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-[#5216ab]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-[#5216ab]" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {[0, 1].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
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
