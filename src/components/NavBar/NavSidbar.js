"use client";
import { useState } from "react";
import Link from "next/link";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function SidebarMenu() {
  const [open, setOpen] = useState({
    men: false,
    menPanjabi: false,
    menShirt: false,
    women: false,
    footwear: false,
    kids: false,
    newborn: false,
  });

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const activeClass = "bg-gray-800 text-white";
  const itemClass =
    "flex justify-between items-center px-4 py-3 cursor-pointer";
  const submenuClass = "pl-6 pr-4 py-2 text-gray-700 space-y-2";
  const subitemClass = "cursor-pointer hover:text-black flex justify-between";

  return (
    <div className="w-full max-w-xs bg-white border border-gray-200 text-sm font-medium">
      {/* MEN */}
      <div className="border-b">
        <div
          onClick={() => toggle("men")}
          className={`${itemClass} ${open.men ? activeClass : "text-gray-800"}`}
        >
          <span>MEN</span>
          {open.men ? <FaMinus /> : <FaPlus />}
        </div>
        {open.men && (
          <div className={submenuClass}>
            {/* PANJABI (with submenu) */}
            <div className={subitemClass} onClick={() => toggle("menPanjabi")}>
              PANJABI{" "}
              {open.menPanjabi ? (
                <FaMinus className="text-xs" />
              ) : (
                <FaPlus className="text-xs" />
              )}
            </div>
            {open.menPanjabi && (
              <div className="pl-4 space-y-1">
                <Link href="/" className="hover:text-black block">
                  CLASSIC
                </Link>
                <Link href="/" className="hover:text-black block">
                  FUSION
                </Link>
                <Link href="/" className="hover:text-black block">
                  KABLI SUIT
                </Link>
              </div>
            )}

            {/* SHIRT (with submenu) */}
            <div className={subitemClass} onClick={() => toggle("menShirt")}>
              SHIRT{" "}
              {open.menShirt ? (
                <FaMinus className="text-xs" />
              ) : (
                <FaPlus className="text-xs" />
              )}
            </div>
            {open.menShirt && (
              <div className="pl-4 space-y-1">
                <Link href="/" className="hover:text-black block">
                  BUSINESS FORMAL SHIRT
                </Link>
                <Link href="/" className="hover:text-black block">
                  EXECUTIVE FORMAL SHIRT
                </Link>
                <Link href="/" className="hover:text-black block">
                  FASHION EXPRESS SHIRT
                </Link>
                <Link href="/" className="hover:text-black block">
                  KNIT DRESS SHIRT
                </Link>
                <Link href="/" className="hover:text-black block">
                  SMART CASUAL SHIRT
                </Link>
                <Link href="/" className="hover:text-black block">
                  CASUAL SHIRT
                </Link>
                <Link href="/" className="hover:text-black block">
                  CASUAL SHIRT (H/S)
                </Link>
                <Link href="/" className="hover:text-black block">
                  KNIT CASUAL SHIRT (H/S)
                </Link>
              </div>
            )}

            <Link href="/" className="hover:text-black block">
              POLOS
            </Link>
            <Link href="/" className="hover:text-black block">
              KNIT BASIC POLO
            </Link>
            <Link href="/" className="hover:text-black block">
              KNIT FASHION POLO
            </Link>
            <Link href="/" className="hover:text-black block">
              KABLI SUIT
            </Link>
          </div>
        )}
      </div>

      {/* WOMEN */}
      <div className="border-b">
        <div
          onClick={() => toggle("women")}
          className={`${itemClass} ${
            open.women ? activeClass : "text-gray-800"
          }`}
        >
          <span>WOMEN</span>
          {open.women ? <FaMinus /> : <FaPlus />}
        </div>
        {open.women && (
          <div className={submenuClass}>
            <Link href="/" className="hover:text-black block">
              KURTI
            </Link>
            <Link href="/" className="hover:text-black block">
              LONG KURTI
            </Link>
            <Link href="/" className="hover:text-black block">
              SALWAR SUIT
            </Link>
            <Link href="/" className="hover:text-black block">
              GOWN
            </Link>
            <Link href="/" className="hover:text-black block">
              2 PCE
            </Link>
            <Link href="/" className="hover:text-black block">
              LONG TOP
            </Link>
            <Link href="/" className="hover:text-black block">
              SHORT TOP
            </Link>
          </div>
        )}
      </div>

      {/* FOOTWEAR */}
      <div className="border-b">
        <div
          onClick={() => toggle("footwear")}
          className={`${itemClass} ${
            open.footwear ? activeClass : "text-gray-800"
          }`}
        >
          <span>FOOTWEAR</span>
          {open.footwear ? <FaMinus /> : <FaPlus />}
        </div>
        {open.footwear && (
          <div className={submenuClass}>
            <Link href="/" className="hover:text-black block">
              CASUAL SHOE
            </Link>
            <Link href="/" className="hover:text-black block">
              FASHION LOAFER
            </Link>
            <Link href="/" className="hover:text-black block">
              SANDAL
            </Link>
            <Link href="/" className="hover:text-black block">
              FASHION SNEAKER
            </Link>
            <Link href="/" className="hover:text-black block">
              FORMAL SHOE
            </Link>
          </div>
        )}
      </div>

      {/* KIDS */}
      <div className="border-b">
        <div
          onClick={() => toggle("kids")}
          className={`${itemClass} ${
            open.kids ? activeClass : "text-gray-800"
          }`}
        >
          <span>KIDS</span>
          {open.kids ? <FaMinus /> : <FaPlus />}
        </div>
        {open.kids && (
          <div className={submenuClass}>
            <Link href="/" className="hover:text-black block">
              BOY'S COLLECTION
            </Link>
            <Link href="/" className="hover:text-black block">
              GIRL'S COLLECTION
            </Link>
          </div>
        )}
      </div>

      {/* NEWBORN */}
      <div className="border-b">
        <div
          onClick={() => toggle("newborn")}
          className={`${itemClass} ${
            open.newborn ? activeClass : "text-gray-800"
          }`}
        >
          <span>NEWBORN</span>
          {open.newborn ? <FaMinus /> : <FaPlus />}
        </div>
        {open.newborn && (
          <div className={submenuClass}>
            <Link href="/" className="hover:text-black block">
              NEWBORN BOY'S COLLECTION
            </Link>
            <Link href="/" className="hover:text-black block">
              NEWBORN GIRL'S COLLECTION
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
