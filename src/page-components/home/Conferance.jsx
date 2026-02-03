"use client";

import React from "react";
import Image from "next/image";
import ConferenceImage from "@/app/images/conferacegrid1.png";
import styles from "./Conference.module.css";
import conferenceBg from "../../../public/members_benefit/conference.png";
import Link from "next/link";


const Conference = () => {
  return (
    <section
      className="relative w-full py-16 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${ConferenceImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Tint Overlay */}
      <div
        className="absolute inset-0 "
        style={{
          backgroundColor: "rgba(104, 83, 219, 0.75)",
          zIndex: 1,
        }}
      />

      <div
        className="relative max-w-8xl mx-auto px-4 md:px-8"
        style={{ zIndex: 2 }}
      >
        <div className="flex flex-col md:flex-row justify-center lg:px-24 items-center gap-8">
          {/* Left Column - Image (40%) */}
          <div className="w-full md:w-[50%] relative flex justify-start items-center transform transition-all duration-700 hover:scale-105">
            <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                src={conferenceBg}
                alt="Conference"
                fill
                className="object-cover transform transition-transform duration-500 "
                priority
              />
            </div>
          </div>

          {/* Right Column - Content (60%) */}
          <div className="w-full md:w-[50%] ml-10 text-left transform transition-all duration-700 translate-y-0 hover:translate-y-[-8px]">
            <h2 className="text-[55px] font-bold text-white mb-4 leading-tight">
              Conference
            </h2>
            <p
              className={`text-[18px] pr-4 lg:pr-0 font-bold text-white/90 leading-relaxed mb-8 ${styles.slideUp}`}
            >
              An exclusive annual physical conference where elite freight forwarders meet, build trust, strengthen partnerships, and convert digital connections into meaningful, long-term global business relationships.
            </p>
          <div className="flex flex-col sm:flex-row gap-2 mx-auto justify-start w-full">
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
