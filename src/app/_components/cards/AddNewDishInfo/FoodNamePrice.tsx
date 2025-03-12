import { Input } from "@/components/ui/input";

export default function FoodNamePirce({ setPrice, setFoodName }) {
  const handlePriceChange = (e) => {
    // console.log(e);
    const { value } = e.target;
    setPrice(value);
  };
  const handleNameChange = (e) => {
    // console.log(e);
    const { value } = e.target;
    setFoodName(value);
  };
  return (
    <div className="flex gap-6">
      {/* <div className="flex gap-4 w-[424px] py-3"> */}
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor=""
          className="w-[100%] text-[#09090B] text-[14px] font-medium leading-[14px]"
        >
          Dish name
        </label>

        <Input
          type="text"
          placeholder="Type food name"
          className="w-[100%] p-[8px 12px] text-[14px] font-normal leading-5 text-[#71717A]"
          onChange={handleNameChange}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor=""
          className="w-[100%] text-[#09090B] text-[14px] font-medium leading-[14px]"
        >
          Food price
        </label>

        <Input
          type="text"
          placeholder="Enter price..."
          className="w-[100%] p-[8px 12px] text-[14px] font-normal leading-5 text-[#71717A]"
          onChange={handlePriceChange}
        />
      </div>
    </div>
  );
}
