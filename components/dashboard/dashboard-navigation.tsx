"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
  },
  {
    name: "Products",
    href: "/dashboard/products",
  },
  {
    name: "Banner",
    href: "/dashboard/banner",
  },
  {
    name: "Storefront",
    href: "/",
  },
];

export default function DashboardNavigation() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            link.href === pathname
              ? "font-semibold underline underline-offset-8 text-primary"
              : "font-normal no-underline text-muted-foreground"
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
