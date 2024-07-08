import { ProductCard } from "@/components/storefront/product-card";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

async function getCategory(productCategory: string) {
  switch (productCategory) {
    case "all": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return { title: "All Products", data: data };
    }
    case "tshirts": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "tshirts",
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return { title: "T-Shirts", data: data };
    }
    case "hoodies": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "hoodies",
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return { title: "Hoodies", data: data };
    }
    case "jackets": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "jackets",
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return { title: "Jackets", data: data };
    }
    case "jeans": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "jeans",
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return { title: "Jeans", data: data };
    }
    case "workwear": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "workwear",
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return { title: "Workwear", data: data };
    }
    case "shoes": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "shoes",
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return { title: "Shoes", data: data };
    }
    case "accessories": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "accessories",
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return { title: "Accessories", data: data };
    }
    default: {
      return notFound();
    }
  }
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const { data, title } = await getCategory(params.category);

  return (
    <section>
      <h1 className="font-semibold text-3xl my-5">{title}</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </section>
  );
}
