'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  TrophyIcon,
  SparklesIcon,
  BeakerIcon,
  MusicalNoteIcon,
  TagIcon,
  FireIcon,
  CalendarDaysIcon,
  ShoppingBagIcon,
  PencilIcon,
  DocumentTextIcon,
  BoltIcon,
  TruckIcon,
  BuildingOffice2Icon,
  StarIcon,
} from '@heroicons/react/24/outline';
import SponsorCard from './SponsorCard';
import { sponsorTypes, sponsorsData } from '@/data/sponsors';

// ─── Icon map ─────────────────────────────────────────────────────────────────

const typeIcons = {
  gold:                <TrophyIcon          className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />,
  'gala-dinner':       <SparklesIcon        className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />,
  'welcome-cocktail':  <BeakerIcon          className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />,
  'after-party':       <MusicalNoteIcon     className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />,
  lanyard:             <TagIcon             className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />,
  'coffee-break':      <FireIcon            className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />,
  'meeting-scheduler': <CalendarDaysIcon    className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />,
  bag:                 <ShoppingBagIcon     className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />,
  pen:                 <PencilIcon          className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />,
  notepad:             <DocumentTextIcon    className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />,
  flask:               <BeakerIcon          className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />,
  'wireless-charging': <BoltIcon            className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />,
  tshirt:              <TagIcon             className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />,
  cap:                 <StarIcon            className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />,
  coach:               <TruckIcon           className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />,
  front:               <BuildingOffice2Icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />,
};

// ─── Slides ───────────────────────────────────────────────────────────────────

const slides = sponsorTypes.flatMap((type) =>
  sponsorsData[type.id].map((card) => ({
    card,
    typeId:   type.id,
    typeName: type.displayName,
    gradient: type.gradient,
  }))
);

// ─── Badge pop animation ──────────────────────────────────────────────────────

const HomeSponsorStyles = () => (
  <style>{`
    @keyframes hscBadgePop {
      0%   { opacity: 0; transform: scale(0.9);  }
      60%  { opacity: 1; transform: scale(1.03); }
      100% { opacity: 1; transform: scale(1);    }
    }
    .hsc-badge-pop { animation: hscBadgePop 0.38s cubic-bezier(0.34,1.56,0.64,1) both; }
  `}</style>
);

// ─── Component ────────────────────────────────────────────────────────────────

export default function HomeSponsorCarousel() {
  const total = slides.length;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [paused,     setPaused]     = useState(false);
  const [badgeKey,   setBadgeKey]   = useState(0);

  const goTo = useCallback((idx) => {
    if (idx === currentIdx) return;
    setCurrentIdx(idx);
    setBadgeKey((k) => k + 1);
  }, [currentIdx]);

  const next = useCallback(
    () => goTo((currentIdx + 1) % total),
    [currentIdx, total, goTo]
  );
  const prev = useCallback(
    () => goTo((currentIdx - 1 + total) % total),
    [currentIdx, total, goTo]
  );

  // Auto-advance every 6 s; pause on hover
  useEffect(() => {
    if (paused || total <= 1) return;
    const t = setTimeout(next, 6000);
    return () => clearTimeout(t);
  }, [currentIdx, paused, next, total]);

  if (total === 0) return null;

  const cur  = slides[currentIdx];
  const icon = typeIcons[cur.typeId];

  return (
    <>
      <HomeSponsorStyles />
      <section className="bg-[#EFF6FF] py-16 lg:py-24">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section heading — matches bng_website pattern ── */}
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl lg:text-[55px] font-bold text-gray-900 mb-4">
              Conference <span className="text-primary">Sponsors</span>
            </h2>
            <h2
              className="absolute top-[-34px] lg:top-[-60px] left-0 lg:left-[0%] text-center w-full text-[40px] lg:text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-0"
              aria-hidden="true"
            >
              Conference Sponsors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the partners powering the BNG Logistics Conference experience
            </p>
          </div>

          {/* ── Sponsor type badge ── */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8">
            <div className="hidden sm:block h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-gray-300" />

            <div key={badgeKey} className="hsc-badge-pop relative flex items-center">
              {/* Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cur.gradient} rounded-full blur-xl opacity-25 pointer-events-none`} />
              {/* Pill */}
              <div className={`relative inline-flex items-center gap-2 sm:gap-2.5 whitespace-nowrap
                               bg-gradient-to-r ${cur.gradient}
                               text-black font-bold uppercase tracking-wider
                               text-xs sm:text-sm
                               px-4 sm:px-6 py-2 sm:py-2.5 rounded-full
                               shadow-md`}>
                {icon}
                <span>{cur.typeName}</span>
                {icon}
              </div>
            </div>

            <div className="hidden sm:block h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-gray-300" />

            {total > 1 && (
              <span className="text-gray-400 text-xs sm:text-sm tabular-nums font-medium">
                {currentIdx + 1}&thinsp;/&thinsp;{total}
              </span>
            )}
          </div>

          {/* ── Sliding track + arrows ── */}
          <div
            className="relative max-w-5xl mx-auto"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Left arrow */}
            {total > 1 && (
              <button
                onClick={prev}
                aria-label="Previous sponsor"
                className="absolute -left-2 sm:-left-4 md:-left-14 top-1/2 -translate-y-1/2 z-20
                           bg-white hover:bg-gray-50 border border-gray-200
                           p-2 sm:p-3 md:p-3.5 rounded-full shadow-md transition-all
                           focus:outline-none focus:ring-2 focus:ring-primary/30
                           hover:shadow-lg active:scale-95"
              >
                <ChevronLeftIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-700" />
              </button>
            )}

            {/* Track */}
            <div className="overflow-hidden rounded-2xl mx-6 sm:mx-8 md:mx-0">
              <div
                className="flex"
                style={{
                  transform:  `translateX(-${currentIdx * 100}%)`,
                  transition: 'transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  willChange: 'transform',
                }}
              >
                {slides.map((slide) => (
                  <div key={slide.card.id} className="flex-shrink-0 w-full min-w-0">
                    <SponsorCard sponsor={slide.card} gradient={slide.gradient} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right arrow */}
            {total > 1 && (
              <button
                onClick={next}
                aria-label="Next sponsor"
                className="absolute -right-2 sm:-right-4 md:-right-14 top-1/2 -translate-y-1/2 z-20
                           bg-white hover:bg-gray-50 border border-gray-200
                           p-2 sm:p-3 md:p-3.5 rounded-full shadow-md transition-all
                           focus:outline-none focus:ring-2 focus:ring-primary/30
                           hover:shadow-lg active:scale-95"
              >
                <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-700" />
              </button>
            )}
          </div>

          {/* ── Dots ── */}
          {total > 1 && (
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {slides.map((slide, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${slide.card.companyName}`}
                  title={slide.card.companyName}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                    i === currentIdx
                      ? 'w-6 sm:w-8 bg-primary'
                      : 'w-2 sm:w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}

          {/* ── View All Sponsors CTA ── */}
          <div className="text-center mt-10 sm:mt-12">
            <a
              href="https://conference.bnglogisticsnetwork.com/sponsors"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary/90
                         text-white font-semibold text-sm sm:text-base
                         px-6 sm:px-8 py-3 sm:py-3.5 rounded-full
                         shadow-md hover:shadow-lg
                         transition-all duration-300 active:scale-95 group"
            >
              View All Sponsors
              <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
