import PageSideBar from "@/components/pageSideBar/PageSideBar";
import ProductFilteringBySubCategory from "@/components/shared/DataFiltaring/ProductFilteringBySubCategory";
import React from "react";

const Fusion = () => {
  return (
    <div>
      <PageSideBar category=" Panjabi">
        <ProductFilteringBySubCategory subCategory="Fusion" />
      </PageSideBar>
    </div>
  );
};

export default Fusion;
