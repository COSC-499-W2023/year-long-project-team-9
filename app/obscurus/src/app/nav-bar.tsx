"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Bell, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import useScroll from "@/app/hooks/scroll";
import Authentication from "@/components/authentication/authentication";

export function Notifications({
  notificationsRead,
  deleteNotifications,
  getNotifications,
}: {
  notificationsRead: Function;
  deleteNotifications: Function;
  getNotifications: Function;
}) {
  return (
    <>
      <Button variant="ghost" size="icon">
        <Bell size={20} className="stroke-primary" />
      </Button>
    </>
  );
}

const NavBar = ({
  notificationsRead,
  deleteNotifications,
  getNotificationsViaEmail,
  signedIn,
  signOutUser,
  userEmail,
  userName,
}: {
  notificationsRead: Function;
  deleteNotifications: Function;
  getNotificationsViaEmail: Function;
  signedIn: boolean;
  signOutUser: Function;
  userEmail: string;
  userName: string;
}) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const scroll = useScroll();
  const [showSignInDialog, setShowSignInDialog] = useState(false);
  const handleAuth = (route: string) => {
    if (signedIn) {
      router.push(route);
    } else {
      setShowSignInDialog(true);
    }
  };

  const [currentTab, selectCurrentTab] = useState("/");
  const [userSignedIn, setUserSignedIn] = useState(signedIn);

  const ThemeSwitcher = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" data-testid="theme-toggle">
            <Sun size={20} className="stroke-primary fill-primary" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => setTheme("light")}
            data-testid="light"
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")} data-testid="dark">
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("system")}
            data-testid="system"
          >
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  const Navigation = () => {
    return (
      <NavigationMenu className="flex flex-row space-x-4 ">
        <Link href="/" className="">
          <Image
            className="min-h-full min-w-full"
            src="/logo.svg"
            alt="obscurus"
            width={40}
            height={40}
          />
        </Link>

        <NavigationMenuList className="flex flex-row items-center justify-center w-full space-x-4  ">
          <Link href="/" className="">
            <NavigationMenuItem className="font-bold text-lg">
              obscurus
            </NavigationMenuItem>
          </Link>
          <NavigationMenuItem
            className="font-semibold text-sm cursor-pointer"
            onClick={() => {
              scroll("features");
            }}
          >
            Features
          </NavigationMenuItem>

          <NavigationMenuItem
            className="font-semibold text-sm cursor-pointer"
            onClick={() => {
              scroll("how-to");
            }}
          >
            Get Started
          </NavigationMenuItem>
          <NavigationMenuItem
            className="font-semibold text-sm cursor-pointer"
            onClick={() => {
              scroll("about");
            }}
          >
            About
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  };

  return (
    <div className="sticky top-0 z-50 p-4 border-b-2 bg-background flex flex-row justify-between min-w-full w-full ">
      <Navigation />
      <div>
        <Notifications
          notificationsRead={notificationsRead}
          deleteNotifications={deleteNotifications}
          getNotifications={getNotifications}
        />
        <ThemeSwitcher />
        <Authentication
          signedIn={signedIn}
          signOutUser={signOutUser}
          userEmail={userEmail}
          userName={userName}
        />
      </div>
    </div>
  );
};

export default NavBar;
