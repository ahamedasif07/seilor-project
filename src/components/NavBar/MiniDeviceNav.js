"use client";
import React, { useState } from "react";
import SailorLogo from "../SailorLogo/SailorLogo";
import { IoMdMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

import SidebarMenu from "./NavSidbar";

const MiniDeviceNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between">
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
