import prisma from "@/lib/db";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

async function getBanners() {
  const data = await prisma.banner.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export async function Hero() {
  const banners = await getBanners();

  console.log(banners);

  return (
    <Carousel
      className="py-7 sm:py-14"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {banners.map((banner) => (
          <CarouselItem key={banner.id}>
            <div className="relative h-[600px]">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover object-left-top w-full h-full rounded-md transition-transform duration-500 hover:scale-110"
                priority={true}
              />

              <div className="absolute bottom-10 left-0 right-0 bg-opacity-75 bg-gradient-to-r from-transparent via-primary/80 to-primary backdrop-blur-sm p-5 space-y-2">
                <div className="mb-5">
                  <h1 className="text-xl lg:text-5xl font-bold text-secondary text-right">{banner.title}</h1>
                  <p className="text-muted text-right">{banner.subtitle}</p>
                </div>

                <div className="flex items-center gap-5 justify-end">
                  <Button variant="secondary" size="lg" asChild>
                    <Link href="/products/brands">Shop Brands</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="bg-transparent text-secondary" asChild>
                    <Link href="/products/categories">Categories</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-16" />
      <CarouselNext className="mr-16" />
    </Carousel>
  );
}
