'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  GlobeAltIcon,
  MapPinIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

// ─── Person photo with graceful placeholder when no image is provided ────────
const PersonPhoto = ({ person, sizes }) =>
  person.personImageUrl ? (
    <Image
      src={person.personImageUrl}
      alt={person.personName}
      fill
      sizes={sizes}
      className="object-cover object-top"
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
      <UserIcon className="h-20 w-20 text-gray-400" />
    </div>
  );

// ─── Keyframe CSS for one-direction slide ────────────────────────────────────

const CarouselStyles = () => (
  <style>{`
    @keyframes sponsorSlideOutLeft {
      from { transform: translateX(0%);    }
      to   { transform: translateX(-100%); }
    }
    @keyframes sponsorSlideInRight {
      from { transform: translateX(100%); }
      to   { transform: translateX(0%);   }
    }
  `}</style>
);

// ─── Sponsor card — light theme, creative design ─────────────────────────────

const SponsorCard = ({ sponsor, gradient }) => {
  const attendees =
    sponsor.attendees && sponsor.attendees.length > 0
      ? sponsor.attendees
      : [
          {
            personName: sponsor.personName,
            personPosition: sponsor.personPosition,
            personImageUrl: sponsor.personImageUrl,
          },
        ];

  const isCarousel = attendees.length > 1;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [pendingIdx, setPendingIdx] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!isCarousel || paused) return;

    const outerTimer = setTimeout(() => {
      const next = (currentIdx + 1) % attendees.length;
      setPendingIdx(next);
      setTransitioning(true);

      setTimeout(() => {
        setCurrentIdx(next);
        setPendingIdx(null);
        setTransitioning(false);
      }, 500);
    }, 3000);

    return () => clearTimeout(outerTimer);
  }, [isCarousel, currentIdx, paused, attendees.length]);

  const current = attendees[currentIdx];
  const activeDot = transitioning && pendingIdx !== null ? pendingIdx : currentIdx;

  return (
    <>
      <CarouselStyles />
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">

        {/* ── Gradient accent bar at top ── */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${gradient}`} />

        <div className="flex flex-col md:flex-row">

          {/* ── Left: Photo section ── */}
          <div
            className="relative flex-shrink-0 overflow-hidden bg-gray-100"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Desktop photo column */}
            <div className="hidden md:block relative w-[260px] lg:w-[300px] h-full min-h-[320px]">
              {/* Current slide */}
              <div
                className="absolute inset-0"
                style={
                  transitioning
                    ? { animation: 'sponsorSlideOutLeft 0.48s cubic-bezier(0.25,0.46,0.45,0.94) forwards', willChange: 'transform' }
                    : undefined
                }
              >
                <PersonPhoto person={current} sizes="300px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* Incoming slide */}
              {transitioning && pendingIdx !== null && (
                <div
                  className="absolute inset-0"
                  style={{ animation: 'sponsorSlideInRight 0.48s cubic-bezier(0.25,0.46,0.45,0.94) forwards', willChange: 'transform' }}
                >
                  <PersonPhoto person={attendees[pendingIdx]} sizes="300px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
              )}

              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-3 pt-8"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }}
              >
                <div
                  className="text-center"
                  style={{ opacity: transitioning ? 0 : 1, transition: 'opacity 0.25s ease' }}
                >
                  <p className="font-bold text-white text-sm leading-snug drop-shadow truncate">
                    {current.personName}
                  </p>
                  <p className="text-xs text-gray-300 mt-0.5 drop-shadow truncate">
                    {current.personPosition}
                  </p>
                </div>

                {isCarousel && (
                  <div className="flex justify-center gap-1.5 mt-2">
                    {attendees.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === activeDot ? 'w-4 bg-white' : 'w-1.5 bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile: horizontal person strip */}
            <div className="md:hidden relative w-full h-[180px] sm:h-[220px]">
              <div
                className="absolute inset-0"
                style={
                  transitioning
                    ? { animation: 'sponsorSlideOutLeft 0.48s cubic-bezier(0.25,0.46,0.45,0.94) forwards', willChange: 'transform' }
                    : undefined
                }
              >
                <PersonPhoto person={current} sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {transitioning && pendingIdx !== null && (
                <div
                  className="absolute inset-0"
                  style={{ animation: 'sponsorSlideInRight 0.48s cubic-bezier(0.25,0.46,0.45,0.94) forwards', willChange: 'transform' }}
                >
                  <PersonPhoto person={attendees[pendingIdx]} sizes="100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
              )}

              {/* Mobile name overlay */}
              <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-3 pt-6"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }}
              >
                <div
                  className="flex items-center gap-3"
                  style={{ opacity: transitioning ? 0 : 1, transition: 'opacity 0.25s ease' }}
                >
                  <div>
                    <p className="font-bold text-white text-sm leading-snug">{current.personName}</p>
                    <p className="text-xs text-gray-300">{current.personPosition}</p>
                  </div>
                </div>
                {isCarousel && (
                  <div className="flex gap-1.5 mt-2">
                    {attendees.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === activeDot ? 'w-4 bg-white' : 'w-1.5 bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── Right: Company details — light theme ── */}
          <div className="flex-1 p-4 sm:p-5 md:p-8 flex flex-col justify-between">
            <div>
              {/* Company header */}
              <div className="flex items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    {sponsor.companyName}
                  </h3>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1.5 sm:mt-2">
                    {sponsor.countryFlagUrl ? (
                      <Image
                        src={sponsor.countryFlagUrl}
                        alt={sponsor.country}
                        width={24}
                        height={9}
                        className="rounded-sm shadow-sm"
                      />
                    ) : (
                      <span className="text-sm leading-none">🌐</span>
                    )}
                    <span className="text-xs sm:text-sm font-semibold text-primary">
                      {sponsor.country}
                    </span>
                    <span className="text-gray-300">·</span>
                    <MapPinIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-gray-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-500">{sponsor.location}</span>
                  </div>
                </div>

                {/* Logo */}
                {sponsor.companyLogoUrl ? (
                  <div className="relative w-16 h-12 sm:w-24 sm:h-16 md:w-32 md:h-24 bg-gray-50 rounded-lg sm:rounded-xl flex-shrink-0 shadow-sm border border-gray-100 overflow-hidden p-1 sm:p-2">
                    <Image
                      src={sponsor.companyLogoUrl}
                      alt={`${sponsor.companyName} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-12 h-10 sm:w-16 sm:h-12 md:w-20 md:h-14 rounded-lg sm:rounded-xl flex-shrink-0 flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm`}
                  >
                    <span className="text-black font-black text-xs sm:text-sm md:text-base uppercase tracking-widest">
                      {sponsor.companyName.slice(0, 2)}
                    </span>
                  </div>
                )}
              </div>

              {/* About */}
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3">
                {sponsor.about}
              </p>
            </div>

            {/* Website link */}
            <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-gray-100">
              {sponsor.website && (
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors group"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-purple-50 group-hover:bg-purple-100 transition-colors">
                    <GlobeAltIcon className="h-4 w-4 text-primary" />
                  </span>
                  <span className="truncate font-medium">
                    {sponsor.website.replace(/^https?:\/\//, '')}
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorCard;
