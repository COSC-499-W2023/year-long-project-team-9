// EXPORT
export * as authMethods from "./authMethods";

// IMPORTS
import {
  CognitoUser,
  CognitoUserPool,
  CognitoUserSession,
  CognitoRefreshToken,
} from "amazon-cognito-identity-js";
import { jwtDecode } from "jwt-decode";
import { Auth, Amplify } from "aws-amplify";

// Config
const amplifyRegion = "us-west-2";
const amplifyUserPoolId = "us-west-2_Zjw9UuRG5";
const amplifyUserPoolWebClientId = "g0arfuhrmi7uctc1g07reudp3";
Amplify.configure({
  Auth: {
    region: amplifyRegion,
    userPoolId: amplifyUserPoolId,
    userPoolWebClientId: amplifyUserPoolWebClientId,
  },
});

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

// Get the user sub (id) from local storage
export function getSub() {
  var idToken;
  localStorage?.getItem("idToken")
    ? (idToken = localStorage.getItem("idToken"))
    : null;
  if (idToken == null) {
    return false;
  }
  idToken = jwtDecode(idToken);
  return idToken.sub;
}

// Get the user email from the local storage
export function getEmail() {
  var idToken;
  localStorage?.getItem("idToken")
    ? (idToken = localStorage.getItem("idToken"))
    : null;
  if (idToken == null) {
    return false;
  }
  idToken = jwtDecode(idToken);
  return idToken.email;
}

export function signOutBackEnd() {
  localStorage.removeItem("accessTokens");
  localStorage.removeItem("idToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("expiresIn");
  return true;
}
