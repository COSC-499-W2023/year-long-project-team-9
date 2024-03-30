"use server";
import {
  getCurrentUser,
  signIn,
  type SignInInput,
  signOut,
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

// export async function getIDToken() {
//   try {
//     const session = await Auth.currentSession();
//     const idToken = session.getIdToken();
//     return idToken.getJwtToken();
//   } catch {
//     return "";
//   }
// }

// export async function getAccessToken() {
//   try {
//     const session = await Auth.currentSession();
//     const accessToken = session.getAccessToken();
//     return accessToken.getJwtToken();
//   } catch {
//     return "";
//   }
// }

// export async function getRefreshToken() {
//   try {
//     const session = await Auth.currentSession();
//     const refreshToken = session.getRefreshToken();
//     return refreshToken.getToken();
//   } catch (error) {
//     return "";
//   }
// }
