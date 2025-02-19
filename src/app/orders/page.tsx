import { Navigation } from "../_components/Navigation";
import { UserAvatar } from "../_components/UserAvatar";
import { Orders } from "./_components/Orders";

export default function OrdersPage() {
  return (
    <div className="flex bg-[#D9D9D9]">
      <Navigation />
      <div className="flex flex-col w-full max-w-[calc(100vw-205px)] items-center px-4 gap-6">
        <UserAvatar />
        <Orders />
      </div>
    </div>
  );
}
