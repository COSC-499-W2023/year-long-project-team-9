"use client";

import React, { useState, useEffect, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import AuthenticationTermsInput from "./authentication-form-terms-input";
import AuthenticationAgeInput from "./authentication-form-age-input";
import FirstNameInput from "@/components/authentication-and-profile-components/account-form-first-name-input";
import PasswordInput from "@/components/authentication-and-profile-components/account-form-password-input";
import EmailInput from "@/components/authentication-and-profile-components/account-form-email-input";
import LastNameInput from "@/components/authentication-and-profile-components/account-form-last-name-input";
import { ArrowRight } from "lucide-react";
import SignUpEmailNamesForm from "./authentication-sign-up-email-names-form";
import SignUpPasswordAgeTermsForm from "./authentication-sign-up-password-age-terms-form";

const signUpFormSchema = z
  .object({
    email: z
      .string()
      .trim()
      .toLowerCase()
      .min(1, { message: "Email cannot be blank." })
      .max(320, { message: "Email cannot be more than 320 characters." })
      .email({ message: "Email is not valid." }),
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
    ageVerified: z.boolean(),
    agreedToTermsAndConditions: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export default function SignUpForm({
  setDialogState,
}: {
  setDialogState: Function;
}) {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
  });
  const [signUpState, setSignUpState] = useState("emailNames");
  const [passwordAgeTermBool, setPasswordAgeTermBool] = useState(false);
  const passwordAgeTermRef = useRef<HTMLDivElement>(null);
  function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    console.log(values);
  }
  useEffect(() => {
    if (passwordAgeTermBool) {
      passwordAgeTermRef.current?.firstElementChild?.scrollIntoView();
      setPasswordAgeTermBool(false);
    }
  });
  return (
    <div ref={passwordAgeTermRef}>
      {signUpState === "emailNames" && (
        <SignUpEmailNamesForm
          setDialogState={setDialogState}
          setSignUpState={setSignUpState}
          setPasswordAgeTermBool={setPasswordAgeTermBool}
        />
      )}
      {signUpState === "passwordAgeTerms" && (
        <SignUpPasswordAgeTermsForm setDialogState={setDialogState} />
      )}
    </div>
  );
}
