"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import Flag from 'react-flagkit';

// Import images
import rekha from "../../../public/testimonials/REKHA.jpeg";
import gurbeer from "../../../public/testimonials/Gurbeer.png";
import sudarshan from "../../../public/testimonials/sudershan sharma.png";
import Sabrina from "../../../public/testimonials/SABRINA.png";
import eit from "../../../public/testimonials/8.png";
import Alexandre from "../../../public/testimonials/Alexandre Levy, JOINTS LOGISTICS, BRAZIL.png";
import Allie from "../../../public/testimonials/Allie Nichlos - Victoria Projects, USA.png";
import Anne from "../../../public/testimonials/Anne Candela - ITALFREIGHT, FRANCE.png";
import Karolina from "../../../public/testimonials/Karolina Zarebska , MAG, POLAND.png";
import Radu from "../../../public/testimonials/Mr. Radu Stanciu - Global Go, USA Logistics.png";
import Timo from "../../../public/testimonials/Timo Schrimpf, TS LOGISTIC, GERMANYS, GERMANY.png";
import Virendra from "../../../public/testimonials/Virendra Kothari, GLOBE GROUND, INDIA.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Gurbeer Singh Sethi",
    title: "Radius Logistics Pvt. Ltd.",
    text: "The connections we've made through BNG have directly resulted in new business opportunities and stronger customer service across our operations.",
    imageUrl: gurbeer,
    rating: 5,
    country: "IN",
  },
  {
    name: "Sabrina",
    title: "Super Link Logistics Ltd.",
    text: "The events and tools BNG provides are unmatched—our team feels more connected and equipped to handle global challenges.",
    imageUrl: Sabrina,
    rating: 5,
    country: "CN",
  },
  {
    name: "Alexandre",
    title: "Joints Logistics",
    text: "BNG created an environment where connections felt natural and genuine. From the booth to the after-parties, every interaction was warm, professional, and meaningful. Truly a network built on relationships.",
    imageUrl: Alexandre,
    rating: 5,
    country: "BR",
  },
  {
    name: "Allie",
    title: "Victoria Projects Cargo",
    text: "BNG helped us connect with reliable partners and access competitive freight solutions efficiently. The overall experience strengthened our confidence in building new global relationships.",
    imageUrl: Allie,
    rating: 5,
    country: "US",
  },
  {
    name: "Anne",
    title: "ItalFreight",
    text: "What sets BNG apart is the support-driven approach. The team actively helps members find the right partners and facilitates meaningful connections beyond simple introductions.",
    imageUrl: Anne,
    rating: 5,
    country: "FR",
  },
  {
    name: "Karolina",
    title: "MAG",
    text: "BNG made partner discovery simple and dependable. The team’s involvement during live requirements helped us build trust and move forward with confidence.",
    imageUrl: Karolina,
    rating: 5,
    country: "PL",
  },
  {
    name: "Radu",
    title: "Global Go Logistics LLC",
    text: "BNG offers a structured yet personal way to connect with the right partners. Sharing requirements and engaging with fellow members has been smooth, transparent, and effective.",
    imageUrl: Radu,
    rating: 5,
    country: "US",
  },
  {
    name: "Timo",
    title: "TS Logistics GmbH",
    text: "BNG stands out for the quality of people it brings together. The booth meetings and evening interactions helped build real trust. It’s not just networking—it’s relationship building.",
    imageUrl: Timo,
    rating: 5,
    country: "DE",
  },
  {
    name: "Virendra",
    title: "Globe Ground Shipping",
    text: "The energy around BNG was exceptional. The team, the members, and the informal gatherings made networking effortless. It felt less like an exhibition and more like a trusted business circle.",
    imageUrl: Virendra,
    rating: 5,
    country: "IN",
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#1a1f3a] via-[#2d1f4a] to-[#1a1f3a] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl lg:text-[55px] font-bold text-white mb-4">
            What BNG <span className="text-[#907df3]">Members say</span>
          </h2>
          <h2
            className="absolute top-[-34px] lg:top-[-60px] left-0 lg:left-[0%] text-center w-full text-[40px] lg:text-[80px] font-bold text-[#ffffff] opacity-[5%] leading-none z-0"
            aria-hidden="true"
          >
            What BNG Members say
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Built on trust, proven by members
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {/* Fixed Left Card */}
          <div className="bg-gradient-to-br from-[#6853DB] to-[#7B66E3] rounded-2xl p-8 flex flex-col justify-between h-[400px]">
            <Quote color="white" size='50' />
            <div className="flex flex-col items-center">
              <h3 className="text-white mb-6 text-xl lg:text-2xl font-bold leading-tight">
                Chosen by the world’s top freight forwarders.
              </h3>
              <h3 className="text-white text-xl lg:text-2xl font-bold leading-tight">
                Built on trust, results, and long-term partnerships.
              </h3>
            </div>
            <div className='flex w-full justify-end flex-row'><Quote color="white" size='50' /></div>
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
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-white/80 text-base lg:text-xl leading-relaxed mb-6 flex-1">
                      "{testimonial.text}"
                    </p>
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
                      <div className="text-4xl" title={testimonial.country}>
                        <img
                          src={`https://flagcdn.com/w40/${testimonial.country.toLowerCase()}.png`}
                          alt={testimonial.country}
                          className="w-10 h-7 rounded-sm object-cover"
                        />
                      </div>
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
