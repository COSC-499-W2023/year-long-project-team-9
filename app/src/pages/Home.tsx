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
import NavBar from "./NavBar";

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
      <NavBar />
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
