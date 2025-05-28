"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Partner from "@/app/images/partners.jpg";
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
    text: "Since joining BNG, we've gained access to reliable partners in regions we previously struggled to penetrate. It's been a game-changer!",
    imageUrl: rekha,
  },
  {
    name: "Gurbeer Singh Sethi",
    email: "Radius Logistics Pvt. Ltd.",
    text: "The connections we've made through BNG have directly resulted in new business opportunities and stronger customer service across our operations.",
    imageUrl: gurbeer,
  },
  {
    name: "Sudershan Sharma",
    email: "Unique Logistics India Pvt. Ltd.",
    text: "BNG has been instrumental in helping us expand internationally. The network's support and collaboration are simply outstanding.",
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
      className="relative -top-10 lg:-top-44 z-30 bg-secondryBg bg-gradient-to-b from-purple-50 to-white"
      style={{
        backgroundImage: `url(${Vector.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
    >
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 lg:translate-y-[20px] lg:translate-x-[150px]">
          {/* Partners Section */}
          <div className="w-full lg:w-1/2 relative h-auto lg:h-[600px] flex flex-col items-center lg:items-start justify-center mt-[2rem] lg:mt-[10rem]">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 m-2 md:mx-0 md:my-12">
              {partnerLogos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[135px] lg:h-[135px] hover:border-2 hover:border-gray-300 rounded-full transition duration-300 ease-in-out"
                />
              ))}
            </div>
            <div className="relative w-full max-w-[800px] mt-8 lg:mt-0">
              <h2 className="text-3xl md:text-4xl lg:text-[55px] font-bold lg:mb-8 text-gray-900 text-center lg:text-left my-4 relative z-10">
                Accredited <span className="text-primary">Excellence</span>
              </h2>
              <p className="text-sm md:text-base text-justify text-gray-500 px-4 lg:px-0">
                Our partners are selected for their strong local presence and established expertise in cargo operations, ensuring reliability. They undergo thorough screenings for service quality, compliance, and financial stability, which guarantees that we collaborate with only the best in the industry.
              </p>
              <h2
                className="absolute hidden lg:block text-left -top-10 -left-[120px] text-[80px] w-full font-bold text-[#27293B] opacity-[3%] leading-none z-2"
                aria-hidden="true">
                Accredited Excellence
              </h2>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="w-full lg:w-1/2 h-auto mt-8 lg:mt-0">
            <div className="relative px-4 lg:px-0">
              <h2 className="text-3xl md:text-4xl lg:text-[55px] lg:mr-36 font-bold text-primary mb-6 lg:mb-10 text-center  mt-4 lg:mt-10 relative z-10">
                Testimonials
              </h2>
              <h2
                className="absolute hidden lg:block max-w-[3vw] text-left top-[-43px] -left-[77px] lg:-top-[56px] lg:left-[15%] text-[80px] md:w-full font-bold text-[#27293B] opacity-[3%] leading-none z-2"
                aria-hidden="true">
                Testimonials
              </h2>
            </div>
            <div className="px-4 lg:px-0 lg:mr-28" >
              <Swiper
                modules={[Autoplay, EffectFade]}
                direction="vertical"
                slidesPerView={1}
                spaceBetween={30}
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
                    <div className="p-1 lg:p-8 relative lg:-left-4 mt-4 lg:mt-11">
                      <div className="bg-gradient-to-br from-sky-50 to-sky-50 shadow-lg rounded-xl pb-6 pt-6 pl-6 pr-6 lg:pb-10 lg:pt-10 lg:pl-8 lg:pr-8 w-full lg:max-w-[590px]">
                        <div className="space-y-4 lg:space-y-6">
                          <p className="text-gray-500 text-lg md:text-xl lg:text-[26px]">
                            <strong>“ </strong> {testimonial.text} <strong>„</strong>
                          </p>
                          <div className="flex items-center gap-4">
                            <Image
                              src={testimonial.imageUrl}
                              alt={testimonial.name}
                              width={25}
                              height={25}
                              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full mt-12 lg:mt-20"
                            />
                            <div className="mt-6 lg:mt-20">
                              <h4 className="font-semibold capitalize text-lg lg:text-2xl text-gray-700">
                                {testimonial.name}
                              </h4>
                              <p className="text-primary capitalize text-lg lg:text-2xl">
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
        </div>
        <div>
          <div className="absolute bg-gradient-to-r from-[#eef6ff] to-[#eef6ff] -bottom-10 lg:-bottom-44 right-0 w-full h-[60px] lg:h-[300px] -z-40"></div>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-swiper {
          height: 300px !important;
          width: 100%;
        }
        @media (min-width: 1024px) {
          .testimonial-swiper {
            height: 400px !important;
          }
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
      `}</style>
    </section>
  );
};

export default TestimonialSlider;