import { Image } from "lucide-react";

export const FoodImage = ({ image, handleFile, file }) => {
  return (
    <div className="flex flex-col gap-2 w-[412px]">
      <label
        htmlFor=""
        className="w-[100%] text-[#09090B] text-[14px] font-medium leading-[14px]"
      >
        Image
      </label>
      <div>
        <label htmlFor="addNewDishImage">
          {image ? (
            <img className="w-[100%] " src={image} alt="" />
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 w-[100%] h-[138px] rounded-[6px] p-4 bg-[#2563EB33] border border-dashed border-[#2563EB33]">
              <Image className="size-8 rounded-full p-2 bg-[#FFFFFF]" />
              <p className="text-[14px] font-medium leading-5">
                Choose a file or drag & drop it here
              </p>
            </div>
          )}
        </label>
        <input
          id="addNewDishImage"
          type="file"
          className="hidden"
          onChange={handleFile}
        />
      </div>
    </div>
  );
};
