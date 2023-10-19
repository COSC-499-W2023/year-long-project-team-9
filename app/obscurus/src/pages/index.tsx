import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { cn } from "@/lib/utils";
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
import { useTheme } from "next-themes";
import { ThemeProvider } from "@/components/ui/themeprovider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div className="bg-background min-h-screen min-w-full font-inter flex flex-col gap-10">
      <div className="grid p-5">
        {/*first column with 5 sub-columns*/}
        <div className=" grid grid-flow-col gap-2 p-5">
          <NavigationMenu className="">
            <NavigationMenuList>
              <NavigationMenuItem className="grid justify-start min-h-full">
                <Image src="/logo.svg" width={50} height={50} alt="obscurus" />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <h1 className=" text-md px-5 font-extrabold">obscurus</h1>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
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
              <Button variant="outline" size="icon" onClick={toggleTheme}>
                {theme === "light" ? (
                  <Moon className="h-[1.2rem] w-[1.2rem]" />
                ) : (
                  <Sun className="h-[1.2rem] w-[1.2rem]" />
                )}
              </Button>
            </div>
            <div className="grid items-center justify-end">
              <Button variant="secondary">Sign In</Button>
            </div>
          </div>
        </div>
      </div>
      {/*body*/}
      <div className="grid grid-cols-1">
        <Card className="justify-self-center">
          <CardHeader>
            <CardTitle>Hello World!</CardTitle>
            <CardDescription>Welcome to obscurus.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm">
            <p>Sign in to get started!</p>
          </CardContent>
          <CardFooter className="text-xs">
            <p>(c) Jan</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
