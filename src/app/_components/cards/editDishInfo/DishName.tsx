import { Input } from "@/components/ui/input";

export const DishName = () => {
  return (
    <div className="flex gap-4 w-[424px] py-3">
      <p className="w-[120px] text-[#71717A]">Dish name</p>
      <Input
        type="text"
        placeholder="Enter dish name..."
        className="w-[288px] p-[8px 12px] text-[14px] font-normal leading-5 text-[#09090B]"
      />
    </div>
  );
};
