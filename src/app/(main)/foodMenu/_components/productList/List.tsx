import { AddDishCard } from "@/app/_components/cards/AddDishCard";
import { ProductCard } from "@/app/_components/cards/ProductCard";
import { dataFood } from "@/lib/dataFood";

export default function List({
  category,
  count,
}: {
  category: string;
  count: number;
}) {
  const filteredDishes = dataFood.filter((food) => food.category === category);
  return (
    <div className="w-[1171px] p-5 flex flex-col gap-4 rounded-xl bg-[#FAFAFA]">
      <div className="text-5 font-semibold leading-7">
        <h4>
          {category} ({count})
        </h4>
      </div>
      <div className="flex gap-4 flex-wrap">
        <AddDishCard />
        {filteredDishes.map((food) => {
          return <ProductCard key={food.id} food={food} />;
        })}
      </div>
    </div>
  );
}
