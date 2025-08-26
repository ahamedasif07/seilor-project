"use client";

import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // optional

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json");
        if (!res.ok) {
          console.error("Failed to fetch data:", res.status);
          return;
        }
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};
