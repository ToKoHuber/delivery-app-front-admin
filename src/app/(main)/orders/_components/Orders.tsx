import TableHeader from "./orders/TableHeader";
import { TableDemo } from "./orders/TableShad";

export function Orders() {
  return (
    <div className="w-[1171px] rounded-lg bg-[#FFF] overflow-hidden">
      <TableHeader />
      <TableDemo />
    </div>
  );
}
