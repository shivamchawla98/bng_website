"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import bg from "@/app/images/home/Ellipse2.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import office from '../../../public/herosectionicon/offices.png';
import cities from '../../../public/herosectionicon/cities.png';
import member from '../../../public/herosectionicon/member.png';
import country from '../../../public/herosectionicon/contries.png';
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
            "linear-gradient(-145deg, #6853DB 16%, #6853DB 40.86%, #97b6f6 30%)",

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
            "linear-gradient(-145deg, #6853DB 16%, #6853DB 40.86%, #97b6f6 30%)",
          zIndex: 1,
          filter: "blur(110px)",
        }}></div>

      {/* Hero Section */}
      <div className="container py-6 mx-auto px-4 flex flex-col lg:flex-row items-center relative z-10">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-[55px]  mb-4 text-[#27293B]">
            <span className="text-[70px] font-bold">

            Connect &
            </span>
            <span className="text-[#5216ab] font-bold text-[70px]"> Collaborate</span><br></br> with
            <span className="text-[#5216ab]"> Forwarders </span>
            daily
          </h1>
          <p className="text-gray-600 mb-8 text-base">
            Experience the next generation of forwarder networks. Tired of
            investing in multiple networks with minimal returns? <span className="text-[20px]  font-semibold">
            Discover a
            fresh approach to partnership here!
              </span>
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Link
            href="https://app.bnglogisticsnetwork.com/login"
             className="group bg-gradient-to-tr from-[#6853DB] to-[#6853DB] rounded-lg text-white px-6 py-3 cursor-pointer flex items-center hover:bg-[#5216ab] hover:from-transparent transition-all duraton-300 bg-primary transform hover:translate-x-2"
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
                <Image
                  src={cities}
                  alt="cities Icon"
                  className="h-6 w-6 text-purple-600"
                />
           
              </div>
              <span className="font-semibold text-sm text-[#27293B]">
                200+ Cities
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
              <Image
                  src={office}
                  alt="cities Icon"
                  className="h-6 w-6 text-purple-600"
                />
              </div>
              <span className="font-semibold text-sm text-[#27293B]">
                210+ Offices
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
              <Image
                  src={member}
                  alt="cities Icon"
                  className="h-6 w-6 text-purple-600"
                />
              </div>
              <span className=" font-semibold text-sm text-[#27293B]">
                100+ Members
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
              <Image
                  src={country}
                  alt="cities Icon"
                  className="h-6 w-6 text-purple-600"
                />
              </div>
              <span className="font-semibold text-sm text-[#27293B]">
                30+ Countries
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
