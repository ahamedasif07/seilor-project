import React from "react";
import TopNavBar from "./TopNavBar";
import MiddelNav from "./MiddelNav";
import BottomNav from "./BottomNav";

const Navbar = () => {
  return (
    <div>
      <div>
        <TopNavBar />
        <MiddelNav />

        <BottomNav />
      </div>
    </div>
  );
};

export default Navbar;
