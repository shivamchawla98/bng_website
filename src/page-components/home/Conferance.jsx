'use client';

import React from "react";
import Image from "next/image";
import ConferenceImage from "@/app/images/conferacegrid1.png";
import styles from './Conference.module.css';
import conferenceBg from '../../../public/conference.webp'

const Conference = () => {
  return (
    <section 
      className="relative w-screen py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${ConferenceImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Tint Overlay */}
      <div 
        className="absolute inset-0 "
        style={{
          backgroundColor: 'rgba(104, 83, 219, 0.75)',
          zIndex: 1,
        }}
      />
      
      <div className="relative max-w-8xl mx-auto px-4 md:px-8" style={{ zIndex: 2 }}>
        <div className="flex flex-col md:flex-row justify-center lg:px-24 items-center gap-8">
          {/* Left Column - Image (40%) */}
          <div className="w-full md:w-[50%] relative flex justify-start items-center transform transition-all duration-700 hover:scale-105">
            <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                src={conferenceBg}
                alt="Conference"
                fill
                className="object-cover transform transition-transform duration-500 hover:scale-110"
                priority
              />
            </div>
          </div>

          {/* Right Column - Content (60%) */}
          <div className="w-full md:w-[50%] ml-10 text-left transform transition-all duration-700 translate-y-0 hover:translate-y-[-8px]">
            <h2 className="text-[55px] font-bold text-white mb-4 leading-tight">
              Conference
            </h2>
            <p className={`text-[18px] pr-4 lg:pr-0 font-bold text-white/90 leading-relaxed mb-8 ${styles.slideUp}`}>
              Be part of an inspiring conference where industry leaders unveil insights and dive into the latest logistics and supply chain trends. Network with top professionals, gain valuable knowledge, and elevate your expertise—don’t miss out!
            </p>
            <a 
              href="https://conference.bnglogisticsnetwork.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white border-[3px] px-8 py-4 flex items-center  border-white/60 hover:border-white rounded-lg hover:bg-[#5216ab] transition-all duration-300 group transform hover:translate-x-2 w-fit"
            >
              Register Now
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conference;