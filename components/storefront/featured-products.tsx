import prisma from "@/lib/db";
import { ProductCard } from "./product-card";

async function getFeaturedProducts() {
  const products = await prisma.product.findMany({
    where: {
      status: "published",
      isFeatured: true,
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      price: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return products;
}

export async function FeaturedProducts() {
  const products = await getFeaturedProducts();

  return (
    <div className="py-7 sm:py-14">
      <h2 className="text-3xl font-extrabold tracking-tight">Featured Products</h2>

      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} item={{ ...product, price: Number(product.price) }} />
        ))}
      </div>
    </div>
  );
}
