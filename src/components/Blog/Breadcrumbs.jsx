"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

/**
 * Breadcrumbs - clickable breadcrumb navigation
 * items: [{ label, href? }]
 */
export default function Breadcrumbs({ items = [] }) {
  const router = useRouter();

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
              {/* Home icon for first item (clickable when href present) */}
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
