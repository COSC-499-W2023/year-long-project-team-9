import { ThemeProvider } from "@/components/ui/theme-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Router } from "next/router";
import LoadingPage from "@/components/LoadingPage";
import NavBar from "@/components/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { Amplify } from "aws-amplify";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init({
      once: true,
    });

    const start = () => {
      setLoading(true);
      AOS.refresh();
    };

    const end = () => {
      setLoading(false);
      AOS.refresh();
    };

    // Amplify.configure({
    //   Auth: {
    //     region: "us-west-2",
    //     userPoolId: process.env.USER_POOL_ID_KEY,
    //     userPoolWebClientId: process.env.USER_POOL_WEB_CLIENT_ID_KEY,
    //   },
    // });

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return getLayout(
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AnimatePresence
        mode="wait"
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
