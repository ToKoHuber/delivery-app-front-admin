"use client";

import Header from "./_components/Header";
import ProductLists from "./_components/ProductLists";
import { useEffect, useState } from "react";

export default function foodMenu() {
  const [foods, setFoods] = useState([]);

  const getFoods = async () => {
    try {
      const data = await fetch("http://localhost:4000/food");
      // console.log("data printing", data);
      const jsonData = await data.json();
      setFoods(jsonData.getFoods || []);
      // console.log("jsonData printing", jsonData);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);
  const createCategory = async (category: string) => {
    const data = await fetch("http://localhost:8000/food-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: category }),
    });
    getFoods();
  };

  const categoryCount = foods?.reduce((acc, food) => {
    acc[food.category.categoryName] =
      (acc[food.category.categoryName] || 0) + 1;
    return acc;
  }, {});
  return (
    <div className="flex flex-col px-4 gap-6 border border-red-500">
      <Header />
      <ProductLists categoryCount={categoryCount} />
    </div>
  );
}
