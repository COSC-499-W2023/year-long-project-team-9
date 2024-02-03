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
import { useRouter } from "next/router";
import useScroll from "@/components/hooks/scroll";
import SignIn from "@/components/SignIn";
import { isSignedIn } from "@/auth/authenticationMethods";

export async function getServerSideProps() {
  return {
    props: {}, // nothing yet
  };
}

const NavBar = () => {
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

  useEffect(() => {
    const checkAsyncUserSignIn = async () => {
      const userBoolean = await isSignedIn();
      return userBoolean;
    };
    checkAsyncUserSignIn().then((result) => {
      setUserSignedIn(result);
    });
  });

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
                <span className="font-bold text-xl p-5 hover:cursor-pointer">
                  obscurus
                </span>
              </NavigationMenuItem>
            </Link>
            {/* <Link href="../CreateRequest">
              <NavigationMenuItem>
                <span
                  className={`font-bold text-base p-5 hover:cursor-pointer ${
                    router.pathname === "/CreateRequest"
                      ? " underline font-extrabold"
                      : ""
                  }`}
                >
                  Create Request
                </span>
              </NavigationMenuItem>
            </Link>

            <Link href={userSignedIn ? "../MyRequests" : "/"}>
              <NavigationMenuItem>
                <span
                  className={`font-bold text-base p-5 hover:cursor-pointer ${
                    router.pathname === "/MyRequests"
                      ? " underline font-extrabold"
                      : ""
                  }`}
                >
                  My Requests
                </span>
              </NavigationMenuItem>
            </Link>
            <Link href={userSignedIn ? "/submit" : "/"}>
              <NavigationMenuItem>
                <span
                  className={`font-bold text-base p-5 hover:cursor-pointer ${
                    router.pathname === "/submit"
                      ? " underline font-extrabold"
                      : ""
                  }`}
                >
                  Submit
                </span>
              </NavigationMenuItem>
            </Link> */}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="grid grid-flow-col gap-2 justify-end items-center pr-5 ">
        <div className="flex justify-end space-x-2">
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
        <SignIn />
      </div>
    </div>
  );
};

export default NavBar;
