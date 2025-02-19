import { DeleteSave } from "./editDishInfo/DeleteSave";
import { DishCategory } from "./editDishInfo/DishCategory";
import { DishName } from "./editDishInfo/DishName";
import { Image } from "./editDishInfo/Image";
import { Ingredients } from "./editDishInfo/Ingredients";
import { Price } from "./editDishInfo/Price";
import { Title } from "./editDishInfo/Title";

export const EditDishInfo = () => {
  return (
    <div className="w-[472px] p-6 rounded-[12px] gap-3">
      <Title />
      <div>
        <DishName />
        <DishCategory />
        <Ingredients />
        <Price />
        <Image />
        <DeleteSave />
      </div>
    </div>
  );
};
