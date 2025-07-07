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
    menTshirt: false,
    menPolo: false,
    menBottom: false,
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
      {/* SUMMER COLLECTION  start*/}
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
      {/* SUMMER COLLECTION  end*/}

      {/* NEW ARRIVAL start*/}
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
                <Link href="/" className="hover:text-black block">
                  ACTIVE WEAR
                </Link>

                {/* SHIRT */}
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

                {/* PANJABI */}
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
                    <Link href="/" className="hover:text-black block">
                      FASTIVE SPORT LIGHT
                    </Link>
                  </div>
                )}

                {/* POLOS */}
                <div className={subitemClass} onClick={() => toggle("menPolo")}>
                  POLOS{" "}
                  {open.menPolo ? (
                    <FaMinus className="text-xs" />
                  ) : (
                    <FaPlus className="text-xs" />
                  )}
                </div>
                {open.menPolo && (
                  <div className="pl-4 space-y-1">
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

                {/* T-SHIRTS */}
                <div
                  className={subitemClass}
                  onClick={() => toggle("menTshirt")}
                >
                  T-SHIRTS{" "}
                  {open.menTshirt ? (
                    <FaMinus className="text-xs" />
                  ) : (
                    <FaPlus className="text-xs" />
                  )}
                </div>
                {open.menTshirt && (
                  <div className="pl-4 space-y-1">
                    <Link href="/" className="hover:text-black block">
                      SPORT T-SHIRTS
                    </Link>
                    <Link href="/" className="hover:text-black block">
                      REGLURE T-SHIRTS
                    </Link>
                  </div>
                )}

                {/* BOTTOM */}
                <div
                  className={subitemClass}
                  onClick={() => toggle("menBottom")}
                >
                  BOTTOM{" "}
                  {open.menBottom ? (
                    <FaMinus className="text-xs" />
                  ) : (
                    <FaPlus className="text-xs" />
                  )}
                </div>
                {open.menBottom && (
                  <div className="pl-4 space-y-1">
                    <Link href="/" className="hover:text-black block">
                      CHINO TROUSER
                    </Link>
                    <Link href="/" className="hover:text-black block">
                      DENIM TROUSER
                    </Link>
                  </div>
                )}

                <Link href="/" className="hover:text-black block">
                  SANDAL
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
      {/* NEW ARRIVAL end*/}
      {/* Men start */}
      <div className="border-b">
        <div
          onClick={() => toggle("summer")}
          className={`${itemClass} ${
            open.summer ? activeClass : "text-gray-800"
          }`}
        >
          <span>MEN</span>
          {open.summer ? <FaMinus /> : <FaPlus />}
        </div>
        {open.summer && (
          <div className={submenuClass}>
            <Link href="/" className="hover:text-black block">
              ACTIVE WEAR
            </Link>
            <div
              className={subitemClass}
              onClick={() => toggle("summerMenShirt")}
            >
              SHIRT
              {open.summerMenShirt ? (
                <FaMinus className="text-xs" />
              ) : (
                <FaPlus className="text-xs" />
              )}
            </div>
            {open.summerMenShirt && (
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
            <div
              className={subitemClass}
              onClick={() => toggle("summerMenPanjabi")}
            >
              PANJABI
              {open.summerMenPanjabi ? (
                <FaMinus className="text-xs" />
              ) : (
                <FaPlus className="text-xs" />
              )}
            </div>
            {open.summerMenPanjabi && (
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
                <Link href="/" className="hover:text-black block">
                  FASTIVE SPORT LIGHT
                </Link>
              </div>
            )}
            <div
              className={subitemClass}
              onClick={() => toggle("summerMenPolo")}
            >
              POLOS{" "}
              {open.summerMenPolo ? (
                <FaMinus className="text-xs" />
              ) : (
                <FaPlus className="text-xs" />
              )}
            </div>
            {open.summerMenPolo && (
              <div className="pl-4 space-y-1">
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
            <div
              className={subitemClass}
              onClick={() => toggle("summerMenTshirt")}
            >
              T-SHIRTS{" "}
              {open.summerMenTshirt ? (
                <FaMinus className="text-xs" />
              ) : (
                <FaPlus className="text-xs" />
              )}
            </div>
            {open.summerMenTshirt && (
              <div className="pl-4 space-y-1">
                <Link href="/" className="hover:text-black block">
                  SPORT T-SHIRTS
                </Link>
                <Link href="/" className="hover:text-black block">
                  REGLURE T-SHIRTS
                </Link>
              </div>
            )}
            <div
              className={subitemClass}
              onClick={() => toggle("summerMenBottom")}
            >
              BOTTOM{" "}
              {open.summerMenBottom ? (
                <FaMinus className="text-xs" />
              ) : (
                <FaPlus className="text-xs" />
              )}
            </div>
            {open.summerMenBottom && (
              <div className="pl-4 space-y-1">
                <Link href="/" className="hover:text-black block">
                  CHINO TROUSER
                </Link>
                <Link href="/" className="hover:text-black block">
                  DENIM TROUSER
                </Link>
              </div>
            )}
            <Link href="/" className="hover:text-black block">
              SANDAL
            </Link>
          </div>
        )}
      </div>
      {/* Men end */}
      {/* Women start */}
      {/* Women start */}
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
            {/* TOP */}
            <div className={subitemClass} onClick={() => toggle("womenTop")}>
              TOP
              {open.womenTop ? (
                <FaMinus className="text-xs" />
              ) : (
                <FaPlus className="text-xs" />
              )}
            </div>
            {open.womenTop && (
              <div className="pl-4 space-y-1">
                <Link href="/" className="hover:text-black block">
                  Crop Top
                </Link>
                <Link href="/" className="hover:text-black block">
                  Short Top
                </Link>
                <Link href="/" className="hover:text-black block">
                  Long Top
                </Link>
              </div>
            )}

            {/* SHIRT */}
            <div className={subitemClass} onClick={() => toggle("womenShirt")}>
              SHIRT
              {open.womenShirt ? (
                <FaMinus className="text-xs" />
              ) : (
                <FaPlus className="text-xs" />
              )}
            </div>
            {open.womenShirt && (
              <div className="pl-4 space-y-1">
                <Link href="/" className="hover:text-black block">
                  Casual Shirt
                </Link>
                <Link href="/" className="hover:text-black block">
                  Formal Shirt
                </Link>
                <Link href="/" className="hover:text-black block">
                  Party Shirt
                </Link>
              </div>
            )}

            {/* KAFTAN */}
            <div className={subitemClass} onClick={() => toggle("womenKaftan")}>
              KAFTAN
              {open.womenKaftan ? (
                <FaMinus className="text-xs" />
              ) : (
                <FaPlus className="text-xs" />
              )}
            </div>
            {open.womenKaftan && (
              <div className="pl-4 space-y-1">
                <Link href="/" className="hover:text-black block">
                  Classic Kaftan
                </Link>
                <Link href="/" className="hover:text-black block">
                  Embroidered Kaftan
                </Link>
              </div>
            )}

            {/* 2 PEC */}
            <div className={subitemClass} onClick={() => toggle("women2Pec")}>
              2 PEC
              {open.women2Pec ? (
                <FaMinus className="text-xs" />
              ) : (
                <FaPlus className="text-xs" />
              )}
            </div>
            {open.women2Pec && (
              <div className="pl-4 space-y-1">
                <Link href="/" className="hover:text-black block">
                  Plain 2 Pec
                </Link>
                <Link href="/" className="hover:text-black block">
                  Printed 2 Pec
                </Link>
              </div>
            )}

            {/* SALOWER SUIT */}
            <div
              className={subitemClass}
              onClick={() => toggle("womenSalowerSuit")}
            >
              SALOWER SUIT
              {open.womenSalowerSuit ? (
                <FaMinus className="text-xs" />
              ) : (
                <FaPlus className="text-xs" />
              )}
            </div>
            {open.womenSalowerSuit && (
              <div className="pl-4 space-y-1">
                <Link href="/" className="hover:text-black block">
                  Classic Salower Suit
                </Link>
                <Link href="/" className="hover:text-black block">
                  Designer Salower Suit
                </Link>
              </div>
            )}

            {/* BOOTOM */}
            <div className={subitemClass} onClick={() => toggle("womenBottom")}>
              BOOTOM
              {open.womenBottom ? (
                <FaMinus className="text-xs" />
              ) : (
                <FaPlus className="text-xs" />
              )}
            </div>
            {open.womenBottom && (
              <div className="pl-4 space-y-1">
                <Link href="/" className="hover:text-black block">
                  Palazzo
                </Link>
                <Link href="/" className="hover:text-black block">
                  Leggings
                </Link>
                <Link href="/" className="hover:text-black block">
                  Jeans
                </Link>
                <Link href="/" className="hover:text-black block">
                  Trousers
                </Link>
              </div>
            )}

            {/* SKIRT */}
            <div className={subitemClass} onClick={() => toggle("womenSkirt")}>
              SKIRT
              {open.womenSkirt ? (
                <FaMinus className="text-xs" />
              ) : (
                <FaPlus className="text-xs" />
              )}
            </div>
            {open.womenSkirt && (
              <div className="pl-4 space-y-1">
                <Link href="/" className="hover:text-black block">
                  Mini Skirt
                </Link>
                <Link href="/" className="hover:text-black block">
                  Midi Skirt
                </Link>
                <Link href="/" className="hover:text-black block">
                  Maxi Skirt
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      {/* Women end */}

      {/* Women end */}
    </div>
  );
}
