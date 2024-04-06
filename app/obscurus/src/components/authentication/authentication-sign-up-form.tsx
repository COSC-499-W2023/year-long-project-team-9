"use client";

import React, { useState, useEffect, useRef } from "react";
import { z } from "zod";
import SignUpEmailNamesForm from "./authentication-sign-up-email-names-form";
import SignUpPasswordAgeTermsForm from "./authentication-sign-up-password-age-terms-form";
import SignUpFinalCheckForm from "./authentication-sign-up-final-check-form";
import SignUpVerifyEmailForm from "./authentication-sign-up-verify-email-form";
import { LucideLoader2 } from "lucide-react";
import { Label } from "../ui/label";
import {
  type ConfirmSignUpInput,
  type ResendSignUpCodeInput,
} from "aws-amplify/auth";

type SignUpParameters = {
  username: string;
  password: string;
  givenName: string;
  familyName: string;
};

const signUpEmailNamesFormSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: "Email cannot be blank." })
    .max(320, { message: "Email cannot be more than 320 characters." })
    .email({ message: "Email is not valid." }),
  firstName: z
    .string()
    .trim()
    .min(1, { message: "First name cannot be blank." })
    .max(100, { message: "First name cannot be more than 100 characters." }),
  lastName: z
    .string()
    .trim()
    .min(1, { message: "Last name cannot be blank." })
    .max(100, { message: "Last name cannot be more than 100 characters." }),
});
const signUpPasswordAgeTermsFormSchema = z
  .object({
    password: z
      .string()
      .trim()
      .min(8, { message: "Password must be at least 8 characters." })
      .max(24, { message: "Password cannot be more than 24 characters." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number." })
      .regex(/[\W_]/, {
        message: "Password must contain at least one special character.",
      }),
    confirmPassword: z.string(),
    ageVerified: z.boolean(),
    agreedToTermsAndConditions: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export default function SignUpForm({
  signUpUser,
  confirmSignUpUser,
  resendConfirmSignUpUser,
  setDialogState,
}: {
  signUpUser: Function;
  confirmSignUpUser: Function;
  resendConfirmSignUpUser: Function;
  setDialogState: Function;
}) {
  const [signUpState, setSignUpState] = useState("emailNames");
  const [signUpEmailNames, setSignUpEmailNames] = useState<
    z.infer<typeof signUpEmailNamesFormSchema>
  >({ email: "", firstName: "", lastName: "" });
  const [signUpPasswordAgeTerms, setSignUpPasswordAgeTerms] = useState<
    z.infer<typeof signUpPasswordAgeTermsFormSchema>
  >({
    password: "",
    confirmPassword: "",
    ageVerified: false,
    agreedToTermsAndConditions: false,
  });
  const [signUpRefBoolean, setSignUpRefBoolean] = useState(false);
  const signUpRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [failedSignUpGeneric, setFailedSignUpGeneric] = useState(false);
  const [failedSignUpUsernameExists, setFailedSignUpUsernameExists] =
    useState(false);
  const [failedConfirmSignUp, setFailedConfirmSignUp] = useState(false);

  async function triggerSignUp() {
    setLoading(true);
    const userSignUpInput: SignUpParameters = {
      username: signUpEmailNames.email,
      password: signUpPasswordAgeTerms.password,
      givenName: signUpEmailNames.firstName,
      familyName: signUpEmailNames.lastName,
    };
    const { signUpSuccess, message } = await signUpUser(userSignUpInput);
    if (signUpSuccess) {
      setSignUpState("verifyEmail");
      setLoading(false);
    } else {
      if (message === "UsernameExistsException") {
        setFailedSignUpUsernameExists(true);
      } else {
        setFailedSignUpGeneric(true);
      }
      setLoading(false);
      setSignUpState("emailNames");
    }
  }

  async function triggerVerifyEmail(code: string) {
    setLoading(true);
    const userConfirmSignUpInput: ConfirmSignUpInput = {
      username: signUpEmailNames.email,
      confirmationCode: code,
    };
    const confirmSignUpSuccess = await confirmSignUpUser(
      userConfirmSignUpInput
    );
    if (confirmSignUpSuccess) {
      setDialogState("signIn");
    } else {
      setLoading(false);
      setFailedConfirmSignUp(true);
    }
  }

  async function triggerResendVerifyEmail() {
    setLoading(true);
    const userResendConfirmSignUpInput: ResendSignUpCodeInput = {
      username: signUpEmailNames.email,
    };
    await resendConfirmSignUpUser(userResendConfirmSignUpInput).then(() =>
      setLoading(false)
    );
  }

  useEffect(() => {
    if (signUpRefBoolean) {
      signUpRef.current?.firstElementChild?.scrollIntoView();
      setSignUpRefBoolean(false);
    }
  });
  return (
    <div ref={signUpRef}>
      {failedSignUpGeneric && !loading && (
        <div className="flex justify-center border border-red-500 rounded p-2">
          <Label className="text-red-500 text-xs">
            Failed To Sign Up, Please Try Again
          </Label>
        </div>
      )}
      {failedSignUpUsernameExists && !loading && (
        <div className="flex justify-center border border-red-500 rounded p-2">
          <Label className="text-red-500 text-xs">
            An Account With That Email Already Exists
          </Label>
        </div>
      )}
      {failedConfirmSignUp && !loading && (
        <div className="flex justify-center border border-red-500 rounded p-2">
          <Label className="text-red-500 text-xs">
            Failed To Verify Email, Please Try Again
          </Label>
        </div>
      )}
      {signUpState === "emailNames" && (
        <SignUpEmailNamesForm
          setDialogState={setDialogState}
          setSignUpState={setSignUpState}
          setSignUpEmailNames={setSignUpEmailNames}
          setSignUpRefBoolean={setSignUpRefBoolean}
          setFailedSignUpGeneric={setFailedSignUpGeneric}
          setFailedSignUpUsernameExists={setFailedSignUpUsernameExists}
        />
      )}
      {signUpState === "passwordAgeTerms" && (
        <SignUpPasswordAgeTermsForm
          setDialogState={setDialogState}
          setSignUpState={setSignUpState}
          setSignUpPasswordAgeTerms={setSignUpPasswordAgeTerms}
        />
      )}
      {signUpState === "finalCheck" && (
        <SignUpFinalCheckForm
          setSignUpState={setSignUpState}
          email={signUpEmailNames.email}
          firstName={signUpEmailNames.firstName}
          lastName={signUpEmailNames.lastName}
          loading={loading}
          triggerSignUp={triggerSignUp}
        />
      )}
      {signUpState === "verifyEmail" && (
        <SignUpVerifyEmailForm
          email={signUpEmailNames.email}
          loading={loading}
          setDialogState={setDialogState}
          triggerVerifyEmail={triggerVerifyEmail}
          triggerResendVerifyEmail={triggerResendVerifyEmail}
        />
      )}
    </div>
  );
}
