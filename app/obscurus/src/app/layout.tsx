import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import ConfigureAmplifyClientSide from "./ConfigureAmplifyClientSide";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "@/components/ui/toaster";
import { WebSocketProvider } from "./ws-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cookies } from "next/headers";
import { getCurrentUser } from "aws-amplify/auth/server";
import { runWithAmplifyServerContext } from "./utils/amplifyServerUtils";
import getUserDataByEmail from "./functions/getUserDataByEmail";
import { Users as UsersType } from "@obscurus/database/src/sql.generated";
import getNotificationsViaEmail from "./functions/getNotificationsViaEmail";
import readNotification from "./functions/readNotification";
import deleteNotification from "./functions/deleteNotification";
import { getUserNames } from "./functions/getUserNames";
import {
  signUpUser,
  confirmSignUpUser,
  resendConfirmSignUpUser,
  resetUserPassword,
  confirmResetUserPassword,
  updateUserPassword,
} from "./functions/authenticationMethods";
import NavBar from "./nav-bar";
import { getUserViaEmail } from "./functions/getUserViaEmail";
import { UserProvider } from "./user-provider";
import { User } from "lucide-react";
import { redirect } from "next/navigation";
import getProfileImgPresignedUrl from "./functions/getProfileImgPresignedUrl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "obscurus",
  description: "Blur faces automatically",
};

const wsUrl = process.env.NEXT_PUBLIC_WEBSOCKET_API_ENDPOINT as string;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  async function getCurrentUserServer() {
    try {
      const currentUser = await runWithAmplifyServerContext({
        nextServerContext: { cookies },
        operation: (contextSpec) => getCurrentUser(contextSpec),
      });
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



  const userData = await getUserViaEmail(email);


  return (
    <html lang="en">
      <body className={`${GeistSans.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <WebSocketProvider url={wsUrl}>
              <TooltipProvider delayDuration={0}>
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
                  user={userData?.user}
                  getProfileImgPresignedUrl={getProfileImgPresignedUrl}
                />
                <div className=" flex-col md:flex h-screen pt-16">
                  <Toaster />
                  <ConfigureAmplifyClientSide />
                  {children}
                </div>
              </TooltipProvider>
          </WebSocketProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
