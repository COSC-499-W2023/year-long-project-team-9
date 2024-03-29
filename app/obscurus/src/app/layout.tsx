import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import NavBarServerWrapper from "./nav-bar-server-wrapper";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "@/components/ui/toaster";

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
  return (
    <html lang="en">
      <body className={`${GeistSans.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <div className=" flex-col md:flex min-h-screen h-screen">
            <NavBarServerWrapper />
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
