import { Auth, Amplify } from "aws-amplify";

export async function isSignedIn() {
  try {
    await Auth.currentAuthenticatedUser();
    return true;
  } catch {
    return false;
  }
}

// export async function signOutUser() {
//   try {
//     await Auth.signOut();
//     return true;
//   } catch {
//     return false;
//   }
// }

// Please update "" to the email for the particular user
export async function getEmail() {
  return "imightbejan@gmail.com";
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
