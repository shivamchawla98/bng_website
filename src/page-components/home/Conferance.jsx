"use client";

import React from "react";
import Image from "next/image";
import ConferenceImage from "@/app/images/conferacegrid1.png";
import styles from "./Conference.module.css";
import conferenceBg from "../../../public/members_benefit/conference.png";
import conferenceBg1 from "../../../public/members_benefit/2.png";
import Link from "next/link";

const Conference = () => {
  return (
    <section
      className="relative w-full py-12 lg:py-16 h-128 overflow-hidden bg-gradient-to-br from-[#1B1E3B] via-[#281F46] to-[#211F40]"
      style={{
        backgroundImage: `url(${conferenceBg1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Tint Overlay */}
 <div
  className="absolute inset-0"
  style={{
    background: "linear-gradient(135deg, rgba(27,30,59,0.6), rgba(40,31,70,0.9), rgba(33,31,64,0.9))",
    zIndex: 1,
  }}
/>

      <div
        className="relative max-w-8xl mx-auto px-4 md:px-8"
        style={{ zIndex: 2 }}
      >
        <div className="flex flex-col md:flex-row justify-center lg:px-24 items-center gap-6 md:gap-8">
          {/* Left Column - Image (40%) */}
          <div className="w-full md:w-[50%] relative flex justify-start items-center transform transition-all duration-700 hover:scale-105">
            <div className="relative w-full h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
  src={conferenceBg}
  alt="Conference"
  fill
  className="object-contain transition-transform duration-500"
  priority
  sizes="(max-width: 768px) 100vw, 50vw"
  style={{
    objectFit: 'cover',
    objectPosition: 'center',
    transform: 'scale(1.01)',
    transformOrigin: 'center',
  }}
/>

            </div>
          </div>

          {/* Right Column - Content (60%) */}
          <div className="w-full md:w-[50%] md:ml-10 text-left transform transition-all duration-700 translate-y-0 hover:translate-y-[-8px]">
            <h2 className="text-4xl md:text-[55px] font-bold text-white mb-4 leading-tight">
              Conference
            </h2>
            <p
              className={`text-base md:text-[18px] pr-4 lg:pr-0 text-white/90 leading-relaxed mb-6 ${styles.slideUp}`}
            >
              The BNG Global Conference takes place 14–17 June 2026 at Royal Cliff Beach Hotel, Pattaya Thailand, bringing elite freight forwarders together for high-value global collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mx-auto justify-start w-full">
              <Link
                href="https://conference.bnglogisticsnetwork.com/register"
                className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 px-6 py-3 rounded-lg text-white font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-xl text-center"
              >
                Conference Registration
              </Link>
              <a
                href="https://conference.bnglogisticsnetwork.com/download/BNG Global Convention 2026.pdf"
                download
                className="w-full sm:w-auto bg-white hover:bg-gray-100 px-6 py-3 rounded-lg text-gray-900 font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-xl text-center"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conference;