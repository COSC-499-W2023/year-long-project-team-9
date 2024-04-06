"use client";
import AuthenticationSignedIn from "./authentication-signed-in";
import AuthenticationSignedOut from "./authentication-signed-out";

export default function Authentication({
  signUpUser,
  confirmSignUpUser,
  resendConfirmSignUpUser,
  resetUserPassword,
  confirmResetUserPassword,
  updateUserPassword,
  signedIn,
  email,
  name,
}: {
  signUpUser: Function;
  confirmSignUpUser: Function;
  resendConfirmSignUpUser: Function;
  resetUserPassword: Function;
  confirmResetUserPassword: Function;
  updateUserPassword: Function;
  signedIn: boolean;
  email: string;
  name: string[];
}) {
  console.log("Signed in auth", signedIn);
  console.log("Email in auth", email);
  console.log("Name in auth", name);

  return signedIn ? (
    <AuthenticationSignedIn
      updateUserPassword={updateUserPassword}
      userEmail={email}
      userName={name}
    />
  ) : (
    <AuthenticationSignedOut
      signUpUser={signUpUser}
      confirmSignUpUser={confirmSignUpUser}
      resendConfirmSignUpUser={resendConfirmSignUpUser}
      resetUserPassword={resetUserPassword}
      confirmResetUserPassword={confirmResetUserPassword}
    />
  );
}
