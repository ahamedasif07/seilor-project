import PageSideBar from "@/components/pageSideBar/PageSideBar";
import SailorLogo from "@/components/SailorLogo/SailorLogo";
import { DataContext } from "@/components/shared/DataContex";
import ProductFiltaringByType from "@/components/shared/DataFiltaring/ProducFiltaringByType";
import { categoryMeta } from "@/components/shared/metadata/MetaData";
import { useContext } from "react";

const WomenSummerComfort = () => {
  return (
    <div>
      <PageSideBar category="Women Summer Comfort">
        <ProductFiltaringByType type="Summer Comfort Women" />
      </PageSideBar>
    </div>
  );
};

export default WomenSummerComfort;
