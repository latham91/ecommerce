import { ImageSlider } from "@/components/storefront/image-slider";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

async function getProduct(productId: string) {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) {
    return notFound();
  }

  return product;
}

export default async function SingleProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start lg:gap-x-24 py-6">
        <ImageSlider images={product.images} />
      </div>
    </>
  );
}
