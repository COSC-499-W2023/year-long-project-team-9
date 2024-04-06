"use server";
import getNotificationsViaEmail from "./functions/getNotificationsViaEmail";
import readNotification from "./functions/readNotification";
import deleteNotification from "./functions/deleteNotification";
import {
  signUpUser,
  confirmSignUpUser,
  resendConfirmSignUpUser,
  resetUserPassword,
  confirmResetUserPassword,
} from "./functions/authenticationMethods";
import NavBar from "./nav-bar";
import { cookies } from "next/headers";
import { getCurrentUser } from "aws-amplify/auth/server";
import { runWithAmplifyServerContext } from "./utils/amplifyServerUtils";
import { getUserViaEmail } from "./functions/getUserData";
import { Users as UsersType } from "@obscurus/database/src/sql.generated";

export default async function NavBarServerWrapper() {
  async function getCurrentUserServer() {
    try {
      const currentUser = await runWithAmplifyServerContext({
        nextServerContext: { cookies },
        operation: (contextSpec) => getCurrentUser(contextSpec),
      });
      console.log(currentUser);
      return {
        signedIn: true,
        email: currentUser.signInDetails?.loginId ?? "",
      };
    } catch (error) {
      console.log(error);
      return { signedIn: false, email: "" };
    }
  }
  const { signedIn, email } = await getCurrentUserServer();
  var name = ["",""]
  try {
    const userData: UsersType = await getUserViaEmail(email);
    name = [userData.givenName, userData.familyName];
  }catch(error) {}
  return (
    <NavBar
      readNotification={readNotification}
      deleteNotifications={deleteNotification}
      getNotificationsViaEmail={getNotificationsViaEmail}
      signUpUser={signUpUser}
      confirmSignUpUser={confirmSignUpUser}
      resendConfirmSignUpUser={resendConfirmSignUpUser}
      resetUserPassword={resetUserPassword}
      confirmResetUserPassword={confirmResetUserPassword}
      signedIn={signedIn}
      email={email}
      name={name}
    />
  );
}
