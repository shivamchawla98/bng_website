"use client";
import React from "react";
import Breadcrumbs from "@/components/Blog/Breadcrumbs";

export default function BlogPageBanner({
  breadcrumbs,
  title,
  subtitle,
  backOnly = false,
  date,
  authorName,
  authorTitle,
}) {
  // Helper function to render author info based on available data
  const renderAuthorInfo = () => {
    if (!authorName && !authorTitle) return null;

    return (
      <p className="text-lg mb-4 relative z-30 pointer-events-auto text-gray-300">
        By{" "}
        {authorName && (
          <span className="font-semibold text-white">{authorName}</span>
        )}
        {authorName && authorTitle && ", "}
        {authorTitle && <span className="text-gray-300">{authorTitle}</span>}
      </p>
    );
  };

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
      {/* Main gradient — Center content vertically */}
      <div className="w-full h-[300px] md:h-[400px] bg-gradient-to-tr from-primary via-primary/80 to-primary/70 relative z-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          {/* Breadcrumbs — use backOnly prop */}
          <div className="relative z-30 pointer-events-auto">
            <Breadcrumbs items={breadcrumbs} backOnly={backOnly} />
          </div>

          {/* Date - Only render if date is provided */}
          {date && (
            <p className="text-gray-300 text-sm mb-2 relative z-30 pointer-events-auto">
              {date}
            </p>
          )}

          {/* Foreground Title */}
          <h1 className="text-3xl md:text-4xl lg:text-[45px] font-bold text-white mb-3 relative z-30 pointer-events-auto">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-gray-300 text-lg max-w-3xl text-start relative z-30 pointer-events-auto">
              {subtitle}
            </p>
          )}

          {/* Author Info - Render based on available data */}
          {renderAuthorInfo()}

          <h1
            className="absolute w-full top-1/2 left-0 transform -translate-y-1/2
              text-5xl md:text-7xl font-bold text-white opacity-[4%]
              leading-none z-10 select-none pointer-events-none"
            aria-hidden="true"
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
