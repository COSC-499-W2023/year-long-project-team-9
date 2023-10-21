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
import { ThemeProvider } from "@/components/ui/theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    <div className="bg-background min-h-screen min-w-full font-inter flex flex-col gap-10">
      <div className="grid p-5">
        {/*first column with 5 sub-columns*/}
        <div className=" grid grid-flow-col gap-2 p-5">
          <NavigationMenu className="">
            <NavigationMenuList>
              <NavigationMenuItem className="grid justify-start min-h-full">
                <Image className="" src="/logo.svg" alt="obscurus" width={50} height={50} />
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="" />
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
              <Button variant="default">Sign In</Button>
            </div>
          </div>
        </div>
      </div>

      {/*body*/}
      <div className="grid grid-cols-2 items-center justify-items-center pl-16">
        <div className="grid col-auto gap-5 w-100">
          <h1 className="text-4xl font-extrabold">
            Protect Privacy with a Single Click.
          </h1>
          <h2 className="font-semibold">
            Securely Blur Faces in Your Videos with{" "}
            <span className=" font-extrabold">obscurus</span>
          </h2>
          <div className="grid grid-cols-2">
            <Input
              className=" justify-self-auto"
              type="email"
              placeholder="Email"
            />
            <Button className=" justify-self-end px-auto  text-base">Get Started for Free</Button>
          </div>
        </div>
        <div>
          <Image
            className=""
            src="/splash.svg"
            alt="obscurus"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}
