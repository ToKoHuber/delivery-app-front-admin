import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const Title = () => {
  return (
    <div className="flex gap-2 w-[424px]">
      <h2 className="text-[18px] font-semibold leading-7 text-[#09090B]">
        Dished info
      </h2>
      <Button className="size-[36px] p-[8px 16px] bg-[#F4F4F5]">
        <X />
      </Button>
    </div>
  );
};
