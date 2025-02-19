import { Input } from "@/components/ui/input";

export const DishCategory = () => {
  return (
    <div className="flex gap-4 w-[424px] py-3">
      <p className="w-[120px] text-[#71717A]">Dish category</p>
      <Input
        type="email"
        placeholder="Placeholder: Brie Crostini Appetizer"
        className="w-[288px] p-[8px 12px] border-"
      />
    </div>
  );
};
