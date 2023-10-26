import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Moon, Sun } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"; // Assuming you have these components
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useRouter } from 'next/router';
import useScroll  from "@/components/hooks/scroll";

const NavBar = () => {
  const { setTheme } = useTheme();
  const router = useRouter();
  const scroll = useScroll();

  return (
    <div className="grid p-5">
      {/*first column with 5 sub-columns*/}
      <div className=" grid grid-flow-col gap-2 p-5">
        <NavigationMenu className="">
          <NavigationMenuList>
          <NavigationMenuLink href="/">
            <NavigationMenuItem className="grid justify-start min-h-full">
              <Image className="" src="/logo.svg" alt="obscurus" width={50} height={50} />
            </NavigationMenuItem>
            </NavigationMenuLink>
            <NavigationMenuItem>
              <h1 className=" text-md px-5 font-extrabold">obscurus</h1>
            </NavigationMenuItem>
            <NavigationMenuItem>
              {/*TODO: add ability to jump to features section*/}
              <NavigationMenuLink>
              <NavigationMenuTrigger className="font-semibold" onClick={() => scroll("#features")}>Features</NavigationMenuTrigger>
              </NavigationMenuLink>
              <NavigationMenuContent>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/">
                <NavigationMenuTrigger className="font-semibold">Getting Started</NavigationMenuTrigger>
              </NavigationMenuLink>
              <NavigationMenuContent>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-semibold">About</NavigationMenuTrigger>
              <NavigationMenuContent>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem></NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/*second column with 2 sub-columns*/}
        <div className="grid  grid-flow-col gap-2 justify-end items-center">
          <div className="flex justify-end space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="grid items-center justify-end">
            <Link href="/SignIn">
              <Button variant="default">Sign In</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;