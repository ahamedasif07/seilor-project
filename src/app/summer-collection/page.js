import PageSideBar from "@/components/pageSideBar/PageSideBar";
import ProductFilteringBySection from "@/components/shared/DataFiltaring/ProductFilteringBySection";
import { categoryMeta } from "@/components/shared/metadata/MetaData";

import React from "react";
export async function generateMetadata() {
  const category = categoryMeta["SummerCollection"];

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

const SummerCollection = () => {
  return (
    <div>
      <PageSideBar category="SUMMERCOLLECTION/25">
        <ProductFilteringBySection section="Summer Collection/25" />
      </PageSideBar>
    </div>
  );
};

export default SummerCollection;
