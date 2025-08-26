import PageSideBar from "@/components/pageSideBar/PageSideBar";
import ProductFiltaringByType from "@/components/shared/DataFiltaring/ProducFiltaringByType";
import { categoryMeta } from "@/components/shared/metadata/MetaData";
import React from "react";
export async function generateMetadata() {
  const category = categoryMeta["Men"];

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

const MenSummerComfort = () => {
  return (
    <div>
      <PageSideBar category=" Men Summer Comfort">
        <ProductFiltaringByType type="Summer Comfort" />
      </PageSideBar>
    </div>
  );
};

export default MenSummerComfort;
