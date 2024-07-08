import { Decimal } from "@prisma/client/runtime/library";

export type Cart = {
  userId: string;
  items: Array<{
    id: string;
    name: string;
    price: Decimal;
    quantity: number;
    imageString: string;
  }>;
};
