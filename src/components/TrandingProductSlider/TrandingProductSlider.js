"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const items = [
  {
    title: "SHIRT",
    image: "/images/shirt.jpg",
  },
  {
    title: "POLO",
    image: "/images/polo.jpg",
  },
  {
    title: "KURTI",
    image: "/images/kurti.jpg",
  },
  {
    title: "SUIT",
    image: "/images/suit.jpg",
  },
];

const TrandingProductSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-white">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((item, idx) => (
          <div key={idx} className="min-w-full relative">
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-white px-6 py-2 font-bold text-black">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-100"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-100"
      >
        &#8250;
      </button>
    </div>
  );
};

export default TrandingProductSlider;
