"use server";
import {
  getCurrentUser,
  signIn,
  type SignInInput,
  signOut,
  signUp,
  confirmSignUp,
  resendSignUpCode,
  type ConfirmSignUpInput,
  type ResendSignUpCodeInput,
  AuthError,
} from "aws-amplify/auth";

export async function isSignedIn() {
  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    return true;
  } catch (error) {
    return false;
  }
}

export async function signInUser({ username, password }: SignInInput) {
  try {
    const { isSignedIn, nextStep } = await signIn({ username, password });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function signOutUser() {
  try {
    await signOut();
  } catch (error) {}
}

export async function getEmail() {
  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    if (signInDetails?.loginId != undefined) {
      return signInDetails.loginId;
    } else {
      throw Error;
    }
  } catch (error) {
    return "";
  }
}

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
