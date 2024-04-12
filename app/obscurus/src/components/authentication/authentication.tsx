"use client";
import { useUserData } from "@/app/user-provider";
import AuthenticationSignedIn from "./authentication-signed-in";
import AuthenticationSignedOut from "./authentication-signed-out";
import { Users } from "@obscurus/database/src/sql.generated";

export default function Authentication({
  signUpUser,
  confirmSignUpUser,
  resendConfirmSignUpUser,
  resetUserPassword,
  confirmResetUserPassword,
  user,
  getProfileImgPresignedUrl,

}: {
  signUpUser: Function;
  confirmSignUpUser: Function;
  resendConfirmSignUpUser: Function;
  resetUserPassword: Function;
  confirmResetUserPassword: Function;
  user?: Users;
  getProfileImgPresignedUrl?: (username: string) => Promise<string>;
}) {


  return user ? (
    <AuthenticationSignedIn
      user={user}
      getProfileImgPresignedUrl={getProfileImgPresignedUrl}
    />

  ) : (
    <AuthenticationSignedOut
      signUpUser={signUpUser}
      confirmSignUpUser={confirmSignUpUser}
      resendConfirmSignUpUser={resendConfirmSignUpUser}
      resetUserPassword={resetUserPassword}
      confirmResetUserPassword={confirmResetUserPassword}
      user={user}
    />
  );
}
