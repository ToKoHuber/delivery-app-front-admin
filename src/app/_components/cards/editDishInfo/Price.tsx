import { Input } from "@/components/ui/input";

export const Price = () => {
  return (
    <div className="flex gap-4 w-[424px] py-3">
      <p className="w-[120px] text-[#71717A]">Price</p>
      <Input
        type="email"
        placeholder="Email"
        className="w-[288px] p-[8px 12px]"
      />
    </div>
  );
};
