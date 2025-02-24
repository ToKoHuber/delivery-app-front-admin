import { Truck } from "lucide-react";

export const Orders = () => {
  return (
    <div className="w-[165px] flex px-6 py-2 gap-[10px] items-center">
      <Truck />
      <div>
        <p className="text-[14px] font-medium leading-5 text-[#09090B]">
          Orders
        </p>
      </div>
    </div>
  );
};
