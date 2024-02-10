import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import NavBar from "@/components/NavBar";
import { cookies } from "next/headers";
import Wrapper from "./wrapper";
const layout = cookies().get("react-resizable-panels:layout");
const collapsed = cookies().get("react-resizable-panels:collapsed");

const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

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
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background ">
            <NavBar />
            <Wrapper>{children}</Wrapper>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
