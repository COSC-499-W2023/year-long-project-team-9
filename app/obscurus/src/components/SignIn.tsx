{
  /*IMPORTS*/
}
import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
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
import { Label } from "@/components/ui/label";
import { isEmailValid } from "@/regular-expression/emailRegularExpression";
import { isSignedIn, signOutUser } from "@/auth/authenticationMethods";

{
  /*FUNCTIONS*/
}
const SignIn = () => {
  const router = useRouter();
  const [signedIn, setSignedIn] = useState(false);
  const [showSignInDialog, setShowSignInDialog] = useState(false);
  const [dialogState, setDialogState] = useState(0);
  const [signInState, setSignInState] = useState(0);
  const [email, setEmail] = useState("");
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailValid(isEmailValid(event.target.value));
  };
  const [password, setPassword] = useState("");
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const [emailValid, setEmailValid] = useState(true);
  async function handleSignInSubmit() {
    try {
      await Auth.signIn(email, password);
      setSignedIn(true);
      router.push("/");
    } catch (error) {
      // Prints the full error
      console.error(error);
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert(String(error));
      }
    }
  }
  async function handleSignOutSubmit() {
    try {
      await signOutUser();
      setSignedIn(false);
      router.push("/");
    } catch (error) {
      // Prints the full error
      console.error(error);
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert(String(error));
      }
    }
  }
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
            <DropdownMenuItem onClick={handleSignOutSubmit}>
              Log out
            </DropdownMenuItem>
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
            <DialogContent
              id="signInDialog"
              className="sm:max-w-[300px] overflow-hidden"
              onCloseAutoFocus={() => [
                setDialogState(0),
                setSignInState(0),
                setEmail(""),
                setPassword(""),
                setEmailValid(true),
              ]}
            >
              {dialogState === 0 && (
                <div>
                  <DialogHeader className="pb-2">
                    <DialogTitle className="text-center">Sign In</DialogTitle>
                  </DialogHeader>
                  {signInState === 0 && (
                    <div className="flex flex-col w-full items-center">
                      <div id="googleSignIn" className="pb-2">
                        <Button className="h-40px bg-white dark:bg-[#131314] border-[#747775] dark:border-[#8E918F] border-[1px] text-[#1F1F1F] dark:text-[#E3E3E3] text-sm font-roboto font-medium px-3 py-2.5 hover:bg-transparent">
                          <Image
                            src="/Google_Logo.svg"
                            alt="google"
                            width={20}
                            height={20}
                          />
                          <span className="pl-2.5">Sign in with Google</span>
                        </Button>
                      </div>
                      <div id="signInSeparator" className="relative pb-2">
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-background px-2 text-muted-foreground">
                            Or
                          </span>
                        </div>
                      </div>
                      <div id="emailSignIn" className="grid gap-1.5">
                        <Input
                          value={email}
                          onChange={handleEmailChange}
                          placeholder="Email Address *"
                        ></Input>
                        {!emailValid && (
                          <p role="alert" className="text-red-500 text-xs">
                            Please enter a valid email!
                          </p>
                        )}
                        <Button
                          onClick={() => setSignInState(1)}
                          disabled={!emailValid}
                          className="w-full"
                        >
                          <span>Sign in with Email</span>
                        </Button>
                        <Button
                          className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                          onClick={() => setDialogState(1)}
                        >
                          Forgot your password?
                        </Button>
                      </div>
                      <hr className="w-3/4 bg-gray-500" />
                      <div id="signUpConnector" className="w-3/4 text-center">
                        <Button
                          className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                          onClick={() => setDialogState(2)}
                        >
                          Create New Account
                        </Button>
                      </div>
                    </div>
                  )}
                  {signInState === 1 && (
                    <div className="flex flex-col w-full items-center">
                      <div id="emailSignIn" className="grid gap-1.5">
                        <Label className="font-bold w-3/4 justify-self-center text-ellipsis overflow-hidden">
                          {email}
                        </Label>
                        <Input
                          value={password}
                          onChange={handlePasswordChange}
                          placeholder="Password *"
                        ></Input>
                        <Button className="w-full" onClick={handleSignInSubmit}>
                          <span>Sign in</span>
                        </Button>
                        <Button
                          className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                          onClick={() => setDialogState(1)}
                        >
                          Forgot your password?
                        </Button>
                      </div>
                      <hr className="w-3/4 bg-gray-500" />
                      <div id="signUpConnector" className="w-3/4 text-center">
                        <Button
                          className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                          onClick={() => setDialogState(2)}
                        >
                          Create New Account
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {dialogState === 1 && (
                <div>
                  <DialogHeader className="pb-2">
                    <DialogTitle className="text-center">
                      Forgot Password
                    </DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col w-full items-center">
                    <div id="emailSignIn" className="grid gap-1.5">
                      <Input
                        placeholder="Email Address *"
                        className="pb-2"
                      ></Input>
                      <Button className="w-full">
                        <span>Send Reset Email</span>
                      </Button>
                    </div>
                    <hr className="w-3/4 bg-gray-500" />
                    <div id="signInConnector" className="w-3/4 text-center">
                      <Button
                        className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                        onClick={() => setDialogState(0)}
                      >
                        Sign in to your account
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              {dialogState === 2 && (
                <div>
                  <DialogHeader className="pb-2">
                    <DialogTitle className="text-center">Sign Up</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col w-full items-center">
                    <div id="googleSignUp" className="pb-2">
                      <Button className="h-40px bg-white dark:bg-[#131314] border-[#747775] dark:border-[#8E918F] border-[1px] text-[#1F1F1F] dark:text-[#E3E3E3] text-sm font-roboto font-medium px-3 py-2.5 hover:bg-transparent">
                        <Image
                          src="/Google_Logo.svg"
                          alt="google"
                          width={20}
                          height={20}
                        />
                        <span className="pl-2.5">Sign up with Google</span>
                      </Button>
                    </div>
                    <div id="signUpSeparator" className="relative pb-2">
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                          Or
                        </span>
                      </div>
                    </div>
                    <div id="emailSignUp" className="grid gap-1.5 pb-2">
                      <Input placeholder="Email Address *"></Input>
                      <Input placeholder="Confirm Email Address *"></Input>
                      <Input placeholder="Password *"></Input>
                      <Input placeholder="Confirm Password *"></Input>
                      <Button className="w-full">
                        <span>Sign up with Email</span>
                      </Button>
                    </div>
                    <hr className="w-3/4 bg-gray-500" />
                    <div id="signInConnector" className="w-3/4 text-center">
                      <Button
                        className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                        onClick={() => setDialogState(0)}
                      >
                        Sign in to your account
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
};

{
  /*EXPORT*/
}
export default SignIn;