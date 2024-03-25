import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { X, XCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function SignInDialog() {
  return (
    <Card className="flex flex-col items-center justify-center border-card bg-card shadow-md w-[400px] ring-2 ring-accent">
      <div className="w-full">
        <div className="flex justify-end pt-3 pr-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <XCircle className="text-muted-foreground h-5 w-5 " />
                <span className="sr-only">Close</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Close</TooltipContent>
          </Tooltip>
        </div>
        <CardHeader className="">
          <CardTitle className="text-3xl font-bold">Login</CardTitle>
          <Separator orientation="horizontal" />
          <CardDescription>Enter your credentials</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Username" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" required type="password" />
            </div>
            <div className="space-y-2">
              <Button className="w-full">Login</Button>
            </div>
            <div className="flex justify-center text-center text-sm text-muted-foreground space-x-2">
              <div>Don't have an account?</div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link className="underline font-bold text-blue-400" href="#">
                    Sign up
                    <span className="sr-only">Close</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Close</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
