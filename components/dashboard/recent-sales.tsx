import prisma from "@/lib/db";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

async function getRecentSales() {
  const recentSales = await prisma.order.findMany({
    select: {
      amount: true,
      id: true,
      User: {
        select: {
          email: true,
          firstName: true,
          lastName: true,
          avatarUrl: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

  return recentSales;
}

export async function RecentSales() {
  const recentSales = await getRecentSales();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription className="text-muted-foreground">Recent sales from your store</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-8">
        {recentSales.map((sale) => (
          <div className="flex items-center gap-4" key={sale.id}>
            <Avatar className="hidden sm:flex h-9 w-9">
              <AvatarImage src={sale.User?.avatarUrl ?? ""} alt={sale.User?.firstName} />
              <AvatarFallback>{sale.User?.firstName.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="font-semibold">
                {sale.User?.firstName} {sale.User?.lastName}
              </p>
              <p className="text-xs text-muted-foreground">{sale.User?.email}</p>
            </div>
            <p className="ml-auto font-semibold text-green-500">
              +£{new Intl.NumberFormat("en-GB").format(sale.amount / 100)}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
