import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { foodOrder } from "@/lib/foodOrder"; // Assuming this is the correct import
import { ChevronsUpDown } from "lucide-react";

// const SELECT_ITEMS = ["Pending", "Delivered", "In Transit"];

export function TableDemo() {
  return (
    <Table className="w-[1171px] flex flex-col rounded-xl bg-white text-[14px] text-[#71717A] font-medium leading-5">
      <TableHeader className="border border-b-none border-[#E4E4E7]">
        <TableRow className="bg-[#F4F4F5]">
          <TableHead className="w-[48px] h-[52px] p-4">
            <Checkbox className="size-4" />
          </TableHead>
          <TableHead className="w-[56px] p-4 flex items-center text-[14px] text-[#09090B] font-normal leading-5">
            №
          </TableHead>
          <TableHead className="w-[213.5px] px-4">Customer</TableHead>
          <TableHead className="w-[160px] px-4">Food</TableHead>
          <TableHead className="w-[160px] px-4">Date</TableHead>
          <TableHead className="w-[160px] px-4">Total</TableHead>
          <TableHead className="w-[213.5px] px-4">Delivery Address</TableHead>
          <TableHead className="w-[160px] px-4">Delivery state</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-white">
        {foodOrder.map((order) => (
          <TableRow key={order._id} className="border border-[#E4E4E7]">
            <TableCell className="w-[48px] h-[52px] p-4 ">
              <Checkbox className="size-4" />
            </TableCell>
            <TableCell className="w-[56px] p-4 text-[14px] text-[#09090B] font-normal leading-5">
              {order._id}
            </TableCell>
            <TableCell className="w-[213.5px] px-4 truncate">
              {order.user}
            </TableCell>
            <TableCell className="w-[160px] px-4">
              {order.foodOrderItems.length} foods
            </TableCell>

            {/* <TableCell>
              {order.foodOrderItems.map((item) => item.foodName).join(", ")}
            </TableCell> */}

            <TableCell className="w-[160px] px-4">{order.createdAt}</TableCell>
            <TableCell className="w-[160px] px-4">
              ${order.totalPrice}
            </TableCell>
            <TableCell className="w-[213.5px] px-4">
              {order.deliveryAddress}
            </TableCell>
            <TableCell className="w-[160px] px-4">
              <Badge
                variant="outline"
                className="p-[10px] flex gap-[10px] justify-between"
              >
                {order.deliveryStatus} <ChevronsUpDown className="size-4" />
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
