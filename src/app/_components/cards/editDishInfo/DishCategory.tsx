import { Input } from "@/components/ui/input";
import { ChevronsUpDown } from "lucide-react";

export const DishCategory = () => {
  return (
    <div className="flex gap-4 w-[424px] py-3">
      <p className="w-[120px] text-[#71717A]">Dish category</p>
      <div className="flex">
        <Input
          type="number"
          placeholder="Category"
          className="w-[288px] p-[8px 12px] text-[14px] font-normal leading-5 text-[#09090B]"
        />
        {/* <ChevronsUpDown /> */}
      </div>
    </div>
  );
};
