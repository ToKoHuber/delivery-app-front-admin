import { dataFood } from "@/lib/dataFood";
import { Navigation } from "../_components/Navigation";
import Header from "./_components/Header";
import ProductLists from "./_components/ProductLists";

export default function foodMenu() {
  const categoryCount = dataFood.reduce((acc, food) => {
    acc[food.category] = (acc[food.category] || 0) + 1;
    return acc;
  }, {});
  console.log(categoryCount);
  return (
    <div className="flex bg-[#D9D9D9]">
      <Navigation />
      <div className="flex flex-col w-full max-w-[calc(100vw-205px)] items-center px-4 gap-6">
        <Header categoryCount={categoryCount} />
        <ProductLists categoryCount={categoryCount} />
      </div>
    </div>
  );
}
