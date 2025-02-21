import { Textarea } from "@/components/ui/textarea";
import { Image } from "lucide-react";

export const FoodImage = () => {
  return (
    <div className="flex flex-col gap-2 w-[412px]">
      <label
        htmlFor=""
        className="w-[100%] text-[#09090B] text-[14px] font-medium leading-[14px]"
      >
        Image
      </label>
      <div className="flex flex-col items-center justify-center gap-2 w-[100%] h-[138px] rounded-[6px] p-4 bg-[#2563EB33] bg-opacity-20 border border-dashed border-[rgba(37, 99, 235, 0.20)]">
        <Image className="size-8 rounded-full p-2 bg-[#FFFFFF]" />
        <p className="text-[14px] font-medium leading-5">
          Choose a file or drag & drop it here
        </p>
      </div>
    </div>
  );
};
