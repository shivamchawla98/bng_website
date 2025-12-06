"use client";
import React from "react";
import Breadcrumbs from "@/components/Blog/Breadcrumbs";

export default function BlogPageBanner({ breadcrumbs, title, subtitle }) {
  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-visible">

      {/* Blurred gradient circles — decorative only */}
      <div
        className="absolute top-20 left-8 w-[200px] h-[200px] rounded-full
          bg-[linear-gradient(90deg,#0d0a1a_10%,#1a1340_90%)]
          blur-[100px] opacity-50 z-0 pointer-events-none"
      />

      <div
        className="absolute top-40 right-10 w-[150px] h-[150px] rounded-full
          bg-[linear-gradient(90deg,#0d0a1a_20%,#1a1340_80%)]
          blur-[80px] opacity-40 z-0 pointer-events-none"
      />

      {/* Main gradient — FIXED (removed pointer-events-none) */}
<div className="w-full py-32 md:py-48 lg:py-48 bg-gradient-to-tr from-primary via-primary/80 to-primary/70 relative z-0">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Breadcrumbs — always clickable */}
          <div className="relative z-30 pointer-events-auto">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          {/* Foreground Title */}
          <h1 className="text-4xl md:text-5xl lg:text-[55px] font-bold text-white mb-3 relative z-30 pointer-events-auto">
            {title}
          </h1>

          {/* Faded Background Title */}
          <h1
            className="absolute w-full top-[-40px] lg:top-[-59px] left-0
              text-5xl md:text-8xl font-bold text-white opacity-[4%]
              leading-none z-10 select-none pointer-events-none"
            aria-hidden="true"
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-gray-300 text-lg max-w-3xl relative z-30 pointer-events-auto">
              {subtitle}
            </p>
          )}

        </div>
      </div>
    </div>
  );
}
