"use client";
import { useState } from "react";
import Link from "next/link";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function SidebarMenu() {
  const [open, setOpen] = useState({
    summer: false,
    newArrival: false,
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
      {/* SUMMER COLLECTION */}
      <div className="border-b">
        <div
          onClick={() => toggle("summer")}
          className={`${itemClass} ${
            open.summer ? activeClass : "text-gray-800"
          }`}
        >
          <span>SUMMER COLLECTION</span>
          {open.summer ? <FaMinus /> : <FaPlus />}
        </div>
        {open.summer && (
          <div className={submenuClass}>
            <Link href="/" className="hover:text-black block">
              Women's Summer Comfort
            </Link>
            <Link href="/" className="hover:text-black block">
              Men's Summer Comfort
            </Link>
            <Link href="/" className="hover:text-black block">
              ALL SUMMER COLLECTION
            </Link>
          </div>
        )}
      </div>

      {/* NEW ARRIVAL */}
      <div className="border-b">
        <div
          onClick={() => toggle("newArrival")}
          className={`${itemClass} ${
            open.newArrival ? activeClass : "text-gray-800"
          }`}
        >
          <span>NEW ARRIVAL</span>
          {open.newArrival ? <FaMinus /> : <FaPlus />}
        </div>
        {open.newArrival && (
          <div className={submenuClass}>
            {/* MEN */}
            <div className={subitemClass} onClick={() => toggle("men")}>
              MEN{" "}
              {open.men ? (
                <FaMinus className="text-xs" />
              ) : (
                <FaPlus className="text-xs" />
              )}
            </div>
            {open.men && (
              <div className="pl-4 space-y-2">
                <div
                  className={subitemClass}
                  onClick={() => toggle("menPanjabi")}
                >
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

                <div
                  className={subitemClass}
                  onClick={() => toggle("menShirt")}
                >
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

            {/* WOMEN */}
            <div className={subitemClass} onClick={() => toggle("women")}>
              WOMEN{" "}
              {open.women ? (
                <FaMinus className="text-xs" />
              ) : (
                <FaPlus className="text-xs" />
              )}
            </div>
            {open.women && (
              <div className="pl-4 space-y-1">
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

            {/* FOOTWEAR */}
            <div className={subitemClass} onClick={() => toggle("footwear")}>
              FOOTWEAR{" "}
              {open.footwear ? (
                <FaMinus className="text-xs" />
              ) : (
                <FaPlus className="text-xs" />
              )}
            </div>
            {open.footwear && (
              <div className="pl-4 space-y-1">
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

            {/* KIDS */}
            <div className={subitemClass} onClick={() => toggle("kids")}>
              KIDS{" "}
              {open.kids ? (
                <FaMinus className="text-xs" />
              ) : (
                <FaPlus className="text-xs" />
              )}
            </div>
            {open.kids && (
              <div className="pl-4 space-y-1">
                <Link href="/" className="hover:text-black block">
                  BOY'S COLLECTION
                </Link>
                <Link href="/" className="hover:text-black block">
                  GIRL'S COLLECTION
                </Link>
              </div>
            )}

            {/* NEWBORN */}
            <div className={subitemClass} onClick={() => toggle("newborn")}>
              NEWBORN{" "}
              {open.newborn ? (
                <FaMinus className="text-xs" />
              ) : (
                <FaPlus className="text-xs" />
              )}
            </div>
            {open.newborn && (
              <div className="pl-4 space-y-1">
                <Link href="/" className="hover:text-black block">
                  NEWBORN BOY'S COLLECTION
                </Link>
                <Link href="/" className="hover:text-black block">
                  NEWBORN GIRL'S COLLECTION
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
