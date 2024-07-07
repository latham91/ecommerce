import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgePoundSterlingIcon, PartyPopperIcon, ShoppingBagIcon } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="p-3">
            <CardTitle className="flex items-center gap-2">
              <BadgePoundSterlingIcon size={22} />
              <span className="text-xl">Total Revenue</span>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-4xl font-bold">£100,000</p>
            <p className="text-sm text-muted-foreground">Based on 100 charges</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-3">
            <CardTitle className="flex items-center gap-2">
              <ShoppingBagIcon size={22} />
              <span className="text-xl">Total Sales</span>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-4xl font-bold">56</p>
            <p className="text-sm text-muted-foreground">Products sold</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-3">
            <CardTitle className="flex items-center gap-2">
              <PartyPopperIcon size={22} />
              <span className="text-xl">Total Products</span>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-4xl font-bold">158</p>
            <p className="text-sm text-muted-foreground">Items listed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-3">
            <CardTitle className="flex items-center gap-2">
              <PartyPopperIcon size={22} />
              <span className="text-xl">Total Users</span>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-4xl font-bold">233</p>
            <p className="text-sm text-muted-foreground">User accounts made</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription className="text-muted-foreground">Recent transactions from your store</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription className="text-muted-foreground">Recent sales from your store</CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>AL</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="font-semibold">Aaron Latham</p>
                <p className="text-xs text-muted-foreground">latham91@icloud.com</p>
              </div>
              <p className="ml-auto font-semibold">+£125.99</p>
            </div>

            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>AL</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="font-semibold">Aaron Latham</p>
                <p className="text-xs text-muted-foreground">latham91@icloud.com</p>
              </div>
              <p className="ml-auto font-semibold">+£125.99</p>
            </div>

            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>AL</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="font-semibold">Aaron Latham</p>
                <p className="text-xs text-muted-foreground">latham91@icloud.com</p>
              </div>
              <p className="ml-auto font-semibold">+£125.99</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
