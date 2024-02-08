import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./styles/globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import NavBar from "@/components/NavBar";

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
      <body
        className={`flex await page.locator('body').click();
        await page.locator('body').click();
        await page.goto('http://localhost:3000/');h-screen  ${GeistSans.className}`}
      >
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <NavBar /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
