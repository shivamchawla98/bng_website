"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

import grid1 from "../../../public/why_us/Marketing & PR.jpg";
import grid2 from "../../../public/why_us/support 247.jpg";
import grid3 from "../../../public/why_us/Annual_Meeting.jpg";
import grid4 from "../../../public/why_us/Trade_Directory.jpg";
import grid5 from "../../../public/why_us/Advanced_Tools.jpg";
import grid7 from "../../../public/why_us/Live_Talk.jpg";
import grid8 from "../../../public/why_us/Industry_Survey.jpg";
import grid9 from "../../../public/why_us/Strict_Selection.jpg";

import logo1 from "../../../public/why_us/logo/01_marketing.png";
import logo2 from "../../../public/why_us/logo/02_24x7.png";
import logo3 from "../../../public/why_us/logo/03_annual_meetings.png";
import logo4 from "../../../public/why_us/logo/04_trade_directory.png";
import logo5 from "../../../public/why_us/logo/05_advance-tools.png";
import logo7 from "../../../public/why_us/logo/06_Live_talk.png";
import logo8 from "../../../public/why_us/logo/07_industry_survey.png";

import graylogo1 from "../../../public/why_us/refortesting/01_marketing_gray.png";
import graylogo2 from "../../../public/why_us/refortesting/02_24x7_gray.png";
import graylogo3 from "../../../public/why_us/refortesting/03_annual_meeting_grays.png";
import graylogo4 from "../../../public/why_us/refortesting/04_trade_directory_gray.png";
import graylogo5 from "../../../public/why_us/refortesting/05_advance-tools_gray.png";
import graylogo7 from "../../../public/why_us/refortesting/06_Live_talk_gray.png";
import graylogo8 from "../../../public/why_us/refortesting/07_industry_survey_gray.png";
import grayselection from "../../../public/why_us/refortesting/08_sellection_process_gray.png";

import selection from "../../../public/why_us/logo/08_sellection_process.png";
import testImage from "../../../public/conference.webp";

const slides = [
  {
    title: "Marketing & PR",
    image: testImage,
    text: "Expand your business visibility not only within the network but also on a global B2B portal—all included at no extra cost.",
    logo: logo1,
    activeLogo: graylogo1,
  },
  {
    title: "24/7 Support",
    image: grid2,
    text: "Our dedicated support team is available 24/7, 365 days a year. Reach out anytime—by call, message, or email—wherever you are in the world.",
    logo: logo2,
    activeLogo: graylogo2,
  },
  {
    title: "Annual Meetings",
    image: grid3,
    text: "Attend our grand symposium to meet partners and clients in person, fostering strong connections and increasing your visibility within the industry.",
    logo: logo3,
    activeLogo: graylogo3,
  },
  {
    title: "Trade Directory",
    image: grid4,
    text: "Access a fully digital directory of global exporters, importers, and logistics professionals, connecting you instantly with key players worldwide.",
    logo: logo4,
    activeLogo: graylogo4,
  },
  {
    title: "Advanced Tools",
    image: grid5,
    text: "Our technology-centered platform provides essential tools in one place, maximizing the benefits of your membership.",
    logo: logo5,
    activeLogo: graylogo5,
  },
  {
    title: "Live Talk",
    image: grid7,
    text: "Engage in virtual meetings on a platform that connects you to thousands of industry professionals worldwide, 24/7. Network, collaborate, and grow your business with ease.",
    logo: logo7,
    activeLogo: graylogo7,
  },
  {
    title: "Industry Surveys",
    image: grid8,
    text: "Receive valuable insights from network surveys that keep you informed about market trends and industry benchmarks, helping you stay competitive and informed.",
    logo: logo8,
    activeLogo: graylogo8,
  },
  {
    title: "Strict Selection Process",
    image: grid9,
    text: "BNG ensures that only reliable and trustworthy companies join the network through a rigorous selection process.",
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
    <section className="bg-secondryBg mt-8 py-8 sm:py-14 lg:py-24 relative">
      <div className="container relative mx-auto px-4">
        <div className="mb-6 sm:mb-10 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-[55px] font-bold text-[#27293B] mb-6 sm:mb-12 relative z-10">
            Why <span className="text-primary">Us ?</span>
          </h2>
          <h2
            className="absolute text-center top-[-20px] left-24 sm:top-[-10px] md:-top-[50px] md:left-[40%] text-[50px] sm:text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-2"
            aria-hidden="true"
          >
            Why Us ?
          </h2>
        </div>

        <div className="flex  flex-col-reverse w-full mx-auto bg-transparent lg:w-10/12 lg:flex-row shadow-slate-700 shadow-2xl rounded-lg">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/3">
            {slides.map((slide, index) => (
              <div
                key={index}
                onClick={() => handleSidebarClick(index)}
                className={`cursor-pointer p-2 sm:p-2.5 flex justify-start items-center text-base sm:text-lg lg:text-xl border-b-2 transition-all duration-200 hover:bg-[#EFF6FF] font-medium ${
                  index === 0
                    ? "rounded-tl-lg"
                    : index === slides.length - 1
                    ? "rounded-bl-lg lg:rounded-bl-lg"
                    : "rounded-tr-none rounded-br-none"
                } ${
                  activeIndex === index
                    ? "bg-[#EFF6FF] border-primary text-[#5216ab]"
                    : "bg-white text-gray-700 border-gray-300"
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
                {slide.title}
              </div>
            ))}
          </div>

          {/* Swiper Slider */}
          <div className="lg:w-2/3 mt-4 lg:mt-0">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              spaceBetween={30}
              slidesPerView={1}
              className="w-full h-full"
            >
              {slides.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative h-[300px] sm:h-[400px] lg:h-[558px] w-full rounded-tr-lg rounded-br-lg overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority
                        className="object-cover object-center"
                      />
                      <div className="absolute bottom-0 bg-gradient-to-t from-white/100 via-white/90 to-transparent left-0 right-0 h-[80%] pointer-events-none" />
                    </div>
                    <div className="absolute inset-0 z-10"></div>
                    <div className="absolute bottom-4 p-4 sm:p-6 text-white w-full z-20">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <Image
                          src={slide.logo}
                          alt="logo"
                          width={64}
                          height={64}
                          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 p-1"
                        />
                        <h3 className="text-xl sm:text-2xl lg:text-3xl text-primary font-semibold">
                          {slide.title}
                        </h3>
                      </div>
                      <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-400 max-w-md sm:max-w-lg lg:max-w-xl">
                        {slide.text}
                      </p>
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