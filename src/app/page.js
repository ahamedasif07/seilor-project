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
          <h2 className="text-[37px] font-bold text-gray-950 text-center py-[35px]">
            Trending Categories
          </h2>
          <ProductSlider />
        </div>
      </div>
    </div>
  );
}
