"use client";

import { useState } from "react";

import { DeleteSave } from "./editDishInfo/DeleteSave";
import { InputImage } from "./editDishInfo/InputImage";
import { Title } from "./editDishInfo/Title";
import FoodNamePirce from "./AddNewDishInfo/FoodNamePrice";
import { Ingredients } from "./AddNewDishInfo/Ingredients";
import { FoodImage } from "./AddNewDishInfo/FoodImage";
import { AddButton } from "./AddNewDishInfo/AddButton";

export const AddNewDishInfo = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

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

  return (
    <div className="w-[460px] p-6 rounded-[12px] flex flex-col gap-6 bg-[#FFFFFF]">
      <Title text="Add new Dish to Appetizers" />

      <FoodNamePirce />
      <Ingredients />

      <FoodImage file={file} image={image} handleFile={handleFile} />
      <AddButton handleUpload={handleUpload} />
    </div>
  );
};
