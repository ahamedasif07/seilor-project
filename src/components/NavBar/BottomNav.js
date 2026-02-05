"use client";
// navigationData.js - All navigation menu items in structured format

import newAraivleDpImgOne from "../../../public/images/project-sailor-home-page008.jpg";
import newAraivleDpImgTow from "../../../public/images/project-sailor-home-page010.jpg";
import newAraivleDpImgTheree from "../../../public/images/project-sailor-home-page011.jpg";
import summweDpimgOne from "../../../public/images/project-sailor-home-page005.jpg";
import summweDpimgTwo from "../../../public/images/project-sailor-home-page006.jpg";
import summweDpimgTheree from "../../../public/images/project-sailor-home-page007.jpg";
import menDpImgOne from "../../../public/images/project-sailor-home-page011.jpg";
import menDpImgTwo from "../../../public/images/project-sailor-home-page012.jpg";
import menDpImgTheree from "../../../public/images/project-sailor-home-page013.jpg";
import womenDpImgOne from "../../../public/images/project-sailor-home-page014.jpg";
import womenDpImgTwo from "../../../public/images/project-sailor-home-page015.jpg";
import womenDpImgTheree from "../../../public/images/project-sailor-home-page016.jpg";
import kisDpImgOne from "../../../public/images/project-sailor-home-page017.jpg";
import kidDpImgTwo from "../../../public/images/project-sailor-home-page018.jpg";
import kidDpImgTheree from "../../../public/images/project-sailor-home-page019.jpg";
import newbronDpImgOne from "../../../public/images/project-sailor-home-page020.jpg";
import newbronDpImgTwo from "../../../public/images/project-sailor-home-page021.jpg";
import newbronDpImgTheree from "../../../public/images/project-sailor-home-page022.jpg";
import footwareDpImgOne from "../../../public/images/project-sailor-home-page023.jpg";
import footwareDpImgTwo from "../../../public/images/project-sailor-home-page024.jpg";
import footwareDpImgTheree from "../../../public/images/project-sailor-home-page025.jpg";
import accDpImgOne from "../../../public/images/project-sailor-home-page026.jpg";
import accDpImgTow from "../../../public/images/project-sailor-home-page027.jpg";
import accDpImgTheree from "../../../public/images/project-sailor-home-page028.jpg";

import Image from "next/image";
import Link from "next/link";

const BottomNav = () => {
  const navigationData = [
    {
      id: 1,
      title: "Summer Collection/25",
      link: "/summer-collection",
      dropdownClass: "left-108",
      images: {
        left: summweDpimgOne,
        rightImages: [summweDpimgTwo, summweDpimgTheree],
      },
      columns: [
        {
          items: [
            {
              title: "Men Summer Comfort",
              link: "/summer-collection/men-summer-comfort",
              isBold: true,
            },
          ],
        },
        {
          items: [
            {
              title: "Women Summer Comfort",
              link: "/summer-collection/women-summer-comfort",
              isBold: true,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "NEW ARRIVAL/25",
      link: "/new-arrivle",
      dropdownClass: "left-58",
      images: {
        left: newAraivleDpImgOne,
        rightImages: [newAraivleDpImgTow, newAraivleDpImgTheree],
      },
      gridCols: 4,
      columns: [
        {
          category: "MEN",
          sections: [
            {
              title: "PANJABI",
              link: "/new-arrivle/panjabi",
              items: [
                { title: "CLASSIC", link: "/new-arrivle/panjabi/classic" },
                { title: "FUSION", link: "/new-arrivle/panjabi/fusion" },
                {
                  title: "KABLI SUIT",
                  link: "/new-arrivle/panjabi/kabli-suit",
                },
              ],
            },
            {
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
              title: "POLOS",
              items: [
                {
                  title: "KNIT BASIC POLO",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
                {
                  title: "KNIT FASHION POLO",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
                {
                  title: "KABLI SUIT",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
              ],
            },
          ],
        },
        {
          category: "WOMEN",
          sections: [
            {
              items: [
                {
                  title: "KURTI",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
                {
                  title: "LONG KURTI",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
                {
                  title: "SALWAR SUIT",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
                {
                  title: "GOWN",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
                {
                  title: "2 PCE",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
                {
                  title: "LONG TOP",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
                {
                  title: "SHORT TOP",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
              ],
            },
          ],
        },
        {
          category: "FOOTWEAR",
          sections: [
            {
              items: [
                {
                  title: "CASUAL SHOE",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
                {
                  title: "FASHION LOAFER",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
                {
                  title: "SANDAL",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
                {
                  title: "FASHION SNEAKER",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
                {
                  title: "FORMAL SHOE",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
              ],
            },
          ],
        },
        {
          category: "KIDS",
          sections: [
            {
              items: [
                {
                  title: "NEWBORN",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
                {
                  title: "BOY'S COLLECTION",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
                {
                  title: "NEWBORN BOY'S COLLECTION",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
                {
                  title: "GIRL'S COLLECTION",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
                {
                  title: "NEWBORN GIRL'S COLLECTION",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
                {
                  title: "KID'S",
                  link: "/new-arrivle/shirt/fashion-express-shirt",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "MEN'S",
      link: "/men",
      dropdownClass: "left-22",
      images: {
        left: menDpImgOne,
        rightImages: [menDpImgTwo, menDpImgTheree],
      },
      columns: [
        {
          sections: [
            {
              title: "ACTIVE WEAR",
            },
            {
              title: "SHIRT",
              items: [
                { title: "BUSINESS FORMAL SHIRT" },
                { title: "EXECUTIVE FORMAL SHIRT" },
                { title: "FASHION EXPRESS SHIRT" },
                { title: "KNIT DRESS SHIRT" },
                { title: "SMART CASUAL SHIRT" },
                { title: "CASUAL SHIRT" },
                { title: "CASUAL SHIRT (H/S)" },
                { title: "KNIT CASUAL SHIRT (H/S)" },
              ],
            },
            {
              title: "PANJABI",
              items: [
                { title: "CLASSIC" },
                { title: "FUSION" },
                { title: "KABLI SUIT" },
              ],
            },
          ],
        },
        {
          sections: [
            {
              title: "FASTIVE SPORT LIGHT",
            },
            {
              title: "POLOS",
              items: [
                { title: "KNIT BASIC POLO" },
                { title: "KNIT FASHION POLO" },
                { title: "KABLI SUIT" },
              ],
            },
            {
              title: "T-SHIRTS",
              items: [
                { title: "SPORT T-SHIRTS" },
                { title: "REGLURE T-SHIRTS" },
              ],
            },
          ],
        },
        {
          sections: [
            {
              title: "BOOTOM",
              items: [
                { title: "CHINO TROUSER" },
                { title: "DENIM TROUSER" },
                { title: "SANDAL" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "WOMEN'S",
      link: "/women",
      dropdownClass: "left-5",
      images: {
        left: womenDpImgOne,
        rightImages: [womenDpImgTwo, womenDpImgTheree],
      },
      columns: [
        {
          sections: [
            {
              title: "TOP",
            },
            {
              title: "SHIRT",
              items: [
                { title: "CROP TOP" },
                { title: "SHORT TOP" },
                { title: "LONG TOP" },
              ],
            },
          ],
        },
        {
          sections: [
            { title: "KAFTAN" },
            { title: "2 PEC" },
            { title: "SHIRT" },
            { title: "SALOWER SUIT" },
          ],
        },
        {
          sections: [
            {
              title: "BOOTOM",
              items: [{ title: "SKIRT" }],
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "KID'S",
      link: "/kids",
      dropdownClass: "-left-19",
      images: {
        left: kisDpImgOne,
        rightImages: [kidDpImgTwo, kidDpImgTheree],
      },
      columns: [
        {
          sections: [
            {
              title: "BOY'S SET",
              items: [
                { title: "BOY'S PREMIUM PANJABI SET" },
                { title: "BOY'S KABLI SUIT" },
              ],
            },
            {
              title: "BOY'S TOP",
              items: [
                { title: "BOY'S PANJABI" },
                { title: "BOY'S TWIN TOP" },
                { title: "BOY'S CASUAL SHIRT" },
                { title: "BOY'S T-SHIRT" },
                { title: "BOY'S HENLEY" },
                { title: "BOY'S POLO" },
              ],
            },
          ],
        },
        {
          sections: [],
        },
        {
          sections: [
            {
              title: "GIRL'S SET",
              items: [
                { title: "GIRL'S TOP WITH SKIRT" },
                { title: "GIRL'S TOP BOTTOM" },
                { title: "GIRL'S SALWAR SUIT" },
                { title: "GIRL'S 2 PCS" },
              ],
            },
            {
              title: "GIRL'S SET",
              items: [
                { title: "GIRL'S T-SHIRT" },
                { title: "GIRL'S PARTY DRESS" },
                { title: "GIRL'S KURTI" },
                { title: "GIRL'S TOPS" },
                { title: "GIRL'S FROCK" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 6,
      title: "NEWBRON",
      link: "/newborn",
      dropdownClass: "-left-35",
      images: {
        left: newbronDpImgOne,
        rightImages: [newbronDpImgTwo, newbronDpImgTheree],
      },
      gridCols: 4,
      columns: [
        {
          sections: [
            {
              title: "NEWBORN BOY'S TOP",
              items: [
                { title: "NB BOY'S CASUAL SHIRT" },
                { title: "NB BOY'S NIMA" },
              ],
            },
          ],
        },
        {
          sections: [
            {
              title: "NEWBORN BOY'S BOTTOM",
              items: [{ title: "NB BOY'S SHORT PANT" }],
            },
          ],
        },
        {
          sections: [
            {
              title: "NEWBORN GIRL'S SET",
              items: [
                { title: "NB GIRLS SALWAR SUIT" },
                { title: "NB GIRLS TOP BOTTOM" },
              ],
            },
            {
              title: "NEWBORN GIRL'S TOP",
              items: [
                { title: "NB GIRLS FROCK" },
                { title: "NB GIRLS PARTY DRESS" },
                { title: "NB GIRLS NIMA" },
                { title: "NB GIRLS T-SHIRT" },
              ],
            },
          ],
        },
        {
          sections: [
            {
              title: "NEWBORN GIRL'S BOTTOM",
            },
          ],
        },
      ],
    },
    {
      id: 7,
      title: "FOOTWEAR",
      link: "/footwear",
      dropdownClass: "-left-59",
      images: {
        left: footwareDpImgOne,
        rightImages: [footwareDpImgTwo, footwareDpImgTheree],
      },
      gridCols: 4,
      columns: [
        {
          sections: [
            {
              title: "MEN'S FOOTWEAR",
              items: [
                { title: "MEN'S HIGH ANKLE BOOT" },
                { title: "MEN'S HIGH ANKLE SNEAKER" },
                { title: "MEN'S CASUAL SHOE" },
                { title: "MEN'S SNEAKER" },
                { title: "MEN'S SANDAL" },
                { title: "MEN'S FORMAL SHOE" },
                { title: "MEN'S LOAFER" },
              ],
            },
          ],
        },
        {
          sections: [
            {
              title: "WOMEN'S FOOTWEAR",
              items: [
                { title: "BLOCK HEEL SLIDE SANDAL" },
                { title: "BALLERINA SHOE" },
                { title: "WOMENS SHOE" },
                { title: "WOMEN'S SANDAL" },
                { title: "WOMEN'S SNEAKER" },
              ],
            },
          ],
        },
        {
          sections: [
            {
              title: "BOY'S FOOTWEAR",
              items: [{ title: "BOY'S SNEAKER" }],
            },
            {
              title: "GIRL'S FOOTWEAR",
              items: [{ title: "GIRL'S SNEAKER" }],
            },
          ],
        },
        {
          sections: [
            {
              title: "NEWBORN GIRL'S BOTTOM",
            },
          ],
        },
      ],
    },
    {
      id: 8,
      title: "ACCESSORIES",
      link: "/accessories",
      dropdownClass: "-left-85",
      images: {
        left: accDpImgOne,
        rightImages: [accDpImgTow, accDpImgTheree],
      },
      gridCols: 4,
      columns: [
        {
          sections: [
            {
              title: "MEN'sS BAG",
              items: [{ title: "POUCH BAG" }, { title: "MEN'S LEPTOP BAG" }],
            },
          ],
        },
        {
          sections: [
            {
              title: "WOMEN'S BAG",
              items: [
                { title: "PARTY BAG" },
                { title: "SHOLDER BAG" },
                { title: "HAND BAG" },
              ],
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="hidden lg:block">
      <div className="py-2">
        <div className="flex items-center justify-center gap-6">
          {navigationData.map((navItem) => (
            <div key={navItem.id} className="relative group">
              {/* Trigger */}
              <Link href={navItem.link}>
                <h3 className="text-[15px] font-semibold text-gray-700 cursor-pointer uppercase">
                  {navItem.title}
                </h3>
              </Link>

              {/* Dropdown */}
              <div
                className={`absolute ${navItem.dropdownClass} transform -translate-x-1/2 z-[1000] px-[10px] w-[99vw] top-full py-2 rounded-sm mt-[7px] bg-white text-gray-400 shadow-lg duration-300 flex flex-col items-start opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all`}
              >
                <div className="mx-auto w-full px-2 flex flex-col md:flex-row justify-between gap-6 items-start">
                  {/* Left Image */}
                  <div className="w-full md:w-1/4 shrink-0">
                    <div className="relative w-2/3 h-[300px] lg:h-[400px]">
                      <Image
                        src={navItem.images.left}
                        alt="Left"
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* Grid Content */}
                  <div
                    className={`grid grid-cols-2 ${
                      navItem.gridCols === 4
                        ? "md:grid-cols-4"
                        : "md:grid-cols-3"
                    } gap-6 w-full md:w-2/4 text-[14px] text-gray-700`}
                  >
                    {navItem.columns.map((column, colIndex) => (
                      <div key={colIndex}>
                        {/* Category Heading (যেমন: MEN, WOMEN) */}
                        {column.category && (
                          <h4 className="mb-2 font-semibold text-left">
                            {column.category}
                          </h4>
                        )}

                        {/* Sections (যেমন: SHIRT, PANJABI, POLOS) */}
                        {column.sections &&
                          column.sections.map((section, secIndex) => (
                            <div key={secIndex}>
                              {/* Section Title */}
                              {section.title && (
                                <h4 className="my-2 font-semibold text-left">
                                  {section.link ? (
                                    <Link href={section.link}>
                                      {section.title}
                                    </Link>
                                  ) : (
                                    section.title
                                  )}
                                </h4>
                              )}

                              {/* Section Items */}
                              {section.items && section.items.length > 0 && (
                                <ul className="space-y-1">
                                  {section.items.map((item, itemIndex) => (
                                    <li
                                      key={itemIndex}
                                      className="list-none mb-2 text-left cursor-pointer uppercase text-[12px] font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200"
                                    >
                                      {item.link ? (
                                        <Link href={item.link}>
                                          {item.title}
                                        </Link>
                                      ) : (
                                        item.title
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}

                        {/* Direct Items (Summer Collection এর জন্য) */}
                        {column.items && column.items.length > 0 && (
                          <ul className="space-y-1">
                            {column.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="list-none mb-2 text-left cursor-pointer uppercase font-semibold hover:text-red-600 hover:translate-x-1 transition-transform duration-200"
                              >
                                {item.link ? (
                                  <Link href={item.link}>{item.title}</Link>
                                ) : (
                                  item.title
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Right Images */}
                  <div className="w-full md:w-1/4 flex gap-3 shrink-0">
                    {navItem.images.rightImages.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative w-1/2 h-[200px] lg:h-[300px]"
                      >
                        <Image
                          src={img}
                          alt={`Right ${imgIndex + 1}`}
                          layout="fill"
                          objectFit="cover"
                          priority
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
