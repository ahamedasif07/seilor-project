import Image from "next/image";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { PiScales } from "react-icons/pi";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="bg-white group relative overflow-hidden  ">
        <div className="absolute top-5 right-5 z-40 pointer-events-none group-hover:pointer-events-auto ">
          <button className="text-gray-800 py-2 px-[9px] hover:text-red-600 duration-200 ease-in-out rounded-full hover:bg-white/80  transition">
            <FaRegHeart size={20} />
          </button>
        </div>
        <div className="h-[420px]    overflow-hidden">
          <div className="relative w-full h-[360px]">
            <div className="relative w-full h-[360px] overflow-hidden group">
              {/* Default image (image1) */}
              <Image
                src={product.image1}
                alt={product.title}
                fill
                className="object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
              />

              {/* Hover image (image2) */}
              <Image
                src={product.image2}
                alt={product.title}
                fill
                className="object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
              />
            </div>

            {/* icons */}
            <div
              className="absolute bottom-3 left-1/2 -translate-x-1/2 
                opacity-0 translate-y-6 pointer-events-none 
                group-hover:translate-y-0 group-hover:opacity-100 
                group-hover:pointer-events-auto 
                transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center justify-center gap-3 py-2">
                <button className="text-gray-600 py-2 px-[9px] bg-white/80 hover:text-black transition">
                  <FiShoppingCart size={20} />
                </button>
                <button className="text-gray-600 py-2 px-[9px] bg-white/80 hover:text-black transition">
                  <AiOutlineEye size={20} />
                </button>
                <button className="text-gray-600 py-2 px-[9px] bg-white/80 hover:text-black transition">
                  <PiScales size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="text-left p-3">
            <h3 className="text-[14px] font-semibold text-gray-600 hover:text-red-600 transform ease-in-out duration-300 uppercase">
              {product.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1 font-bold ">
              <span className="text-[16px] text-gray-700 pr-2 font-extrabold">
                ৳
              </span>
              {product.priceBdt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
