import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

export function CategoryInput({ setNewCategory }) {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const data = await fetch("http://localhost:4000/food-category");
    // console.log("data printing", data);
    const jsonData = await data.json();
    setCategories(jsonData.getCategory || []);
    console.log("jsonData printing", jsonData);
  };
  useEffect(() => {
    getCategories();
  }, []);

  const handleChange = (e) => {
    // console.log(e);
    const { value } = e.target;
    setNewCategory(value);
  };

  return (
    <Select>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {categories.map((category) => {
            return (
              <SelectItem
                key={category.categoryName} // ✅ Unique key added
                value={category.categoryName} // ✅ Dynamic value
                onChange={handleChange}
              >
                {category.categoryName}
              </SelectItem>
            );
          })}

          {/* <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem> */}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
