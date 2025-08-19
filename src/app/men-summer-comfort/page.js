import PageSideBar from "@/components/pageSideBar/PageSideBar";
import ProductFiltaringByType from "@/components/shared/DataFiltaring/ProducFiltaringByType";
import React from "react";

const MenSummerComfort = () => {
  return (
    <div>
      <PageSideBar category=" Men Summer Comfort">
        <ProductFiltaringByType type="Summer Comfort" />
      </PageSideBar>
    </div>
  );
};

export default MenSummerComfort;
