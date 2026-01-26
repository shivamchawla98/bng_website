"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const PANELS = [
  {
    title: "Attend the Conference",
    subtitle:
      "Connect with verified freight forwarders, build partnerships, and participate in high-value 1-to-1 meetings.",
    img: "/ThreePanelHero/c-1.png",
    cta: "Explore More",
    link: "https://conference.bnglogisticsnetwork.com/conference-pass#passes",
  },
  {
    title: "Sponsor the Conference",
    subtitle:
      "Position your brand in front of decision-makers and gain premium visibility across the BNG global convention.",
    img: "/ThreePanelHero/c-3.png",
    cta: "Explore More",
    link: "https://conference.bnglogisticsnetwork.com/conference-pass#sponsorships",
  },
  {
    title: "Exhibit at the Conference",
    subtitle:
      "Showcase your services, meet qualified prospects, and engage directly with industry leaders.",
    img: "/ThreePanelHero/c-2.png",
    cta: "Exhibit with Us",
    link: "https://conference.bnglogisticsnetwork.com/conference-pass#booth",
  },
];

export default function ConferenceOpportunities() {
  const wrapRef = useRef(null);
  const frontLayerRef = useRef(null);
  const backLayerRef = useRef(null);
  const currentUrlRef = useRef(PANELS[0].img);
  const targetUrlRef = useRef(PANELS[0].img);
  const tlRef = useRef(null);
  const animIdRef = useRef(0);
  const highlightRefs = useRef([]);

  // Preload images
  useEffect(() => {
    PANELS.forEach((p) => {
      const img = new Image();
      img.decoding = "async";
      img.loading = "eager";
      img.src = p.img;
    });
  }, []);

  // Initial paint
  useEffect(() => {
    if (frontLayerRef.current) {
      frontLayerRef.current.style.backgroundImage = `url(${PANELS[0].img})`;
    }
    if (backLayerRef.current) {
      backLayerRef.current.style.backgroundImage = `url(${PANELS[0].img})`;
    }
  }, []);

  // Entrance animation
  useEffect(() => {
    if (!wrapRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tp-panel",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.08 }
      );
      gsap.fromTo(
        ".tp-text",
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.15,
          stagger: 0.08,
        }
      );
      gsap.fromTo(
        ".tp-gridline",
        { scaleY: 0, transformOrigin: "top" },
        { scaleY: 1, duration: 0.9, ease: "power3.out", delay: 0.1 }
      );
      if (frontLayerRef.current) {
        gsap.fromTo(
          frontLayerRef.current,
          { scale: 1.06 },
          { scale: 1.0, duration: 1.2, ease: "power3.out" }
        );
      }
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  const swapBackground = (nextUrl) => {
    if (nextUrl === targetUrlRef.current) return;
    targetUrlRef.current = nextUrl;
    const front = frontLayerRef.current;
    const back = backLayerRef.current;
    if (!front || !back) return;
    const myAnimId = ++animIdRef.current;
    if (tlRef.current) tlRef.current.kill();
    gsap.killTweensOf([front, back]);
    back.style.backgroundImage = `url(${nextUrl})`;
    gsap.set(front, { opacity: 1, scale: 1 });
    gsap.set(back, { opacity: 0, scale: 1.04 });
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        if (animIdRef.current !== myAnimId) return;
        front.style.backgroundImage = `url(${nextUrl})`;
        currentUrlRef.current = nextUrl;
        gsap.set(front, { opacity: 1, scale: 1 });
        gsap.set(back, { opacity: 0, scale: 1 });
      },
    });
    tl.to(back, { opacity: 1, duration: 0.55 }, 0)
      .to(front, { opacity: 0.12, duration: 0.55 }, 0)
      .to(back, { scale: 1.0, duration: 0.9 }, 0)
      .to(front, { opacity: 0, duration: 0.25, ease: "power2.out" }, 0.35);
    tlRef.current = tl;
  };

  const onEnter = (idx) => {
    swapBackground(PANELS[idx].img);
    const el = highlightRefs.current[idx];
    if (el) {
      gsap.killTweensOf(el);
      gsap.fromTo(
        el,
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
      );
    }
  };

  const onLeave = (idx) => {
    const el = highlightRefs.current[idx];
    if (el) {
      gsap.killTweensOf(el);
      gsap.to(el, { opacity: 0, y: 6, duration: 0.2, ease: "power2.out" });
    }
  };

  return (
    <section ref={wrapRef} className="relative w-full">
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={backLayerRef}
          className="absolute inset-0 opacity-0"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            willChange: "opacity, transform",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            backgroundColor: "rgba(0,0,0,0.25)",
          }}
        />
        <div
          ref={frontLayerRef}
          className="absolute inset-0"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            willChange: "opacity, transform",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            backgroundColor: "rgba(0,0,0,0.25)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        <div className="absolute inset-0 [background:radial-gradient(1200px_600px_at_50%_50%,transparent,rgba(0,0,0,0.35))]" />
      </div>

      {/* Content grid */}
      <div className="relative w-full min-h-[70vh] md:min-h-[80vh]">
        <div className="grid grid-cols-1 md:grid-cols-3 h-full w-full">
          {PANELS.map((p, idx) => (
            <div
              key={p.title}
              className="tp-panel group relative flex min-h-[22vh] md:min-h-[80vh] cursor-pointer select-none"
              onPointerEnter={() => onEnter(idx)}
              onPointerLeave={() => onLeave(idx)}
              onFocus={() => onEnter(idx)}
              onBlur={() => onLeave(idx)}
              tabIndex={0}
              role="button"
              aria-label={`Activate ${p.title}`}
            >
              {idx !== 0 && (
                <div className="tp-gridline absolute left-0 top-0 h-full w-px bg-white/20" />
              )}
              <div
                ref={(el) => {
                  highlightRefs.current[idx] = el;
                }}
                className="pointer-events-none absolute inset-0 opacity-0"
              >
                <div className="absolute inset-0 bg-white/8" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/10 to-transparent" />
              </div>
              <div className="mt-auto w-full p-6 md:p-8">
                <div className="tp-text">
                  <h3 className="mt-2 text-white text-2xl md:text-3xl font-semibold leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-white/85 text-sm md:text-base max-w-[40ch]">
                    {p.subtitle}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-md text-sm font-semibold transition-all duration-200 group"
                    >
                      <span>{p.cta}</span>
                      <span className="h-4 w-4 inline-block transition-transform duration-200 group-hover:translate-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h14M12 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:hidden absolute bottom-0 left-0 right-0 h-px bg-white/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
