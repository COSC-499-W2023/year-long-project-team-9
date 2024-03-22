"use client";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../modified-shadcn-ui-components/modified-alert-dialog";
import { Button } from "../ui/button";
import SignInForm from "./authentication-sign-in-form";
import SignUpForm from "./authentication-sign-up-form";
import { Separator } from "../ui/separator";

export default function AuthenticationSignedOut() {
  const [dialogState, setDialogState] = useState<string>("signin");
  return (
    <AlertDialog onOpenChange={() => setDialogState("signin")}>
      <AlertDialogTrigger asChild>
        <Button size="sm" className="text-xs">
          Sign In
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[40%] min-h-[90%] max-h-[90%] flex flex-col">
        <div className="flex flex-col flex-grow justify-center items-center">
          <AlertDialogHeader className="flex-grow-0 w-full h-full">
            {dialogState === "signin" && (
              <div>
                <AlertDialogDescription>
                  <SignInForm />
                </AlertDialogDescription>
              </div>
            )}
            {dialogState === "signup" && (
              <div>
                <AlertDialogDescription>
                  <SignUpForm setDialogState={setDialogState} />
                </AlertDialogDescription>
              </div>
            )}
          </AlertDialogHeader>
        </div>
        <Separator />
        <AlertDialogFooter>
          {dialogState === "signin" && (
            <div className="text-xs mt-2">
              <span>Need an account? </span>
              <a
                onClick={() => setDialogState("signup")}
                className="underline text-blue-400 hover:cursor-pointer"
              >
                Sign Up
              </a>
            </div>
          )}
          {dialogState === "signup" && (
            <div className="text-xs mt-2">
              <span>Have an account? </span>
              <a
                onClick={() => setDialogState("signin")}
                className="underline text-blue-400 hover:cursor-pointer"
              >
                Sign In
              </a>
            </div>
          )}
          <div className="flex-grow" />
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
