import { Textarea } from "@/components/ui/textarea";

export const Ingredients = ({ setIngredients }) => {
  const handleIngredients = (e) => {
    // console.log(e);
    const { value } = e.target;
    setIngredients(value);
  };
  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        htmlFor=""
        className="w-[100%] text-[#09090B] text-[14px] font-medium leading-[14px]"
      >
        Ingredients
      </label>
      <Textarea
        placeholder="List ingredients..."
        className="w-[100%] p-[8px 12px] text-wrap"
        onChange={handleIngredients}
      />
    </div>
  );
};
