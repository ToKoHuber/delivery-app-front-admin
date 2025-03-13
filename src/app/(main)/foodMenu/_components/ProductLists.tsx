import { AddDishCard } from "@/app/_components/cards/AddDishCard";
import { ProductCard } from "@/app/_components/cards/ProductCard";

export default function ProductLists({ foodsData, categories }) {
  return (
    <div className="flex flex-col gap-5">
      {categories.map((category, index) => (
        <div
          key={index}
          className="max-w-[1171px] p-5 flex flex-col gap-4 rounded-xl bg-[#FAFAFA]"
        >
          <div className="text-5 font-semibold leading-7">
            <h4>
              {category.categoryName} (
              {
                foodsData.filter(
                  (food) => food.category.categoryName === category.categoryName
                ).length
              }
              )
            </h4>
          </div>
          <div className="flex gap-4 flex-wrap">
            <AddDishCard category={category} />
            {foodsData
              .filter(
                (food) => food.category.categoryName === category.categoryName
              )
              .map((food) => (
                <ProductCard key={food._id} food={food} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
