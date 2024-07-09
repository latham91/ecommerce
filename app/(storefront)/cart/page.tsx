import { checkout, deleteItem } from "@/actions";
import { CheckoutButton, DeleteCartItemButton } from "@/components/submit-button";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Cart } from "@/lib/interfaces";
import { redis } from "@/lib/redis";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ChevronLeftIcon, ChevronRightIcon, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ShoppingCart() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login?");
  }

  const cart: Cart | null = await redis.get(`cart-${user.id}`);

  let totalPriceIncVAT = 0;
  let totalPriceCount = 0;
  let totalPrice = 0;

  cart?.items.forEach((item) => {
    totalPriceCount += item.price * item.quantity;
    totalPriceIncVAT += item.price * item.quantity * 1.2;
    totalPrice = Number(totalPriceCount.toFixed(2));
  });

  return (
    <div className="max-w-2xl mx-auto mt-10 min-h-[75vh]">
      {!cart || !cart.items ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md p-8 text-center mt-20 backdrop-blur-sm">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <ShoppingBagIcon className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl font-extrabold mt-6">Your cart is empty</h2>
          <p className="text-xl text-gray-600 mt-2">Looks like you haven&apos;t added anything to your cart yet.</p>

          <Button size="lg" className="mt-10 font-semibold text-lg" asChild>
            <Link href="/">
              <ChevronLeftIcon className="w-6 h-6" />
              Continue shopping
            </Link>
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-y-5">
          {cart?.items.map((item) => (
            <div key={item.id} className="flex bg-primary/5 backdrop-blur-sm p-4 rounded-md border border-primary">
              <div className="w-24 h-24 sm:w-32 sm:h-32 relative">
                <Image src={item.imageString} alt="Product image" fill className="object-cover rounded-md" />
              </div>
              <div className="ml-5 flex justify-between w-full font-medium">
                <p className="font-bold text-lg">{item.name}</p>
                <div className="flex flex-col h-full justify-between">
                  <div className="flex items-center gap-x-2 justify-end">
                    <p>{item.quantity} x</p>
                    <p className="font-bold">£{item.price.toString()}</p>
                  </div>

                  <form action={deleteItem} className="text-end">
                    <input type="hidden" name="productId" value={item.id} />
                    <DeleteCartItemButton />
                  </form>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-10">
            <div className="flex items-center justify-between font-medium">
              <p className="font-bold">Price:</p>
              <p>£{totalPrice}</p>
            </div>
            <div className="flex items-center justify-between font-medium">
              <p className="font-bold">VAT:</p>
              <p>20%</p>
            </div>
            <div className="flex items-center justify-between font-bold text-2xl pt-5 border-t border-dashed border-primary">
              <p>Total Price (inc. VAT):</p>
              <p>£{Number(totalPriceIncVAT).toFixed(2)}</p>
            </div>

            <form action={checkout}>
              <CheckoutButton />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
