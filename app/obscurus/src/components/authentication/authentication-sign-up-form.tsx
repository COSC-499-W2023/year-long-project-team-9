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

export default function SignUpForm({
  setDialogState,
}: {
  setDialogState: Function;
}) {
  const [signUpState, setSignUpState] = useState("emailNames");
  const [signUpEmailNames, setSignUpEmailNames] = useState<
    z.infer<typeof signUpEmailNamesFormSchema>
  >({ email: "", firstName: "", lastName: "" });
  const [passwordAgeTermBool, setPasswordAgeTermBool] = useState(false);
  const passwordAgeTermRef = useRef<HTMLDivElement>(null);
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
          setSignUpEmailNames={setSignUpEmailNames}
          setPasswordAgeTermBool={setPasswordAgeTermBool}
        />
      )}
      {signUpState === "passwordAgeTerms" && (
        <SignUpPasswordAgeTermsForm
          setDialogState={setDialogState}
          signUpEmailNames={signUpEmailNames}
        />
      )}
    </div>
  );
}
