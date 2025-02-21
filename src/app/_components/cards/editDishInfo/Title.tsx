import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const Title = ({ text }) => {
  return (
    <div className="flex gap-2 w-[424px] justify-between items-center">
      <h2 className="text-[18px] font-semibold leading-7 text-[#09090B]">
        {text}
      </h2>
      <Button className="size-[36px] p-[8px 16px] rounded-full bg-[#F4F4F5]">
        <X stroke="black" />
      </Button>
    </div>
  );
};
