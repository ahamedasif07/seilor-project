"use client";
import React, { useState } from "react";
import SailorLogo from "../SailorLogo/SailorLogo";
import { IoMdMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import SidebarMenu from "./NavSidbar";

const MiniDeviceNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden block fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-8 py-3">
        <div>
          <span onClick={() => setIsOpen(!isOpen)} className="text-[22px]">
            <IoMdMenu />
          </span>
        </div>
        <div>
          <SailorLogo />
        </div>
        <div>
          <span className="text-[22px]">
            <IoSearch />
          </span>
        </div>
      </div>

      {isOpen && (
        <div>
          <SidebarMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
};

export default MiniDeviceNav;
