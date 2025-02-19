import { Ingredients } from "@/app/_components/cards/editDishInfo/Ingredients";
import { Category } from "@/app/_components/menuCategory/Category";

export const dataFood = [
  {
    id: Number,
    foodName: String,
    price: Number,
    image: String,
    ingredients: String,
    category: ObjectId,
    createdAt: Date,
    updatedAt: Date,
  },
];
