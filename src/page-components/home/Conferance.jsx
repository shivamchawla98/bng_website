'use client';

import React from "react";
import Image from "next/image";
import ConferenceImage from "@/app/images/conferacegrid1.png";
import styles from './Conference.module.css';

const Conference = () => {
  return (
    <section 
      className="relative w-screen py-20 overflow-hidden"
      style={{
        background: "#6853DB"
      }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Column - Image (40%) */}
          <div className="w-full md:w-[40%] relative transform transition-all duration-700 hover:scale-105">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                src={ConferenceImage}
                alt="Conference"
                fill
                className="object-cover transform transition-transform duration-500 hover:scale-110"
                priority
              />
            </div>
          </div>

          {/* Right Column - Content (60%) */}
          <div className="w-full md:w-[60%] text-left transform transition-all duration-700 translate-y-0 hover:translate-y-[-8px]">
            <h2 className="text-[44px] font-extrabold text-white mb-6 leading-tight">
              Conference
            </h2>
            <p className={`text-[18px] text-white/90 leading-relaxed mb-8 ${styles.slideUp}`}>
              Join us for an engaging conference where industry leaders share
              insights and explore the latest trends in logistics and supply chain
              management. Don't miss the opportunity to connect and learn from the
              best!
            </p>
            <button className="bg-white/10 text-white px-8 py-4 flex items-center border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 group transform hover:translate-x-2">
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conference;
