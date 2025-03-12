"use client";

import { AddDishCard } from "@/app/_components/cards/AddDishCard";
import { ProductCard } from "@/app/_components/cards/ProductCard";
import { dataFood } from "@/lib/dataFood";
import { useEffect, useState } from "react";

export default function List({
  category,
  count,
}: {
  category: string;
  count: number;
}) {
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

  const filteredDishes = foods.filter(
    (food) => food.category.categoryName === category
  );
  console.log("list food printing", foods);
  return (
    <div className="w-[1171px] p-5 flex flex-col gap-4 rounded-xl bg-[#FAFAFA]">
      <div className="text-5 font-semibold leading-7">
        <h4>
          {category} ({count})
        </h4>
      </div>
      <div className="flex gap-4 flex-wrap">
        <AddDishCard />
        {filteredDishes.map((food) => {
          return <ProductCard key={food._id} food={food} />;
        })}
      </div>
    </div>
  );
}
