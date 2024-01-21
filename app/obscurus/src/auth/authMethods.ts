// EXPORT
export * as authMethods from "./authMethods";

// IMPORTS
import { Auth, Amplify } from "aws-amplify";
import { CognitoUser } from "amazon-cognito-identity-js";

// Storing user sub and session token
// Note: call only when user signs in
export function setUserSessionToken(user: CognitoUser) {
  if (user == null || user == undefined) {
    return false;
  } else {
    const session = user.getSignInUserSession();
    console.log(user);
    localStorage.setItem(
      "accessToken",
      JSON.stringify(session?.getAccessToken().getJwtToken())
    );
    localStorage.setItem(
      "idToken",
      JSON.stringify(session?.getIdToken().getJwtToken())
    );
    localStorage.setItem(
      "refreshToken",
      JSON.stringify(session?.getRefreshToken().getToken())
    );
    localStorage.setItem(
      "expiresIn",
      JSON.stringify(session?.getAccessToken().payload.exp)
    );
    return true;
  }
}

// Checking if user is authenticated
export function isAuthenticated() {
  var expiresIn;
  localStorage?.getItem("expiresIn")
    ? (expiresIn = localStorage?.getItem("expiresIn"))
    : null;
  if (expiresIn == null) {
    return false;
  }
  const expiresInInt = Number.parseInt(expiresIn);
  if (Math.floor(Date.now() / 1000) < expiresInInt - 60) {
    return true;
  }
  return false;
}
