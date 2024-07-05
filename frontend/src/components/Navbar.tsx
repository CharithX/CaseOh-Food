"use client";

import React from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { useUser } from "@auth0/nextjs-auth0/client";


const Navbar = () => {
  const { user } = useUser();
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-bold tracking-tight text-orange-500"
        >
          Caseoh Food
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <span>
            { user ?  (
              <UsernameMenu/>
            ) : (
              <Button
                variant="ghost"
                className="font-bold hover:text-orange-500 hover:bg-white"
              >
                <a href="/api/auth/login">Log In</a>
              </Button>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
