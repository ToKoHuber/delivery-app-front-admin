"use client";
import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusButton } from "../PlusButton";
import { EditNewCategory } from "@/app/_components/cards/EditNewCategory";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
        <DialogTitle>Add new category</DialogTitle>
        {/* //sdad */}
        <EditNewCategory />
      </DialogContent>
    </Dialog>
  );
}
