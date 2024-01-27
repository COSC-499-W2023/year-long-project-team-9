import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import HowTo from "../components/HowTo";
import { ArrowBigDownIcon } from "lucide-react";
import { useEffect, useState, useContext, ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "@/components/layout";
import LoadingPage from "@/components/LoadingPage";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  return { props: {} };
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    AOS.init({ once: true });

    const handleRouteChange = (url: any, { shallow }: any) => {
      setLoading(true);
      AOS.refresh();
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => setLoading(false));
    router.events.on("routeChangeError", () => setLoading(false));

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", () => setLoading(false));
      router.events.off("routeChangeError", () => setLoading(false));
    };
  }, [router.events]);

  return (
    <div className="grid items-center justify-items-center justify-center min-h-screen min-w-full p-36">
      <Hero />
      <div
        className="opacity-0 animate-fadeIn transition-opacity delay-1000 duration-1000"
      >
        <div className="grid grid-cols-2 gap-2 pt-16 delay-1000 pl-24">
          <div className="text-2xl font-extrabold">Features</div>
          <ArrowBigDownIcon
            className="stroke-primary fill-primary animate-bounce mt-1"
            size={30}
          />
        </div>
      </div>
      <Features />
      <HowTo />
      <About />
    </div>
  );
};

Home.getLayout = (page: ReactNode) => {
  const [loading, setLoading] = useState(false); // This state seems disconnected from the Home component's loading state
  return <Layout>{loading ? <LoadingPage /> : page}</Layout>;
};

export default Home;
