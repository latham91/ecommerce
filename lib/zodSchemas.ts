import { z } from "zod";

export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.enum(["draft", "published", "archived"]),
  price: z.number().min(1),
  isFeatured: z.boolean().optional(),
  images: z.array(z.string()).min(1, "Must use at least one image"),
  stock: z.number(),
  category: z.enum(["tshirts", "hoodies", "jeans", "jackets", "workwear", "shoes", "accessories"]),
  sku: z.string(),
});

export const bannerSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  image: z.string(),
});
