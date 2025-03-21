"use client";

import Image from "next/image";
import { useState } from "react";

import { DeleteSave } from "./editDishInfo/DeleteSave";
import { DishCategory } from "./editDishInfo/DishCategory";
import { DishName } from "./editDishInfo/DishName";
import { Ingredients } from "./editDishInfo/Ingredients";
import { InputImage } from "./editDishInfo/InputImage";
import { Price } from "./editDishInfo/Price";
import { Title } from "./editDishInfo/Title";

export const EditDishInfo = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(
    "https://res.cloudinary.com/daevsbyyv/image/upload/v1739963522/qand6fibxlpdsginqpub.png"
  );

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
    <div className="w-[472px] p-6 rounded-[12px] gap-3 bg-[#FFFFFF]">
      <Title text="Dish info" />
      <div>
        <DishName />
        <DishCategory />
        <Ingredients />
        <Price />
        <InputImage handleFile={handleFile} image={image} />
        <DeleteSave handleUpload={handleUpload} />
      </div>
    </div>
  );
};
