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
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    console.log(`The signInDetails: ${signInDetails}`);
    return true;
  } catch {
    return false;
  }
}

export async function signInUser({ username, password }: SignInInput) {
  try {
    const { isSignedIn, nextStep } = await signIn({ username, password });
  } catch (error) {
    console.log(error);
  }
}

export async function signOutUser() {
  try {
    await signOut();
  } catch (error) {
    console.log(error);
  }
}

export async function getEmail() {
  try {
    // const user = await Auth.currentAuthenticatedUser();
    // return user.email;
    return "soren.is@hotmail.ca";
  } catch {
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
