import PageSideBar from "@/components/pageSideBar/PageSideBar";
import SailorLogo from "@/components/SailorLogo/SailorLogo";
import { DataContext } from "@/components/shared/DataContex";
import ProductFiltaringByType from "@/components/shared/DataFiltaring/ProducFiltaringByType";
import { categoryMeta } from "@/components/shared/metadata/MetaData";
import { useContext } from "react";
export async function generateMetadata() {
  const category = categoryMeta["women"];

  return {
    title: `Shop | ${category.title}  | Sailor`,
    description: category.description,
    openGraph: {
      title: category.title,
      description: category.description,
      url: category.url,
      images: [category.image],
    },
    twitter: {
      card: "summary_large_image",
      title: category.title,
      description: category.description,
      images: [category.image],
    },
  };
}

const WomenSummerComfort = () => {
  return (
    <div>
      <PageSideBar category="Women Summer Comfort">
        <ProductFiltaringByType type="Summer Comfort Women" />
      </PageSideBar>
    </div>
  );
};

export default WomenSummerComfort;
