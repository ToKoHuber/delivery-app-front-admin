import { Checkbox } from "@/components/ui/checkbox";

export default function ShowPassword() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="Show-password" className="stroke-[#71717A]" />
      <label
        htmlFor="Show password"
        className="text-sm font-medium leading-[14px] text-[#71717A]"
      >
        Show password
      </label>
    </div>
  );
}
