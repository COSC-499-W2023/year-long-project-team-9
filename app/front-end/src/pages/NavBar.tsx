import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ArrowDownLeftSquare, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // Assuming you have these components
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import useScroll from "@/components/hooks/scroll";

const NavBar = () => {
  const { setTheme } = useTheme();
  const router = useRouter();
  const scroll = useScroll();

  return (
    <div className="sticky top-0 bg-gradient-to-b from-secondary to-background z-50 flex flex-column p-5 justify-between min-w-full">
      <div className="p-1">
        <NavigationMenu>
          <NavigationMenuLink href="/">
              <Image
                className="min-h-full"
                src="/logo.svg"
                alt="obscurus"
                width={50}
                height={50}
              />
          </NavigationMenuLink>

          <NavigationMenuList>
            <NavigationMenuItem>
              <span className="font-extrabold text-lg p-5 hover:cursor-pointer">
                obscurus
              </span>
            </NavigationMenuItem>
            <NavigationMenuLink>
              <div
                className="font-semibold text-md p-5 hover:cursor-pointer"
                onClick={() => scroll("#features")}
              >
                Features
              </div>
            </NavigationMenuLink>
            <NavigationMenuItem>
              <div
                className="font-semibold text-md p-5 hover:cursor-pointer"
                onClick={() => scroll("#about")}
              >
                About
              </div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div
                className="font-bold grid grid-cols-2 gap-2 p-5 hover:cursor-pointer"
                onClick={() => console.log("TODO: Go to Make a Request page")}
              >
                <div>Make a Request</div>
                <ArrowDownLeftSquare
                  className=" justify-self-start rotate-180 mt-1"
                  size={20}
                />
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="grid grid-flow-col gap-2 justify-end items-center">
        <div className="flex justify-end space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="bg-secondary" />
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
  );
};

export default NavBar;
