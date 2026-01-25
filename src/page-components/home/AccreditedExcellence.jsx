"use client";
import React from "react";
import Image from "next/image";
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
        <div className="flex flex-col items-center">
          {/* Logos Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-12">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Accreditation ${index + 1}`}
                  className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] hover:scale-110 transition-transform duration-300 ease-in-out object-contain"
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="relative w-full max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Accredited <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Our partners are selected for their strong local presence and established expertise in cargo operations, ensuring reliability. They undergo thorough screenings for service quality, compliance, and financial stability, which guarantees that we collaborate with only the best in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccreditedExcellence;
