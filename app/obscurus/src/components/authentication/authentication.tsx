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
  updateUserPassword,
  user,

}: {
  signUpUser: Function;
  confirmSignUpUser: Function;
  resendConfirmSignUpUser: Function;
  resetUserPassword: Function;
  confirmResetUserPassword: Function;
  updateUserPassword: Function;
  user?: Users;
}) {




  console.log("User in authentication", user);

  return user ? (
    <AuthenticationSignedIn
      updateUserPassword={updateUserPassword}
      user={user}
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
