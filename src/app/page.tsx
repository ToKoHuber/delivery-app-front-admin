import { Navigation } from "./_components/Navigation";
import { CloudinaryUpload } from "./_components/CloudinaryUpload";
import DeliveryPhoto from "./logIn/_components/form/DeliveryPhoto";

export default function Home() {
  return (
    <div className="flex bg-[#D9D9D9] gap-10">
      <Navigation />
      <div>
        <CloudinaryUpload />
        {/* <DeliveryPhoto /> */}
      </div>
    </div>
  );
}
