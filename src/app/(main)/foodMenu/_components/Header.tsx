import { Avatar } from "@/app/_components/logos/Avatar";
import DishCategories from "./dishesCategory/DishCategories";
import { UserAvatar } from "@/app/_components/UserAvatar";

export default function Header() {
  return (
    <div className="flex flex-col gap-6">
      <UserAvatar />
      <DishCategories />
    </div>
  );
}
