"use client";
import Hero from "@/components/hero/Hero";
import ProductFilteringBySection from "@/components/ProductFiltering]/ProductFilteringBySection";
import { DataContext } from "@/components/shared/DataContex";
import DataFatching from "@/components/shared/dataFatching/DataFatching";
import ProductSlider from "@/components/sliders/ProductSlider";
import TrandingProductSlider from "@/components/sliders/TrandingCategorySlider";
import Image from "next/image";
import { cache, useContext, useEffect, useState } from "react";

export default function Home() {
  const [newArrival, setNewArrival] = useState([]);
  const { data } = useContext(DataContext);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const filtered = data.filter(
      (product) => product.section?.toLowerCase() === "new arrival"
    );

    console.log("Filtered New Arrival Products:", filtered);
    setNewArrival(filtered);
  }, [data]);

  return (
    <div>
      <div className="overflow-hidden">
        <Hero />

        <div>
          <h2 className="text-[37px] font-bold text-gray-950 text-center py-[35px]">
            Trending Categories
          </h2>
          <TrandingProductSlider />
        </div>
        <div>
          <h2 className="text-[37px] font-bold text-gray-950 text-center pt-[35px]">
            New arrivals
          </h2>
          <div className="flex justify-center py-3 pb-[25px]">
            <h2 className="text-[22px]  font-semibold pt-[4px] pb-[6px] rounded-full text-gray-200  bg-[#D41F27] inline-block px-[15px]  text-center ">
              new arrivals
            </h2>
          </div>
          <ProductSlider products={newArrival} />
          <ProductFilteringBySection />
        </div>
      </div>
      {/* <DataFatching /> */}
    </div>
  );
}
