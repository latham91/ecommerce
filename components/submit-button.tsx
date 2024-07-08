"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2Icon, ShoppingBagIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function SubmitButton({ label, className }: { label?: string; className?: string }) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <div>
          <Button disabled>
            <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
            Please wait...
          </Button>
        </div>
      ) : (
        <Button type="submit" className={cn(className)}>
          {label || "Create product"}
        </Button>
      )}
    </>
  );
}

export function ShoppingCartButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled size="lg" className="w-full mt-10">
          <Loader2Icon className="mr-2 h-5 w-5 animate-spin" />
          Please wait...
        </Button>
      ) : (
        <Button size="lg" className="w-full mt-10" type="submit">
          <ShoppingBagIcon className="mr-2 h-5 w-5" />
          Add to basket
        </Button>
      )}
    </>
  );
}
