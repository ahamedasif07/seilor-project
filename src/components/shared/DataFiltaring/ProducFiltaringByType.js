"use client";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../DataContex";
import ProductCard from "@/components/productCard/ProductCard";

const ProductFiltaringByType = ({ type }) => {
  const { data } = useContext(DataContext);
  const [filtaredData, setFiltaredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 12;

  useEffect(() => {
    if (!data || data.length === 0) return;

    const filteredNewArrival = data.filter(
      (product) => product.type?.toLowerCase() === type.toLowerCase()
    );
    setFiltaredData(filteredNewArrival);
    setCurrentPage(1); // reset to first page when type changes

    console.log("Filtered Products:", filteredNewArrival);
  }, [data, type]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filtaredData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filtaredData.length / productsPerPage);

  return (
    <div>
      {filtaredData.length > 0 ? (
        <>
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pb-5">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 pb-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1 ? "bg-black text-white" : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductFiltaringByType;
