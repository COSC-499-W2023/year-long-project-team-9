"use client";
import React, { use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Moon, Sun } from "lucide-react";
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
import { useUserData } from "./user-provider";
import { useUser } from "./hooks/use-user";
import { Users } from "@obscurus/database/src/sql.generated";

const NavBar = ({
  readNotification,
  deleteNotifications,
  getNotificationsViaEmail,
  signUpUser,
  confirmSignUpUser,
  resendConfirmSignUpUser,
  resetUserPassword,
  confirmResetUserPassword,
  user,
  getProfileImgPresignedUrl,
}: {
  readNotification: Function;
  deleteNotifications: Function;
  getNotificationsViaEmail: Function;
  signUpUser: Function;
  confirmSignUpUser: Function;
  resendConfirmSignUpUser: Function;
  resetUserPassword: Function;
  confirmResetUserPassword: Function;
  user?: any;
  getProfileImgPresignedUrl?: (username: string) => Promise<string>;
}) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const scroll = useScroll();

  const ThemeSwitcher = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  const Navigation = ({ user }: { user: Users }) => {
    return (
      <NavigationMenu className="flex flex-row space-x-4 ">
        <Link href={user ? "/request" : "/"} className="">
          <Image
            className="min-h-full min-w-full"
            src="/logo.svg"
            alt="obscurus"
            width={30}
            height={30}
          />
        </Link>

        <NavigationMenuList className="flex flex-row items-center justify-center w-full space-x-2 ">
          <Link href="/" className="">
            <NavigationMenuItem className="font-bold text-lg">
              obscurus
            </NavigationMenuItem>
          </Link>
          {!user && (
            <>
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
                Getting Started
              </NavigationMenuItem>
            </>
          )}
          {/* <NavigationMenuItem
            className="font-semibold text-sm cursor-pointer"
            onClick={() => {
              scroll("about");
            }}
          >
            About
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    );
  };

  return (
    <div className="fixed h-16 top-0 z-50 p-4 border-b-2 bg-background flex flex-row justify-between min-w-full w-full ">
      <Navigation user={user} />
      <div className="flex flex-row gap-2 items-center">
        <Notifications
          readNotification={readNotification}
          deleteNotifications={deleteNotifications}
          getNotificationsViaEmail={getNotificationsViaEmail}
          user={user}
        />
        <ThemeSwitcher />
        <Authentication
          signUpUser={signUpUser}
          confirmSignUpUser={confirmSignUpUser}
          resendConfirmSignUpUser={resendConfirmSignUpUser}
          resetUserPassword={resetUserPassword}
          confirmResetUserPassword={confirmResetUserPassword}
          user={user}
          getProfileImgPresignedUrl={getProfileImgPresignedUrl}
        />
      </div>
    </div>
  );
};

export default NavBar;
