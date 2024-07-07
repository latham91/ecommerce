"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
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
