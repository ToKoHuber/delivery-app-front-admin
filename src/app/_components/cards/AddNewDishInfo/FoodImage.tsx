import { Textarea } from "@/components/ui/textarea";

export const FoodImage = () => {
  return (
    <div className="flex flex-col gap-2 w-[412px]">
      <label
        htmlFor=""
        className="w-[100%] text-[#09090B] text-[14px] font-medium leading-[14px]"
      >
        Image
      </label>
      <Textarea
        placeholder="List ingredients..."
        className="w-[100%] p-[8px 12px] text-wrap"
      />
    </div>
  );
};
