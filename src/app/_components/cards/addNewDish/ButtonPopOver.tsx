"use client";
import * as React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddNewDishInfo } from "../AddNewDishInfo";
import { PlusButton } from "@/app/_components/cards/PlusButton";
import FoodNamePirce from "../AddNewDishInfo/FoodNamePrice";
import { Ingredients } from "../AddNewDishInfo/Ingredients";
import { FoodImage } from "../AddNewDishInfo/FoodImage";
import { AddButton } from "../AddNewDishInfo/AddDishButton";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { CategoryInput } from "../AddNewDishInfo/CategoryInput";

export function ButtonPopOver() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState();
  const [ingredients, setIngredients] = useState("");
  const [food, setFoodName] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const PRESET_NAME = "food-delivery-app";
  const CLOUDINARY_NAME = "794588517496998";
  const handleFile = (e) => {
    console.log("handle file working");
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setImage(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", PRESET_NAME);
    formData.append("api_key", CLOUDINARY_NAME);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      setImage(data.secure_url);
      console.log(data);
    } catch (err) {
      console.error(err);
      alert("Failed to upload file");
    }
  };

  const createFood = async () => {
    const data = await fetch("http://localhost:4000/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        {
          foodName: food,
          price: price,
          image: image,
          ingredients: ingredients,
          category: newCategory,
        },
      ]),
    });
    //dialogoo haah
    //nemsen datagaa avah
    // getCategories();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <PlusButton />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Add new Dish to Appetizers</DialogTitle>
        <DialogDescription></DialogDescription>
        <FoodNamePirce setFoodName={setFoodName} setPrice={setPrice} />
        <Ingredients setIngredients={setIngredients} />
        <CategoryInput setNewCategory={setNewCategory} />
        {/* category нэмэх хэрэгтэй бололтой */}

        <FoodImage file={file} image={image} handleFile={handleFile} />
        <DialogFooter>
          <DialogClose asChild>
            <Button
              onClick={async () => {
                await handleUpload();
                createFood();
              }}
            >
              Add Dish
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
