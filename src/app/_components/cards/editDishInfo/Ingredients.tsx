import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Ingredients = () => {
  return (
    <div className="flex gap-4 w-[424px] py-3">
      <p className="w-[120px] text-[#71717A]">Ingredients</p>
      <Textarea
        placeholder="Enter ingredients info..."
        className="w-[288px] p-[8px 12px] text-wrap"
      />
    </div>
  );
};
