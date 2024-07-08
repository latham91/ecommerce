import Link from "next/link";

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
  return (
    <div className="hidden md:flex justify-center items-center gap-x-5 ml-16">
      {navbarLinks.map((link) => (
        <Link key={link.id} href={link.href}>
          {link.name}
        </Link>
      ))}
    </div>
  );
}
