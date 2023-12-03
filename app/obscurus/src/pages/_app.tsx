import { ThemeProvider } from "@/components/ui/theme-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import PageLoader from "next/dist/client/page-loader";
import { Router } from "next/router";
import LoadingPage from "@/components/LoadingPage";
import NavBar from "@/components/NavBar";
import AOS from "aos";

import Head from "next/head";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const [loading, setLoading] = useState(false);
  

  return getLayout(
    
    
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    
    <AnimatePresence
      mode="sync"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <title>obscurus</title>
      </Head>
      <NavBar />
      
     
        {loading ? <LoadingPage /> : <Component {...pageProps} />}
      
    </AnimatePresence>
    </ThemeProvider>
  );
}
