"use client";
import React, { useState } from "react";
import { LucideLoader2 } from "lucide-react";
import VerifyEmailEmailForm from "./authentication-verify-email-email-form";
import VerifyEmailVerifyForm from "./authentication-verify-email-verify-form";
import {
  type ResendSignUpCodeInput,
  type ConfirmSignUpInput,
} from "aws-amplify/auth";

export default function VerifyEmailForm({
  setDialogState,
  resendConfirmSignUpUser,
  confirmSignUpUser,
}: {
  setDialogState: Function;
  resendConfirmSignUpUser: Function;
  confirmSignUpUser: Function;
}) {
  const [verifyEmailState, setVerifyEmailState] = useState("email");
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [failedVerify, setFailedVerify] = useState(false);

  async function triggerSendVerifyEmail(email: string) {
    setLoading(true);
    setUserEmail(email);
    const sendVerifyEmailInput: ResendSignUpCodeInput = {
      username: email,
    };
    await resendConfirmSignUpUser(sendVerifyEmailInput).then(() => [
      setVerifyEmailState("verify"),
      setLoading(false),
    ]);
  }
  async function triggerVerifyEmail(code: string) {
    setLoading(true);
    const userConfirmSignUpInput: ConfirmSignUpInput = {
      username: userEmail,
      confirmationCode: code,
    };
    await confirmSignUpUser(userConfirmSignUpInput).then(() =>
      setDialogState("signIn")
    );
  }

  async function triggerResendVerifyEmail() {
    setLoading(true);
    const userResendConfirmSignUpInput: ResendSignUpCodeInput = {
      username: userEmail,
    };
    await resendConfirmSignUpUser(userResendConfirmSignUpInput).then(() =>
      setLoading(false)
    );
  }
  return (
    <div className="flex flex-col h-full">
      {loading ? (
        <div className="flex flex-col w-full h-full justify-start items-center gap-5">
          <LucideLoader2 className="animate-spin text-primary" size={75} />
        </div>
      ) : (
        <div>
          {verifyEmailState === "email" && (
            <VerifyEmailEmailForm
              setDialogState={setDialogState}
              triggerSendVerifyEmail={triggerSendVerifyEmail}
            />
          )}
          {verifyEmailState === "verify" && (
            <VerifyEmailVerifyForm
              email={userEmail}
              setDialogState={setDialogState}
              triggerVerifyEmail={triggerVerifyEmail}
              triggerResendVerifyEmail={triggerResendVerifyEmail}
            />
          )}
        </div>
      )}
    </div>
  );
}
