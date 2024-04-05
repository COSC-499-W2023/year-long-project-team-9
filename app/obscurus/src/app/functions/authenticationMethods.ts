"use server";
import {
  signUp,
  confirmSignUp,
  resendSignUpCode,
  resetPassword,
  confirmResetPassword,
  updatePassword,
  AuthError,
  type ConfirmSignUpInput,
  type ResendSignUpCodeInput,
  type ConfirmResetPasswordInput,
  type UpdatePasswordInput,
} from "aws-amplify/auth";

type SignUpParameters = {
  username: string;
  password: string;
  givenName: string;
  familyName: string;
};

export async function signUpUser({
  username,
  password,
  givenName,
  familyName,
}: SignUpParameters) {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          given_name: givenName,
          family_name: familyName,
        },
      },
    });
    return { signUpSuccess: true, message: "" };
  } catch (error) {
    if (
      error instanceof AuthError &&
      error.name === "UsernameExistsException"
    ) {
      console.log(error.name);
      return { signUpSuccess: false, message: error.name };
    } else {
      console.log(error);
      return { signUpSuccess: false, message: "" };
    }
  }
}

export async function confirmSignUpUser({
  username,
  confirmationCode,
}: ConfirmSignUpInput) {
  try {
    const { isSignUpComplete, nextStep } = await confirmSignUp({
      username,
      confirmationCode,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function resendConfirmSignUpUser({
  username,
}: ResendSignUpCodeInput) {
  try {
    await resendSignUpCode({ username });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function resetUserPassword(username: string) {
  try {
    const output = await resetPassword({ username });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function confirmResetUserPassword({
  username,
  confirmationCode,
  newPassword,
}: ConfirmResetPasswordInput) {
  try {
    await confirmResetPassword({ username, confirmationCode, newPassword });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function updateUserPassword({
  oldPassword,
  newPassword,
}: UpdatePasswordInput) {
  try {
    await updatePassword({ oldPassword, newPassword });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
