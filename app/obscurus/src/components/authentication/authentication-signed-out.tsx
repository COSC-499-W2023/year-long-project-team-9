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
import Image from "next/image";
import { Button } from "../ui/button";
import SignInForm from "./authentication-sign-in-form";
import SignUpForm from "./authentication-sign-up-form";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

export default function AuthenticationSignedOut() {
  const [dialogState, setDialogState] = useState<string>("signin");
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="sm" className="text-xs">
          Sign In
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[90%] min-h-full flex flex-col">
        <div className="flex flex-col flex-grow justify-center items-center">
          <AlertDialogHeader className="grid grid-cols-2 flex-grow-0 w-full h-full">
            <Image
              className="min-h-[100%] min-w-[50%] justify-self-center"
              src="/logo.svg"
              alt="obscurus"
              width={40}
              height={40}
            />
            {dialogState === "signin" && (
              <div>
                <AlertDialogDescription>
                  <SignInForm setDialogState={setDialogState} />
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
          <div className="flex-grow-1"></div>
        </div>
        <Separator />
        <AlertDialogFooter className="justify-items-end">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
