import PageSideBar from "@/components/pageSideBar/PageSideBar";
import ProductFilteringBysubCategory from "@/components/shared/DataFiltaring/ProductFilteringBySubCategory";
import React from "react";

const BusinessFormalShirt = () => {
  return (
    <div>
      <PageSideBar category=" Business Formal Shirt">
        <ProductFilteringBysubCategory subCategory="Business Formal Shirt" />
      </PageSideBar>
    </div>
  );
};

export default BusinessFormalShirt;
