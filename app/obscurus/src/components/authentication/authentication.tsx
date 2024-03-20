"use client";

export default function Authentication({
  signedIn,
  userEmail,
  userName,
}: {
  signedIn: boolean;
  userEmail: string;
  userName: string;
}) {
  console.log(signedIn, userEmail, userName);
  return signedIn ? <></> : <></>;
}
