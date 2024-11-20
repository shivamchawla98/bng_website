import React from "react";
import { Phone } from "lucide-react";
import Image from "next/image";
import bg from "@/app/images/bg.png";

const HeroSection = () => {
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
          <p className="text-[#27293B] mb-8 text-[16px]">
            Experience the next generation of forwarder networks. Tired of
            investing in multiple networks with minimal returns? Discover a
            fresh approach to partnership here!
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-primary w-max rounded-full text-white px-6 py-3 hover:bg-gradient-to-tr from-purple-700 to-purple-600 flex items-center">
              Become a Member
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
            </button>

            <button className="bg-white w-max text-[#27293B] px-6 py-3 flex items-center border border-gray-200 rounded-full">
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
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <Image
            src={bg} // The imported image
            alt="Background Image"
            priority={true} // Optimizes loading for the hero image
          />
          {/* Info Cards */}
          <div className="absolute top-10 left-0 bg-white p-3 rounded-lg shadow-md z-20">
            <div className="flex items-center space-x-2">
              <div className="bg-purple-100 p-2 rounded-full">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span className="font-semibold text-[#27293B]">
                215+ Ports and Airports
              </span>
            </div>
          </div>
          <div className="absolute top-10 right-0 bg-white p-3 rounded-lg shadow-md z-20">
            <div className="flex items-center space-x-2">
              <div className="bg-purple-100 p-2 rounded-full">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span className="font-semibold text-[#27293B]">
                700+ countries
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
