"use client";
import { useState } from "react";

const PageSideBar = () => {
  const [openSection, setOpenSection] = useState("");

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
    <aside className="w-64 bg-white border-r border-gray-200 p-4 h-screen ">
      {/*  Sections */}
      {sections.map((section, idx) => (
        <div key={idx} className="mt-4">
          <div
            className="flex justify-between items-center cursor-pointer border-b pb-2"
            onClick={() => toggleSection(section.name)}
          >
            <h3 className="font-semibold">{section.name}</h3>
            <span>{openSection === section.name ? "−" : "+"}</span>
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
    </aside>
  );
};

export default PageSideBar;
