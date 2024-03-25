"use client";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "../modified-shadcn-ui-components/modified-alert-dialog";
import { Button } from "../ui/button";
import SignInForm from "./authentication-sign-in-form";
import SignUpForm from "./authentication-sign-up-form";
import RecoverPasswordForm from "./authentication-recover-password-form";
import { Separator } from "../ui/separator";

export default function AuthenticationSignedOut() {
  const [dialogState, setDialogState] = useState<string>("signIn");
  return (
    <AlertDialog onOpenChange={() => setDialogState("signIn")}>
      <AlertDialogTrigger asChild>
        <Button size="sm" className="align-top mt-0.5">
          Sign In
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[40%] min-h-[85%] max-h-[85%] flex flex-col">
        <div className="flex flex-col flex-grow justify-center items-center">
          <AlertDialogHeader className="flex-grow-0 w-full h-full">
            {dialogState === "signIn" && (
              <div>
                <AlertDialogDescription>
                  <SignInForm setDialogState={setDialogState} />
                </AlertDialogDescription>
              </div>
            )}
            {dialogState === "signUp" && (
              <div>
                <AlertDialogDescription>
                  <SignUpForm />
                </AlertDialogDescription>
              </div>
            )}
            {dialogState === "forgotPassword" && (
              <div>
                <AlertDialogDescription>
                  <RecoverPasswordForm />
                </AlertDialogDescription>
              </div>
            )}
          </AlertDialogHeader>
        </div>
        <Separator />
        <AlertDialogFooter>
          {dialogState === "signIn" && (
            <div className="text-xs mt-2">
              <span>Need an account? </span>
              <a
                onClick={() => setDialogState("signUp")}
                className="underline text-blue-400 hover:cursor-pointer"
              >
                Sign Up
              </a>
            </div>
          )}
          {(dialogState === "signUp" || dialogState === "forgotPassword") && (
            <div className="text-xs mt-2">
              <span>Have an account? </span>
              <a
                onClick={() => setDialogState("signIn")}
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
