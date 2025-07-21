"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "https://i.ibb.co/4RYLzmJ4/project-sailor-home-page033.jpg",
  "https://i.ibb.co/qZYTkTD/project-sailor-home-page029.jpg",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(timer); // Cleanup
  }, []);

  return (
    <div className="relative w-full h-[450px] overflow-hidden ">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
