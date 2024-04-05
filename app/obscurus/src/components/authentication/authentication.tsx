"use client";
import AuthenticationSignedIn from "./authentication-signed-in";
import AuthenticationSignedOut from "./authentication-signed-out";

export default function Authentication({
  signOutUser,
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
  signOutUser: Function;
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
  return signedIn ? (
    <AuthenticationSignedIn
      updateUserPassword={updateUserPassword}
      signOutUser={signOutUser}
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
