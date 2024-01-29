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

    // const fetchData = async () => {
    //   const response = await fetch(
    //     "https://gv6nqh4pelw2qdglv4foif54mi0yhfhi.lambda-url.us-west-2.on.aws/"
    //   );
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }
    //   const data = await response.json();
    //   return data;
    // };
    // var userPoolKey;
    // var userPoolWebClientKey;
    // fetchData().then((data) => {
    //   userPoolKey = data.userPoolId;
    //   userPoolWebClientKey = data.userPoolWebClientId;
    // });

    // Amplify.configure({
    //   Auth: {
    //     region: "us-west-2",
    //     userPoolId: userPoolKey,
    //     userPoolWebClientId: userPoolWebClientKey,
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
