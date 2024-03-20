"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sun } from "lucide-react";
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
import Authentication from "@/components/authentication/authentication";

const NavBar = ({
  notificationsRead,
  deleteNotifications,
  getNotificationsViaEmail,
}: {
  notificationsRead: Function;
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

  return (
    <div className="sticky top-0 z-50 flex flex-column justify-between min-w-full border-b-2 bg-background">
      <div className="">
        <NavigationMenu>
          <Link href="/" className="p-5">
            <Image
              className="min-h-full min-w-full"
              src="/logo.svg"
              alt="obscurus"
              width={40}
              height={40}
            />
          </Link>

          <NavigationMenuList>
            <Link href="/">
              <NavigationMenuItem>
                <span className="font-bold hover:cursor-pointer">obscurus</span>
              </NavigationMenuItem>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="grid grid-flow-col gap-2 justify-end items-center pr-5 ">
        <div className="flex justify-end space-x-2">
          <div className="content-center">
            <Notifications
              notificationsRead={notificationsRead}
              deleteNotifications={deleteNotifications}
              getNotificationsViaEmail={getNotificationsViaEmail}
            ></Notifications>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" data-testid="theme-toggle">
                <Sun size={25} className="stroke-primary fill-primary" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => setTheme("light")}
                data-testid="light"
              >
                Light
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("dark")}
                data-testid="dark"
              >
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
        </div>
        <Authentication />
      </div>
    </div>
  );
};

export default NavBar;
