"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function SidebarMenu({ isOpen, setIsOpen }) {
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
  const sidebarRef = useRef(null);

  // Close sidebar on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const activeClass = "bg-gray-800 text-white";
  const itemClass =
    "flex justify-between items-center px-4 py-3 cursor-pointer";
  const submenuClass = "pl-6 pr-4 py-2 text-gray-700 space-y-2";
  const subitemClass = "cursor-pointer hover:text-black flex justify-between";

  return (
    <div
      ref={sidebarRef}
      className={`
          fixed top-0 left-0 h-full w-full  max-w-xs bg-white border-r-2 px-4 py-8 text-sm font-medium z-50
          transform transition-all duration-500 ease-in-out
          ${isOpen ? "translate-x-0 " : "-translate-x-full "}
        `}
    >
      <div>
        {/* SUMMER COLLECTION  start*/}
        <div className=" border-b border-gray-300">
          <div
            onClick={() => toggle("summer")}
            className={`${itemClass} ${
              open.summer ? activeClass : "text-gray-800"
            }`}
          >
            <span> SUMMER COLLECTION</span>
            {open.summer ? <FaMinus /> : <FaPlus />}
          </div>
          {open.summer && (
            <div className={submenuClass}>
              <Link
                href="/summer-collection/women-summer-comfort"
                className="hover:text-black block"
              >
                Women's Summer Comfort
              </Link>
              <Link
                href="/summer-collection/men-summer-comfort"
                className="hover:text-black block"
              >
                Men's Summer Comfort
              </Link>
              <Link
                href="/summer-collection"
                className="hover:text-black block"
              >
                ALL SUMMER COLLECTION
              </Link>
            </div>
          )}
        </div>
        {/* SUMMER COLLECTION  end*/}

        {/* NEW ARRIVAL start*/}
        <div className=" border-b border-gray-300">
          <div
            onClick={() => toggle("newArrival")}
            className={`${itemClass} ${
              open.newArrival ? activeClass : "text-gray-800"
            }`}
          >
            <Link href="/new-arrivle">
              <h3>NEW ARRIVAL/25</h3>
            </Link>
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
                    <Link href="/new-arrivle/panjabi/shirt">SHIRT</Link>

                    {open.menShirt ? (
                      <FaMinus className="text-xs" />
                    ) : (
                      <FaPlus className="text-xs" />
                    )}
                  </div>
                  {open.menShirt && (
                    <div className="pl-4 space-y-1">
                      <Link
                        href="/new-arrivle/shirt/business-formal-shirt"
                        className="hover:text-black block"
                      >
                        BUSINESS FORMAL SHIRT
                      </Link>
                      <Link
                        href="/new-arrivle/shirt/executive-formal-shirt"
                        className="hover:text-black block"
                      >
                        EXECUTIVE FORMAL SHIRT
                      </Link>
                      <Link
                        href="/new-arrivle/shirt/fashion-express-shirt"
                        className="hover:text-black block"
                      >
                        FASHION EXPRESS SHIRT
                      </Link>
                      <Link
                        href="/new-arrivle/shirt/knit-dress-shirt"
                        className="hover:text-black block"
                      >
                        KNIT DRESS SHIRT
                      </Link>
                      <Link
                        href="/men/shirt/smart-casual-shirt"
                        className="hover:text-black block"
                      >
                        SMART CASUAL SHIRT
                      </Link>
                      <Link
                        href="/men/shirt/casual-shirt"
                        className="hover:text-black block"
                      >
                        CASUAL SHIRT
                      </Link>
                      <Link
                        href="/men/shirt/casual-shirt-hs"
                        className="hover:text-black block"
                      >
                        CASUAL SHIRT (H/S)
                      </Link>
                      <Link
                        href="/men/shirt/knit-casual-shirt-hs"
                        className="hover:text-black block"
                      >
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
                  <div
                    className={subitemClass}
                    onClick={() => toggle("menPolo")}
                  >
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
        <div className=" border-b border-gray-300">
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
        <div className=" border-b border-gray-300">
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
              <div
                className={subitemClass}
                onClick={() => toggle("womenShirt")}
              >
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
              <div
                className={subitemClass}
                onClick={() => toggle("womenKaftan")}
              >
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
              <div
                className={subitemClass}
                onClick={() => toggle("womenBottom")}
              >
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
              <div
                className={subitemClass}
                onClick={() => toggle("womenSkirt")}
              >
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
        {/* Kids start */}
        <div className=" border-b border-gray-300">
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
              {/* BOY'S */}
              <div className={subitemClass} onClick={() => toggle("boysSet")}>
                BOY'S SET
                {open.boysSet ? (
                  <FaMinus className="text-xs" />
                ) : (
                  <FaPlus className="text-xs" />
                )}
              </div>
              {open.boysSet && (
                <div className="pl-4 space-y-1">
                  <Link href="/" className="hover:text-black block">
                    BOY'S PREMIUM PANJABI SET
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    BOY'S KABLI SUIT
                  </Link>
                </div>
              )}

              <div className={subitemClass} onClick={() => toggle("boysTop")}>
                BOY'S TOP
                {open.boysTop ? (
                  <FaMinus className="text-xs" />
                ) : (
                  <FaPlus className="text-xs" />
                )}
              </div>
              {open.boysTop && (
                <div className="pl-4 space-y-1">
                  <Link href="/" className="hover:text-black block">
                    BOY'S PANJABI
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    BOY'S TWIN TOP
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    BOY'S CASUAL SHIRT
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    BOY'S T-SHIRT
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    BOY'S HENLEY
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    BOY'S POLO
                  </Link>
                </div>
              )}

              {/* GIRL'S */}
              <div className={subitemClass} onClick={() => toggle("girlsSet")}>
                GIRL'S SET
                {open.girlsSet ? (
                  <FaMinus className="text-xs" />
                ) : (
                  <FaPlus className="text-xs" />
                )}
              </div>
              {open.girlsSet && (
                <div className="pl-4 space-y-1">
                  <Link href="/" className="hover:text-black block">
                    GIRL'S TOP WITH SKIRT
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    GIRL'S TOP BOTTOM
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    GIRL'S SALWAR SUIT
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    GIRL'S 2 PCS
                  </Link>
                </div>
              )}

              <div
                className={subitemClass}
                onClick={() => toggle("girlsTshirt")}
              >
                GIRL'S T-SHIRT
                {open.girlsTshirt ? (
                  <FaMinus className="text-xs" />
                ) : (
                  <FaPlus className="text-xs" />
                )}
              </div>
              {open.girlsTshirt && (
                <div className="pl-4 space-y-1">
                  <Link href="/" className="hover:text-black block">
                    GIRL'S PARTY DRESS
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    GIRL'S KURTI
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    GIRL'S TOPS
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    GIRL'S FROCK
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
        {/* Kids end */}
        {/* Newborn start */}
        <div className=" border-b border-gray-300">
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
              {/* NEWBORN BOY'S TOP */}
              <div
                className={subitemClass}
                onClick={() => toggle("newbornBoysTop")}
              >
                NEWBORN BOY'S TOP
                {open.newbornBoysTop ? (
                  <FaMinus className="text-xs" />
                ) : (
                  <FaPlus className="text-xs" />
                )}
              </div>
              {open.newbornBoysTop && (
                <div className="pl-4 space-y-1">
                  <Link href="/" className="hover:text-black block">
                    NB BOY'S CASUAL SHIRT
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    NB BOY'S NIMA
                  </Link>
                </div>
              )}

              {/* NEWBORN BOY'S BOTTOM */}
              <div
                className={subitemClass}
                onClick={() => toggle("newbornBoysBottom")}
              >
                NEWBORN BOY'S BOTTOM
                {open.newbornBoysBottom ? (
                  <FaMinus className="text-xs" />
                ) : (
                  <FaPlus className="text-xs" />
                )}
              </div>
              {open.newbornBoysBottom && (
                <div className="pl-4 space-y-1">
                  <Link href="/" className="hover:text-black block">
                    NB BOY'S SHORT PANT
                  </Link>
                </div>
              )}

              {/* NEWBORN GIRL'S SET */}
              <div
                className={subitemClass}
                onClick={() => toggle("newbornGirlsSet")}
              >
                NEWBORN GIRL'S SET
                {open.newbornGirlsSet ? (
                  <FaMinus className="text-xs" />
                ) : (
                  <FaPlus className="text-xs" />
                )}
              </div>
              {open.newbornGirlsSet && (
                <div className="pl-4 space-y-1">
                  <Link href="/" className="hover:text-black block">
                    NB GIRLS SALWAR SUIT
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    NB GIRLS TOP BOTTOM
                  </Link>
                </div>
              )}

              {/* NEWBORN GIRL'S TOP */}
              <div
                className={subitemClass}
                onClick={() => toggle("newbornGirlsTop")}
              >
                NEWBORN GIRL'S TOP
                {open.newbornGirlsTop ? (
                  <FaMinus className="text-xs" />
                ) : (
                  <FaPlus className="text-xs" />
                )}
              </div>
              {open.newbornGirlsTop && (
                <div className="pl-4 space-y-1">
                  <Link href="/" className="hover:text-black block">
                    NB GIRLS FROCK
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    NB GIRLS PARTY DRESS
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    NB GIRLS NIMA
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    NB GIRLS T-SHIRT
                  </Link>
                </div>
              )}

              {/* NEWBORN GIRL'S BOTTOM */}
              <div
                className={subitemClass}
                onClick={() => toggle("newbornGirlsBottom")}
              >
                NEWBORN GIRL'S BOTTOM
                {open.newbornGirlsBottom ? (
                  <FaMinus className="text-xs" />
                ) : (
                  <FaPlus className="text-xs" />
                )}
              </div>
              {open.newbornGirlsBottom && (
                <div className="pl-4 space-y-1">
                  {/* No sub-items provided for this, but can add if needed */}
                </div>
              )}
            </div>
          )}
        </div>
        {/* Newborn end */}
        {/* Footwear start */}
        <div className=" border-b border-gray-300">
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
              {/* MEN'S FOOTWEAR */}
              <div
                className={subitemClass}
                onClick={() => toggle("mensFootwear")}
              >
                MEN'S FOOTWEAR
                {open.mensFootwear ? (
                  <FaMinus className="text-xs" />
                ) : (
                  <FaPlus className="text-xs" />
                )}
              </div>
              {open.mensFootwear && (
                <div className="pl-4 space-y-1">
                  <Link href="/" className="hover:text-black block">
                    MEN'S HIGH ANKLE BOOT
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    MEN'S HIGH ANKLE SNEAKER
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    MEN'S CASUAL SHOE
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    MEN'S SNEAKER
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    MEN'S SANDAL
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    MEN'S FORMAL SHOE
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    MEN'S LOAFER
                  </Link>
                </div>
              )}

              {/* WOMEN'S FOOTWEAR */}
              <div
                className={subitemClass}
                onClick={() => toggle("womensFootwear")}
              >
                WOMEN'S FOOTWEAR
                {open.womensFootwear ? (
                  <FaMinus className="text-xs" />
                ) : (
                  <FaPlus className="text-xs" />
                )}
              </div>
              {open.womensFootwear && (
                <div className="pl-4 space-y-1">
                  <Link href="/" className="hover:text-black block">
                    BLOCK HEEL SLIDE SANDAL
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    BALLERINA SHOE
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    WOMENS SHOE
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    WOMEN'S SANDAL
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    WOMEN'S SNEAKER
                  </Link>
                </div>
              )}

              {/* BOY'S FOOTWEAR */}
              <div
                className={subitemClass}
                onClick={() => toggle("boysFootwear")}
              >
                BOY'S FOOTWEAR
                {open.boysFootwear ? (
                  <FaMinus className="text-xs" />
                ) : (
                  <FaPlus className="text-xs" />
                )}
              </div>
              {open.boysFootwear && (
                <div className="pl-4 space-y-1">
                  <Link href="/" className="hover:text-black block">
                    BOY'S SNEAKER
                  </Link>
                </div>
              )}

              {/* GIRL'S FOOTWEAR */}
              <div
                className={subitemClass}
                onClick={() => toggle("girlsFootwear")}
              >
                GIRL'S FOOTWEAR
                {open.girlsFootwear ? (
                  <FaMinus className="text-xs" />
                ) : (
                  <FaPlus className="text-xs" />
                )}
              </div>
              {open.girlsFootwear && (
                <div className="pl-4 space-y-1">
                  <Link href="/" className="hover:text-black block">
                    GIRL'S SNEAKER
                  </Link>
                </div>
              )}

              {/* NEWBORN GIRL'S BOTTOM */}
              <div
                className={subitemClass}
                onClick={() => toggle("newbornGirlsBottom")}
              >
                NEWBORN GIRL'S BOTTOM
                {open.newbornGirlsBottom ? (
                  <FaMinus className="text-xs" />
                ) : (
                  <FaPlus className="text-xs" />
                )}
              </div>
              {open.newbornGirlsBottom && (
                <div className="pl-4 space-y-1">
                  {/* No subitems, add if needed */}
                </div>
              )}
            </div>
          )}
        </div>
        {/* Footwear end */}
        {/* ACCESSORIES start */}
        <div className=" border-b border-gray-300">
          <div
            onClick={() => toggle("accessories")}
            className={`${itemClass} ${
              open.accessories ? activeClass : "text-gray-800"
            }`}
          >
            <span>ACCESSORIES</span>
            {open.accessories ? <FaMinus /> : <FaPlus />}
          </div>

          {open.accessories && (
            <div className={submenuClass}>
              {/* MEN's BAG */}
              <div className={subitemClass} onClick={() => toggle("mensBag")}>
                MEN's BAG
                {open.mensBag ? (
                  <FaMinus className="text-xs" />
                ) : (
                  <FaPlus className="text-xs" />
                )}
              </div>
              {open.mensBag && (
                <div className="pl-4 space-y-1">
                  <Link href="/" className="hover:text-black block">
                    POUCH BAG
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    MEN'S LEPTOP BAG
                  </Link>
                </div>
              )}

              {/* WOMEN'S BAG */}
              <div className={subitemClass} onClick={() => toggle("womensBag")}>
                WOMEN'S BAG
                {open.womensBag ? (
                  <FaMinus className="text-xs" />
                ) : (
                  <FaPlus className="text-xs" />
                )}
              </div>
              {open.womensBag && (
                <div className="pl-4 space-y-1">
                  <Link href="/" className="hover:text-black block">
                    PARTY BAG
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    SHOLDER BAG
                  </Link>
                  <Link href="/" className="hover:text-black block">
                    HAND BAG
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
        {/* ACCESSORIES end */}
      </div>
    </div>
  );
}
