"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, ChevronLeft, Home, ArrowBigLeft, ArrowLeft } from "lucide-react";

/**
 * Breadcrumbs - Supports both full breadcrumbs and back button mode
 * @param {Object} props
 * @param {Array} props.items - Array of breadcrumb items
 * @param {boolean} props.backOnly - If true, shows only a back button
 */
export default function Breadcrumbs({ items = [], backOnly = false }) {
  const router = useRouter();

  if (backOnly) {
    return (
      <nav aria-label="Back" className="py-2">
       <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-sm text-white hover:text-gray-300 hover:-translate-x-1 transition-all duration-300 cursor-pointer focus:outline-none  rounded"
      >
        <div className="w-8 h-8 bg-primary/80 rounded-full flex items-center justify-center transform hover:-translate-x-1 transition-all duration-300">
          <ArrowLeft className="w-4 h-4 stroke-white" />
        </div>
        Back
      </button>


      </nav>
    );
  }

  if (!items || items.length === 0) return null;

  const handleNavigate = (href) => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <nav aria-label="Breadcrumb" className="py-2">
      <ol className="flex items-center flex-wrap gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              {index === 0 && item.href ? (
                <button
                  onClick={() => handleNavigate(item.href)}
                  className="inline-flex items-center text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary rounded transition-colors cursor-pointer"
                >
                  <Home className="w-4 h-4" />
                </button>
              ) : index === 0 ? (
                <span className="inline-flex items-center text-gray-100">
                  <Home className="w-4 h-4" />
                </span>
              ) : null}
              {isLast ? (
                <span
                  aria-current="page"
                  className="text-gray-200 font-medium line-clamp-1"
                >
                  {item.label}
                </span>
              ) : (
                <>
                  {item.href ? (
                    <button
                      onClick={() => handleNavigate(item.href)}
                      className="text-white hover:text-gray-300 transition-colors cursor-pointer font-medium"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <span className="text-gray-200">{item.label}</span>
                  )}
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
