{
  /*IMPORTS*/
}
import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

{
  /*FUNCTIONS*/
}
const Login = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [showSignInDialog, setShowSignInDialog] = useState(false);
  const SignIn = () => {
    setSignedIn(true);
  };
  const SignOut = () => {
    setSignedIn(false);
  };
  const [dialogState, setDialogState] = useState(1);
  return (
    <div>
      {signedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar onClick={() => setSignedIn(false)}>
              <AvatarImage src="https://github.com/jansdhillon.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={SignOut}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="grid items-center justify-end">
          <Dialog open={showSignInDialog} onOpenChange={setShowSignInDialog}>
            <DialogTrigger asChild>
              <Button>
                <span className="font-bold text-base">Sign In</span>
              </Button>
            </DialogTrigger>
            {dialogState === 1 && (
              <DialogContent className="sm:max-w-[300px]">
                <DialogHeader>
                  <DialogTitle className="text-center">Sign In</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col w-full items-center">
                  <div id="googleLogin" className="pb-2">
                    <Button
                      className="h-40px bg-white dark:bg-[#131314] border-[#747775] dark:border-[#8E918F] border-[1px] text-[#1F1F1F] dark:text-[#E3E3E3] text-sm font-roboto font-medium px-3 py-2.5 hover:bg-transparent"
                      onClick={SignIn}
                    >
                      <Image
                        src="/Google_Logo.svg"
                        alt="google"
                        width={20}
                        height={20}
                      />
                      <span className="pl-2.5">Log in with Google</span>
                    </Button>
                  </div>
                  <div id="loginSeparator" className="relative pb-2">
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <div id="emailLogin" className="grid gap-1.5">
                    <Input
                      placeholder="name@example.ca"
                      className="pb-2"
                    ></Input>
                    <Input placeholder="Password"></Input>
                    <Button className="w-full">
                      <span>Log in with Email</span>
                    </Button>
                    <Button className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4">
                      Forgot your password?
                    </Button>
                  </div>
                  <hr className="w-3/4 bg-gray-500" />
                  <div id="signUpConnector" className="w-3/4 text-center">
                    <Button className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4">
                      Create New Account
                    </Button>
                  </div>
                </div>
              </DialogContent>
            )}
          </Dialog>
        </div>
      )}
    </div>
  );
};

{
  /*EXPORT*/
}
export default Login;
