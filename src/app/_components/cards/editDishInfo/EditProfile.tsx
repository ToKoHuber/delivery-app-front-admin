"use client";
import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditDishInfo } from "../EditDishInfo";
import { Pencil } from "lucide-react";

export function EditProfile() {
  //   const [open, setOpen] = React.useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="size-[44px] bg-[#FFFFFF] rounded-full flex justify-center items-center cursor-pointer">
          <Pencil className="size-4" stroke="#EF4444" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <EditDishInfo />
      </DialogContent>
    </Dialog>
  );

  //   function ProfileForm({ className }: React.ComponentProps<"form">) {
  //     return (
  //       <div>
  //         <EditDishInfo />
  //       </div>
  //     );
  //   }
}
