"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Items data
const items = [
  {
    id: 1,
    title: "PANJABI",
    image: "https://i.ibb.co/27Xxn5WV/project-sailor-home-page037.jpg",
    path: "/panjabi",
  },
  {
    id: 2,
    title: "SHIRT",
    image: "https://i.ibb.co/3m5CXrMb/project-sailor-home-page038.jpg",
    path: "/shirt",
  },
  {
    id: 3,
    title: "POLO",
    image: "https://i.ibb.co/Cs4bzTmS/project-sailor-home-page039.jpg",
    path: "/polo",
  },
  {
    id: 4,
    title: "KURTI",
    image: "https://i.ibb.co/fY5vHHTx/project-sailor-home-page040.jpg",
    path: "/kurti",
  },
  {
    id: 5,
    title: "SALWAR SUIT",
    image: "https://i.ibb.co/9k2MXMPM/project-sailor-home-page041.jpg",
    path: "/salwar-suit",
  },
  {
    id: 6,
    title: "KID'S",
    image: "https://i.ibb.co/fLnrggB/project-sailor-home-page042.jpg",
    path: "/kids",
  },
];

const TrandingCategorySlider = () => {
  const router = useRouter();

  return (
    <div className="relative w-full px-4 py-8 overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 25 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              onClick={() => router.push(item.path)}
              className="cursor-pointer relative overflow-hidden h-[400px] w-full shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-fil"
                />
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white w-[70%] hover:w-[90%] transition-all duration-300 ease-in-out text-center py-[7px] z-10 shadow-md ">
                <h2 className="text-[18px] font-semibold">{item.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrandingCategorySlider;
