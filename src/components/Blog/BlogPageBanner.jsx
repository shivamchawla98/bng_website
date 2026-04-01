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
  backgroundImage,
}) {
  // Helper function to render author info based on available data
  const renderAuthorInfo = () => {
    if (!authorName && !authorTitle) return null;

    return (
      <p className="text-lg mb-4 text-gray-300">
        By{" "}
        {authorName && (
          <span className="font-semibold text-white">{authorName}</span>
        )}
        {authorName && authorTitle && ", "}
        {authorTitle && <span className="text-gray-300">{authorTitle}</span>}
      </p>
    );
  };

  const bannerStyle = backgroundImage ? {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  } : {};

  return (
    <div className="relative h-[300px] md:h-[400px] bg-primary flex items-center justify-start pl-4 sm:pl-6 md:pl-10" style={bannerStyle}>
      <div className="flex flex-col w-full max-w-7xl">
        {/* Breadcrumbs — use backOnly prop */}
        {breadcrumbs && (
          <div className="mb-4">
            <Breadcrumbs items={breadcrumbs} backOnly={backOnly} />
          </div>
        )}

        {/* Date - Only render if date is provided */}
        {date && (
          <p className="text-gray-300 text-sm mb-2">
            {date}
          </p>
        )}

        {/* Subtitle */}
        {subtitle && (
          <h3 className="text-2xl sm:text-2xl md:text-5xl font-light mb-4 text-white">
            {subtitle}
          </h3>
        )}

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-[52px] font-bold text-white mb-4">
          {title}
        </h2>

        {/* Author Info - Render based on available data */}
        {renderAuthorInfo()}
      </div>
    </div>
  );
}
