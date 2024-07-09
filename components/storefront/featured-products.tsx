import prisma from "@/lib/db";
import { ProductCard, ProductCardSkeleton } from "./product-card";
import { Suspense } from "react";

async function getFeaturedProducts() {
  const products = await prisma.product.findMany({
    where: {
      status: "published",
      isFeatured: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 6,
  });

  return products;
}

export function FeaturedProducts() {
  return (
    <div className="py-7">
      <div className="border-b-2 border-dashed pb-5">
        <h2 className="text-3xl font-extrabold tracking-tight">Featured Products</h2>
      </div>

      <Suspense fallback={<LoadingRows />}>
        <LoadFeaturedProducts />
      </Suspense>
    </div>
  );
}

async function LoadFeaturedProducts() {
  const products = await getFeaturedProducts();

  return (
    <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-16">
      {products.map((product) => (
        <ProductCard key={product.id} item={product} />
      ))}
    </div>
  );
}

function LoadingRows() {
  return (
    <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </div>
  );
}
