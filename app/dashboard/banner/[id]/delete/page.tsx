import { deleteBanner } from "@/actions";
import { SubmitButton } from "@/components/submit-button";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function BannerDelete({ params }: { params: { id: string } }) {
  return (
    <div className="h-[80vh] w=full flex items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Are you absolutely sure?</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            This action cannot be undone. This will permanently delete the banner and remove all data from our servers.
          </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex justify-between gap-24">
          <Button variant="outline" className="w-full" asChild>
            <Link href="/dashboard/banner">Cancel</Link>
          </Button>

          <form action={deleteBanner} className="w-full">
            <input type="hidden" name="bannerId" value={params.id} />
            <SubmitButton label="Delete banner" className="w-full" />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
