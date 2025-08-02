"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";

import { PiScales } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "PANJABI",
    price: "৳ 3690",
    image: "https://i.ibb.co/27Xxn5WV/project-sailor-home-page037.jpg",
    path: "/panjabi",
  },
  {
    id: 2,
    title: "SHIRT",
    price: "৳ 2890",
    image: "https://i.ibb.co/3m5CXrMb/project-sailor-home-page038.jpg",
    path: "/shirt",
  },
  {
    id: 3,
    title: "POLO",
    price: "৳ 1990",
    image: "https://i.ibb.co/Cs4bzTmS/project-sailor-home-page039.jpg",
    path: "/polo",
  },
  {
    id: 4,
    title: "KURTI",
    price: "৳ 2490",
    image: "https://i.ibb.co/fY5vHHTx/project-sailor-home-page040.jpg",
    path: "/kurti",
  },
  {
    id: 5,
    title: "SALWAR SUIT",
    price: "৳ 2990",
    image: "https://i.ibb.co/9k2MXMPM/project-sailor-home-page041.jpg",
    path: "/salwar-suit",
  },
  {
    id: 6,
    title: "KID'S",
    price: "৳ 1690",
    image: "https://i.ibb.co/fLnrggB/project-sailor-home-page042.jpg",
    path: "/kids",
  },
];

export default function ProductSlider({ products }) {
  // const {
  //   id,
  //   title,
  //   image1,
  //   image2,
  //   category,
  //   type,
  //   priceBdt,
  //   discount,
  //   discountPriceBdt,
  //   discountPercent,
  //   rating,
  //   section,
  //   description,
  //   size,
  //   stock,
  //   colors,
  // } = product;
  return (
    <div className="relative px-4 md:px-10 ">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 25 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white group relative overflow-hidden">
              <div className="absolute top-5 right-5 z-40 pointer-events-none group-hover:pointer-events-auto ">
                <button className="text-gray-800 py-2 px-[9px] hover:text-red-600 duration-200 ease-in-out rounded-full hover:bg-white/80  transition">
                  <FaRegHeart size={20} />
                </button>
              </div>
              <div className="h-[420px]    overflow-hidden">
                <div className="relative w-[340px] h-[340px]">
                  <Image
                    src={product.image1 ? product.image1 : product.image2}
                    alt={product.title}
                    fill
                    className="object-fill"
                  />
                  {/* icons */}
                  <div className="absolute bottom-3 left-26 opacity-0 translate-y-6 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-in-out">
                    <div className="flex items-center justify-center gap-3 py-2">
                      <button className="text-gray-600 py-2 px-[9px] bg-white/80 hover:text-black transition">
                        <FiShoppingCart size={20} />
                      </button>
                      <button className="text-gray-600 py-2 px-[9px] bg-white/80 hover:text-black transition">
                        <AiOutlineEye size={20} />
                      </button>
                      <button className="text-gray-600 py-2 px-[9px] bg-white/80 hover:text-black transition">
                        <PiScales size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-left p-3">
                  <h3 className="text-[19px] font-semibold text-gray-700 uppercase">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 font-bold ">
                    <span className="text-[16px] text-gray-700 pr-2 font-extrabold">
                      ৳
                    </span>
                    {product.priceBdt}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons (Optional) */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: black;
          background: white;
          width: 35px;
          height: 35px;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
          border-radius: 0px;
          top: 50%;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}
