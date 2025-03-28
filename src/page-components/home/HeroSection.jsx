"use client";

import React, { useState, useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import Image from "next/image";
import bg from "@/app/images/home/Ellipse2.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
const HeroSection = () => {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-[59vh] relative">
      {/* Top-left Patch */}
      <div
        className="absolute top-10 left-0 md:w-[200px] blur-2xl h-[200px] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, #D186EB 16%, #4D7DB5 46.86%, #D186EB 67%)",

          zIndex: 1,
          filter: "blur(50px)",
          WebkitFilter: "blur(100px)", // Added vendor prefix
          backdropFilter: "blur(100px)", // Alternative fallback
        }}></div>

      {/* Right-middle Patch */}
      <div
        className="absolute top-1/2 right-12 transform translate-x-1/2 -translate-y-1/2 md:w-[160px] h-[70%] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, #D186EB 16%, #4D7DB5 46.86%, #D186EB 67%)",
          zIndex: 1,
          filter: "blur(110px)",
        }}></div>

      {/* Hero Section */}
      <div className="container py-6 mx-auto px-4 flex flex-col lg:flex-row items-center relative z-10">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-[55px] font-bold mb-4 text-[#27293B]">
            Connect and
            <span className="text-primary"> collaborate</span> with
            <span className="text-primary"> forwarders </span>
            daily
          </h1>
          <p className="text-gray-600 mb-8 text-base">
            Experience the next generation of forwarder networks. Tired of
            investing in multiple networks with minimal returns? Discover a
            fresh approach to partnership here!
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Link
            href="https://app.bnglogisticsnetwork.com/login"
             className="group bg-gradient-to-tr from-[#6853DB] to-[#6853DB] rounded-lg text-white px-6 py-3 cursor-pointer flex items-center hover:bg-primary transition-all duration-300 group transform hover:translate-x-2"
            >
              Become a Member
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>

            {/* <button className="bg-white w-max text-[#27293B] px-6 py-3 flex items-center border border-gray-200 rounded-full">
              Talk to Sales
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button> */}
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <Image
            src={bg} // The imported image
            alt="Background Image"
            priority={true} // Optimizes loading for the hero image
            style={{
              transform: `translateX(${Math.min(scrollY * 0.2, 100)}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
          {/* Info Cards */}
          <div className="absolute bottom-10 left-0 bg-white p-3 rounded-lg shadow-md z-20"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.1, 20)}px) rotate(${Math.min(scrollY * 0.05, 5)}deg) scale(${1 + Math.min(scrollY * 0.001, 0.1)})`,
              opacity: Math.max(1 - scrollY * 0.002, 0.7),
              transition: 'all 0.3s ease-out'
            }}>
            <div className="flex items-center space-x-2">
              <div className="bg-purple-100 p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 21h18M3 7v1a3 3 0 003 3h12a3 3 0 003-3V7m-18 0V6a3 3 0 013-3h12a3 3 0 013 3v1M3 7l9-4 9 4"
                  />
                </svg>
              </div>
              <span className="font-medium text-sm text-[#27293B]">
                215+ Ports and Airports
              </span>
            </div>
          </div>
          <div className="absolute bottom-10 right-0 bg-white p-3 rounded-lg shadow-md z-20"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.15, 25)}px) rotate(${Math.min(scrollY * -0.05, -5)}deg) scale(${1 + Math.min(scrollY * 0.001, 0.1)})`,
              opacity: Math.max(1 - scrollY * 0.002, 0.7),
              transition: 'all 0.3s ease-out'
            }}>
            <div className="flex items-center space-x-2">
              <div className="bg-purple-100 p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span className="font-medium text-sm text-[#27293B]">
                85% Active Members
              </span>
            </div>
          </div>
          <div className="absolute top-10 left-0 bg-white p-3 rounded-lg shadow-md z-20"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.12, 22)}px) rotate(${Math.min(scrollY * -0.04, -4)}deg) scale(${1 + Math.min(scrollY * 0.001, 0.1)})`,
              opacity: Math.max(1 - scrollY * 0.002, 0.7),
              transition: 'all 0.3s ease-out'
            }}>
            <div className="flex items-center space-x-2">
              <div className="bg-purple-100 p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="font-medium text-sm text-[#27293B]">
                20+ Years of Experience
              </span>
            </div>
          </div>
          <div className="absolute top-10 right-0 bg-white p-3 rounded-lg shadow-md z-20"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.13, 23)}px) rotate(${Math.min(scrollY * 0.04, 4)}deg) scale(${1 + Math.min(scrollY * 0.001, 0.1)})`,
              opacity: Math.max(1 - scrollY * 0.002, 0.7),
              transition: 'all 0.3s ease-out'
            }}>
            <div className="flex items-center space-x-2">
              <div className="bg-purple-100 p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="font-medium text-sm text-[#27293B]">
                150+ Countries
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
