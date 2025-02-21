import { DatePickerWithRange } from "./tableHeader/DateRangePicker";
import { DeliveryState } from "./tableHeader/DeliveryState";
import Title from "./tableHeader/Title";

export default function TableHeader() {
  return (
    <div className="w-[1171px] p-4 flex justify-between bg-white">
      <Title />
      <div className="flex gap-3">
        <DatePickerWithRange />
        <DeliveryState />
      </div>
    </div>
  );
}
