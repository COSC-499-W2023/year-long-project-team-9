"use client";
import AuthenticationSignedIn from "./authentication-signed-in";
import AuthenticationSignedOut from "./authentication-signed-out";

export default function Authentication({
  signUpUser,
  confirmSignUpUser,
  resendConfirmSignUpUser,
  resetUserPassword,
  confirmResetUserPassword,
  signedIn,
  name,
}: {
  signUpUser: Function;
  confirmSignUpUser: Function;
  resendConfirmSignUpUser: Function;
  resetUserPassword: Function;
  confirmResetUserPassword: Function;
  signedIn: boolean;
  name: string[];
}) {
  return signedIn ? (
    <AuthenticationSignedIn userName={name} />
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
