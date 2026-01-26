"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import rekha from "../../../public/testimonials/REKHA.jpeg";
import gurbeer from "../../../public/testimonials/Gurbeer.png";
import sudarshan from "../../../public/testimonials/sudershan sharma.png";
import Sabrina from "../../../public/testimonials/SABRINA.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Rekha",
    title: "Force Logistics Pvt. Ltd.",
    text: "Truly outstanding service! The team exceeded our expectations with their professionalism, creativity, and quick turnaround time. Highly recommended for anyone seeking quality and reliability.",
    imageUrl: rekha,
    rating: 5,
  },
  {
    name: "Gurbeer Singh Sethi",
    title: "Radius Logistics Pvt. Ltd.",
    text: "The connections we've made through BNG have directly resulted in new business opportunities and stronger customer service across our operations.",
    imageUrl: gurbeer,
    rating: 5,
  },
  {
    name: "Sudershan Sharma",
    title: "Unique Logistics India Pvt. Ltd.",
    text: "BNG has been instrumental in helping us expand internationally. The network's support and collaboration are simply outstanding.",
    imageUrl: sudarshan,
    rating: 5,
  },
  {
    name: "Sabrina",
    title: "Super Link Logistics Ltd.",
    text: "The events and tools BNG provides are unmatched—our team feels more connected and equipped to handle global challenges.",
    imageUrl: Sabrina,
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#1a1f3a] via-[#2d1f4a] to-[#1a1f3a] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-indigo-300 text-base font-medium mb-3">• Testimonials</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            What our customers say about their experience
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Fixed Left Card */}
          <div className="bg-gradient-to-br from-[#6853DB] to-[#7B66E3] rounded-2xl p-8 flex flex-col justify-between h-[400px]">
            {/* Avatar Group */}
            <div className="flex -space-x-4 mb-6">
              {testimonials.slice(0, 3).map((testimonial, idx) => (
                <div key={idx} className="relative w-16 h-16 rounded-full border-4 border-white overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <p className="text-white/90 text-base lg:text-lg mb-4">
                Over 15,000+ Attendees Connected Worldwide
              </p>
              <h3 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
                Client Experience Speak For Themselves
              </h3>
            </div>
          </div>

          {/* Sliding Testimonial Cards */}
          <div className="lg:col-span-2">
            <Swiper
              modules={[Autoplay, Navigation]}
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={800}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              className="testimonials-slider h-full"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="h-full">
                  <div className="bg-[#27293B] rounded-2xl p-6 flex flex-col h-[400px]">
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-6 flex-1">
                      "{testimonial.text}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <Image
                          src={testimonial.imageUrl}
                          alt={testimonial.name}
                          width={56}
                          height={56}
                          className="rounded-full w-14 h-14 object-cover"
                        />
                        <div>
                          <h4 className="text-white font-semibold text-base">
                            {testimonial.name}
                          </h4>
                          <p className="text-white/60 text-sm">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-[#6853DB]/30" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-slider {
          padding-bottom: 20px;
        }
        .testimonials-slider .swiper-slide {
          height: auto;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
