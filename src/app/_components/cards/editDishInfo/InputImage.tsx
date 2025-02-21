"use client";

import Image from "next/image";
import { useState } from "react";

// export const CloudinaryUpload = () => {
// };

import { Input } from "@/components/ui/input";

export const InputImage = ({ handleFile, image }) => {
  return (
    <div>
      <div className="flex gap-4 w-[424px] py-3">
        <p className="w-[120px] text-[#71717A]">Image</p>
        <label htmlFor="addImage">
          {image && (
            <div className="rounded-md w-[288px] overflow-hidden ">
              <Image alt="uploaded" src={image} width={288} height={288} />
            </div>
          )}
        </label>
        <input
          id="addImage"
          type="file"
          className="hidden"
          onChange={handleFile}
        />
      </div>
    </div>
  );
};
