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
import { Button } from "@/components/ui/button"; // Assuming you have this componentz

const NavBar = () => {
  const [theme, setTheme] = React.useState('light'); // Define the state for theme

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
              <NavigationMenuLink href="/Features">
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              </NavigationMenuLink>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/">
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
              </NavigationMenuLink>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
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