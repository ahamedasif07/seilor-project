"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaPlus, FaMinus } from "react-icons/fa";

// সব Menu Data এক জায়গায়
const sidebarMenuData = [
  {
    id: "summer",
    title: "SUMMER COLLECTION",
    link: "/summer-collection",
    items: [
      {
        title: "Women's Summer Comfort",
        link: "/summer-collection/women-summer-comfort",
      },
      {
        title: "Men's Summer Comfort",
        link: "/summer-collection/men-summer-comfort",
      },
      {
        title: "ALL SUMMER COLLECTION",
        link: "/summer-collection",
      },
    ],
  },
  {
    id: "newArrival",
    title: "NEW ARRIVAL/25",
    link: "/new-arrivle",
    submenu: [
      {
        id: "men",
        title: "MEN",
        subsections: [
          {
            title: "ACTIVE WEAR",
            link: "/",
          },
          {
            id: "menShirt",
            title: "SHIRT",
            link: "/new-arrivle/panjabi/shirt",
            items: [
              {
                title: "BUSINESS FORMAL SHIRT",
                link: "/new-arrivle/shirt/business-formal-shirt",
              },
              {
                title: "EXECUTIVE FORMAL SHIRT",
                link: "/new-arrivle/shirt/executive-formal-shirt",
              },
              {
                title: "FASHION EXPRESS SHIRT",
                link: "/new-arrivle/shirt/fashion-express-shirt",
              },
              {
                title: "KNIT DRESS SHIRT",
                link: "/new-arrivle/shirt/knit-dress-shirt",
              },
              {
                title: "SMART CASUAL SHIRT",
                link: "/men/shirt/smart-casual-shirt",
              },
              { title: "CASUAL SHIRT", link: "/men/shirt/casual-shirt" },
              {
                title: "CASUAL SHIRT (H/S)",
                link: "/men/shirt/casual-shirt-hs",
              },
              {
                title: "KNIT CASUAL SHIRT (H/S)",
                link: "/men/shirt/knit-casual-shirt-hs",
              },
            ],
          },
          {
            id: "menPanjabi",
            title: "PANJABI",
            items: [
              { title: "CLASSIC", link: "/" },
              { title: "FUSION", link: "/" },
              { title: "KABLI SUIT", link: "/" },
              { title: "FASTIVE SPORT LIGHT", link: "/" },
            ],
          },
          {
            id: "menPolo",
            title: "POLOS",
            items: [
              { title: "KNIT BASIC POLO", link: "/" },
              { title: "KNIT FASHION POLO", link: "/" },
              { title: "KABLI SUIT", link: "/" },
            ],
          },
          {
            id: "menTshirt",
            title: "T-SHIRTS",
            items: [
              { title: "SPORT T-SHIRTS", link: "/" },
              { title: "REGLURE T-SHIRTS", link: "/" },
            ],
          },
          {
            id: "menBottom",
            title: "BOTTOM",
            items: [
              { title: "CHINO TROUSER", link: "/" },
              { title: "DENIM TROUSER", link: "/" },
            ],
          },
          {
            title: "SANDAL",
            link: "/",
          },
        ],
      },
      {
        id: "women",
        title: "WOMEN",
        items: [
          { title: "KURTI", link: "/" },
          { title: "LONG KURTI", link: "/" },
          { title: "SALWAR SUIT", link: "/" },
          { title: "GOWN", link: "/" },
          { title: "2 PCE", link: "/" },
          { title: "LONG TOP", link: "/" },
          { title: "SHORT TOP", link: "/" },
        ],
      },
      {
        id: "footwear",
        title: "FOOTWEAR",
        items: [
          { title: "CASUAL SHOE", link: "/" },
          { title: "FASHION LOAFER", link: "/" },
          { title: "SANDAL", link: "/" },
          { title: "FASHION SNEAKER", link: "/" },
          { title: "FORMAL SHOE", link: "/" },
        ],
      },
      {
        id: "kids",
        title: "KIDS",
        items: [
          { title: "BOY'S COLLECTION", link: "/" },
          { title: "GIRL'S COLLECTION", link: "/" },
        ],
      },
      {
        id: "newborn",
        title: "NEWBORN",
        items: [
          { title: "NEWBORN BOY'S COLLECTION", link: "/" },
          { title: "NEWBORN GIRL'S COLLECTION", link: "/" },
        ],
      },
    ],
  },
  {
    id: "menMain",
    title: "MEN",
    submenu: [
      {
        title: "ACTIVE WEAR",
        link: "/",
      },
      {
        id: "summerMenShirt",
        title: "SHIRT",
        items: [
          { title: "BUSINESS FORMAL SHIRT", link: "/" },
          { title: "EXECUTIVE FORMAL SHIRT", link: "/" },
          { title: "FASHION EXPRESS SHIRT", link: "/" },
          { title: "KNIT DRESS SHIRT", link: "/" },
          { title: "SMART CASUAL SHIRT", link: "/" },
          { title: "CASUAL SHIRT", link: "/" },
          { title: "CASUAL SHIRT (H/S)", link: "/" },
          { title: "KNIT CASUAL SHIRT (H/S)", link: "/" },
        ],
      },
      {
        id: "summerMenPanjabi",
        title: "PANJABI",
        items: [
          { title: "CLASSIC", link: "/" },
          { title: "FUSION", link: "/" },
          { title: "KABLI SUIT", link: "/" },
          { title: "FASTIVE SPORT LIGHT", link: "/" },
        ],
      },
      {
        id: "summerMenPolo",
        title: "POLOS",
        items: [
          { title: "KNIT BASIC POLO", link: "/" },
          { title: "KNIT FASHION POLO", link: "/" },
          { title: "KABLI SUIT", link: "/" },
        ],
      },
      {
        id: "summerMenTshirt",
        title: "T-SHIRTS",
        items: [
          { title: "SPORT T-SHIRTS", link: "/" },
          { title: "REGLURE T-SHIRTS", link: "/" },
        ],
      },
      {
        id: "summerMenBottom",
        title: "BOTTOM",
        items: [
          { title: "CHINO TROUSER", link: "/" },
          { title: "DENIM TROUSER", link: "/" },
        ],
      },
      {
        title: "SANDAL",
        link: "/",
      },
    ],
  },
  {
    id: "womenMain",
    title: "WOMEN",
    submenu: [
      {
        id: "womenTop",
        title: "TOP",
        items: [
          { title: "Crop Top", link: "/" },
          { title: "Short Top", link: "/" },
          { title: "Long Top", link: "/" },
        ],
      },
      {
        id: "womenShirt",
        title: "SHIRT",
        items: [
          { title: "Casual Shirt", link: "/" },
          { title: "Formal Shirt", link: "/" },
          { title: "Party Shirt", link: "/" },
        ],
      },
      {
        id: "womenKaftan",
        title: "KAFTAN",
        items: [
          { title: "Classic Kaftan", link: "/" },
          { title: "Embroidered Kaftan", link: "/" },
        ],
      },
      {
        id: "women2Pec",
        title: "2 PEC",
        items: [
          { title: "Plain 2 Pec", link: "/" },
          { title: "Printed 2 Pec", link: "/" },
        ],
      },
      {
        id: "womenSalowerSuit",
        title: "SALOWER SUIT",
        items: [
          { title: "Classic Salower Suit", link: "/" },
          { title: "Designer Salower Suit", link: "/" },
        ],
      },
      {
        id: "womenBottom",
        title: "BOOTOM",
        items: [
          { title: "Palazzo", link: "/" },
          { title: "Leggings", link: "/" },
          { title: "Jeans", link: "/" },
          { title: "Trousers", link: "/" },
        ],
      },
      {
        id: "womenSkirt",
        title: "SKIRT",
        items: [
          { title: "Mini Skirt", link: "/" },
          { title: "Midi Skirt", link: "/" },
          { title: "Maxi Skirt", link: "/" },
        ],
      },
    ],
  },
  {
    id: "kidsMain",
    title: "KIDS",
    submenu: [
      {
        id: "boysSet",
        title: "BOY'S SET",
        items: [
          { title: "BOY'S PREMIUM PANJABI SET", link: "/" },
          { title: "BOY'S KABLI SUIT", link: "/" },
        ],
      },
      {
        id: "boysTop",
        title: "BOY'S TOP",
        items: [
          { title: "BOY'S PANJABI", link: "/" },
          { title: "BOY'S TWIN TOP", link: "/" },
          { title: "BOY'S CASUAL SHIRT", link: "/" },
          { title: "BOY'S T-SHIRT", link: "/" },
          { title: "BOY'S HENLEY", link: "/" },
          { title: "BOY'S POLO", link: "/" },
        ],
      },
      {
        id: "girlsSet",
        title: "GIRL'S SET",
        items: [
          { title: "GIRL'S TOP WITH SKIRT", link: "/" },
          { title: "GIRL'S TOP BOTTOM", link: "/" },
          { title: "GIRL'S SALWAR SUIT", link: "/" },
          { title: "GIRL'S 2 PCS", link: "/" },
        ],
      },
      {
        id: "girlsTshirt",
        title: "GIRL'S T-SHIRT",
        items: [
          { title: "GIRL'S PARTY DRESS", link: "/" },
          { title: "GIRL'S KURTI", link: "/" },
          { title: "GIRL'S TOPS", link: "/" },
          { title: "GIRL'S FROCK", link: "/" },
        ],
      },
    ],
  },
  {
    id: "newbornMain",
    title: "NEWBORN",
    submenu: [
      {
        id: "newbornBoysTop",
        title: "NEWBORN BOY'S TOP",
        items: [
          { title: "NB BOY'S CASUAL SHIRT", link: "/" },
          { title: "NB BOY'S NIMA", link: "/" },
        ],
      },
      {
        id: "newbornBoysBottom",
        title: "NEWBORN BOY'S BOTTOM",
        items: [{ title: "NB BOY'S SHORT PANT", link: "/" }],
      },
      {
        id: "newbornGirlsSet",
        title: "NEWBORN GIRL'S SET",
        items: [
          { title: "NB GIRLS SALWAR SUIT", link: "/" },
          { title: "NB GIRLS TOP BOTTOM", link: "/" },
        ],
      },
      {
        id: "newbornGirlsTop",
        title: "NEWBORN GIRL'S TOP",
        items: [
          { title: "NB GIRLS FROCK", link: "/" },
          { title: "NB GIRLS PARTY DRESS", link: "/" },
          { title: "NB GIRLS NIMA", link: "/" },
          { title: "NB GIRLS T-SHIRT", link: "/" },
        ],
      },
      {
        id: "newbornGirlsBottom",
        title: "NEWBORN GIRL'S BOTTOM",
        items: [],
      },
    ],
  },
  {
    id: "footwearMain",
    title: "FOOTWEAR",
    submenu: [
      {
        id: "mensFootwear",
        title: "MEN'S FOOTWEAR",
        items: [
          { title: "MEN'S HIGH ANKLE BOOT", link: "/" },
          { title: "MEN'S HIGH ANKLE SNEAKER", link: "/" },
          { title: "MEN'S CASUAL SHOE", link: "/" },
          { title: "MEN'S SNEAKER", link: "/" },
          { title: "MEN'S SANDAL", link: "/" },
          { title: "MEN'S FORMAL SHOE", link: "/" },
          { title: "MEN'S LOAFER", link: "/" },
        ],
      },
      {
        id: "womensFootwear",
        title: "WOMEN'S FOOTWEAR",
        items: [
          { title: "BLOCK HEEL SLIDE SANDAL", link: "/" },
          { title: "BALLERINA SHOE", link: "/" },
          { title: "WOMENS SHOE", link: "/" },
          { title: "WOMEN'S SANDAL", link: "/" },
          { title: "WOMEN'S SNEAKER", link: "/" },
        ],
      },
      {
        id: "boysFootwear",
        title: "BOY'S FOOTWEAR",
        items: [{ title: "BOY'S SNEAKER", link: "/" }],
      },
      {
        id: "girlsFootwear",
        title: "GIRL'S FOOTWEAR",
        items: [{ title: "GIRL'S SNEAKER", link: "/" }],
      },
    ],
  },
  {
    id: "accessories",
    title: "ACCESSORIES",
    submenu: [
      {
        id: "mensBag",
        title: "MEN's BAG",
        items: [
          { title: "POUCH BAG", link: "/" },
          { title: "MEN'S LEPTOP BAG", link: "/" },
        ],
      },
      {
        id: "womensBag",
        title: "WOMEN'S BAG",
        items: [
          { title: "PARTY BAG", link: "/" },
          { title: "SHOLDER BAG", link: "/" },
          { title: "HAND BAG", link: "/" },
        ],
      },
    ],
  },
];

export default function SidebarMenu({ isOpen, setIsOpen }) {
  const [openStates, setOpenStates] = useState({});
  const sidebarRef = useRef(null);

  const toggle = (key) => {
    setOpenStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  const activeClass = "bg-gray-800 text-white";
  const itemClass =
    "flex justify-between items-center px-4 py-3 cursor-pointer";
  const submenuClass = "pl-6 pr-4 py-2 text-gray-700 space-y-2";
  const subitemClass = "cursor-pointer hover:text-black flex justify-between";

  // Recursive component for rendering nested menus
  const RenderSubmenu = ({ items, parentId, level = 0 }) => {
    return (
      <div className={`${level === 0 ? submenuClass : "pl-4 space-y-2"} `}>
        {items.map((item, index) => {
          const itemId = item.id || `${parentId}-${index}`;
          const hasSubItems =
            item.items?.length > 0 || item.subsections?.length > 0;

          return (
            <div key={itemId}>
              {hasSubItems ? (
                <>
                  <div className={subitemClass} onClick={() => toggle(itemId)}>
                    {item.link ? (
                      <Link href={item.link}>{item.title}</Link>
                    ) : (
                      <span>{item.title}</span>
                    )}
                    {openStates[itemId] ? (
                      <FaMinus className="text-xs" />
                    ) : (
                      <FaPlus className="text-xs" />
                    )}
                  </div>
                  {openStates[itemId] && (
                    <div className="pl-4 space-y-1">
                      {item.subsections &&
                        item.subsections.map((subsection, subIndex) => {
                          const subId =
                            subsection.id || `${itemId}-sub-${subIndex}`;
                          const hasItems = subsection.items?.length > 0;

                          return (
                            <div key={subId}>
                              {hasItems ? (
                                <>
                                  <div
                                    className={subitemClass}
                                    onClick={() => toggle(subId)}
                                  >
                                    {subsection.link ? (
                                      <Link href={subsection.link}>
                                        {subsection.title}
                                      </Link>
                                    ) : (
                                      <span>{subsection.title}</span>
                                    )}
                                    {openStates[subId] ? (
                                      <FaMinus className="text-xs" />
                                    ) : (
                                      <FaPlus className="text-xs" />
                                    )}
                                  </div>
                                  {openStates[subId] && (
                                    <div className="pl-4 space-y-1">
                                      {subsection.items.map(
                                        (subItem, subItemIndex) => (
                                          <Link
                                            key={subItemIndex}
                                            href={subItem.link}
                                            className="hover:text-black block"
                                          >
                                            {subItem.title}
                                          </Link>
                                        ),
                                      )}
                                    </div>
                                  )}
                                </>
                              ) : (
                                <Link
                                  href={subsection.link || "/"}
                                  className="hover:text-black block"
                                >
                                  {subsection.title}
                                </Link>
                              )}
                            </div>
                          );
                        })}
                      {item.items &&
                        item.items.map((subItem, subItemIndex) => (
                          <Link
                            key={subItemIndex}
                            href={subItem.link}
                            className="hover:text-black block"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.link || "/"}
                  className="hover:text-black block"
                >
                  {item.title}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-full w-full overflow-y-scroll max-w-xs bg-white border-r-2 px-4 py-8 text-sm font-medium z-50 transform transition-all duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div>
        {sidebarMenuData.map((menuItem) => (
          <div key={menuItem.id} className="border-b border-gray-300">
            <div
              onClick={() => toggle(menuItem.id)}
              className={`${itemClass} ${
                openStates[menuItem.id] ? activeClass : "text-gray-800"
              }`}
            >
              {menuItem.link ? (
                <Link href={menuItem.link}>
                  <span>{menuItem.title}</span>
                </Link>
              ) : (
                <span>{menuItem.title}</span>
              )}
              {openStates[menuItem.id] ? <FaMinus /> : <FaPlus />}
            </div>

            {openStates[menuItem.id] && (
              <>
                {menuItem.items && (
                  <div className={submenuClass}>
                    {menuItem.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className="hover:text-black block"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}

                {menuItem.submenu && (
                  <RenderSubmenu
                    items={menuItem.submenu}
                    parentId={menuItem.id}
                  />
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
