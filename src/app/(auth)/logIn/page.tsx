import { CloudinaryUpload } from "@/app/_components/CloudinaryUpload";
import DeliveryPhoto from "../_components/DeliveryPhoto";

export default function LogIn() {
  return (
    <div className="flex bg-[#D9D9D9] gap-10">
      <CloudinaryUpload />
      <DeliveryPhoto />
    </div>
  );
}
