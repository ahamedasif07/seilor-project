"use client";
import React, { useEffect, useState } from "react";

const TopNavBar = () => {
  const [hideTopTitle, setHideTopTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideTopTitle(window.scrollY > 30); // hide after 30px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Top Title */}
      <h2
        className={`bg-[#2B2D42] w-full py-[3px] text-gray-200 font-semibold text-center tracking-widest transition-all duration-300 ease-in-out ${
          hideTopTitle
            ? "opacity-0 translate-y-[-100%]"
            : "opacity-100 translate-y-0"
        }`}
      >
        Step into the Festive Season with Sailor
      </h2>

      {/* Bottom part of top nav */}
      <div className="hidden lg:block border-b-[1px] border-gray-200">
        <div className="flex justify-between items-center py-3 px-4 max-w-screen-xl mx-auto ">
          <h4 className="text-[14px] text-gray-700">Sailing Life</h4>
          <ul className="flex items-center gap-5">
            <li className="text-[14px] text-gray-700">log in</li>
            <li className="text-[14px] text-gray-700">about us</li>
            <li className="text-[14px] text-gray-700">my wishlist</li>
            <li className="text-[14px] text-gray-700">cart</li>
            <li className="text-[14px] text-gray-700">compare (0)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
