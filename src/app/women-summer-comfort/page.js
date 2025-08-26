import PageSideBar from "@/components/pageSideBar/PageSideBar";
import ProductFiltaringByType from "@/components/shared/DataFiltaring/ProducFiltaringByType";
import React from "react";

const WomenSummerComfort = () => {
  return (
    <div>
      <PageSideBar category=" Men Summer Comfort">
        <ProductFiltaringByType type="Summer Comfort Women" />
      </PageSideBar>
    </div>
  );
};

export default WomenSummerComfort;
