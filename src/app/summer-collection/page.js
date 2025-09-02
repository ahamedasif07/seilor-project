import PageSideBar from "@/components/pageSideBar/PageSideBar";
import ProductFilteringBySection from "@/components/ProductFiltering]/ProductFilteringBySection";
import React from "react";

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
