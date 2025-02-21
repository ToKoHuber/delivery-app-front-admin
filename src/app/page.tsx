import { Navigation } from "./_components/Navigation";
import { CloudinaryUpload } from "./_components/CloudinaryUpload";
import { AddDishCard } from "./_components/cards/AddDishCard";
import { EditDishInfo } from "./_components/cards/EditDishInfo";

export default function Home() {
  return (
    <div className="flex bg-[#D9D9D9] gap-10">
      <Navigation />
      <div className="flex flex-col gap-4">
        <CloudinaryUpload />
        {/* <DeliveryPhoto /> */}
        <AddDishCard />
        {/* <ProductCard /> */}
        <EditDishInfo />
      </div>
    </div>
  );
}
