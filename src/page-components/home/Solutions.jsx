"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

import grid1 from "../../../public/why_us/Marketing & PR.png";
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
import selection from "../../../public/why_us/logo/08_sellection_process.png";

const slides = [
  {
    title: "Marketing & PR",
    image: grid1,
    text: "Expand your business visibility not only within the network but also on a global B2B portal—all included at no extra cost.",
    logo: logo1,
  },
  {
    title: "24/7 Support",
    image: grid2,
    text: "Our dedicated support team is available 24/7, 365 days a year. Reach out anytime—by call, message, or email—wherever you are in the world.",
    logo: logo2,
  },
  {
    title: "Annual Meetings",
    image: grid3,
    text: "Attend our grand symposium to meet partners and clients in person, fostering strong connections and increasing your visibility within the industry.",
    logo: logo3,
  },
  {
    title: "Trade Directory",
    image: grid4,
    text: "Access a fully digital directory of global exporters, importers, and logistics professionals, connecting you instantly with key players worldwide.",
    logo: logo4,
  },
  {
    title: "Advanced Tools",
    image: grid5,
    text: "Our technology-centered platform provides essential tools in one place, maximizing the benefits of your membership.",
    logo: logo5,
  },
  {
    title: "Live Talk",
    image: grid7,
    text: "Engage in virtual meetings on a platform that connects you to thousands of industry professionals worldwide, 24/7. Network, collaborate, and grow your business with ease.",
    logo: logo7,
  },
  {
    title: "Industry Surveys",
    image: grid8,
    text: "Receive valuable insights from network surveys that keep you informed about market trends and industry benchmarks, helping you stay competitive and informed.",
    logo: logo8,
  },
  {
    title: "Strict Selection Process",
    image: grid9,
    text: "BNG ensures that only reliable and trustworthy companies join the network through a rigorous selection process.",
    logo: selection,
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
    <section className="bg-secondryBg mt-8 py-14 lg:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
        <h2 className="text-[55px] font-bold  text-[#27293B] text-center mb-12 relative z-10">
            Why <span className="text-primary">Us ?</span>
          </h2>
          <h2
            className="absolute text-center top-[-60px] md:top-[60px] md:left-[41%] text-[80px] font-bold text-[#27293B] opacity-[3%] leading-none z-2"
            aria-hidden="true">
            Why Us ?
          </h2>
    
        </div>

        <div className="flex flex-col w-full mx-auto bg-transparent lg:w-10/12 lg:flex-row shadow-slate-700 shadow-2xl rounded-lg">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/3  ">
            {slides.map((slide, index) => (
              <div
                key={index}
                onClick={() => handleSidebarClick(index)}
                className={`cursor-pointer p-5  text-xl border-b-2 transition-all duration-200 hover:bg-[#EFF6FF] font-medium ${
                  index === 0
                    ? "rounded-tl-lg  " : index === slides.length - 1 ? "rounded-bl-lg " : "rounded-tr-none rounded-br-none"
                } ${
                  activeIndex === index
                    ? "bg-[#EFF6FF] border-[#89bcff] text-[#5216ab]"
                    : "bg-white text-gray-800 border-gray-300"
                }`}
              >
                {slide.title}
              </div>
            ))}
          </div>

          {/* Swiper Slider */}
          <div className="lg:w-2/3">
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
                  <div className="relative h-[400px] md:h-[558px] w-full rounded-tr-lg rounded-br-lg overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0  z-10"></div>
                    <div className="absolute  bottom-0 p-6 text-white w-full z-20">
                      <div className="flex items-center gap-3 mb-3">
                        <Image
                          src={slide.logo}
                          alt="logo"
                         sizes={8}
                          className="  w-24 h-24 rounded-tr-lg rounded-br-lg  p-1"
                        />
                        <h3 className="text-3xl text-primary font-semibold ">
                          {slide.title}
                        </h3>
                      </div>
                      <p className="text-2xl font-semibold text-gray-400 max-w-xl">
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
