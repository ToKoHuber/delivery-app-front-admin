import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Pencil } from "lucide-react";
import { EditDishInfo } from "../EditDishInfo";

export default function EditPopover() {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <div className="size-[44px] bg-[#FFFFFF] rounded-full flex justify-center items-center">
            <Pencil className="size-4" stroke="#EF4444" />
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <EditDishInfo />
        </PopoverContent>
      </Popover>
    </div>
  );
}
