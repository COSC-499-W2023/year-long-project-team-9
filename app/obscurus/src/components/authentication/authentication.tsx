"use client";
import AuthenticationSignedIn from "./authentication-signed-in";
import AuthenticationSignedOut from "./authentication-signed-out";

export default function Authentication({
  signInUser,
  signOutUser,
  signedIn,
  email,
  name,
}: {
  signInUser: Function;
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
    <AuthenticationSignedOut signInUser={signInUser} />
  );
}
