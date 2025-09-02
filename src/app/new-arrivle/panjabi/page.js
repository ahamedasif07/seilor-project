import PageSideBar from "@/components/pageSideBar/PageSideBar";
import ProductFiltaringByType from "@/components/shared/DataFiltaring/ProducFiltaringByType";
import React from "react";

const Panjabi = () => {
  return (
    <div>
      <PageSideBar category=" Panjabi">
        <ProductFiltaringByType type="Panjabi" />
      </PageSideBar>
    </div>
  );
};

export default Panjabi;
