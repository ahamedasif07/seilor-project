"use client";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../DataContex";
import ProductCard from "@/components/productCard/ProductCard";

const ProductFiltaringByType = ({ type }) => {
  const { data } = useContext(DataContext);
  const [filtaredData, setFiltaredData] = useState([]);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const filteredNewArrival = data.filter(
      (product) => product.type?.toLowerCase() === type.toLowerCase()
    );
    setFiltaredData(filteredNewArrival);

    console.log("Filtered Products:", filteredNewArrival);
  }, [data, type]);

  return (
    <div>
      {filtaredData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pb-5">
          {filtaredData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductFiltaringByType;
