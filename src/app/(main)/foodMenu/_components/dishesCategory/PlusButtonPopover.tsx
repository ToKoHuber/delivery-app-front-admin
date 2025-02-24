"use client";
import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusButton } from "../PlusButton";
import { EditNewCategory } from "@/app/_components/cards/EditNewCategory";

export function PlusButtonPopOver() {
  //   const [open, setOpen] = React.useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <PlusButton />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Ask how to hide this title section</DialogTitle>
        {/* //sdad */}
        <EditNewCategory />
      </DialogContent>
    </Dialog>
  );
}
