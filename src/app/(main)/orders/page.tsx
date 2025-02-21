import { UserAvatar } from "@/app/_components/UserAvatar";
import { Orders } from "./_components/Orders";

export default function OrdersPage() {
  return (
    <div className="flex flex-col px-4 gap-6 border-red-500">
      <UserAvatar />
      <Orders />
    </div>
  );
}
