'use client';

import React, { useState } from 'react';
import { Linkedin } from 'lucide-react';
import { featuredTeam, teamMembers } from '@/data/team';

// ─── LinkedIn pill button ───────────────────────────────────────────────────────
const LinkedInButton = ({ href, size = 'md' }) => {
  const dims = size === 'sm' ? 'w-8 h-8' : 'w-9 h-9';
  const icon = size === 'sm' ? 16 : 18;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      aria-label="LinkedIn profile"
      className={`${dims} flex items-center justify-center rounded-full bg-[#6853DB] text-white shadow-md transition-transform duration-300 hover:scale-110 hover:bg-[#5216ab]`}
    >
      <Linkedin size={icon} fill="currentColor" strokeWidth={0} />
    </a>
  );
};

// ─── Featured cards — hover to expand; collapsed cards stack/overlap via z-index.
// The portrait is a FIXED-size element anchored bottom-center, so it never scales
// or zooms — the card window simply widens/narrows around it.
const FeaturedCards = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="max-w-7xl mx-auto flex justify-center items-stretch">
      {featuredTeam.map((member, i) => {
        const isActive = active === i;
        return (
          <div
            key={member.name}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            style={{ zIndex: isActive ? 30 : 20 - i }}
            className={`relative overflow-hidden rounded-3xl cursor-pointer
                        transition-[width,box-shadow] duration-500 ease-in-out
                        h-[440px] sm:h-[500px] lg:h-[540px]
                        ${i !== 0 ? '-ml-4 sm:-ml-6' : ''}
                        ${isActive ? 'bg-white shadow-2xl' : 'bg-[#6853DB] shadow-lg'}
                        ${
                          isActive
                            ? 'w-[240px] sm:w-[380px] lg:w-[480px]'
                            : 'w-[120px] sm:w-[230px] lg:w-[300px]'
                        }`}
          >
            {/* Fixed-size portrait, anchored bottom-center — width never changes */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[240px] sm:w-[380px] lg:w-[480px] h-[280px] sm:h-[340px] lg:h-[380px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover object-top"
              />
              {/* Purple tint over the photo when collapsed */}
              {!isActive && (
                <div className="absolute inset-0 bg-[#6853DB] opacity-60 mix-blend-multiply" />
              )}
              {/* Soft fade so the photo blends into the card top */}
              <div
                className={`absolute inset-0 ${
                  isActive
                    ? 'bg-gradient-to-t from-transparent via-transparent to-white'
                    : 'bg-gradient-to-t from-transparent via-transparent to-[#6853DB]'
                }`}
              />
            </div>

            {/* Text content pinned to top, centered */}
            <div className="absolute top-0 left-0 right-0 flex flex-col items-center text-center pt-6 sm:pt-8 px-3 sm:px-4">
              <p
                className={`uppercase tracking-[0.18em] font-semibold mb-2 whitespace-nowrap
                            text-[10px] sm:text-xs ${isActive ? 'text-primary' : 'text-white/90'}`}
              >
                {member.position}
              </p>
              <h3
                className={`font-bold leading-tight mb-3 text-base sm:text-xl lg:text-2xl
                            ${isActive ? 'text-[#27293b]' : 'text-white'}`}
              >
                {member.name}
              </h3>
              <LinkedInButton href={member.linkedin} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ─── Smaller member cards grid ───────────────────────────────────────────────────
const MemberGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
    {teamMembers.map((member) => (
      <div
        key={member.name}
        className="group relative overflow-hidden rounded-2xl shadow-md h-[230px] sm:h-[260px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.image}
          alt={member.name}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#27293b]/85 via-[#27293b]/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-semibold text-purple-200 mb-0.5">
            {member.position}
          </p>
          <h4 className="text-white font-bold leading-tight text-base sm:text-lg mb-2">
            {member.name}
          </h4>
          <LinkedInButton href={member.linkedin} size="sm" />
        </div>
      </div>
    ))}
  </div>
);

// ─── Page ────────────────────────────────────────────────────────────────────────
export default function TeamClient() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 relative">
          <h1 className="text-3xl sm:text-4xl lg:text-[55px] font-bold text-gray-900 mb-3 sm:mb-4 relative z-10">
            Meet Our <span className="text-primary">Team</span>
          </h1>
          <h2
            className="absolute top-[-18px] sm:top-[-30px] lg:top-[-55px] left-0 text-center w-full text-[30px] sm:text-[44px] lg:text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-0"
            aria-hidden="true"
          >
            Our Team
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            The people driving the BNG Logistics Network forward — connecting freight
            forwarders and partners across the globe.
          </p>
        </div>

        {/* Featured expanding cards */}
        <FeaturedCards />

        {/* Other members */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              The Wider <span className="text-primary">Team</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-xl mx-auto">
              Specialists across operations, partnerships, and member support.
            </p>
          </div>
          <MemberGrid />
        </div>
      </div>
    </section>
  );
}
