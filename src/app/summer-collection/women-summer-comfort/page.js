import PageSideBar from "@/components/pageSideBar/PageSideBar";
import SailorLogo from "@/components/SailorLogo/SailorLogo";
import { DataContext } from "@/components/shared/DataContex";
import ProductFiltaringByType from "@/components/shared/DataFiltaring/ProducFiltaringByType";
import { categoryMeta } from "@/components/shared/metadata/MetaData";
import { useContext } from "react";

export async function generateMetadata({ params }) {
  const category = categoryMeta[params.category];

  if (!category) {
    return {
      title: "Shop | Sailor",
      description: "Default description",
    };
  }

  return {
    title: `Shop | ${category.title} | Sailor`,
    description: category.description,
    openGraph: {
      title: category.title,
    },
  };
}

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
