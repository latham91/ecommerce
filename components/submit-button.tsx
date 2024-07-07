"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";

export function SubmitButton() {
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
        <Button type="submit">Create product</Button>
      )}
    </>
  );
}
