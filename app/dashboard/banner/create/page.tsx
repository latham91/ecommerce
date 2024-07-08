"use client";

import { createBanner } from "@/actions";
import { SubmitButton } from "@/components/submit-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadDropzone } from "@/lib/uploadthing";
import { bannerSchema } from "@/lib/zodSchemas";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";

export default function CreateBannerPage() {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [lastResult, action] = useFormState(createBanner, undefined);

  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: bannerSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
      <div className="flex items-center gap-x-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/banner">
            <ChevronLeftIcon size={18} />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight">Add a new banner</h1>
      </div>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Banner details</CardTitle>
          <CardDescription>Create and add a new banner here</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-3">
              <Label className="flex items-center gap-3">
                Banner title
                <span className="text-red-500 text-xs animate-pulse italic">{fields.title.errors}</span>
              </Label>
              <Input
                name={fields.title.name}
                key={fields.title.key}
                defaultValue={fields.title.initialValue}
                type="text"
                placeholder="eg. Summer sale now on!"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Label className="flex items-center gap-3">
                Banner subtitle
                <span className="text-red-500 text-xs animate-pulse italic">{fields.subtitle.errors}</span>
              </Label>
              <Input
                name={fields.subtitle.name}
                key={fields.subtitle.key}
                defaultValue={fields.subtitle.initialValue}
                type="text"
                placeholder="eg. Get at least 50% off all summer items*"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Label className="flex items-center gap-3">
                Image
                <span className="text-red-500 text-xs animate-pulse italic">{fields.image.errors}</span>
              </Label>
              <input
                type="hidden"
                value={image}
                key={fields.image.key}
                name={fields.image.name}
                defaultValue={fields.image.initialValue}
              />

              {image !== undefined ? (
                <Image
                  src={image}
                  width={200}
                  height={200}
                  alt="Banner image"
                  className="w-[200px] h-[200px] object-cover border rounded-md"
                />
              ) : (
                <UploadDropzone
                  endpoint="bannerUploader"
                  onClientUploadComplete={(res) => {
                    setImage(res[0].url);
                  }}
                  onUploadError={() => {
                    alert("Failed to upload image");
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
          <SubmitButton label="Create banner" />
        </CardFooter>
      </Card>
    </form>
  );
}
