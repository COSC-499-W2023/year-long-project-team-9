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
import { Api } from "sst/node/api";
import useSWR from "swr";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const fetcher = (url: string, init?: RequestInit) =>
  fetch(url, init).then((res) => res.json());

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [loading, setLoading] = useState(false);

  // const { data, error } = useSWR("/api/secrets", fetcher);

  
  
  useEffect(() => {
    
      Amplify.configure({
        Auth: {
          region: "us-west-2",
          userPoolId: "us-west-2_vfiV2j2Al",
          userPoolWebClientId: "3rms1a17eb5f6rd0vrp3d4kho2",
        },
      });
    }
  );

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
          <title>obscurus</title>
        </Head>
        <NavBar />

        {loading ? <LoadingPage /> : <Component {...pageProps} />}
      </AnimatePresence>
    </ThemeProvider>
  );
}