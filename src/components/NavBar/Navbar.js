"use client";
import React, { useEffect, useState } from "react";

import BottomNav from "./BottomNav";
import TopNavBar from "./TopNavBar";
import MiddelNav from "./MiddelNav";
import MiniDeviceNav from "./MiniDeviceNav";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / window.innerHeight) * 100;
      setIsSticky(scrollPercent > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <TopNavBar />

      {/* MiddelNav + BottomNav Wrapper */}
      <div
        className={`w-full z-100 transition-all duration-300 ${
          isSticky ? "fixed top-0 shadow-md bg-white" : "relative"
        }`}
      >
        <MiddelNav />
        <BottomNav />
      </div>

      {/* Mini device nav */}
      <MiniDeviceNav />
    </div>
  );
};

export default Navbar;
