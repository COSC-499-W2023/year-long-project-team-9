"use client";
import React from "react";
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
import amplifyConfig from "@/app/utils/amplifyConfig";
import { Amplify } from "aws-amplify";

Amplify.configure(amplifyConfig);

const NavBar = ({
  readNotification,
  deleteNotifications,
  getNotificationsViaEmail,
  signInUser,
  signOutUser,
  signUpUser,
  confirmSignUpUser,
  resendConfirmSignUpUser,
  resetUserPassword,
  confirmResetUserPassword,
  updateUserPassword,
  signedIn,
  email,
  name,
}: {
  readNotification: Function;
  deleteNotifications: Function;
  getNotificationsViaEmail: Function;
  signInUser: Function;
  signOutUser: Function;
  signUpUser: Function;
  confirmSignUpUser: Function;
  resendConfirmSignUpUser: Function;
  resetUserPassword: Function;
  confirmResetUserPassword: Function;
  updateUserPassword: Function;
  signedIn: boolean;
  email: string;
  name: string[];
}) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const scroll = useScroll();

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
          {/* <DropdownMenuItem
            onClick={() => setTheme("system")}
            data-testid="system"
          >
            System
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  const Navigation = () => {
    return (
      <NavigationMenu className="flex flex-row space-x-6 ">
        <Link href="/" className="">
          <Image
            className="min-h-full min-w-full"
            src="/logo.svg"
            alt="obscurus"
            width={30}
            height={30}
          />
        </Link>

        <NavigationMenuList className="flex flex-row items-center justify-center w-full space-x-5  ">
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
    <div className="fixed h-16 top-0 z-50 p-4 border-b-2 bg-background flex flex-row justify-between min-w-full w-full ">
      <Navigation />
      <div className="flex flex-row gap-2">
        <Notifications
          signedIn={signedIn}
          readNotification={readNotification}
          deleteNotifications={deleteNotifications}
          getNotificationsViaEmail={getNotificationsViaEmail}
        />
        <ThemeSwitcher />
        <Authentication
          signInUser={signInUser}
          signOutUser={signOutUser}
          signUpUser={signUpUser}
          confirmSignUpUser={confirmSignUpUser}
          resendConfirmSignUpUser={resendConfirmSignUpUser}
          resetUserPassword={resetUserPassword}
          confirmResetUserPassword={confirmResetUserPassword}
          updateUserPassword={updateUserPassword}
          signedIn={signedIn}
          email={email}
          name={name}
        />
      </div>
    </div>
  );
};

export default NavBar;
