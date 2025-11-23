"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

/**
 * Breadcrumbs Component - Navigation breadcrumbs for blog pages
 */
const Breadcrumbs = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center flex-wrap gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center gap-2">
              {index === 0 && (
                <Home className="w-4 h-4 text-gray-500" />
              )}
              
              {isLast ? (
                <span className="text-gray-600 font-medium line-clamp-1">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    {item.label}
                  </Link>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
