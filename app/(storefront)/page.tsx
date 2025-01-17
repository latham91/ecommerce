import { CategorySelection } from "@/components/storefront/category-selection";
import { FeaturedProducts } from "@/components/storefront/featured-products";
import { Hero } from "@/components/storefront/hero";
import TrustedSlider from "@/components/storefront/trusted-slider";

export default function StoreHome() {
  return (
    <div>
      <Hero />
      <CategorySelection />
      <FeaturedProducts />
    </div>
  );
}
