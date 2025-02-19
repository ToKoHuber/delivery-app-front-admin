import { Avatar } from "@/app/_components/logos/Avatar";
import DishCategories from "./dishesCategory/DishCategories";
import { User } from "lucide-react";

export default function Header({
  categoryCount,
}: {
  categoryCount: Record<string, number>;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-[1171px] flex flex-col items-end gap-4 rounded-xl mt-6">
        <User />
      </div>
      <DishCategories categoryCount={categoryCount} />
    </div>
  );
}
