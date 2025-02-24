import { LayoutDashboard } from "lucide-react";

export const FoodMenu = () => {
  return (
    <div className="w-[165px] flex px-6 py-2 gap-[10px] items-center">
      <LayoutDashboard />
      <div>
        <p className="text-[14px] font-medium leading-5 text-[#09090B]">
          Food menu
        </p>
      </div>
    </div>
  );
};
