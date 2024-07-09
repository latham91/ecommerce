import DashboardNavigation from "@/components/dashboard/dashboard-navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { CircleUserIcon, MenuIcon } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { redirect } from "next/navigation";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { unstable_noStore as noStore } from "next/cache";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  noStore();

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== "alatham7891@gmail.com") {
    return redirect("/");
  }

  return (
    <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-white">
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-extrabold">NavBrand</h1>

          <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <DashboardNavigation />
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"secondary"} size={"icon"} className="rounded-full cursor-pointer" asChild>
                <Avatar>
                  <AvatarImage src={user?.picture ?? ""} alt={user.given_name ?? ""} />
                  <AvatarFallback>
                    <CircleUserIcon className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <LogoutLink>Sign out</LogoutLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button className="shrink-0 md:hidden" variant={"outline"} size={"icon"}>
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side={"right"}>
              <h2 className="text-xl font-semibold border-b pb-4">Navigation Menu</h2>

              <nav className="grid gap-6 text-lg font-medium mt-5">
                <DashboardNavigation />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="my-5">{children}</main>
    </div>
  );
}
