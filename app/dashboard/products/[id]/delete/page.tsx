import { deleteProduct } from "@/actions";
import { SubmitButton } from "@/components/submit-button";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function DeleteProduct({ params }: { params: { id: string } }) {
  return (
    <div className="h-[80vh] w=full flex items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Are you absolutely sure?</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            This action cannot be undone. This will permanently delete the product and remove all data from our servers.
          </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex justify-between gap-24">
          <Button variant="outline" className="w-full" asChild>
            <Link href="/dashboard/products">Cancel</Link>
          </Button>

          <form action={deleteProduct} className="w-full">
            <input type="hidden" name="productId" value={params.id} />
            <SubmitButton label="Delete product" className="w-full" />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
