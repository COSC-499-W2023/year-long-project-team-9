import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import HowTo from "../components/HowTo";
import { ArrowBigDownIcon } from "lucide-react";
import type { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}, 
  };
};


export default function Home() {
  return (
    <div className="grid items-center justify-items-center justify-center min-h-screen min-w-full p-36">
      <Hero />

      <div id="features" className="opacity-0 animate-fadeIn transition-opacity delay-1000 duration-1000">
        <div
          className="grid grid-cols-2 gap-2 pt-16 delay-1000 pl-24"
          id="features"
        >
          <div className="text-2xl font-extrabold">Features</div>
          <ArrowBigDownIcon className="stroke-primary fill-primary animate-bounce mt-1" size={30} />
        </div>
      </div>
      <Features />
      <HowTo />
      <About />
    </div>
  );
}
