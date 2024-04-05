"use server";
import { cookies } from "next/headers";
import { runWithAmplifyServerContext } from "../utils/amplifyServerUtils";
import {
  signIn,
  signOut,
  signUp,
  confirmSignUp,
  resendSignUpCode,
  resetPassword,
  confirmResetPassword,
  updatePassword,
  AuthError,
  type SignInInput,
  type ConfirmSignUpInput,
  type ResendSignUpCodeInput,
  type ConfirmResetPasswordInput,
  type UpdatePasswordInput,
} from "aws-amplify/auth";
import {
  fetchAuthSession,
  getCurrentUser,
  fetchUserAttributes,
} from "aws-amplify/auth/server";

export async function isSignedIn() {
  // try {
  //   const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
  //   if (idToken != undefined) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // } catch (error) {
  //   return false;
  // }
  return false;
}

export async function signInUser({ username, password }: SignInInput) {
  try {
    const { isSignedIn, nextStep } = await signIn({ username, password });
    if (isSignedIn) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function signOutUser() {
  try {
    await signOut();
  } catch (error) {
    console.log(error);
  }
}

export async function getCurrentUserServer() {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec),
    });
    console.log(currentUser);
  } catch (error) {
    console.log(error);
  }
}

export async function getEmail() {
  // try {
  //   const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
  //   if (idToken?.payload.email != undefined) {
  //     return idToken.payload.email as string;
  //   } else {
  //     return "";
  //   }
  // } catch (error) {
  //   return "";
  // }
  return "";
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
