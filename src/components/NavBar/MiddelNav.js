"use client";
import React from "react";

import { CiSearch } from "react-icons/ci";
import { FaPhoneAlt, FaRegHeart } from "react-icons/fa";

import { BsCart4 } from "react-icons/bs";
import SailorLogo from "../SailorLogo/SailorLogo";
import Link from "next/link";

const MiddelNav = () => {
  return (
    <div className="lg:block hidden">
      <div className="flex items-center justify-between px-4 md:max-w-screen-lg lg:max-w-screen-xl  mx-auto border-b-[1px] border-gray-200 ">
        <div className="flex items-center gap-[80px] ">
          <Link href="/">
            <SailorLogo />
          </Link>
          <div className="flex items-center gap-[60px]">
            {/* Search Bar and Dropdown */}
            <div className="flex items-center  bg-[#F6F7F8] rounded-full w-full max-w-md relative overflow-visible z-[10000]">
              <input
                type="text"
                placeholder="Search "
                className="py-2 px-4 w-full outline-none text-[14px]"
              />

              {/* Dropdown Wrapper */}
              <div className="relative w-[450px]">
                <select className="w-full bg-[#F6F7F8] border-l focus:outline-none focus:ring-0 text-gray-800 text-[15px] py-2 px-3 border-white cursor-pointer absolute z-[10010] bottom-[-18px]">
                  <option
                    className="text-gray-800 text-[15px]"
                    value="latest-collection"
                  >
                    categories
                  </option>
                  <option
                    className="text-gray-800 text-[15px]"
                    value="latest-collection"
                  >
                    Latest Collection/25
                  </option>
                  <option
                    className="text-gray-800 text-[15px]"
                    value="summer-collection"
                  >
                    SUMMER COLLECTION/25
                  </option>
                  <option
                    className="text-gray-800 text-[15px]"
                    value="boishakh-collection"
                  >
                    BOISHAKH COLLECTION/2025
                  </option>
                  <option
                    className="text-gray-800 text-[15px]"
                    value="new-arrival"
                  >
                    NEW ARRIVAL/25
                  </option>
                  <option className="text-gray-800 text-[15px]" value="men">
                    MEN
                  </option>
                  <option className="text-gray-800 text-[15px]" value="women">
                    WOMEN
                  </option>
                  <option className="text-gray-800 text-[15px]" value="kids">
                    KID'S
                  </option>
                  <option className="text-gray-800 text-[15px]" value="newborn">
                    NEWBORN
                  </option>
                  <option
                    className="text-gray-800 text-[15px]"
                    value="footwear"
                  >
                    FOOTWEAR
                  </option>
                  <option
                    className="text-gray-800 text-[15px]"
                    value="accessories"
                  >
                    ACCESSORIES
                  </option>
                  <option
                    className="text-gray-800 text-[15px]"
                    value="spring-2025"
                  >
                    SPRING 2025
                  </option>
                  <option
                    className="text-gray-800 text-[15px]"
                    value="festive-spotlight"
                  >
                    FESTIVE SPOT LIGHT
                  </option>
                  <option
                    className="text-gray-800 text-[15px]"
                    value="king-collection"
                  >
                    KING COLLECTION
                  </option>
                </select>
              </div>

              <button className=" py-[10px] text-[19px] px-3 border-l border-white rounded-r-full">
                <CiSearch />
              </button>
            </div>
            {/* contact us now */}
            <div className="flex items-center gap-3">
              <p className="text-[18px]">
                <FaPhoneAlt />
              </p>
              <div>
                <p className="text-gray-500 text-[13px]">Contact Us Now</p>
                <p className="font-semibold text-[15px]">01777702000</p>
              </div>
            </div>
          </div>
        </div>
        {/* favarite and craft icon */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <p className="text-gray-800">
              <FaRegHeart />
            </p>
            <p className="text-gray-600 text-[14px]">0</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-gray-800">
              <BsCart4 />
            </p>
            <p className="text-gray-600 text-[14px]">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddelNav;
