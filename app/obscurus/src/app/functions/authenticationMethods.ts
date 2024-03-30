"use server";
import {
  getCurrentUser,
  signIn,
  type SignInInput,
  signOut,
  signUp,
  confirmSignUp,
  type ConfirmSignUpInput,
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
  } catch (error) {}
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
          givenName,
          familyName,
        },
      },
    });
  } catch (error) {
    console.log(error);
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
  } catch (error) {
    console.log(error);
  }
}
