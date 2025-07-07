"use client";
import React, { useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/react.jpg",
    alt: "slide 1",
  },
  {
    src: "/images/vue.jpg",
    alt: "slide 2",
  },
  {
    src: "/images/angular.jpg",
    alt: "slide 3",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };
  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full relative h-[300px] md:h-[500px]"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
      >
        ▶
      </button>
    </div>
  );
};

export default Carousel;
