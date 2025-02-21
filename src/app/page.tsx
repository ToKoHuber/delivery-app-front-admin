import { Navigation } from "./_components/Navigation";
import { CloudinaryUpload } from "./_components/CloudinaryUpload";
import { AddNewDish } from "./_components/cards/AddNewDish";
import { AddDishCard } from "./_components/cards/AddDishCard";
import { ProductCard } from "./_components/cards/ProductCard";

export default function Home() {
  return (
    <div className="flex bg-[#D9D9D9] gap-10">
      <Navigation />
      <div className="flex flex-col gap-4">
        <CloudinaryUpload />
        {/* <DeliveryPhoto /> */}
        <AddDishCard />
        {/* <ProductCard /> */}
      </div>
    </div>
  );
}
