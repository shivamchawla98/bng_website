"use client";
import React from "react";
import Image from "next/image";
import { FaAward, FaShieldAlt, FaGlobe, FaCheckCircle } from "react-icons/fa";

// Logo imports (unchanged)
import LOGO1 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-01.png";
import LOGO2 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-02.png";
import LOGO3 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-03.png";
import LOGO4 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-04.png";
import LOGO5 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-05.png";
import LOGO6 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-06.png";
import LOGO7 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-07.png";
import LOGO8 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-08.png";
import LOGO9 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-09.png";
import LOGO10 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-10.png";
import LOGO11 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-11.png";
import LOGO12 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-12.png";

const partnerLogos = [
  LOGO5, LOGO6, LOGO7, LOGO8, LOGO1, LOGO2, LOGO3, LOGO4,
  LOGO9, LOGO10, LOGO11, LOGO12
];

const AccreditedExcellence = () => {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading and Subheading */}
        <div className="text-center mb-16">
          <div className="relative">
        <h2 className="text-4xl lg:text-[55px] font-bold text-[#27293B] text-center mb-8 sm:mb-8 lg:mb-8 relative z-10">
          Accredited <span className="text-primary">Excellence</span>
        </h2>
        <h2
          className="absolute top-[-34px] lg:top-[-60px] left-0 lg:left-[0%] text-center w-full text-[40px]  lg:text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-0"
          aria-hidden="true"
        >
          Accredited Excellence
        </h2>
      </div>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Members certified by globally recognised logistics and trade authorities
          </p>
        </div>

        {/* Logos and Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Logos Grid - Left Column (unchanged) */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Accreditation ${index + 1}`}
                  className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] hover:scale-110 transition-transform duration-300 ease-in-out object-contain"
                />
              </div>
            ))}
          </div>

          {/* Features - Right Column (unchanged) */}
          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-purple-50 text-purple-600 mt-1">
                <FaAward className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Trusted Partnerships</h3>
                <p className="text-gray-600">Backed by internationally respected industry institutions.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-purple-50 text-purple-600 mt-1">
                <FaShieldAlt className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Reliability</h3>
                <p className="text-gray-600">Proven credibility through global certifications and memberships.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-purple-50 text-purple-600 mt-1">
                <FaGlobe className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Global Reach</h3>
                <p className="text-gray-600">Standards accepted and trusted worldwide.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="p-3 rounded-full bg-purple-50 text-purple-600 mt-1">
                <FaCheckCircle className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Quality Assurance</h3>
                <p className="text-gray-600">Compliance-driven operations with assured service quality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccreditedExcellence;
