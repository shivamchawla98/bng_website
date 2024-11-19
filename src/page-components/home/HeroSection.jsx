import React from "react";
import { Phone } from "lucide-react";
import Image from "next/image";
import bg from "@/app/images/bg.png";
const HeroSection = () => {
  return (
    <div className="min-h-[59vh] bg-gray-50">
      {/* Navbar */}

      {/* Hero Section */}
      <div className="container py-6 mx-auto  px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-[60px] font-bold mb-4 text-black">
            Connect and
            <span className="text-primary"> collaborate</span> with
            <span className="text-primary"> forwarders </span>
            daily
          </h1>
          <p className="text-black mb-8">
            Experience the next generation of forwarder networks. Tired of
            investing in multiple networks with minimal returns? Discover a
            fresh approach to partnership here!
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-primary w-max rounded-full text-white px-6 py-3  hover:bg-gradient-to-tr from-purple-700 to-purple-600 flex items-center">
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

            <button className="  bg-white w-max   text-black px-6 py-3  flex items-center border border-gray-200 rounded-full">
              {" "}
              Talk to Sales{" "}
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
          {/* Placeholder for the image */}
          <Image
            src={bg} // The imported image
            alt="Background Image"
            // Optional: makes the image cover the entire section
            priority={true} // Optimizes loading for the hero image
          />
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
              <span className="font-semibold text-black">
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
              <span className="font-semibold text-black">700+ countries</span>
            </div>
          </div>
          <div className="absolute bottom-10 left-0 bg-white p-3 rounded-lg shadow-md z-20">
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
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <span className="font-semibold text-black">500+ Worldwide</span>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 bg-white p-3 rounded-lg shadow-md z-20">
            <div className="flex items-center space-x-2">
              <Phone className="text-purple-600" />
              <div>
                <div className="text-sm text-black">Customer Service</div>
                <div className="font-semibold text-black">+12 345 6789 0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
