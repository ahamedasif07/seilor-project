import Hero from "@/components/hero/Hero";
import TrandingProductSlider from "@/components/TrandingCategorySlider/TrandingCategorySlider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="overflow-hidden">
        <Hero />
        <TrandingProductSlider />
      </div>
    </div>
  );
}
