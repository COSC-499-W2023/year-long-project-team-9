"use server";
import deleteNotifications from "./functions/deleteNotifications";
import notificationsRead from "./functions/notificationsRead";
import getNotificationsViaEmail from "./functions/getNotificationsViaEmail";
import { getUserNames } from "./functions/getUserNames";
import {
  isSignedIn,
  signOutUser,
  getEmail,
} from "./functions/authenticationMethods";
import NavBar from "./nav-bar";

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
      notificationsRead={notificationsRead}
      deleteNotifications={deleteNotifications}
      getNotificationsViaEmail={getNotificationsViaEmail}
      signOutUser={signOutUser}
      signedIn={signedIn}
      email={email}
      name={name}
    />
  );
}
