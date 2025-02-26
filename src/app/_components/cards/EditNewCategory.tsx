import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export const EditNewCategory = () => {
  return (
    <div className="w-full flex flex-col bg-[#FFF] rounded-xl">
      <div className="w-full pb-4 flex flex-col gap-[8px]">
        <h2>Category name</h2>
        <Input
          placeholder="Type category name..."
          className="p-[8px 12px]"
        ></Input>
      </div>
      <div className="w-full pt-6 flex justify-end">
        <Button className="p-[8px 16px] rounded-md">Add category</Button>
      </div>
    </div>
  );
};
