import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Conferance from "@/app/images/Split.jpeg"
const SplitScreenCTA = () => {
  return (
    <div className="grid md:grid-cols-2 h-[600px]  bg-primaryBg">
      {/* Conference Section */}
      <Link href="/conference" className="relative group overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/60 group-hover:bg-blue-900/70 transition-colors z-10" />
        <Image
          src={Conferance}
          alt="Conference room setup"
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          quality={90}
          priority
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center p-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-4xl font-bold text-white">Visit Our Conference Page</h2>
            <svg 
              className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </div>
          <p className="text-lg text-white/90 max-w-md">
            To be a global leader logistic Navigating Global Logistics
          </p>
        </div>
      </Link>

      {/* Member Portal Section */}
      <Link href="/member-portal" className="relative group overflow-hidden">
        <div className="absolute inset-0 bg-red-900/60 group-hover:bg-red-900/70 transition-colors z-10" />
        <Image
      src={Conferance}
          alt="Logistics truck"
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          quality={90}
          priority
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center p-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-4xl font-bold text-white">Visit Our Member Portal</h2>
            <svg 
              className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </div>
          <p className="text-lg text-white/90 max-w-md">
            Unlocking a World of Reliable Solutions
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SplitScreenCTA;