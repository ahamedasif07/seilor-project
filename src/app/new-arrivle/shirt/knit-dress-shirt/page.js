import React from "react";
import PageSideBar from "@/components/pageSideBar/PageSideBar";
import Image from "next/image";

const FashionFormalShirt = () => {
  const data = [
    {
      id: 1,
      title: "Mens Fusion Panjabi",
      category: "Men",
      type: "Panjabi",
      priceBdt: 3690,
      rating: 4.5,
      stock: 20,
    },
    {
      id: 2,
      title: "Men's Laptop Bag",
      category: "Accessories",
      type: "Bag",
      priceBdt: 4290,
      rating: 4.3,
      stock: 15,
    },
    {
      id: 3,
      title: "Newborn Girls Party Dress",
      category: "Kids",
      type: "Dress",
      priceBdt: 2600,
      rating: 4.6,
      stock: 30,
    },
    {
      id: 6,
      title: "Mens High Ankle Boots",
      category: "Men",
      type: "Footwear",
      priceBdt: 4890,
      rating: 4.4,
      stock: 12,
    },
    {
      id: 7,
      title: "Boys Fashion Sneakers",
      category: "Kids",
      type: "Footwear",
      priceBdt: 2190,
      rating: 4.5,
      stock: 25,
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <PageSideBar category="Executive Formal Shirt" />

      {/* Table */}
      <div className="flex-1 p-6">
        <h1 className="text-xl font-bold mb-4">Product List</h1>
        <table className="w-full border-collapse border-none border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-none px-4 py-2">Image</th>
              <th className="border border-none px-4 py-2">ID</th>
              <th className="border border-none px-4 py-2">Title</th>
              <th className="border border-none px-4 py-2">Category</th>
              <th className="border border-none px-4 py-2">Type</th>
              <th className="border border-none px-4 py-2">Price</th>
              <th className="border border-none px-4 py-2">Rating</th>
              <th className="border border-none px-4 py-2">Stock</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border-none border-gray-300 px-4 py-2">img</td>
                <td className=" -gray-300 px-4 py-2">{item.id}</td>
                <td className=" -gray-300 px-4 py-2">{item.title}</td>
                <td className=" -gray-300 px-4 py-2">{item.category}</td>
                <td className=" -gray-300 px-4 py-2">{item.type}</td>
                <td className=" -gray-300 px-4 py-2">৳ {item.priceBdt}</td>
                <td className=" -gray-300 px-4 py-2">⭐ {item.rating}</td>
                <td className=" -gray-300 px-4 py-2">{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FashionFormalShirt;
