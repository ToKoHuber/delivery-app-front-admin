import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export const DeleteSave = () => {
  return (
    <div className="flex justify-between w-[424px] items-center py-3">
      <Trash
        className="w-[48px] h-[48px] py-[8px] px-[16px] rounded-[6px] border border-[#EF4444]"
        stroke="#EF4444"
      />
      <Button>Save changes</Button>
    </div>
  );
};
