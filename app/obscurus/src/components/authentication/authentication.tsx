"use client";
import AuthenticationSignedIn from "./authentication-signed-in";
import AuthenticationSignedOut from "./authentication-signed-out";

export default function Authentication({
  signOutUser,
  signedIn,
  email,
  name,
}: {
  signOutUser: Function;
  signedIn: boolean;
  email: string;
  name: string;
}) {
  return signedIn ? (
    <AuthenticationSignedIn
      signOutUser={signOutUser}
      userEmail={email}
      userName={name}
    />
  ) : (
    <AuthenticationSignedOut />
  );
}
