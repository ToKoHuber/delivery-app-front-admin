"use client";
import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Image, Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const UPLOAD_PRESET = "food-delivery-app";
const CLOUD_NAME = "794588517496998";

const uploadImage = async (file: File | null) => {
  if (!file) {
    return null;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  formData.append("api_key", CLOUD_NAME);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const result = await response.json();

    return result.secure_url;
  } catch (error: unknown) {
    return { error: "failed to upload image" };
  }
};

const formSchema = z.object({
  foodName: z.string().min(4).max(100),
  price: z.coerce.number().min(0.1).max(Infinity),
  ingredients: z.string().min(4).max(100),
  image: z.string().nonempty("image"),
  category: z.string(),
});

export function EditProfile({ categories, food }) {
  const [previewUrl, setPreviewUrl] = useState<string>();
  const [foodImageFile, setFoodImageFile] = useState<File | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodName: "",
      price: 0,
      ingredients: "",
      image: "",
      category: "",
    },
  });

  React.useEffect(() => {
    form.setValue("foodName", food.foodName);
    form.setValue("category", food.category);
    form.setValue("ingredients", food.ingredients);
    form.setValue("price", food.price);
    form.setValue("image", "uploaded");
    setFoodImageFile(food.image);
  }, [food]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    setFoodImageFile(file);

    const tempImageUrl = URL.createObjectURL(file);
    setPreviewUrl(tempImageUrl);
    form.setValue("image", "uploaded");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="size-[44px] bg-[#FFFFFF] rounded-full flex justify-center items-center cursor-pointer">
          <Pencil className="size-4" stroke="#EF4444" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dishes Info</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-8">
            <FormField
              control={form.control}
              name="foodName"
              render={({ field }) => (
                <FormItem className="flex justify-between items-center">
                  <FormLabel className="text-[12px] text-[#71717a]">
                    Dish name
                  </FormLabel>
                  <FormControl>
                    <Input className="w-[288px]" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="flex justify-between items-center">
                  <FormLabel className="text-[12px] text-[#71717a]">
                    Dish category
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-[288px]">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => {
                          return (
                            <SelectItem key={category._id} value={category._id}>
                              {category.categoryName}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ingredients"
              render={({ field }) => (
                <FormItem className="flex justify-between items-center">
                  <FormLabel className="text-[12px] text-[#71717a]">
                    Ingredients
                  </FormLabel>
                  <FormControl>
                    <Textarea className="w-[288px]" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="flex justify-between items-center">
                  <FormLabel className="text-[12px] text-[#71717a]">
                    Price
                  </FormLabel>
                  <FormControl>
                    <Input className="w-[288px]" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                  <FormLabel>Food image</FormLabel>
                  <FormControl>
                    <div>
                      <label htmlFor="addNewDishImage">
                        {previewUrl ? (
                          <img
                            className="w-[100%] max-h-[138px] object-contain"
                            src={previewUrl}
                            alt=""
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center gap-2 w-[100%] h-[138px] rounded-[6px] p-4 bg-[#2563EB33] border border-dashed border-[#2563EB33]">
                            <img
                              className="w-[100%] max-h-[138px] object-contain"
                              src={food.image}
                              alt=""
                            />
                          </div>
                        )}
                      </label>
                      <Input
                        placeholder="image"
                        id="addNewDishImage"
                        type="file"
                        className="hidden"
                        onChange={handleChange}
                        {...rest}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between mt-[36px]">
              <Trash stroke="red" />
              <Button type="submit">Edit</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
