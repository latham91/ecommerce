"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navbarLinks = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "Brands",
    href: "/products/brands",
  },
  {
    id: 2,
    name: "Categories",
    href: "/products/categories",
  },
  {
    id: 3,
    name: "Resources",
    href: "/resources",
  },
];

export function NavbarLinks() {
  const location = usePathname();

  return (
    <div className="hidden md:flex justify-center items-center gap-x-5 ml-16">
      {navbarLinks.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={cn(
            location === link.href
              ? "underline underline-offset-8 decoration-2 decoration-primary"
              : "hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-primary",
            "group font-medium rounded-md"
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
