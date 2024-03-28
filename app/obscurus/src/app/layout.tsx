import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import NavBar from "./nav-bar";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "@/components/ui/toaster";
import { Amplify } from "aws-amplify";
import deleteNotifications from "./functions/deleteNotifications";
import notificationsRead from "./functions/notificationsRead";
import getNotificationsViaEmail from "./functions/getNotificationsViaEmail";
import {
  isSignedIn,
  signOutUser,
  getEmail,
} from "./functions/authenticationMethods";
import { getUserNames } from "./functions/getUserNames";
import amplifyConfig from "./utils/amplifyConfig";

Amplify.configure(amplifyConfig);

const inter = Inter({ subsets: ["latin"] });

type UserNames = {
  email: string;
  fullName: string;
};

export const metadata: Metadata = {
  title: "obscurus",
  description: "Blur faces automatically",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const getUserName = async (userEmail: string) => {
    const userNames: UserNames[] = await getUserNames();
    const filUserNames = userNames.filter((user) => user.email === userEmail);
    if (filUserNames.length > 0) {
      return filUserNames[0].fullName;
    } else {
      return "";
    }
  };

  // const signedIn = await isSignedIn();
  const signedIn = false;
  const userEmail = await getEmail();
  const userName = await getUserName(userEmail);

  return (
    <html lang="en">
      <body className={`${GeistSans.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <div className=" flex-col md:flex min-h-screen h-screen">
            <NavBar
              notificationsRead={notificationsRead}
              deleteNotifications={deleteNotifications}
              getNotificationsViaEmail={getNotificationsViaEmail}
              signedIn={signedIn}
              signOutUser={signOutUser}
              userEmail={userEmail}
              userName={userName}
            />
            <Toaster />
            {children}

            {/*If not signed in*/}

            {/* <div className="h-screen w-full flex flex-col items-center justify-center">
            <div className="absolute z-100 top-36 left-56">Top</div>
            <Home />
          </div> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
