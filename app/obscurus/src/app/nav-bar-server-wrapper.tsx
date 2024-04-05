"use server";
import getNotificationsViaEmail from "./functions/getNotificationsViaEmail";
import readNotification from "./functions/readNotification";
import deleteNotification from "./functions/deleteNotification";
import { getUserNames } from "./functions/getUserNames";
import {
  signOutUser,
  signUpUser,
  confirmSignUpUser,
  resendConfirmSignUpUser,
  resetUserPassword,
  confirmResetUserPassword,
  updateUserPassword,
} from "./functions/authenticationMethods";
import NavBar from "./nav-bar";
import { cookies } from "next/headers";
import { getCurrentUser } from "aws-amplify/auth/server";
import { runWithAmplifyServerContext } from "./utils/amplifyServerUtils";

type UserNames = {
  email: string;
  givenName: string;
  familyName: string;
};

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
  const getUserName = async (userEmail: string) => {
    const userNames: UserNames[] = await getUserNames();
    const filUserNames = userNames.filter((user) => user.email === userEmail);
    if (filUserNames.length > 0) {
      return [filUserNames[0].givenName, filUserNames[0].familyName];
    } else {
      return ["", ""];
    }
  };
  const name = await getUserName(email);

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
      updateUserPassword={updateUserPassword}
      signedIn={signedIn}
      email={email}
      name={name}
    />
  );
}
