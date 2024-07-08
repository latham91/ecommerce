import Image from "next/image";
import Link from "next/link";
import all from "@/public/all-category.jpg";
import tshirt from "@/public/tshirt-category.jpg";
import hoodie from "@/public/hoodie-category.jpg";
import jacket from "@/public/jacket-category.jpg";
import workwear from "@/public/workwear-category.jpg";

export function CategorySelection() {
  return (
    <div className="py-7">
      <div className="flex justify-between items-center border-b-2 border-dashed pb-5">
        <h2 className="text-3xl font-extrabold tracking-tight">Shop by Category</h2>
        <Link className="text-sm text-primary hover:text-primary/80" href="/products/all">
          Browse all products &rarr;
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 md:grid-cols-4 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <div className="group aspect-w-2 aspect-h-1 rounded-md overflow-hidden sm:aspect-w-1 md:row-span-2 md:col-span-2 sm:col-span-1">
          <Image src={all} alt="All products category image" className="object-cover" />
          <div className="bg-gradient-to-b from-transparent via-transparent to-primary opacity-55" />
          <div className="p-5 flex items-end">
            <div className="cursor-pointer">
              <Link href="/products/all">
                <h3 className="text-4xl text-secondary font-semibold">All products</h3>
                <p className="text-secondary text-sm">View all our products</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="group aspect-w-2 aspect-h-1 rounded-md overflow-hidden sm:relative sm:aspect-none sm:h-full">
          <Image
            src={tshirt}
            alt="T-shirt category image"
            className="object-center object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div className="bg-gradient-to-b from-transparent via-transparent to-primary opacity-60 sm:absolute sm:inset-0" />
          <div className="p-5 flex items-end sm:absolute sm:inset-0">
            <div>
              <Link href="/products/tshirts">
                <h3 className="text-3xl text-secondary font-semibold">T-Shirts</h3>
                <p className="text-secondary text-sm">View our t-shirts</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="group aspect-w-2 aspect-h-1 rounded-md overflow-hidden sm:relative sm:aspect-none sm:h-full">
          <Image
            src={hoodie}
            alt="Hoodie category image"
            className="object-center object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div className="bg-gradient-to-b from-transparent via-transparent to-primary opacity-60 sm:absolute sm:inset-0" />
          <div className="p-5 flex items-end sm:absolute sm:inset-0">
            <div>
              <Link href="/products/hoodies">
                <h3 className="text-3xl text-secondary font-semibold">Hoodies</h3>
                <p className="text-secondary text-sm">View our hoodies</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="group aspect-w-2 aspect-h-1 rounded-md overflow-hidden sm:relative sm:aspect-none sm:h-full">
          <Image
            src={jacket}
            alt="Jackets category image"
            className="object-center object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div className="bg-gradient-to-b from-transparent via-transparent to-primary opacity-60 sm:absolute sm:inset-0" />
          <div className="p-5 flex items-end sm:absolute sm:inset-0">
            <div>
              <Link href="/products/jackets">
                <h3 className="text-3xl text-secondary font-semibold">Jackets</h3>
                <p className="text-secondary text-sm">View our jackets</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="group aspect-w-2 aspect-h-1 rounded-md overflow-hidden sm:relative sm:aspect-none sm:h-full">
          <Image
            src={workwear}
            alt="Workwear category image"
            className="object-center object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div className="bg-gradient-to-b from-transparent via-transparent to-primary opacity-60 sm:absolute sm:inset-0" />
          <div className="p-5 flex items-end sm:absolute sm:inset-0">
            <div>
              <Link href="/products/workwear">
                <h3 className="text-3xl text-secondary font-semibold">Workwear</h3>
                <p className="text-secondary text-sm">View our workwear</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
