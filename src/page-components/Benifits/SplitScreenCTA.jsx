import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FXVisit from "@/app/images/benifits/FX-Visit-card.png";
import BXVisit from "@/app/images/benifits/BX-Visit-card.png";

const SplitScreenCTA = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[600px] bg-primaryBg">
      {/* Business Xchange Section */}
      <Link href="/business-xchange" className="relative group overflow-hidden min-h-[300px] md:min-h-0">
        <div className="absolute inset-0 bg-blue-900/60 group-hover:bg-blue-900/70 transition-colors z-10" />
        <Image
          src={FXVisit}
          alt="Conference room setup"
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          quality={90}
          priority
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <h2 className="text-2xl md:text-4xl font-bold text-white">Business Xchange</h2>
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-white transform group-hover:translate-x-1 transition-transform"
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
          <p className="text-base md:text-xl font-semibold text-white/90 max-w-lg">
            Offering members verified, high-quality global freight leads to drive real, scalable business.
          </p>
        </div>
      </Link>

      {/* Freight Xchange Section */}
      <Link href="/freight-xchange" className="relative group overflow-hidden min-h-[300px] md:min-h-0">
        <div className="absolute inset-0 bg-red-900/60 group-hover:bg-red-900/70 transition-colors z-10" />
        <Image
          src={BXVisit}
          alt="Logistics truck"
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          quality={90}
          priority
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <h2 className="text-2xl md:text-4xl font-bold text-white">Freight Xchange</h2>
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-white transform group-hover:translate-x-1 transition-transform"
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
          <p className="text-base md:text-xl font-semibold text-white/90 max-w-lg">
            Enabling forwarders to showcase and share their freight rates with fellow members.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SplitScreenCTA;
