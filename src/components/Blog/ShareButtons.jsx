"use client";

import React, { useState } from "react";
import { Facebook, Twitter, Linkedin, Mail, Link as LinkIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { getSocialShareUrls, copyToClipboard } from "@/lib/utils/blogUtils";

/**
 * ShareButtons Component - Social sharing buttons for blog posts
 * Can be used as sticky sidebar or inline
 */
const ShareButtons = ({ url, title, description = "", sticky = false }) => {
  const [copied, setCopied] = useState(false);
  
  const shareUrls = getSocialShareUrls(url, title, description);

  const handleCopyLink = async () => {
    const success = await copyToClipboard(url);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareButtons = [
    {
      name: "Facebook",
      icon: Facebook,
      url: shareUrls.facebook,
      color: "hover:bg-blue-600 hover:text-white",
      bgColor: "bg-blue-50",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: shareUrls.twitter,
      color: "hover:bg-sky-500 hover:text-white",
      bgColor: "bg-sky-50",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: shareUrls.linkedin,
      color: "hover:bg-blue-700 hover:text-white",
      bgColor: "bg-blue-50",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: shareUrls.whatsapp,
      color: "hover:bg-green-500 hover:text-white",
      bgColor: "bg-green-50",
    },
    {
      name: "Email",
      icon: Mail,
      url: shareUrls.email,
      color: "hover:bg-gray-700 hover:text-white",
      bgColor: "bg-gray-50",
    },
  ];

  const containerClasses = sticky
    ? "fixed top-1/3 left-4 hidden xl:flex flex-col gap-3 z-30"
    : "flex items-center justify-center gap-3 flex-wrap";

  const buttonClasses = sticky
    ? "w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
    : "w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300";

  return (
    <div className={containerClasses}>
      {/* Sticky Label */}
      {sticky && (
        <div className="text-center mb-2">
          <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">
            Share
          </p>
        </div>
      )}

      {/* Social Share Buttons */}
      {shareButtons.map(({ name, icon: Icon, url, color, bgColor }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${name}`}
          className={`${bgColor} ${color} ${buttonClasses} text-gray-700`}
        >
          <Icon className={sticky ? "w-5 h-5" : "w-4 h-4"} />
        </a>
      ))}

      {/* Copy Link Button */}
      <button
        onClick={handleCopyLink}
        aria-label="Copy link"
        className={`${copied ? 'bg-green-100 text-green-600' : 'bg-gray-50 hover:bg-primary hover:text-white text-gray-700'} ${buttonClasses} shadow-lg transition-all duration-300`}
      >
        <LinkIcon className={sticky ? "w-5 h-5" : "w-4 h-4"} />
      </button>

      {/* Copied Tooltip */}
      {copied && (
        <div className="absolute left-full ml-4 bg-green-600 text-white text-xs px-3 py-1 rounded shadow-lg whitespace-nowrap">
          Link copied!
        </div>
      )}
    </div>
  );
};

export default ShareButtons;
