import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const PlusButton = () => {
  return (
    <Button
      variant="destructive"
      className="px-4 py-2 border-[1px] rounded-full bg-red-500"
    >
      <Plus />
    </Button>
  );
};
