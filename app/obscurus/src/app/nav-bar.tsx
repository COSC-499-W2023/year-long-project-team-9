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
import Notifications from "@/components/notification/notifications";
import { useNotifications } from "./hooks/use-notifications";

const NavBar = ({
  readNotification,
  deleteNotifications,
  getNotificationsViaEmail,
}: {
  readNotification: Function;
  deleteNotifications: Function;
  getNotificationsViaEmail: Function;
}) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const scroll = useScroll();
  const [signedIn, setSignedIn] = useState(false);
  const [showSignInDialog, setShowSignInDialog] = useState(false);
  const handleAuth = (route: string) => {
    if (signedIn) {
      router.push(route);
    } else {
      setShowSignInDialog(true);
    }
  };

  const [currentTab, selectCurrentTab] = useState("/");
  const [userSignedIn, setUserSignedIn] = useState(false);

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
            width={30}
            height={30}
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
      <div className="flex gap-2">
        <Notifications
          readNotification={readNotification}
          deleteNotifications={deleteNotifications}
          getNotificationsViaEmail={getNotificationsViaEmail}
        />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default NavBar;
