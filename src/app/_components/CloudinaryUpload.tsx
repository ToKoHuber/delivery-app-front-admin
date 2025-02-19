"use client";

import { error } from "console";
import Image from "next/image";
import { useState } from "react";

export const CloudinaryUpload = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const PRESET_NAME = "food-delivery-app";
  const CLOUDINARY_NAME = "794588517496998";
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
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
    <div>
      <input type="file" onChange={handleFile} />
      <button
        className="bg-green-500 px-4 py-2 rounded-lg"
        onClick={handleUpload}
      >
        Upload
      </button>
      {image && (
        <div className="rounded-lg">
          <Image alt="uploaded" src={image} width={400} height={400} />
          <a href={image}></a>
        </div>
      )}
    </div>
  );
};
