import { AddDishCard } from "./_components/cards/AddDishCard";
import { EditDishInfo } from "./_components/cards/EditDishInfo";
import { ProductCard } from "./_components/cards/ProductCard";
import { CloudinaryUpload } from "./_components/CloudinaryUpload";
import { Category } from "./_components/menuCategory/Category";
import { Navigation } from "./_components/Navigation";

export default function Home() {
  return (
    <div className="flex">
      <Navigation />
      <div>
        <Category />
        <div className="flex gap-4">
          <AddDishCard />
          <ProductCard />
          <EditDishInfo />
          <CloudinaryUpload />
        </div>
      </div>
    </div>
  );
}
