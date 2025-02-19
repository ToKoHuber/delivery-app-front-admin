import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const Title = () => {
  return (
    <div className="w-[412px] pb-4 gap-[10px] flex justify-between">
      <h2 className="text-[18px] text-[#09090B] font-semibold leading-7">
        Add new Dish to Appetizers
      </h2>
      <Button className="size-[36px] p-[8px 16px] rounded-full bg-[#F4F4F5]">
        <X stroke="black" />
      </Button>
    </div>
  );
};
