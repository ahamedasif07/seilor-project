"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

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

export default function ProductSlider() {
  return (
    <div className="relative px-4 md:px-10 py-8">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={20}
        slidesPerView={1.5}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4.2,
          },
        }}
        className="group"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-[400px] object-cover"
              />
              <div className="text-center p-3">
                <h3 className="text-[15px] font-semibold text-gray-800 uppercase">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.price}</p>
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
          border-radius: 4px;
          top: 40%;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}
