import { CategorySelection } from "@/components/storefront/category-selection";
import { FeaturedProducts } from "@/components/storefront/featured-products";
import { Hero } from "@/components/storefront/hero";

export default function StoreHome() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <CategorySelection />
    </div>
  );
}
