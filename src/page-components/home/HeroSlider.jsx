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
    <div className="min-h-[59vh] relative overflow-x-hidden">

      {/* Slide 1 - Conference Banner Style */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          currentSlide === 0 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/Infini Pool26.webp')",
              backgroundPosition: "center"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 via-indigo-600/30 to-transparent"></div>
        </div>

        {/* Conference Content */}
        <div className="container relative z-20 h-full py-12 mx-auto px-4 flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
                BNG
              </span>{" "}
              <span className="text-white">Global Convention</span>
            </h1>
            
            <div className="mb-4 inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 px-4 py-3 border-l-4 border-white/80">
              <div className="flex items-center gap-2 text-base sm:text-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>June 14<sup className="text-xs">th</sup> – June 17<sup className="text-xs">th</sup>, 2026</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-base sm:text-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Royal Cliff Beach Hotel, Pattaya</span>
              </div>
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl mb-2 font-light italic">
              <span>The Global </span>
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
                Freight Stage
              </span>
            </p>

            <p className="text-sm sm:text-base text-gray-200 mb-6">
              Powered by{" "}
              <a href="https://www.bnglogisticsnetwork.com/" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-white">
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
                className="group bg-gradient-to-tr from-[#6853DB] to-[#6853DB] rounded-lg text-white px-6 py-3 cursor-pointer flex items-center hover:bg-[#5216ab] hover:from-transparent transition-all duraton-300 bg-primary transform hover:translate-x-2"
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
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 pointer-events-auto"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-[#5216ab]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 pointer-events-auto"
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
