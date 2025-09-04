import PageSideBar from "@/components/pageSideBar/PageSideBar";
import ProductFiltaringByType from "@/components/shared/DataFiltaring/ProducFiltaringByType";
import ProductFilteringBySection from "@/components/shared/DataFiltaring/ProductFilteringBySection";
import { categoryMeta } from "@/components/shared/metadata/MetaData";
import React from "react";
export async function generateMetadata() {
  const category = categoryMeta["NewArrival"];

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

const NewArrivle = () => {
  return (
    <div>
      <PageSideBar category="New Arrivle">
        <ProductFilteringBySection section="NEW ARRIVAL/25" />
      </PageSideBar>
    </div>
  );
};

export default NewArrivle;
