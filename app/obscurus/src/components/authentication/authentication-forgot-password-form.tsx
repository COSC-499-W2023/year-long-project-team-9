"use client";

import React, { useState } from "react";
import ForgotPasswordEmailForm from "./authentication-forgot-password-email-form";
import { z } from "zod";

const forgotPasswordFormSchema = z
  .object({
    password: z
      .string()
      .trim()
      .min(8, { message: "Password must be at least 8 characters." })
      .max(24, { message: "Password must be at most 24 characters." })
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
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export default function ForgotPasswordForm({
  setDialogState,
}: {
  setDialogState: Function;
}) {
  const [forgotPasswordState, setForgotPasswordState] = useState("email");
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [failedForgotPassword, setFailedForgotPassword] = useState(false);
  return <div></div>;
}
