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

// export async function getSub() {
//   try {
//     const session = await Auth.currentSession();
//     const accessToken = session.getAccessToken();
//     const payload = accessToken.payload;
//     return payload.sub;
//   } catch {
//     return "";
//   }
//   return "";
// }

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
