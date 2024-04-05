"use client";

import React, { useState } from "react";
import ForgotPasswordEmailForm from "./authentication-forgot-password-email-form";
import ForgotPasswordVerifyNewPasswordForm from "./authentication-forgot-password-verify-new-password-form";
import { LucideLoader2 } from "lucide-react";
import { Label } from "../ui/label";
import { ConfirmResetPasswordInput } from "aws-amplify/auth";

export default function ForgotPasswordForm({
  resetUserPassword,
  confirmResetUserPassword,
  setDialogState,
}: {
  resetUserPassword: Function;
  confirmResetUserPassword: Function;
  setDialogState: Function;
}) {
  const [forgotPasswordState, setForgotPasswordState] = useState("email");
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [failedForgotPassword, setFailedForgotPassword] = useState(false);
  async function triggerSendForgotPasswordEmail(email: string) {
    setLoading(true);
    setUserEmail(email);
    const sendForgotPasswordEmailSuccess = await resetUserPassword(email);
    if (sendForgotPasswordEmailSuccess) {
      setForgotPasswordState("verify");
      setLoading(false);
    } else {
      setLoading(false);
      setFailedForgotPassword(true);
    }
  }
  async function triggerForgotPasswordChange(
    username: string,
    code: string,
    newPassword: string
  ) {
    setLoading(true);
    const userConfirmPasswordResetInput: ConfirmResetPasswordInput = {
      username: userEmail,
      confirmationCode: code,
      newPassword: newPassword,
    };
    const passwordResetSuccess = await confirmResetUserPassword(
      userConfirmPasswordResetInput
    );
    if (passwordResetSuccess) {
      setDialogState("signIn");
    } else {
      setLoading(false);
      setFailedForgotPassword(true);
      setForgotPasswordState("email");
    }
  }
  return (
    <div className="flex flex-col h-full">
      {loading ? (
        <div className="flex flex-col w-full h-full justify-start items-center gap-5">
          <LucideLoader2 className="animate-spin text-primary" size={75} />
        </div>
      ) : (
        <div>
          {failedForgotPassword && (
            <div className="flex justify-center border border-red-500 rounded p-2">
              <Label className="text-red-500 text-xs">
                Failed To Reset Password, Please Try Again
              </Label>
            </div>
          )}
          {forgotPasswordState === "email" && (
            <ForgotPasswordEmailForm
              setDialogState={setDialogState}
              triggerSendForgotPasswordEmail={triggerSendForgotPasswordEmail}
            />
          )}
          {forgotPasswordState === "verify" && (
            <ForgotPasswordVerifyNewPasswordForm
              email={userEmail}
              setDialogState={setDialogState}
              triggerForgotPasswordChange={triggerForgotPasswordChange}
              triggerSendForgotPasswordEmail={triggerSendForgotPasswordEmail}
            />
          )}
        </div>
      )}
    </div>
  );
}
