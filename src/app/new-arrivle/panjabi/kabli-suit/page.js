import PageSideBar from "@/components/pageSideBar/PageSideBar";
import ProductFilteringBysubCategory from "@/components/shared/DataFiltaring/ProductFilteringBySubCategory";
import React from "react";

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
