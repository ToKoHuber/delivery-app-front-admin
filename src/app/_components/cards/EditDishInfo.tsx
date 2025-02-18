import { DishCategory } from "./editDishInfo/DishCategory";
import { Image } from "./editDishInfo/Image";
import { Ingredients } from "./editDishInfo/Ingredients";
import { Price } from "./editDishInfo/Price";
import { Title } from "./editDishInfo/Title";

export const EditDishInfo = () => {
  return (
    <div className="w-[472px] p-6 rounded-[12px]">
      <Title />
      <DishCategory />
      <Ingredients />
      <Price />
      <Image />
    </div>
  );
};
