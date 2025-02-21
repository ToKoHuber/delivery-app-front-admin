import { PlusButton } from "@/app/(main)/foodMenu/_components/dishesCategory/PlusButton";

export const AddDishCard = () => {
  return (
    <div className="w-[270.75px] h-[241px] p-[8px 16px] rounded-5 flex flex-col gap-6 justify-center items-center rounded-[20px] border border-dashed border-red-500">
      <PlusButton />
      <p className="w-[154px] text-[14px] font-medium leading-5 text-[#18181B] text-center">
        Add new Dish to Appetizers
      </p>
    </div>
  );
};
