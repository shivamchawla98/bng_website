import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FXVisit from "@/app/images/benifits/FX-Visit-card.png";
import BXVisit from "@/app/images/benifits/BX-Visit-card.png";
const SplitScreenCTA = () => {
  return (
    <div className="grid md:grid-cols-2 h-[600px]  bg-primaryBg">
      {/* Conference Section */}
      <Link href="/conference" className="relative group overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/60 group-hover:bg-blue-900/70 transition-colors z-10" />
        <Image
          src={FXVisit}
          alt="Conference room setup"
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          quality={90}
          priority
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center p-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-4xl font-bold text-white">Promote Your Freight Like Never Before</h2>
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
            Showcase competitive rates and services to a global audience
          </p>
        </div>
      </Link>

      {/* Member Portal Section */}
      <Link href="/member-portal" className="relative group overflow-hidden">
        <div className="absolute inset-0 bg-red-900/60 group-hover:bg-red-900/70 transition-colors z-10" />
        <Image
          src={BXVisit}
          alt="Logistics truck"
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          quality={90}
          priority
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center p-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-4xl font-bold text-white">Discover Global Business Leads</h2>
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
          <p className="text-[18px] text-white/90 max-w-md">
            Find active leads and expand your network worldwide
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SplitScreenCTA;