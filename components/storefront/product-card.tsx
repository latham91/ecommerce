import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Button } from "../ui/button";
import Link from "next/link";
import { Decimal } from "@prisma/client/runtime/library";
import { $Enums } from "@prisma/client";
import { Skeleton } from "../ui/skeleton";

interface ProductCardProps {
  item: {
    id: string;
    name: string;
    description: string;
    status: $Enums.ProductStatus;
    price: number;
    images: string[];
    stock: number;
    isFeatured: boolean;
    sku: string;
    category: $Enums.Category;
    createdAt: Date;
  };
}

export function ProductCard({ item }: ProductCardProps) {
  return (
    <div className="rounded-md flex flex-col justify-between backdrop-blur-sm">
      <Carousel className="w-full mx-auto">
        <CarouselContent>
          {item.images.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[350px]">
                <Image src={item} alt="Product image" fill className="object-cover object-center w-full h-full rounded-md" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
      </Carousel>

      <div className="flex justify-between mt-2 p-2">
        <h2 className="font-semibold text-xl">{item.name}</h2>
        <h3 className="inline-flex items-center rounded-md bg-primary/10 text-primary py-1 px-2 font-medium ring-1 ring-inset ring-primary/10">
          £{item.price.toString()}
        </h3>
      </div>
      <p className="text-muted-foreground text-xs p-2 line-clamp-2">{item.description.substring(0, 125) + "..."}</p>

      <Button className="w-full mt-3" asChild>
        <Link href={`/product/${item.id}`}>View product</Link>
      </Button>
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col">
      <Skeleton className="w-full h-[330px] bg-primary/20" />
      <div className="flex flex-col mt-2 gap-y-2">
        <Skeleton className="h-4 w-full bg-primary/20" />
        <Skeleton className="h-6 w-full bg-primary/20" />
      </div>
      <Skeleton className="w-full h-10 mt-5 bg-primary/20" />
    </div>
  );
}
