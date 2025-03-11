"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { PlusButtonPopOver } from "./PlusButtonPopover";
import { useEffect, useState } from "react";

export default function DishCategories({
  categoryCount,
}: {
  categoryCount: Record<string, number>;
}) {
  const [categories, setCategories] = useState();

  const getCategories = async () => {
    const data = await fetch("http://localhost:8000/food-category");
    const jsonData = await data.json();
    setCategories(jsonData.data);
    console.log(jsonData);
  };
  useEffect(() => {
    getCategories();
  }, []);

  const createCategory = async (category: string) => {
    const data = await fetch("http://localhost:8000/food-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: category }),
    });
    getCategories();
  };

  return (
    <div className="w-[1171px] p-6 flex flex-col gap-4 rounded-xl bg-[#FAFAFA]">
      <div>
        <p className="text-5 font-semibold leading-7 text-[#09090B]">
          Dishes category
        </p>
      </div>

      <ToggleGroup
        type="multiple"
        variant="outline"
        className="max-w-[1123px] text-[14px] font-medium leading-5 flex flex-wrap justify-start gap-3"
      >
        {Object.entries(categoryCount).map(([category, count]) => {
          return (
            <ToggleGroupItem
              key={category} // ✅ Unique key added
              value={category} // ✅ Dynamic value
              className="px-4 py-2 border border-solid rounded-full flex gap-[8px]"
            >
              <div>
                <p className="text-[#18181B] text-[14px] font-medium leading-5">
                  {category}
                </p>
              </div>
              <Badge variant="default">{count}</Badge>
            </ToggleGroupItem>
          );
        })}

        <PlusButtonPopOver />
      </ToggleGroup>
    </div>
  );
}
