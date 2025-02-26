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
      <DialogContent className="flex flex-col gap-6 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new category</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <DialogDescription>Category name</DialogDescription>
          <Input
            placeholder="Type category name..."
            className="p-[8px 12px]"
          ></Input>
        </div>

        {/* <EditNewCategory /> */}
        <DialogFooter>
          <Button type="submit" className="p-[8px 16px] rounded-md">
            Add category
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
