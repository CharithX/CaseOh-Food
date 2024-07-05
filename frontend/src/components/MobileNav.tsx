import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

const MobileNav = () => {
  const { user } = useUser();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500 " />
      </SheetTrigger>
      <SheetContent>
        {user ? (
          <>
            <div className="font-bold  text-center">{user.email}</div>
            <Button className="w-full">
              <Link
                href="/profile"
                className="w-full text-center font-bold hover:text-orange-500"
              >
                Profile
              </Link>
            </Button>
            <Button className="w-full bg-orange-500">
              <Link
                href="/api/auth/logout"
                className="w-full text-center text-white"
              >
                Log Out
              </Link>
            </Button>
          </>
        ) : (
          <SheetDescription className="flex my-5">
            <Button className="flex-1 font-bold- bg-orange-500">
              <a href="/api/auth/login">Log In</a>
            </Button>
          </SheetDescription>
        )}
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
