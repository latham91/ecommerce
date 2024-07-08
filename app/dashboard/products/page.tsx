import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import prisma from "@/lib/db";
import { cn } from "@/lib/utils";
import { BadgePoundSterlingIcon, EllipsisIcon, PlusCircleIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  const data = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function ProductsPage() {
  const data = await getProducts();

  return (
    <>
      <div className="flex items-center justify-end">
        <Button className="flex items-center gap-2" asChild>
          <Link href="/dashboard/products/create">
            <PlusCircleIcon size={18} />
            <span>Add new product</span>
          </Link>
        </Button>
      </div>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Manage and view your products and their sales performance
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product ID</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-end">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {data.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="space-y-1">
                    <p className="font-semibold ">{product.id}</p>
                    <p className="text-xs text-muted-foreground">SKU: {product.sku}</p>
                  </TableCell>
                  <TableCell className="relative">
                    <Image
                      src={product.images[0]}
                      height={75}
                      width={75}
                      alt={product.name}
                      className="h-[75px] w-[75px] rounded-md object-cover"
                    />
                    {product.isFeatured && (
                      <BadgePoundSterlingIcon className="absolute top-2 right-10 h-6 w-6 bg-purple-500 rounded-full text-white" />
                    )}
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{new Date(product.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell className="text-start">
                    <span
                      className={cn(
                        product.status === "published"
                          ? "bg-emerald-500"
                          : product.status === "draft"
                          ? "bg-orange-400"
                          : product.status === "archived"
                          ? "bg-red-700"
                          : "bg-slate-500",
                        "text-secondary py-1 px-3 rounded-full"
                      )}
                    >
                      {product.status.charAt(0).toUpperCase() + product.status.slice(1).toLocaleLowerCase()}
                    </span>
                  </TableCell>
                  <TableCell className="font-semibold">£{Number(product.price)}</TableCell>
                  <TableCell className="text-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"} size={"icon"}>
                          <EllipsisIcon className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Product actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/products/${product.id}`}>Edit</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/products/${product.id}/delete`}>Delete</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link href={`/product/${product.id}`} target="_blank">
                            View Live Listing
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
