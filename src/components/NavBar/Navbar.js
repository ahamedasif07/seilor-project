import React from "react";

import BottomNav from "./BottomNav";
import TopNavBar from "./TopNavBar";
import MiddelNav from "./MiddelNav";
import MiniDeviceNav from "./MiniDeviceNav";

const Navbar = () => {
  return (
    <div>
      <TopNavBar />
      <div className="">
        <MiddelNav />
        <BottomNav />
      </div>
      <div className="">
        <MiniDeviceNav />
      </div>
    </div>
  );
};

export default Navbar;
