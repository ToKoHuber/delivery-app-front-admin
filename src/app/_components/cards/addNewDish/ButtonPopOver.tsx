"use client";

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
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusButton } from "../PlusButton";
import { Textarea } from "@/components/ui/textarea";
import { Image } from "lucide-react";

// const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;
// const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
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
  foodName: z.string().min(2, "Hamgiin bagadaa 2 usegtei baina shuu"),
  foodPrice: z.string().min(2, "Hamgiin bagadaa 2 usegtei baina shuu"),
  // foodPrice: z.number(),
  image: z.string().nonempty("Zuragaa oruulna uu"),
  ingredients: z
    .string()
    .min(10, {
      message: "Ingredients must be at least 10 characters.",
    })
    .max(160, {
      message: "Ingredients must not be longer than 160 characters.",
    }),
});

export function ButtonPopOver({ category }) {
  const [foods, setFoods] = useState([]);
  const [foodImageFile, setFoodImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodName: "",
      foodPrice: "",
      image: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    setFoodImageFile(file);

    const tempImageUrl = URL.createObjectURL(file);
    setPreviewUrl(tempImageUrl);
    form.setValue("image", "uploaded");
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    createFood(values);
  }
  // const filteredDishesCategoryId = filteredDishes[0].category._id;

  const getFoods = async () => {
    const data = await fetch("http://localhost:4000/food");
    // console.log("data printing", data);
    const jsonData = await data.json();
    setFoods(jsonData.getFoods || []);
    console.log("jsonData printing", jsonData);
  };
  useEffect(() => {
    getFoods();
  }, []);

  const createFood = async (values: z.infer<typeof formSchema>) => {
    const imageUrl = await uploadImage(foodImageFile);

    const data = await fetch("http://localhost:4000/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        foodName: values.foodName,
        price: values.foodPrice,
        image: imageUrl,
        ingredients: values.ingredients,
        category: `${category._id}`,
      }),
    });
    const jsonData = await data.json();

    console.log("data", jsonData);
    getFoods();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <PlusButton />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Add new Dish to Appetizers</DialogTitle>
        <DialogDescription></DialogDescription>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex gap-6">
              <FormField
                control={form.control}
                name="foodName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Food name</FormLabel>
                    <FormControl>
                      <Input placeholder="Soup" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="foodPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Food price</FormLabel>
                    <FormControl>
                      <Input placeholder="Price" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="ingredients"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ingredients</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
                      {...field}
                    />
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
                            <Image className="size-8 rounded-full p-2 bg-[#FFFFFF]" />
                            <p className="text-[14px] font-medium leading-5">
                              Choose a file or drag & drop it here
                            </p>
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
            <DialogClose asChild>
              <Button type="submit">Submit</Button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

// "use client";
// import * as React from "react";

// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { AddNewDishInfo } from "../AddNewDishInfo";
// import { PlusButton } from "@/app/_components/cards/PlusButton";
// import FoodNamePirce from "../AddNewDishInfo/FoodNamePrice";
// import { Ingredients } from "../AddNewDishInfo/Ingredients";
// import { FoodImage } from "../AddNewDishInfo/FoodImage";
// import { AddButton } from "../AddNewDishInfo/AddDishButton";
// import { Button } from "@/components/ui/button";
// import { useEffect, useState } from "react";
// import { CategoryInput } from "../AddNewDishInfo/CategoryInput";

// export function ButtonPopOver() {
//   const [file, setFile] = useState(null);
//   const [image, setImage] = useState(null);
//   const [price, setPrice] = useState();
//   const [ingredients, setIngredients] = useState("");
//   const [food, setFoodName] = useState("");
//   const [newCategory, setNewCategory] = useState("");

//   const PRESET_NAME = "food-delivery-app";
//   const CLOUDINARY_NAME = "794588517496998";
//   const handleFile = (e) => {
//     console.log("handle file working");
//     const file = e.target.files[0];
//     if (file) {
//       setFile(file);
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       alert("Please select a file");
//       return;
//     }
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", PRESET_NAME);
//     formData.append("api_key", CLOUDINARY_NAME);

//     try {
//       const res = await fetch(
//         `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/upload`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );
//       const data = await res.json();
//       setImage(data.secure_url);
//       console.log(data);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to upload file");
//     }
//   };

//   const createFood = async () => {
//     const data = await fetch("http://localhost:4000/food", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify([
//         {
//           foodName: food,
//           price: price,
//           image: image,
//           ingredients: ingredients,
//           category: newCategory,
//         },
//       ]),
//     });
//     //dialogoo haah
//     //nemsen datagaa avah
//     // getCategories();
//   };

//   return (
// <Dialog>
//   <DialogTrigger asChild>
//     <div>
//       <PlusButton />
//     </div>
//   </DialogTrigger>
//   <DialogContent>
//     <DialogTitle>Add new Dish to Appetizers</DialogTitle>
//     <DialogDescription></DialogDescription>
//     <FoodNamePirce setFoodName={setFoodName} setPrice={setPrice} />
//     <Ingredients setIngredients={setIngredients} />
//     <CategoryInput setNewCategory={setNewCategory} />
//     {/* category нэмэх хэрэгтэй бололтой */}

//     <FoodImage file={file} image={image} handleFile={handleFile} />
//     <DialogFooter>
//       <DialogClose asChild>
//         <Button
//           onClick={async () => {
//             await handleUpload();
//             createFood();
//           }}
//         >
//           Add Dish
//         </Button>
//       </DialogClose>
//     </DialogFooter>
//   </DialogContent>
// </Dialog>
//   );
// }

////////////////////////////////////////s
