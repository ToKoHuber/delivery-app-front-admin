import { CloudinaryUpload } from "@/app/_components/CloudinaryUpload";
import DeliveryPhoto from "../_components/DeliveryPhoto";
import { LoginForm } from "../_components/LogIn";

export default function LogIn() {
  return (
    <div className="flex">
      {/* <CloudinaryUpload />
      <DeliveryPhoto /> */}
      <LoginForm />
    </div>
  );
}
