"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const PANELS = [
  {
    title: "Strict Selection",
    subtitle:
      "Thorough examination of every application by specialists. Registered organization is live with us implies it has gone through with severe determination process.",
    img: "/conference_opportunities/Strict_Selection.png",
    icon: "/conference_opportunities/STRICT SELECTION_icon.png",
  },
  {
    title: "Reference Checks",
    subtitle:
      "We connect with confided in contacts for bits of knowledge on your organization before go live with your profile.",
    img: "/conference_opportunities/REFERENCE%20CHECKS.png",
    icon: "/conference_opportunities/Reference-Check_Icon.png",
  },
  {
    title: "Financial Checks",
    subtitle:
      "A strong trust scan of each members profile to ensure it's risk free and good fit. Each approved members profile audited with D-U-N-S as well.",
    img: "/conference_opportunities/FINANCIAL%20CHECKS.png",
    icon: "/conference_opportunities/Financial_Check_Icon.png",
  },
  {
    title: "Approval & Conclusion",
    subtitle:
      "A final report for decision making of your application approval to onboard you to the new year of business networking.",
    img: "/conference_opportunities/APPROVALS%20CONCLUSION.png",
    icon: "/conference_opportunities/Approval-&-Conclusion_Icon.png",
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
  const subtitleRefs = useRef([]);
  const groupRefs = useRef([]);

  // Preload background images
  useEffect(() => {
    PANELS.forEach((p) => {
      if (typeof window !== "undefined") {
        const img = document.createElement("img");
        img.decoding = "async";
        img.loading = "eager";
        img.src = p.img;
      }
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
    // Animate group and subtitle
    const groupEl = groupRefs.current[idx];
    const subtitleEl = subtitleRefs.current[idx];
    if (groupEl && subtitleEl) {
      gsap.killTweensOf([groupEl, subtitleEl]);
      // Show subtitle
      gsap.set(subtitleEl, { display: "block" });
      // Measure subtitle height
      const subtitleHeight = subtitleEl.scrollHeight;
      // Animate group up by subtitle height
      gsap.to(groupEl, {
        y: -subtitleHeight,
        duration: 0.3,
        ease: "power2.out",
      });
      // Animate subtitle in
      gsap.fromTo(
        subtitleEl,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  const onLeave = (idx) => {
    const el = highlightRefs.current[idx];
    if (el) {
      gsap.killTweensOf(el);
      gsap.to(el, { opacity: 0, y: 6, duration: 0.2, ease: "power2.out" });
    }
    // Animate group and subtitle out
    const groupEl = groupRefs.current[idx];
    const subtitleEl = subtitleRefs.current[idx];
    if (groupEl && subtitleEl) {
      gsap.killTweensOf([groupEl, subtitleEl]);
      // Animate group back down
      gsap.to(groupEl, { y: 0, duration: 0.3, ease: "power2.out" });
      // Animate subtitle out
      gsap.to(subtitleEl, {
        opacity: 0,
        y: 20,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(subtitleEl, { display: "none" });
        },
      });
    }
  };

  return (
    <section ref={wrapRef} className="relative h-[80vh] w-full">
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
      <div className="relative w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full w-full">
          {PANELS.map((p, idx) => (
            <div
              key={p.title}
              className="tp-panel group relative flex h-full cursor-pointer select-none overflow-hidden"
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
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/10 to-transparent" />
              </div>
              {/* Content container */}
              <div className="flex flex-col h-full w-full">
                <div className="relative h-full w-full">
                  {/* Group for icon and title, absolutely positioned at the bottom */}
                  <div
                    ref={(el) => (groupRefs.current[idx] = el)}
                    className="absolute bottom-0 left-0 right-0 flex flex-row items-center text-start p-6 transform"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 mr-3">
                      <div className="relative w-full h-full">
                        <Image
                          src={p.icon}
                          alt={p.title}
                          fill
                          className="object-contain opacity-90"
                        />
                      </div>
                    </div>
                    <h3 className="text-white text-xl md:text-2xl font-semibold leading-tight">
                      {p.title}
                    </h3>
                  </div>
                  {/* Subtitle with GSAP animation, absolutely positioned below the group */}
                  <div
                    ref={(el) => (subtitleRefs.current[idx] = el)}
                    className="absolute bottom-0 left-0 right-0 opacity-0 p-6 pt-0 transform"
                    style={{ display: "none" }}
                  >
                    <p className="text-white/85 text-sm md:text-base leading-relaxed">
                      {p.subtitle}
                    </p>
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
