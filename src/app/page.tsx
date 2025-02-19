import { AddDishCard } from "./_components/cards/AddDishCard";
import { EditDishInfo } from "./_components/cards/EditDishInfo";
import { DishCategory } from "./_components/cards/editDishInfo/DishCategory";
import { ProductCard } from "./_components/cards/ProductCard";
import { CloudinaryUpload } from "./_components/CloudinaryUpload";
import { Navigation } from "./_components/Navigation";

export default function Home() {
  return (
    <div className="flex bg-[#D9D9D9]">
      <Navigation />
      <div>
        {/* <DishCategory /> */}
        <div className="flex gap-4">
          <AddDishCard />
          {/* <ProductCard /> */}
          <EditDishInfo />
          {/* <CloudinaryUpload /> */}
        </div>
      </div>
    </div>
  );
}
