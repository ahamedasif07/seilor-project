import PageSideBar from "@/components/pageSideBar/PageSideBar";
import ProductFilteringBysubCategory from "@/components/shared/DataFiltaring/ProductFilteringBySubCategory";
import React from "react";

const ExecutiveFormalShirt = () => {
  return (
    <div>
      <PageSideBar category=" executive formal shirt">
        <ProductFilteringBysubCategory subCategory="executive formal shirt" />
      </PageSideBar>
    </div>
  );
};

export default ExecutiveFormalShirt;
