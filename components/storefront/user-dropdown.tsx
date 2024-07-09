import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

interface UserDropdownProps {
  email: string;
  name: string;
  avatar: string | undefined;
}

export default function UserDropdown({ email, name, avatar }: UserDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={avatar} alt="User avatar" />
            <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="flex flex-col gap-1">
          <p className="text-sm font-medium leading-none">{name}</p>
          <p className="text-xs leading-none text-muted-foreground">{email}</p>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/account/orders">My orders</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild className="cursor-pointer">
          <LogoutLink>Sign out</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
