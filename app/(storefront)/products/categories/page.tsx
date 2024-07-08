import Image from "next/image";
import Link from "next/link";
import all from "@/public/all-category.jpg";
import tshirt from "@/public/tshirt-category.jpg";
import hoodie from "@/public/hoodie-category.jpg";
import jacket from "@/public/jacket-category.jpg";
import workwear from "@/public/workwear-category.jpg";

const categoryList = [
  {
    id: 0,
    name: "All Products",
    href: "/products/all",
    image: all,
  },
  {
    id: 0,
    name: "T-Shirts",
    href: "/products/tshirts",
    image: tshirt,
  },
  {
    id: 0,
    name: "Hoodies",
    href: "/products/hoodies",
    image: hoodie,
  },
  {
    id: 0,
    name: "Jackets",
    href: "/products/jackets",
    image: jacket,
  },
  {
    id: 0,
    name: "Workwear",
    href: "/products/workwear",
    image: workwear,
  },
];

export default function CategoriesPage() {
  return (
    <div className="my-5">
      <h1 className="text-3xl font-extrabold tracking-tight">Categories</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        {categoryList.map((category) => (
          <div key={category.id}>
            <div className="group aspect-w-2 aspect-h-1 rounded-md overflow-hidden sm:aspect-w-1 md:row-span-2 md:col-span-2 sm:col-span-1">
              <Image src={category.image} alt="All products category image" className="object-cover" />
              <div className="bg-gradient-to-b from-transparent via-transparent to-primary opacity-55" />
              <div className="p-5 flex items-end">
                <div className="cursor-pointer">
                  <Link href={category.href}>
                    <h3 className="text-4xl text-secondary font-semibold">{category.name}</h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
