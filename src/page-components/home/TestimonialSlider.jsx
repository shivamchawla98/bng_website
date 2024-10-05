"use client";
import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Chanchal",
    email: "chanchal@gmail.com",
    text: "We have been in Parimity for a few years and have developed strong relations. They have been doing great things in the freight forwarding networking industry. Keep up with the good work!",
  },
  {
    name: "Bonnie Green",
    email: "bonnie@gmail.com",
    text: "Parimity has transformed the freight forwarding industry with their innovative solutions. We've seen a major difference in our operations.",
  },
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    text: "Amazing experience with the Parimity platform, it has made our job much easier and more efficient!",
  },
  {
    name: "Jane Smith",
    email: "janesmith@gmail.com",
    text: "The Parimity network has been a game-changer for us. Highly recommend!",
  },
  {
    name: "Samuel Jackson",
    email: "samuelj@gmail.com",
    text: "Fantastic customer service and excellent platform. It's an essential tool for us now.",
  },
  {
    name: "Alex Turner",
    email: "alexturner@gmail.com",
    text: "Great platform for managing freight forwarding tasks!",
  },
];

const getHeight = (index) => {
  const heights = [400, 800, 500, 950, 300, 750];
  return heights[index % heights.length];
};

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 500,
    cssEase: "linear",
    vertical: true,
    pauseOnHover: true,
    arrows: false,
  };

  const mobileSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1.2, // Show part of next slide
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    vertical: false,
    arrows: false,
    centerMode: false,
  };

  return (
    <div className="relative py-14 md:px-[80px] bg-white">
  
      <div className="flex flex-col md:grid md:grid-cols-3 gap-8 bg-gray-50 shadow-md rounded-xl p-6">
        {/* Left Side - Text Section */}
        <div className="col-span-1 flex flex-col justify-center items-start space-y-4">
          <h2 className="text-3xl font-bold text-primary">
            What Our Clients Say
          </h2>
          <p className="text-gray-600">
            Hear from our satisfied customers about their experiences with our
            platform. Their feedback inspires us to continue providing the best
            service possible!
          </p>
        </div>

        <div className="block md:hidden w-full overflow-hidden px-4">
          <div className="h-[300px]">
            <Slider {...mobileSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-2">
                  <div className="card relative bg-white shadow-lg rounded-xl p-4 max-h-[250px] min-h-[250px] overflow-y-auto">
                    <h4 className="text-lg font-semibold text-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 mb-4">{testimonial.text}</p>
                    <div className="text-gray-400">{testimonial.email}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Desktop Sliders - Hidden on mobile */}
        <div className="hidden col-span-1 md:col-span-2 md:grid grid-cols-1 md:grid-cols-2 gap-4 md:overflow-y-scroll h-[400px]">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card w-full bg-white shadow-lg rounded-xl mt-2 p-4"
                style={{ minHeight: getHeight(index) }}
              >
                <h4 className="text-lg font-semibold text-primary">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 mb-4">{testimonial.text}</p>
                <div className="text-gray-400">{testimonial.email}</div>
              </div>
            ))}
          </Slider>
          <div className="hidden md:block">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="card bg-white shadow-lg rounded-xl mt-2 p-4"
                  style={{ minHeight: getHeight(index) + "px" }}
                >
                  <h4 className="text-lg font-semibold text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 mb-4">{testimonial.text}</p>
                  <div className="text-gray-400">{testimonial.email}</div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Add custom styles for mobile slider */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .slick-track {
            display: flex !important;
            align-items: center !important;
          }
          .slick-slide > div {
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;
