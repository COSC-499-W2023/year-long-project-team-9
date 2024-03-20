import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import NavBar from "./nav-bar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "@/components/ui/toaster";
import { Amplify } from "aws-amplify";
import { getCognitoPools } from "./functions/getCognitoPools";
import deleteNotifications from "./functions/deleteNotifications";
import notificationsRead from "./functions/notificationsRead";
import getNotificationsViaEmail from "./functions/getNotificationsViaEmail";
import { getEmail } from "./functions/authenticationMethods";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "obscurus",
  description: "Blur faces automatically",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cognitoPools = await getCognitoPools();
  Amplify.configure({
    Auth: {
      region: "us-west-2",
      userPoolId: cognitoPools[0],
      userPoolWebClientId: cognitoPools[1],
    },
  });

  const signedIn = true;
  // Muhammad
  // deleteNotifications;
  // notificationsRead;
  //

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
