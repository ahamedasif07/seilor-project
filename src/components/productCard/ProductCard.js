import Image from "next/image";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { PiScales } from "react-icons/pi";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="bg-white group relative overflow-hidden">
        <div className="absolute top-5 right-5 z-40 pointer-events-none group-hover:pointer-events-auto ">
          <button className="text-gray-800 py-2 px-[9px] hover:text-red-600 duration-200 ease-in-out rounded-full hover:bg-white/80  transition">
            <FaRegHeart size={20} />
          </button>
        </div>
        <div className="h-[420px]    overflow-hidden">
          <div className="relative w-[340px] h-[340px]">
            <Image
              src={product.image1 ? product.image1 : product.image2}
              alt={product.title}
              fill
              className="object-cover md:object-fill"
            />
            {/* icons */}
            <div className="absolute bottom-3 left-26 opacity-0 translate-y-6 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-in-out">
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
            <h3 className="text-[19px] font-semibold text-gray-700 uppercase">
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
