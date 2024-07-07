"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronLeftIcon, XCircleIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Switch } from "../ui/switch";
import Image from "next/image";
import { UploadDropzone } from "@/lib/uploadthing";
import { useState } from "react";
import { useFormState } from "react-dom";
import { parseWithZod } from "@conform-to/zod";
import { productSchema } from "@/lib/zodSchemas";
import { updateProduct } from "@/actions";
import { useForm } from "@conform-to/react";
import { categories } from "@/lib/categories";
import { SubmitButton } from "../submit-button";
import { $Enums } from "@prisma/client";

interface EditFormProps {
  data: {
    id: string;
    name: string;
    description: string;
    status: $Enums.ProductStatus;
    price: string;
    images: string[];
    stock: number;
    isFeatured: boolean;
    sku: string;
    category: $Enums.Category;
    createdAt: Date;
  };
}

export function EditForm({ data }: EditFormProps) {
  const [images, setImages] = useState<string[]>(data.images);
  const [lastResult, action] = useFormState(updateProduct, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: productSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const handleDeleteImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  console.log(fields.isFeatured.value);
  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
      <input type="hidden" name="productId" value={data.id} />
      <div className="flex items-center gap-4">
        <Button variant={"outline"} size={"icon"} asChild>
          <Link href="/dashboard/products">
            <ChevronLeftIcon size={16} />
          </Link>
        </Button>

        <h1 className="text-xl font-semibold tracking-tight">Edit your product</h1>
      </div>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Product details</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">Update your products details below</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Label className="flex items-center gap-3">
                Name
                <span className="text-red-500 text-xs animate-pulse italic">{fields.name.errors}</span>
              </Label>
              <Input
                type="text"
                key={fields.name.key}
                name={fields.name.name}
                defaultValue={data.name}
                className="w-full"
                placeholder="Product name"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Label className="flex items-center gap-3">
                Description
                <span className="text-red-500 text-xs animate-pulse italic">{fields.description.errors}</span>
              </Label>
              <Textarea
                key={fields.description.key}
                name={fields.description.name}
                defaultValue={data.description}
                placeholder="Enter your product description here"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Label className="flex items-center gap-3">
                SKU
                <span className="text-red-500 text-xs animate-pulse italic">{fields.sku.errors}</span>
              </Label>
              <Input key={fields.sku.key} name={fields.sku.name} defaultValue={data.sku} placeholder="Enter SKU code" />
            </div>

            <div className="flex flex-col gap-3">
              <Label className="flex items-center gap-3">
                Price
                <span className="text-red-500 text-xs animate-pulse italic">{fields.price.errors}</span>
              </Label>
              <Input
                key={fields.price.key}
                name={fields.price.name}
                defaultValue={data.price}
                type="number"
                step="0.01"
                placeholder="£125.99"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Label className="flex items-center gap-3">
                Category
                <span className="text-red-500 text-xs animate-pulse italic">{fields.category.errors}</span>
              </Label>

              <Select key={fields.category.key} name={fields.category.name} defaultValue={data.category}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-3">
              <Label className="flex items-center gap-3">
                Stock Amount
                <span className="text-red-500 text-xs animate-pulse italic">{fields.stock.errors}</span>
              </Label>
              <Input
                key={fields.stock.key}
                name={fields.stock.name}
                defaultValue={data.stock}
                type="number"
                placeholder="100"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Label className="flex items-center gap-3">
                Featured
                <span className="text-red-500 text-xs animate-pulse italic">{fields.isFeatured.errors}</span>
              </Label>
              <Switch key={fields.isFeatured.key} name={fields.isFeatured.name} defaultChecked={data.isFeatured} />
            </div>

            <div className="flex flex-col gap-3">
              <Label className="flex items-center gap-3">
                Status
                <span className="text-red-500 text-xs animate-pulse italic">{fields.status.errors}</span>
              </Label>
              <Select key={fields.status.key} name={fields.status.name} defaultValue={data.status}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-3">
              <Label className="flex items-center gap-3">
                Product images
                <span className="text-red-500 text-xs animate-pulse italic">{fields.images.errors}</span>
              </Label>
              <input
                type="hidden"
                value={images}
                key={fields.images.key}
                name={fields.images.name}
                defaultValue={fields.images.initialValue as any}
              />
              {images.length > 0 ? (
                <div className="flex gap-5">
                  {images.map((image, index) => (
                    <div className="relative w-[200px] h-[200px]" key={index}>
                      <Image
                        src={image}
                        height={200}
                        width={200}
                        className="w-full h-full object-cover rounded-md border"
                        alt="Product image"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteImage(index)}
                        className="absolute -top-3 -right-3 bg-red-500 p-2 rounded-md"
                      >
                        <XCircleIcon size={20} className="text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <UploadDropzone
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    setImages(res.map((r) => r.url));
                  }}
                  onUploadError={() => {
                    alert("Upload failed!");
                  }}
                  appearance={{
                    button: {
                      background: "#E11D48",
                    },
                    label: {
                      color: "#E11D48",
                    },
                  }}
                />
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <SubmitButton label="Update product" />
        </CardFooter>
      </Card>
    </form>
  );
}
