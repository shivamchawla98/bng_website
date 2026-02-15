"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const VerticalCarousel = ({ children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      axis: "y",
      slidesToScroll: 1,
      loop: true,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })] // Prevent stopping on interaction
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="flex">
      {/* Dot Navigation */}
      <div className="flex flex-col justify-center items-center mr-4 space-y-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-[6px] h-[6px] rounded-full ${
              index === selectedIndex ? "bg-violet-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Carousel */}
      <div className="embla overflow-hidden h-[300px] md:h-[400px] flex-1" ref={emblaRef}>
        <div className="embla__container flex flex-col gap-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default VerticalCarousel;
