"use client";
import { Slider } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import pageBanerDefutImg from "../../../public/images/project-sailor-home-page034.jpg";

const PageSideBar = ({ children, category, image = pageBanerDefutImg }) => {
  const [openSection, setOpenSection] = useState("");
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const categories = [
    "Latest Collection/25",
    "SUMMER COLLECTION/25",
    "BOISHAKH COLLECTION/2025",
    "NEW ARRIVAL/25",
    "MEN",
    "WOMEN",
    "KID'S",
    "NEWBORN",
    "FOOTWEAR",
    "ACCESSORIES",
    "SPRING 2025",
    "FESTIVE SPOT LIGHT",
    "KING COLLECTION",
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = ["Red", "Blue", "Green", "Black", "White"];
  const brands = ["sailor"];
  const fits = ["Slim Fit", "Regular Fit", "Loose Fit"];
  const fabrications = ["Cotton", "Polyester", "Linen", "Wool"];
  const embellishments = ["Printed", "Embroidery", "Beads"];
  const sleeveLengths = ["Short Sleeve", "Long Sleeve", "Sleeveless"];
  const stockAvailability = ["In Stock", "Out of Stock"];
  const itemSegments = ["Men's", "Women's", "Kids"];

  const sections = [
    { name: "Categories", items: categories },
    { name: "Size", items: sizes },
    { name: "Color", items: colors },
    { name: "Brand", items: brands },
    { name: "Fits", items: fits },
    { name: "Fabrication", items: fabrications },
    { name: "Embellishments", items: embellishments },
    { name: "Sleeve Length", items: sleeveLengths },
    { name: "Stock Availability", items: stockAvailability },
    { name: "Item Segments", items: itemSegments },
  ];

  return (
    <div>
      {/* page top part */}
      <div>
        <div className="relative w-full h-[250px]">
          <Image
            src={image}
            alt="page banner image"
            fill // makes the image take full width & height of parent
            style={{ objectFit: "cover" }} // replaces old objectFit prop
            priority
          />
        </div>
        <h2 className="bg-[#F6F6F6] py-5 md:px-8 px-4 text-[20px] font-bold text-[#4D4D4D]">
          {category ? category : null}
        </h2>
        {/* select menu */}
        <div className="flex items-center justify-end pr-10 py-5 gap-3">
          <label htmlFor="sort" className="text-gray-700 font-medium">
            Sort By
          </label>
          <select
            id="sort"
            className="border border-gray-300  px-3 py-2 text-gray-700 
               "
          >
            <option>Open this select menu</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
            <option>Name A to Z</option>
            <option>Name Z to A</option>
          </select>
        </div>
      </div>

      <aside className="w-68 bg-white border-t  border-gray-500 mx-5 my-2 h-screen ">
        {/*  Sections */}
        {sections.map((section, idx) => (
          <div key={idx} className="mt-4">
            <div
              className="flex justify-between items-center cursor-pointer "
              onClick={() => toggleSection(section.name)}
            >
              <h3 className="font-bold text-[16px] text-[#4D4D4D]">
                {section.name}
              </h3>
              <span className="font-bold text-[16px] text-[#4D4D4D]">
                {openSection === section.name ? (
                  <AiOutlineMinus />
                ) : (
                  <AiOutlinePlus />
                )}
              </span>
            </div>

            {openSection === section.name && (
              <ul
                className={`space-y-1 p-2 ${
                  section.items.length > 6 ? "max-h-60 overflow-y-auto" : ""
                }`}
              >
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`${section.name}-${i}`}
                      className="mr-2"
                    />
                    <label
                      htmlFor={`${section.name}-${i}`}
                      className="text-sm cursor-pointer uppercase"
                    >
                      {item}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        {/* progres slider */}
        <div className="w-full max-w-xs px-2 py-4 bg-white ">
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            sx={{
              color: "#9C27B0", // Tailwind's blue-500
            }}
          />
          <p className="mt-2 text-md text-gray-700 flex justify-between ">
            <h2>0 </h2> <h2>220900 </h2>
          </p>
        </div>
      </aside>
    </div>
  );
};

export default PageSideBar;
