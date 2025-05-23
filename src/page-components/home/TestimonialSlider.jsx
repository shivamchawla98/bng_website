"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Vector from "@/app/images/Vector5.svg";
import LOGO1 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-01.png";
import LOGO2 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-02.png";
import LOGO3 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-03.png";
import LOGO4 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-04.png";
import LOGO5 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-05.png";
import LOGO6 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-06.png";
import LOGO7 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-07.png";
import LOGO8 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-08.png";
import LOGO9 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-09.png";
import LOGO10 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-10.png";
import LOGO11 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-11.png";
import LOGO12 from "../../../public/MEMBER'S ACCREDIATIONS/testimonial_section_logos/MEMBERS ACCREDIATIONS-12.png";
import rekha from "../../../public/testimonials/REKHA.jpeg";
import gurbeer from "../../../public/testimonials/Gurbeer.png";
import sudarshan from "../../../public/testimonials/sudershan sharma.png";
import Sabrina from "../../../public/testimonials/SABRINA.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const testimonials = [
  {
    name: "Rekha",
    email: "Force Logistics Pvt. Ltd.",
    text: "Since joining BNG, we've gained access to reliable partners in regions we previously struggled to penetrate. It’s been a game-changer!",
    imageUrl: rekha,
  },
  {
    name: "Gurbeer Singh Sethi",
    email: "Radius Logistics Pvt. Ltd.",
    text: "The connections we’ve made through BNG have directly resulted in new business opportunities and stronger customer service across our operations.",
    imageUrl: gurbeer,
  },
  {
    name: "Sudershan Sharma",
    email: "Unique Logistics India Pvt. Ltd.",
    text: "BNG has been instrumental in helping us expand internationally. The network’s support and collaboration are simply outstanding.",
    imageUrl: sudarshan,
  },
  {
    name: "Sabrina",
    email: "Super Link Logistics Ltd.",
    text: "The events and tools BNG provides are unmatched—our team feels more connected and equipped to handle global challenges.",
    imageUrl: Sabrina,
  },
];

const partnerLogos = [
  LOGO5, LOGO6, LOGO7, LOGO8, LOGO1, LOGO2, LOGO3, LOGO4,
  LOGO9, LOGO10, LOGO11, LOGO12
];

const TestimonialSlider = () => {
  return (
    <section
      className="relative lg:-top-44 z-30 bg-secondryBg bg-gradient-to-b from-purple-50 to-white"
      style={{
        backgroundImage: `url(${Vector.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
    >
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 w-full flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-8 translate-y-[20px] md:translate-x-[150px]">
        {/* Partner Logos and Text Section */}
        <div className="w-full lg:w-1/2 relative flex flex-col items-center lg:items-start justify-center">
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-12 m-2 sm:m-4 lg:m-2 lg:my-12">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center transform transition-all duration-500 hover:scale-105"
                style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
              >
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="w-28 h-28 sm:w-28 sm:h-28 lg:w-[135px] lg:h-[135px] rounded-full hover:border-2 hover:border-gray-300 transition duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
          <div className="relative w-full max-w-[800px] mt-6 sm:mt-8 lg:mt-0">
            <h2 className="text-3xl sm:text-4xl lg:text-[55px] font-bold text-gray-900 text-center lg:text-left my-4 relative z-10">
              Accredited <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-base text-justify text-gray-500">
              Our partners are selected for their strong local presence and established expertise in cargo operations, ensuring reliability. They undergo thorough screenings for service quality, compliance, and financial stability, which guarantees that we collaborate with only the best in the industry.
            </p>
            <h2
              className="absolute text-center lg:text-left -top-6 sm:-top-8 lg:-top-10 -left-4 sm:-left-8 lg:-left-[120px] text-5xl sm:text-6xl lg:text-[80px] w-full font-bold text-[#27293B] opacity-[3%] leading-none z-0"
              aria-hidden="true"
            >
              Accredited Excellence
            </h2>
          </div>
        </div>

        {/* Testimonial Slider Section */}
        <div className="w-full lg:w-1/2 h-auto">
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-[55px] font-bold text-primary mb-6 sm:mb-8 lg:mb-10 text-center lg:text-left relative z-10">
              Testimonials
            </h2>
            <h2
              className="absolute text-center lg:text-left top-[-20px] sm:top-[-24px] lg:top-[-43px] -left-4 sm:-left-8 lg:-left-[77px] text-5xl sm:text-6xl lg:text-[80px] w-full font-bold text-[#27293B] opacity-[3%] leading-none z-0"
              aria-hidden="true"
            >
              Testimonials
            </h2>
          </div>
          <Swiper
            modules={[Autoplay, EffectFade]}
            direction="horizontal"
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="p-4 sm:p-6">
                  <div
                    className="bg-gradient-to-br from-sky-50 to-sky-50 shadow-lg rounded-xl p-6 sm:p-8 max-w-[90%] sm:max-w-[400px] lg:max-w-[590px] mx-auto transform transition-all duration-500 hover:shadow-xl"
                    style={{ animation: `slideInRight 0.5s ease-out ${index * 0.1}s both` }}
                  >
                    <div className="space-y-4 sm:space-y-6">
                      <p className="text-gray-500 text-base sm:text-lg lg:text-[26px]">
                        <strong>“ </strong> {testimonial.text} <strong>„</strong>
                      </p>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <Image
                          src={testimonial.imageUrl}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full"
                        />
                        <div>
                          <h4 className="font-semibold capitalize text-base sm:text-lg lg:text-2xl text-gray-700">
                            {testimonial.name}
                          </h4>
                          <p className="text-primary capitalize text-sm sm:text-base lg:text-2xl">
                            {testimonial.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div
        className="absolute lg:bg-gradient-to-r from-[#eef6ff] to-[#eef6ff] -bottom-44 right-0 w-full h-[300px] -z-40"
      ></div>

      <style jsx global>{`
        .testimonial-swiper {
          height: 300px !important;
          width: 100%;
          margin: 0 auto;
        }
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          transition: opacity 0.5s ease, transform 0.5s ease;
          opacity: 0;
        }
        .swiper-slide-active {
          opacity: 1;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider;