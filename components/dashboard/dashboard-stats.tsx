import { BadgePoundSterlingIcon, PartyPopperIcon, ShoppingBagIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import prisma from "@/lib/db";

async function getStats() {
  const [users, products, orders, revenue] = await Promise.all([
    prisma.user.count(),
    prisma.product.count(),
    prisma.order.count(),
    prisma.order.aggregate({
      _sum: {
        amount: true,
      },
    }),
  ]);

  return { users, products, orders, revenue: revenue._sum.amount };
}

export async function DashboardStats() {
  const { users, products, orders, revenue } = await getStats();

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card>
        <CardHeader className="p-3">
          <CardTitle className="flex items-center gap-2">
            <BadgePoundSterlingIcon size={22} />
            <span className="text-xl">Total Revenue</span>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-4xl font-bold">£{revenue ? new Intl.NumberFormat("en-GB").format(revenue / 100) : 0}</p>
          <p className="text-sm text-muted-foreground">Based on {orders} sales</p>
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
          <p className="text-4xl font-bold">{orders}</p>
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
          <p className="text-4xl font-bold">{products}</p>
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
          <p className="text-4xl font-bold">{users}</p>
          <p className="text-sm text-muted-foreground">User accounts made</p>
        </CardContent>
      </Card>
    </div>
  );
}
