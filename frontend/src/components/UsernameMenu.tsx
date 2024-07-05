"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";

const UsernameMenu = () => {
  const { user } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
        <CircleUserRound className="text-orange-500" />
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="my-5">
        <DropdownMenuItem className="mx-3 my-3">
          <Link
            href="/manage-restaurant"
            className="font-bold hover:text-orange-500"
          >
            Manage Restaurant
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="mx-3 my-3">
          <Link href="/profile" className="font-bold hover:text-orange-500">
            User Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex">
          <Button className="flex flex-1 font-bold bg-orange-500">
            <Link href="/api/auth/logout">Log Out</Link>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
