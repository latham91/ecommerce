import { addItem } from "@/actions";
import { FeaturedProducts } from "@/components/storefront/featured-products";
import { ImageSlider } from "@/components/storefront/image-slider";
import { ShoppingCartButton } from "@/components/submit-button";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { ShoppingBagIcon, StarIcon } from "lucide-react";
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
  const addProductToCart = addItem.bind(null, product.id);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start lg:gap-x-24 py-6">
        <ImageSlider images={product.images} />

        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">{product.name}</h1>
          <p className="text-3xl font-semibold text-primary">£{product.price.toString()}</p>

          <div className="mt-3 flex items-center gap-1">
            <StarIcon className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <StarIcon className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <StarIcon className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <StarIcon className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <StarIcon className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-xs ml-2">(5/5 reviews)</span>
          </div>

          <p className="text-sm py-5 text-muted-foreground">Product SKU: {product.sku}</p>

          <div>
            <h5 className="text-2xl font-bold border-b border-dashed py-2 border-primary mt-10">Product description</h5>
            <p className="text-base text-gray-700 mt-6">{product.description}</p>
          </div>

          <form action={addProductToCart}>
            <ShoppingCartButton />
          </form>
        </div>
      </div>

      <div className="mt-16">
        <FeaturedProducts />
      </div>
    </>
  );
}
