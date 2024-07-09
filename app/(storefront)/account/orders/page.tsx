import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

async function getOrders() {
  noStore();

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login?");
  }

  const orders = await prisma.order.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return orders;
}

export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <div>
      {orders.map((order) => (
        <div key={order.id}>
          {order.amount} - {order.status}
        </div>
      ))}
    </div>
  );
}
