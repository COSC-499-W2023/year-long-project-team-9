"use client";
import AuthenticationSignedIn from "./authentication-signed-in";
import AuthenticationSignedOut from "./authentication-signed-out";
import amplifyConfig from "@/app/utils/amplifyConfig";
import { Amplify } from "aws-amplify";

Amplify.configure(amplifyConfig);

export default function Authentication({
  signedIn,
  signOutUser,
  userEmail,
  userName,
}: {
  signedIn: boolean;
  signOutUser: Function;
  userEmail: string;
  userName: string;
}) {
  return signedIn ? (
    <AuthenticationSignedIn
      signOutUser={signOutUser}
      userEmail={userEmail}
      userName={userName}
    />
  ) : (
    <AuthenticationSignedOut />
  );
}
