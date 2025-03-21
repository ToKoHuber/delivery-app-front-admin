import { Pencil } from "lucide-react";
import Image from "next/image";
import EditPopover from "./editDishInfo/EditPopover";
import { EditProfile } from "./editDishInfo/EditProfile";

export const ProductCard = ({ food, categories }) => {
  console.log(food);
  return (
    <div className="w-[270.75px] h-[241px] p-4  flex flex-col gap-5 justify-center items-center border rounded-[20px] border-soid border-[#E4E4E7]">
      <div className="overflow-hidden rounded-[12px] w-[238.75px] h-[129px] relative">
        <Image
          src={food.image}
          width={238.75}
          height={129}
          alt="Dish Picture"
        />
        <div className="absolute bottom-5 right-5">
          {/* <EditPopover /> */}
          <EditProfile categories={categories} food={food} />
        </div>
      </div>

      <div className="flex flex-col gap-2 w-[238.75px] ">
        <div className="w-[239px] flex justify-between">
          <p className="text-[14px] font-medium leading-5 text-[#EF4444]">
            {food.foodName}
          </p>
          <p className="text-[#09090B] text-[12px] font-normal leading-4">
            {food.price}₮
          </p>
        </div>
        <p className="text-[12px] font-normal leading-4 text-[#09090B]">
          {food.ingredients}
        </p>
      </div>
    </div>
  );
};
