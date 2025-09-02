import PageSideBar from "@/components/pageSideBar/PageSideBar";
import ProductFilteringBySubCategory from "@/components/shared/DataFiltaring/ProductFilteringBySubCategory";
import React from "react";

const Classic = () => {
  return (
    <div>
      <PageSideBar category=" Panjabi">
        <ProductFilteringBySubCategory subcategory="Classy" />
      </PageSideBar>
    </div>
  );
};

export default Classic;
