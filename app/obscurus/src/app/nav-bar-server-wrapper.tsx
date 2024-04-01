"use server";
import getNotificationsViaEmail from "./functions/getNotificationsViaEmail";
import { Notifications } from "@obscurus/database/src/sql.generated";
import readNotification from "./functions/readNotification";
import deleteNotification from "./functions/deleteNotification";
import { getUserNames } from "./functions/getUserNames";
import {
  isSignedIn,
  signInUser,
  signOutUser,
  getEmail,
  signUpUser,
  confirmSignUpUser,
  resendConfirmSignUpUser,
} from "./functions/authenticationMethods";
import NavBar from "./nav-bar";
import amplifyConfig from "@/app/utils/amplifyConfig";
import { Amplify } from "aws-amplify";

Amplify.configure(amplifyConfig);

type UserNames = {
  email: string;
  fullName: string;
};

export default async function NavBarServerWrapper() {
  const signedIn = await isSignedIn();
  const email = await getEmail();
  const getUserName = async (userEmail: string) => {
    const userNames: UserNames[] = await getUserNames();
    const filUserNames = userNames.filter((user) => user.email === userEmail);
    if (filUserNames.length > 0) {
      return filUserNames[0].fullName;
    } else {
      return "";
    }
  };
  const name = await getUserName(email);

  return (
    <NavBar
      readNotification={readNotification}
      deleteNotifications={deleteNotification}
      getNotificationsViaEmail={getNotificationsViaEmail}
      signInUser={signInUser}
      signOutUser={signOutUser}
      signUpUser={signUpUser}
      confirmSignUpUser={confirmSignUpUser}
      resendConfirmSignUpUser={resendConfirmSignUpUser}
      signedIn={signedIn}
      email={email}
      name={name}
    />
  );
}
