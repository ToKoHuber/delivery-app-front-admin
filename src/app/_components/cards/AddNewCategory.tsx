import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export const AddNewCategory = () => {
  return (
    <div className="w-[460px] p-6 flex flex-col bg-[#FFF] rounded-xl">
      <div className="w-[412px] pb-4 flex justify-between">
        <h2 className="text-[18px] font-semibold leading-7">
          Add new category
        </h2>
        <Button className="size-[36px] p-[8px 16px] rounded-full bg-[#F4F4F5]">
          <X stroke="black" />
        </Button>
      </div>
      <div className="w-[412px] pb-4 gap-[8px]">
        <h2>Category name</h2>
        <Input
          placeholder="Type category name..."
          className="p-[8px 12px]"
        ></Input>
      </div>
      <div className="w-[412px] pt-6 flex justify-end">
        <Button className="p-[8px 16px] rounded-md">Add category</Button>
      </div>
    </div>
  );
};
