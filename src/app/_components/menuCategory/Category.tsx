import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { PlusButton, PlusIcon } from "./PlusButton";

export const Category = () => {
  return (
    <div className="w-[1171px] p-6 flex flex-col gap-4 rounded-xl bg-[#FAFAFA]">
      <div>
        <p className="text-5 font-semibold leading-7 text-[#09090B]">
          Dishes category
        </p>
      </div>
      <div className="text-[14px] font-medium leading-5 flex">
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle bold"
            className="px-4 py-2 border-[1px] rounded-full"
          >
            <p className="text-[#18181B]">All Dishes</p>
          </ToggleGroupItem>
          <PlusButton />
        </ToggleGroup>
      </div>
    </div>
  );
};
