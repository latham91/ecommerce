import { EditForm } from "@/components/dashboard/edit-form";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

async function getProduct(productId: string) {
  noStore();

  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!data) {
    return notFound();
  }

  return { ...data, price: data.price.toFixed(2) };
}

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return <EditForm data={product} />;
}
