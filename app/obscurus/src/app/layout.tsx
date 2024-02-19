import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import NavBar from "@/app/NavBar";
import { cookies } from "next/headers";
import Wrapper from "./wrapper";
import { Suspense } from "react";
import Home from "./Home/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "obscurus",
  description: "Blur faces automatically",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  // console.log("Layout", layout);
  // console.log("Collapsed", collapsed);

  const defaultLayout = layout ? JSON.parse(layout.value) : [];
  const defaultCollapsed =
    collapsed && collapsed.value !== "undefined"
      ? JSON.parse(collapsed.value)
      : [50, 440, 655];

      const signedIn = true;

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <div className=" flex flex-col bg-background flex-1 w-full h-full">

        { signedIn ?    <Wrapper
              defaultLayout={defaultLayout}
              defaultCollapsed={defaultCollapsed}
              navCollapsedSize={10}
            >
              {children}
            </Wrapper> : <Home/>}
          </div>

          {/*If not signed in*/}
          
          {/* <div className="h-screen w-full flex flex-col items-center justify-center">
            <div className="absolute z-100 top-36 left-56">Top</div>
            <Home />
          </div> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
