import Hero from "@/components/hero/Hero";
import ProductSlider from "@/components/sliders/ProductSlider";
import TrandingProductSlider from "@/components/sliders/TrandingCategorySlider";
import Image from "next/image";

export default function Home() {
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
          <ProductSlider />
        </div>
      </div>
    </div>
  );
}
