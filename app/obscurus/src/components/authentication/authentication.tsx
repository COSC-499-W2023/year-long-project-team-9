"use client";
import AuthenticationSignedIn from "./authentication-signed-in";

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
  console.log(signedIn, userEmail, userName);
  return signedIn ? (
    <AuthenticationSignedIn
      signOutUser={signOutUser}
      userEmail={userEmail}
      userName={userName}
    ></AuthenticationSignedIn>
  ) : (
    <></>
  );
}
