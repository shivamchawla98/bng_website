"use client";
import React from "react";
import Image from "next/image";
import rightImg from "../../../public/ourStory.png";
import { useRouter } from "next/navigation";

function AboutUs() {
  const router = useRouter();
  return (
    <div className="bg-secondryBg px-4 sm:px-6 md:px-[112px] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-10 md:py-14">
      {/* Image Section */}
      <div className="w-full md:w-[900px] relative">
        <Image
          src={rightImg}
          alt="Export Import Containers"
          layout="responsive"
          width={600}
          // height={300}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 mt-6 md:mt-0">
        <div className="relative">
          <h2 className="text-4xl sm:text-4xl md:text-[55px] font-bold mb-3 lg:mb-8 text-gray-700 relative z-10">
            Our <span className="text-[#5216ab]">Story</span>
          </h2>
          <h2
            className="absolute -top-[34px] sm:-top-[40px] md:-top-[40px] left-1 sm:-left-8 md:-left-16 text-[40px]  md:text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-0"
            aria-hidden="true"
          >
            Our Story
          </h2>
        </div>
        <p className="text-sm sm:text-base text-gray-500 mb-4">
          With over 20 years of proven expertise in logistics and supply chain management, BNG Group was founded to transform the way industry professionals connect and grow. What began as a vision backed by nearly three years of in-depth market research has evolved into a powerful logistics network—purpose-built to foster global collaboration, streamline operations, and spark real business opportunities.
        </p>
        <p className="text-sm sm:text-base text-gray-500 mb-6">
          BNG is more than a network; it’s a thriving hub where freight forwarders, logistics providers, and industry leaders come together to create meaningful, growth-focused partnerships. Our platform is designed to break barriers and build bridges—uniting businesses with tools, resources, and connections that matter.
        </p>
        <p className="text-sm sm:text-base text-gray-500 mb-6">
          As a member, you gain exclusive access to one of the largest and most accurate Exporters/Importers Data Banks in the industry—curated and maintained by BNG—to support data-driven success across every market you serve.
        </p>
        <button
          onClick={() => router.push("/about-us")}
          className="group bg-gradient-to-tr from-[#6853DB] to-[#6853DB] rounded-lg text-white px-4 sm:px-6 py-2 sm:py-3 cursor-pointer flex items-center hover:bg-primary hover:from-transparent transition-all duration-300 transform hover:translate-x-2 w-fit"
        >
          Know more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default AboutUs;