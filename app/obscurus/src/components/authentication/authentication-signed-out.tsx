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
import { Label } from "../ui/label";

export default function AuthenticationSignedOut() {
  const [dialogState, setDialogState] = useState<string>("signIn");
  return (
    <AlertDialog onOpenChange={() => setDialogState("signIn")}>
      <AlertDialogTrigger asChild>
        <Button size="sm" className="align-top mt-0.5">
          Sign In
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[40%] h-[85%] flex flex-col">
        <div className="flex flex-col flex-grow justify-center items-center">
          <AlertDialogHeader className="flex-grow-0 w-full h-full">
            {dialogState === "signIn" && (
              <div>
                <Label className="flex justify-center text-xl">Sign In</Label>
                <Separator className="mt-2 mb-4" />
                <AlertDialogDescription>
                  <SignInForm setDialogState={setDialogState} />
                </AlertDialogDescription>
              </div>
            )}
            {dialogState === "signUp" && (
              <div>
                <Label className="flex justify-center text-xl">Sign Up</Label>
                <Separator className="mt-2 mb-4" />
                <AlertDialogDescription>
                  <SignUpForm setDialogState={setDialogState} />
                </AlertDialogDescription>
              </div>
            )}
            {dialogState === "forgotPassword" && (
              <div>
                <Label className="flex justify-center text-xl">
                  Forgot Password
                </Label>
                <Separator className="mt-2 mb-4" />
                <AlertDialogDescription>
                  <RecoverPasswordForm setDialogState={setDialogState} />
                </AlertDialogDescription>
              </div>
            )}
          </AlertDialogHeader>
        </div>
        <Separator />
        <AlertDialogFooter>
          <div className="flex-grow" />
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
