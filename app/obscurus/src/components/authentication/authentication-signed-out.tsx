"use client";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "../modified-shadcn-ui-components/modified-alert-dialog";
import { Button } from "../ui/button";
import SignInForm from "./authentication-sign-in-form";
import SignUpForm from "./authentication-sign-up-form";
import ForgotPasswordForm from "./authentication-forgot-password-form";
import VerifyEmailForm from "./authentication-verify-email-form";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import { X } from "lucide-react";

export default function AuthenticationSignedOut({
  signUpUser,
  confirmSignUpUser,
  resendConfirmSignUpUser,
  resetUserPassword,
  confirmResetUserPassword,
}: {
  signUpUser: Function;
  confirmSignUpUser: Function;
  resendConfirmSignUpUser: Function;
  resetUserPassword: Function;
  confirmResetUserPassword: Function;
}) {
  const [dialogState, setDialogState] = useState<string>("signIn");
  return (
    <AlertDialog onOpenChange={() => setDialogState("signIn")}>
      <AlertDialogTrigger asChild>
        <Button size="sm" className="align-top mt-0.5">
          Sign In
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[30%] max-h-[90%] flex flex-col">
        <AlertDialogHeader className="flex items-end">
          <AlertDialogCancel>
            <X />
          </AlertDialogCancel>
        </AlertDialogHeader>
        <AlertDialogDescription className="justify-center w-full max-h-full overflow-auto">
          {dialogState === "signIn" && (
            <div>
              <Label className="flex justify-start text-2xl font-black">
                Sign In
              </Label>
              <Separator className="mt-1 mb-2" />
              <SignInForm setDialogState={setDialogState} />
            </div>
          )}
          {dialogState === "signUp" && (
            <div>
              <Label className="flex justify-start text-2xl font-black">
                Sign Up
              </Label>
              <Separator className="mt-1 mb-2" />
              <SignUpForm
                signUpUser={signUpUser}
                confirmSignUpUser={confirmSignUpUser}
                resendConfirmSignUpUser={resendConfirmSignUpUser}
                setDialogState={setDialogState}
              />
            </div>
          )}
          {dialogState === "forgotPassword" && (
            <div>
              <Label className="flex justify-center text-xl">
                Forgot Password
              </Label>
              <Separator className="mt-1 mb-2" />
              <ForgotPasswordForm
                resetUserPassword={resetUserPassword}
                confirmResetUserPassword={confirmResetUserPassword}
                setDialogState={setDialogState}
              />
            </div>
          )}
          {dialogState === "verifyEmail" && (
            <div>
              <Label className="flex justify-start text-2xl font-black">
                Verify Email
              </Label>
              <Separator className="mt-1 mb-2" />
              <VerifyEmailForm
                setDialogState={setDialogState}
                resendConfirmSignUpUser={resendConfirmSignUpUser}
                confirmSignUpUser={confirmSignUpUser}
              />
            </div>
          )}
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
}
