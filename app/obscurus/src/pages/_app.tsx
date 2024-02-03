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

  const { data, error } = useSWR("/api/secrets", fetcher);

  useEffect(() => {
    if (data) {
      console.log(data);
      Amplify.configure({
        Auth: {
          region: "us-west-2",
          userPoolId: "us-west-2_L49ywPvrY",
          userPoolWebClientId: "2u00g06jvrh19u88l9702eqjrf",
        },
      });
    }
  }, [data]);

  return getLayout(
    <>
      <Head>
        <title>obscurus</title>
      </Head>

      {loading ? <LoadingPage /> : <Component {...pageProps} />}
    </>
  );
}
