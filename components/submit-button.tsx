"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { CreditCardIcon, Loader2Icon, ShoppingBagIcon, Trash2Icon, TrashIcon } from "lucide-react";
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

export function DeleteCartItemButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled size="sm" variant="destructive" className="mt-10 w-full">
          <Loader2Icon className="mr-2 h-5 w-5 animate-spin" />
          Deleting...
        </Button>
      ) : (
        <Button size="sm" variant="destructive" className="mt-10 w-full" type="submit">
          <Trash2Icon className="h-5 w-5" />
        </Button>
      )}
    </>
  );
}

export function CheckoutButton() {
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
          <CreditCardIcon className="mr-2 h-5 w-5" />
          Checkout now
        </Button>
      )}
    </>
  );
}
