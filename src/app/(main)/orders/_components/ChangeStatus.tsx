import { Badge } from "@/components/ui/badge";

export function ChangeOrderStatus() {
  const states = ["Delivered", "Pending", "Cancelled"];
  return (
    <div className="w-[364px] p-6 flex flex-col gap-6 bg-[#F4F4F5] rounded-xl">
      <p className="text-[14px] font-medium leading-5">Change delivery state</p>
      <div className="w-[100%] flex gap-4 flex-wrap justify-between">
        {states.map((state) => {
          return <Badge className="p-[8px 10px]">{state}</Badge>;
        })}
      </div>
      <Badge className="w-[100%] gap-[8px 12px] flex justify-center">
        Save
      </Badge>
    </div>
  );
}
