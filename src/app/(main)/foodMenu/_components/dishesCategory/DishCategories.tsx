"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Badge } from "@/components/ui/badge";
import { PlusButtonPopOver } from "./PlusButtonPopover";
import { useEffect, useState } from "react";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { EditButton } from "./EditButton";

export default function DishCategories() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [updatedCategory, setEditCategory] = useState("");

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

  const createCategory = async (category: string) => {
    const data = await fetch("http://localhost:4000/food-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: newCategory }),
    });
    //dialogoo haah
    //nemsen datagaa avah
    getCategories();
  };

  const deleteCategory = async (id: string) => {
    const data = await fetch(`http://localhost:4000/food-category/${id}`, {
      method: "DELETE",
    });
    getCategories();
  };
  const updateCategory = async (id: string) => {
    const data = await fetch(`http://localhost:4000/food-category/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: updatedCategory }),
    });
    getCategories();
  };

  const handleChange = (e) => {
    // console.log(e);
    const { value } = e.target;
    setNewCategory(value);
  };

  const handleUpdate = (e) => {
    // console.log(e);
    const { value } = e.target;
    setEditCategory(value);
  };

  return (
    <div className="max-w-[1171px] p-6 flex flex-col gap-4 rounded-xl bg-[#FAFAFA]">
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
        {categories.map((category) => {
          return (
            <ContextMenu
              key={category.categoryName} // ✅ Unique key added
            >
              <ContextMenuTrigger>
                <ToggleGroupItem
                  value={category.categoryName} // ✅ Dynamic value
                  className="px-4 py-2 border border-solid rounded-full flex gap-[8px]"
                >
                  <div>
                    <p className="text-[#18181B] text-[14px] font-medium leading-5">
                      {category.categoryName}
                    </p>
                  </div>
                  {/* <Badge variant="default">{count}</Badge> */}
                </ToggleGroupItem>
              </ContextMenuTrigger>
              <ContextMenuContent>
                {/* <EditButton /> */}
                <ContextMenuItem>Edit</ContextMenuItem>
                <ContextMenuItem onClick={() => deleteCategory(category._id)}>
                  Delete
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          );
        })}

        <PlusButtonPopOver
          handleChange={handleChange}
          createCategory={createCategory}
        />
      </ToggleGroup>
    </div>
  );
}
