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
  profileImage,
}: {
  signUpUser: Function;
  confirmSignUpUser: Function;
  resendConfirmSignUpUser: Function;
  resetUserPassword: Function;
  confirmResetUserPassword: Function;
  signedIn: boolean;
  name: string[];
  profileImage: string;
}) {
  return signedIn ? (
    <AuthenticationSignedIn
      userName={name}
      profileImage={profileImage} />
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
