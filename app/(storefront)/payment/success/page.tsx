import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2Icon } from "lucide-react";
import Link from "next/link";

export default function PaymentSuccess() {
  return (
    <section className="w-full min-h-[79vh] flex items-center justify-center">
      <Card className="w-[400px]">
        <div className="p-6">
          <div className="w-full flex justify-center">
            <CheckCircle2Icon className="w-12 h-12 rounded-full bg-green-500/30 text-green-500 p-2" />
          </div>
          <div className="mt-3 text-center sm:mt-5 w-full">
            <h3 className="text-3xl font-extrabold text-green-500">Payment Successful!</h3>
            <p className="mt-2 text-muted-foreground">
              Thank you for your purchase, your invoice has been sent to your email address.
            </p>

            <Button size="lg" className="mt-5 bg-green-500 hover:bg-green-500/80" asChild>
              <Link href="/">Back to homepage</Link>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
