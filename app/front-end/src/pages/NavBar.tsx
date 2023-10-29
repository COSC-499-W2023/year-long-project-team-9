import React, { useState } from "react";
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
import { ArrowDownLeftSquare, Sun, Moon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"; // Assuming you have these components
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import useScroll from "@/components/hooks/scroll";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const scroll = useScroll();
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div className="sticky top-0 bg-gradient-to-b from-secondary to-background z-50 flex flex-column justify-between min-w-full">
      <div className="p-1">
        <NavigationMenu>
          <NavigationMenuLink href="/" className="p-5">
            <Image
              className="min-h-full"
              src="/logo.svg"
              alt="obscurus"
              width={50}
              height={50}
            />
          </NavigationMenuLink>

          <NavigationMenuList>
            <NavigationMenuLink href="/">
            <NavigationMenuItem>
              <span className="font-extrabold text-lg p-5 hover:cursor-pointer">
                obscurus
              </span>
            </NavigationMenuItem>
            </NavigationMenuLink>
            <NavigationMenuLink href="/CreateRequest">
            <NavigationMenuItem>
              <div
                className="font-bold text-sm p-5 hover:cursor-pointer"
                // onClick={() => scroll("#about")}
              >
                Create Request
              </div>
            </NavigationMenuItem>
            </NavigationMenuLink>
            <NavigationMenuLink href="/MyRequests">
              <div
                className="font-bold text-sm p-5 hover:cursor-pointer"
                // onClick={() => scroll("#features")}
              >
                My Requests
              </div>
            </NavigationMenuLink>
            <NavigationMenuLink href="/BlurVideo">
            <NavigationMenuItem>
              <div
                className="font-bold text-sm grid grid-cols-2 gap-2 p-5 hover:cursor-pointer"
                onClick={() => console.log("TODO: Go to Make a Request page")}
              >
                <div>Upload/Record Video</div>
                {/* <ArrowDownLeftSquare
                  className=" justify-self-start rotate-180 mt-1"
                  size={20}
                /> */}
              </div>
            </NavigationMenuItem>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="grid grid-flow-col gap-2 justify-end items-center pr-5 ">
        <div className="flex justify-end space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun size={20} />

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
        {signedIn ? (
         
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Avatar onClick={() => setSignedIn(false)}>
            <AvatarImage src="https://github.com/jansdhillon.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Keyboard shortcuts
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Email</DropdownMenuItem>
                  <DropdownMenuItem>Message</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>More...</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              New Team
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>GitHub</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuItem disabled>API</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
          
        ) : (
          <div className="grid items-center justify-end">

              <Button variant="default" onClick={() => setSignedIn(true)}>Sign In</Button>

          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
