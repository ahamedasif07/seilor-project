import PageSideBar from "@/components/pageSideBar/PageSideBar";
import ProductFilteringBysubCategory from "@/components/shared/DataFiltaring/ProductFilteringBySubCategory";
import { categoryMeta } from "@/components/shared/metadata/MetaData";
import React from "react";
export async function generateMetadata() {
  const category = categoryMeta["FashionPanjabi"];

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

const KabliSuit = () => {
  return (
    <div>
      <div>
        <PageSideBar category=" Panjabi">
          <ProductFilteringBysubCategory subCategory="KABLI SUIT" />
        </PageSideBar>
      </div>
    </div>
  );
};

export default KabliSuit;
