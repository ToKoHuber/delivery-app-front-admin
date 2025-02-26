"use client";
import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddNewDishInfo } from "../AddNewDishInfo";
import { PlusButton } from "@/app/_components/cards/PlusButton";

export function ButtonPopOver() {
  //   const [open, setOpen] = React.useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <PlusButton />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Add new Dish to Appetizers</DialogTitle>
        <AddNewDishInfo />
      </DialogContent>
    </Dialog>
  );
}
