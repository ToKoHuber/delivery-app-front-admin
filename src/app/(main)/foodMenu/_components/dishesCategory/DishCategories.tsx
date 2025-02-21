import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { PlusButton } from "./PlusButton";
import { dataFood } from "@/lib/dataFood";
import { Badge } from "@/components/ui/badge";

export default function DishCategories({
  categoryCount,
}: {
  categoryCount: Record<string, number>;
}) {
  return (
    <div className="w-[1171px] p-6 flex flex-col gap-4 rounded-xl bg-[#FAFAFA]">
      <div>
        <p className="text-5 font-semibold leading-7 text-[#09090B]">
          Dishes category
        </p>
      </div>

      <ToggleGroup
        type="multiple"
        variant="outline"
        className="max-w-[1123px] text-[14px] font-medium leading-5 flex flex-wrap justify-start gap-3"
      >
        {Object.entries(categoryCount).map(([category, count]) => {
          return (
            <ToggleGroupItem
              key={category} // ✅ Unique key added
              value={category} // ✅ Dynamic value
              className="px-4 py-2 border border-solid rounded-full flex gap-[8px]"
            >
              <div>
                <p className="text-[#18181B] text-[14px] font-medium leading-5">
                  {category}
                </p>
              </div>
              <Badge variant="default">{count}</Badge>
            </ToggleGroupItem>
          );
        })}
        <PlusButton />
      </ToggleGroup>
    </div>
  );
}
