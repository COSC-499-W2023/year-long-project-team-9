import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import NavBarServerWrapper from "./nav-bar-server-wrapper";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "@/components/ui/toaster";
import { WebSocketProvider } from "./ws-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { isSignedIn } from "./functions/authenticationMethods";

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
  const signedIn = await isSignedIn();
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
              <NavBarServerWrapper signedIn={signedIn} />
              <div className=" flex-col md:flex h-screen pt-16">
                <Toaster />
                {children}
              </div>
              {/* <div className="h-screen w-full flex flex-col items-center justify-center">
                <div className="absolute z-100 top-36 left-56">Top</div>
                <Home />
              </div> */}
            </TooltipProvider>
          </WebSocketProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
