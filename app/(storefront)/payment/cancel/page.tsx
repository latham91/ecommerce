import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { XCircleIcon } from "lucide-react";
import Link from "next/link";

export default function PaymentCancel() {
  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center">
      <Card className="w-[400px]">
        <div className="p-6">
          <div className="w-full flex justify-center">
            <XCircleIcon className="w-12 h-12 rounded-full bg-red-500/30 text-red-500 p-2" />
          </div>
          <div className="mt-3 text-center sm:mt-5 w-full">
            <h3 className="text-3xl font-extrabold text-primary">Payment Cancelled</h3>
            <p className="mt-2 text-muted-foreground">Something went wrong with your payment, no charges have been made</p>

            <Button size="lg" className="mt-5" asChild>
              <Link href="/cart">Back to cart</Link>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
