import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ArrowDownLeftSquare, Sun, Moon, Bold } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AppleLogin from "react-apple-login";
import {useCurrentTheme} from "@/components/hooks/useCurrentTheme";
import Login from "../components/Login";


const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const scroll = useScroll();
  const [signedIn, setSignedIn] = useState(false);
  const [showSignInDialog, setShowSignInDialog] = useState(false);


const [customButton, onCustomButtonChange] = useState(true);
const [withUserData, onWithUserDataChange] = useState(true);
const [customClassName, onCustomClassNameChange] = useState("my-button");

  const handleAuth = (route: string) => {
    if (signedIn) {
      router.push(route);
    } else {
      setShowSignInDialog(true);
    }
  };

  const SignIn = () => {
    setSignedIn(true);
  };

  const SignOut = () => {
    setSignedIn(false);
  };



  return (
    <div className="sticky top-0 bg-gradient-to-b from-secondary to-background z-50 flex flex-column justify-between min-w-full">
      <div className="p-1">
        <NavigationMenu>
          <Link href="/" className="p-5">
            <Image
              className="min-h-full"
              src="/logo.svg"
              alt="obscurus"
              width={60}
              height={60}
            />
          </Link>

          <NavigationMenuList>
            <Link href="/">
              <NavigationMenuItem>
                <span className="font-extrabold text-xl p-5 hover:cursor-pointer">
                  obscurus
                </span>
              </NavigationMenuItem>
            </Link>
            <Link href="CreateRequest">
            <NavigationMenuItem >
              <div
                className="font-bold text-base p-5 hover:cursor-pointer"
                // onClick={() => scroll("#about")}
              >
                Create Request
              </div>
            </NavigationMenuItem>
            </Link>
            <NavigationMenuItem onClick={() => handleAuth("MyRequests")}>
              <div
                className="font-bold text-base p-5 hover:cursor-pointer"
                // onClick={() => scroll("#features")}
              >
                My Requests
              </div>
            </NavigationMenuItem>
            <NavigationMenuItem onClick={() => router.push("submit/Upload")}>
              <div
                className="font-bold text-base p-5 hover:cursor-pointer"
                // onClick={() => scroll("#features")}
              >
                Upload
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="grid grid-flow-col gap-2 justify-end items-center pr-5 ">
        <div className="flex justify-end space-x-2">
          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" data-testid="theme-toggle">
                <Sun size={25} className="stroke-primary fill-primary"/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")} data-testid="light">
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")} data-testid="dark">
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")} data-testid="system">
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Login/>
      </div>
    </div>
  );
};

export default NavBar;
