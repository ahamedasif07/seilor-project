"use client";
import React, { useEffect } from "react";

const DataFatching = () => {
  useEffect(() => {
    const fechingData = async () => {
      try {
        const res = await fetch("./public/data.json");
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log("errot from fatched data", error);
      }
    };
    fechingData();
  }, []);
  return <div>DataFatching</div>;
};

export default DataFatching;
