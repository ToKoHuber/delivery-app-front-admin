import { Button } from "@/components/ui/button";

export const AddButton = ({ handleUpload }) => {
  return (
    <div className="w-[412px] flex justify-end">
      <Button onClick={handleUpload}>Add Dish</Button>
    </div>
  );
};
