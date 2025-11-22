"use client";

import React, { useState, useEffect } from "react";
import { List } from "lucide-react";

/**
 * TableOfContents Component - Navigation for long blog posts
 */
const TableOfContents = ({ content }) => {
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    // Extract headings from content
    if (!content) return;

    const headingRegex = /<h([2-3])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h\1>/gi;
    const headings = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = parseInt(match[1]);
      const id = match[2];
      const text = match[3].replace(/<[^>]*>/g, ''); // Strip HTML tags
      
      headings.push({ id, text, level });
    }

    setToc(headings);
  }, [content]);

  useEffect(() => {
    // Observe headings and update active state
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -80% 0px",
      }
    );

    // Observe all headings
    toc.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [toc]);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (toc.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-white to-primary/5 rounded-xl shadow-md border border-primary/10 p-6 sticky top-24">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
        <List className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-bold text-gray-900">Table of Contents</h3>
      </div>
      
      <nav className="space-y-1">
        {toc.map(({ id, text, level }) => (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className={`block w-full text-left py-2 px-3 rounded transition-all duration-200 ${
              level === 3 ? "pl-6 text-sm" : "text-sm"
            } ${
              activeId === id
                ? "bg-primary/10 text-primary font-semibold"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            {text}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TableOfContents;
