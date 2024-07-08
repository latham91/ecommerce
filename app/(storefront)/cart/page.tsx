import { Button } from "@/components/ui/button";
import { Cart } from "@/lib/interfaces";
import { redis } from "@/lib/redis";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function ShoppingCart() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login?");
  }

  const cart: Cart | null = await redis.get(`cart-${user.id}`);

  return (
    <div className="max-w-2xl mx-auto mt-10 min-h-[75vh]">
      {cart?.items.length === 0 ? (
        <div>
          <h1 className="text-3xl font-bold">Your cart is empty</h1>
          <p className="text-lg text-gray-600 mt-2">Looks like you haven't added anything to your cart yet.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-y-5">
          {cart?.items.map((item) => (
            <div key={item.id} className="flex bg-slate-300/50 p-4 rounded-md border border-primary">
              <div className="w-24 h-24 sm:w-32 sm:h-32 relative">
                <Image src={item.imageString} alt="Product image" fill className="object-cover rounded-md" />
              </div>
              <div className="ml-5 flex justify-between w-full font-medium">
                <p className="font-bold text-lg">{item.name}</p>
                <div className="flex flex-col h-full justify-between">
                  <div className="flex items-center gap-x-2">
                    <p>{item.quantity} x</p>
                    <p className="font-bold">£{item.price.toString()}</p>
                  </div>
                  <Button variant="destructive" size="sm" className="text-end">
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
