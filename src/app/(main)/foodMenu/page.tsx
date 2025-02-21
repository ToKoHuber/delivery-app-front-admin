import { dataFood } from "@/lib/dataFood";

import Header from "./_components/Header";
import ProductLists from "./_components/ProductLists";

export default function foodMenu() {
  const categoryCount = dataFood.reduce((acc, food) => {
    acc[food.category] = (acc[food.category] || 0) + 1;
    return acc;
  }, {});
  console.log(categoryCount);
  return (
    <div className="flex flex-col px-4 gap-6 border border-red-500">
      <Header categoryCount={categoryCount} />
      <ProductLists categoryCount={categoryCount} />
    </div>
  );
}
