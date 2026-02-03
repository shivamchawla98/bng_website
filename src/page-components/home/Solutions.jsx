"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { Quote } from "lucide-react";
import "swiper/css";

// Image and logo imports
import grid1 from "../../../public/why_us/Marketing & PR.jpg";
import grid2 from "../../../public/why_us/support 247.jpg";
import grid3 from "../../../public/why_us/Annual_Meeting.jpg";
import grid4 from "../../../public/why_us/Trade_Directory.jpg";
import grid5 from "../../../public/why_us/Advanced_Tools.jpg";
import grid7 from "../../../public/why_us/Live_Talk.jpg";
import grid8 from "../../../public/why_us/Industry_Survey.jpg";
import grid9 from "../../../public/why_us/Strict_Selection.jpg";
import c1 from "../../../public/why_us/why_us_new/1.png";
import c2 from "../../../public/why_us/why_us_new/2.png";
import c3 from "../../../public/why_us/why_us_new/3.png";
import c4 from "../../../public/why_us/why_us_new/4.png";
import c5 from "../../../public/why_us/why_us_new/5.png";
import c6 from "../../../public/why_us/why_us_new/6.png";
import c7 from "../../../public/why_us/why_us_new/7.png";
import c8 from "../../../public/why_us/why_us_new/8.png";

// Replace testImage with the new image URL
const newFirstSlideImage =
  "https://i.pinimg.com/736x/55/a4/3f/55a43f1fc71273b7f5a02d702d286c42.jpg";

import logo1 from "../../../public/why_us/logo/01_marketing.png";
import logo2 from "../../../public/why_us/logo/02_24x7.png";
import logo3 from "../../../public/why_us/logo/03_annual_meetings.png";
import logo4 from "../../../public/why_us/logo/04_trade_directory.png";
import logo5 from "../../../public/why_us/logo/05_advance-tools.png";
import logo7 from "../../../public/why_us/logo/06_Live_talk.png";
import logo8 from "../../../public/why_us/logo/07_industry_survey.png";

import graylogo1 from "../../../public/why_us/logo/01_marketing.png";
import graylogo2 from "../../../public/why_us/logo/02_24x7.png";
import graylogo3 from "../../../public/why_us/logo/03_annual_meetings.png";
import graylogo4 from "../../../public/why_us/logo/04_trade_directory.png";
import graylogo5 from "../../../public/why_us/logo/05_advance-tools.png";
import graylogo7 from "../../../public/why_us/logo/06_Live_talk.png";
import graylogo8 from "../../../public/why_us/logo/07_industry_survey.png";
import grayselection from "../../../public/why_us/logo/08_sellection_process.png";

import selection from "../../../public/why_us/logo/08_sellection_process.png";

const slides = [
  {
    title: "Built for the Top 1%",
    image: c1,
    text: "BNG is intentionally selective. Limited members per country ensure serious partnerships, not overcrowded competition.",
    logo: logo1,
    activeLogo: graylogo1,
  },
  {
    title: "Real Business, Not Noise",
    image: c2,
    text: "Our proprietary Business Xchange and Freight Xchange connect members through structured shipment queries and published trade-lane rates—focused on conversions, not mass lead sharing.",
    logo: logo2,
    activeLogo: graylogo2,
  },
  {
    title: "Trust-First Network",
    image: c3,
    text: "Each Elite member benefits from USD 50,000 payment protection, creating confidence to trade and collaborate globally.",
    logo: logo3,
    activeLogo: graylogo3,
  },
  {
    title: "Quality Over Quantity",
    image: c6,
    text: "Every member is vetted. No open access. No dilution. BNG grows with intent, protecting the value of every connection.",
    logo: logo4,
    activeLogo: graylogo4,
  },
  {
    title: "Powerful Member Visibility",
    image: c5,
    text: "Members get premium company profiles, prioritized directory placement, and visibility at global exhibitions—without extra cost.",
    logo: logo5,
    activeLogo: graylogo5,
  },
  {
    title: "Country-Level Exclusivity",
    image: c4,
    text: "Limited representation per country ensures members aren't competing internally for the same business.",
    logo: logo7,
    activeLogo: graylogo7,
  },
  {
    title: "Human Support That Delivers",
    image: c7,
    text: "Award-winning, 5-star member support with dedicated relationship managers—not automated ticket systems.",
    logo: logo8,
    activeLogo: graylogo8,
  },
  {
    title: "Global Collaboration",
    image: c8,
    text: "BNG is designed to promote cooperation, long-term partnerships, and trust—eliminating destructive price wars common in large networks.",
    logo: selection,
    activeLogo: grayselection,
  },
];

export default function TwigOfferSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSidebarClick = (index) => {
    setActiveIndex(index);
    swiperRef.current?.slideTo(index);
  };

  return (
    <section className="bg-[#EFF6FF] py-16 lg:py-24 relative">
      <div className="container relative mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl lg:text-[55px] font-bold text-gray-900 mb-4">
            Why <span className="text-primary"> BNG? </span>
          </h2>
          <h2
            className="absolute top-[-34px] lg:top-[-60px] left-0 lg:left-[0%] text-center w-full text-[40px]  lg:text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-0"
            aria-hidden="true"
          >
            Why BNG?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A curated network designed to protect value and deliver real business
          </p>
        </div>

        <div className="flex flex-col-reverse w-full mx-auto bg-transparent lg:w-10/12 lg:flex-row shadow-slate-700 shadow-2xl h-[558px]">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/3 flex flex-col h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                onClick={() => handleSidebarClick(index)}
                className={`cursor-pointer p-2 sm:p-2.5 flex justify-start items-center text-base sm:text-lg lg:text-xl border-b-2 transition-all duration-200 hover:bg-[#EFF6FF] font-medium ${
                  index === slides.length - 1 ? "flex-grow" : ""
                } ${
                  activeIndex === index
                    ? "bg-white border-[#5216AB] text-2xl border-b-2 text-[#5216AB] font-"
                    : "bg-white text-gray-900 border-gray-300"
                }`}
              >
                {activeIndex === index ? (
                  <Image
                    src={slide.logo}
                    alt="logo"
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-5 p-1"
                  />
                ) : (
                  <Image
                    src={slide.activeLogo}
                    alt="logo"
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-5 p-1"
                  />
                )}
                <span className="truncate">{slide.title}</span>
              </div>
            ))}
          </div>

          {/* Swiper Slider - Fixed image positioning */}
          <div className="lg:w-2/3 relative overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              spaceBetween={0}
              slidesPerView={1}
              className="w-full h-full"
            >
              {slides.map((slide, idx) => (
                <SwiperSlide key={idx} className="h-full">
                  <div className="relative h-full w-full">
                    {/* Image Container - Full width and height */}
                    <div className="absolute inset-0 w-full h-full z-0">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority
                        className="object-cover"
                        style={{
                          objectPosition: "left center",
                        }}
                        // sizes="66.67vw"
                      />
                    </div>

                    {/* Text Container - Positioned on Right Side with overlay */}
                    <div className="absolute right-0 top-0 w-1/2 h-full flex items-start justify-end p-8 z-10 bg-gradient-to-l from-white/90 to-transparent">
                      <div className="w-full max-w-md">
                        <div className="text-[#6853DB] mb-2">
                          <Quote size={24} />
                        </div>

                        <p className="text-sm lg:text-xl font-medium text-gray-600 max-w-md sm:max-w-lg lg:max-w-xl inline">
                          {slide.text}
                          <Quote
                            size={24}
                            color="#6853DB"
                            className="inline ml-2"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
