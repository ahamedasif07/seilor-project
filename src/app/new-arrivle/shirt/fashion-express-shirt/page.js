import PageSideBar from "@/components/pageSideBar/PageSideBar";
import ProductFilteringBysubCategory from "@/components/shared/DataFiltaring/ProductFilteringBySubCategory";
import React from "react";

const FashionExpressShirt = () => {
  return (
    <div>
      <div>
        <PageSideBar category=" executive formal shirt">
          <ProductFilteringBysubCategory subCategory="executive formal shirt" />
        </PageSideBar>
      </div>
    </div>
  );
};

export default FashionExpressShirt;
