"use client";
import Hero from "@/components/hero/Hero";

import { DataContext } from "@/components/shared/DataContex";

import ProductSlider from "@/components/sliders/ProductSlider";
import TrandingProductSlider from "@/components/sliders/TrandingCategorySlider";
import Image from "next/image";
import { cache, useContext, useEffect, useState } from "react";
import sailorImge from "../../public/images/project-sailor-home-page046.jpg";
import modelImageOne from "../../public/images/project-sailor-home-page105.jpg";
import modelImageTwo from "../../public/images/project-sailor-home-page106.jpg";

export default function Home() {
  const { data } = useContext(DataContext);
  const [newArrival, setNewArrival] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);

  // new araivle peoduct filtaring
  useEffect(() => {
    if (!data || data.length === 0) return;

    const filteredNewArrival = data.filter(
      (product) => product.section?.toLowerCase() === "new arrival"
    );

    const filteredFeatured = data.filter(
      (product) => product.section?.toLowerCase() === "featured product"
    );

    setNewArrival(filteredNewArrival);
    setFeaturedProduct(filteredFeatured);

    console.log("New Arrival Products:", filteredNewArrival);
    console.log("Featured Products:", filteredFeatured);
  }, [data]);
  console.log("sailor image", sailorImge);

  return (
    <div>
      <div className="overflow-hidden">
        {/* 🔹 Hero Section - Start */}
        <Hero />
        {/* 🔹 Hero Section - End */}

        {/* 🔹 Trending Categories Section - Start */}
        <div>
          <h2 className="text-[37px] font-bold text-gray-950 text-center py-[35px]">
            Trending Categories
          </h2>
          <TrandingProductSlider />
        </div>
        {/* 🔹 Trending Categories Section - End */}

        {/* 🔹 New Arrivals Section - Start */}
        <div>
          <h2 className="text-[37px] font-bold text-gray-950 text-center pt-[35px]">
            New arrivals
          </h2>

          <div className="flex justify-center py-3 pb-[25px]">
            <h2 className="text-[22px] font-semibold pt-[4px] pb-[6px] rounded-full text-gray-200 bg-[#D41F27] inline-block px-[15px] text-center">
              new arrivals
            </h2>
          </div>

          <ProductSlider products={newArrival} />
        </div>
        {/* 🔹 New Arrivals Section - End */}

        {/* 🔹 Banner Image Section (Sailor) - Start */}
        <div className="relative w-full md:h-[500px] lg:h-[550px] pt-2">
          <Image
            src={sailorImge}
            alt="sailor banner image"
            fill
            className="object-fill"
          />
        </div>
        {/* 🔹 Banner Image Section (Sailor) - End */}

        {/* 🔹 Featured Products Section - Start */}
        <div>
          <h2 className="text-[37px] font-bold text-gray-950 text-center py-[35px]">
            Feature product
          </h2>

          <ProductSlider products={featuredProduct} />
        </div>
        {/* 🔹 Featured Products Section - End */}
        {/* main model images  start*/}
        <div className="flex flex-col md:flex-row gap-5 py-6">
          <div className="relative w-full h-[550px] md:h-[700px] lg:h-[1100px] pt-2">
            {/* image one */}

            <Image
              src={modelImageOne}
              alt="sailor banner image"
              fill
              className="object-fill"
            />
          </div>
          <div className="relative w-full h-[550px] md:h-[700px] lg:h-[1100px] pt-2">
            {/* image two */}

            <Image
              src={modelImageTwo}
              alt="sailor banner image"
              fill
              className="object-fill"
            />
          </div>
        </div>
        {/* main model images  end*/}
      </div>
    </div>
  );
}
