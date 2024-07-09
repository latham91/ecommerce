import Link from "next/link";
import { NavbarLinks } from "./navbar-links";
import Image from "next/image";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ShoppingBagIcon } from "lucide-react";
import UserDropdown from "./user-dropdown";
import { Button } from "../ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { redis } from "@/lib/redis";
import { Cart } from "@/lib/interfaces";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const cart: Cart | null = await redis.get(`cart-${user?.id}`);

  const cartTotal = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <h2 className="text-3xl font-extrabold">
            Brand<span className="text-primary">Logo.</span>
          </h2>
        </Link>

        <NavbarLinks />
      </div>

      <div className="flex items-center">
        {user ? (
          <div className="flex items-center">
            <Link href="/cart" className="group p-2 flex items-center mr-2">
              <ShoppingBagIcon size={24} className="group-hover:text-primary" />
              <span className="ml-1 text-xs font-medium bg-primary h-5 w-5 rounded-full flex items-center justify-center text-white">
                {cartTotal}
              </span>
            </Link>

            <span className="h-6 w-px bg-gray-200 mr-5"></span>

            <UserDropdown
              avatar={user.picture ?? `https://avatar.vercel.sh/${user.given_name}`}
              name={user.given_name as string}
              email={user.email as string}
            />
          </div>
        ) : (
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-2">
            <Button variant="outline" asChild>
              <LoginLink>Sign in</LoginLink>
            </Button>
            <span className="h-6 w-px bg-gray-200"></span>
            <Button asChild>
              <RegisterLink>Register</RegisterLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
