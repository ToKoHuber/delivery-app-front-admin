import { Navigation } from "../_components/Navigation";
import { UserAvatar } from "../_components/UserAvatar";
import { Orders } from "./_components/Orders";

export default function OrdersPage() {
  return (
    <div className="flex bg-[#D9D9D9] justify-between">
      <Navigation />
      <div className="flex flex-col px-4 gap-6 border border-red-500">
        <UserAvatar />
        <Orders />
      </div>
    </div>
  );
}
