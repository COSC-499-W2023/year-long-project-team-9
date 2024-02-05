import Hero from "./Hero";
import About from "./About";
import Features from "./Features";
import HowTo from "./HowTo";
import { ArrowBigDownIcon } from "lucide-react";
import { useEffect, useState, useContext, ReactNode, FC } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingPage from "@/components/LoadingPage";
import { useRouter } from "next/navigation";



const Home = () => {
  return (
    <div className="grid items-center justify-items-center justify-center min-h-screen min-w-full p-36">
      <Hero />
      <div className="opacity-0 animate-fadeIn transition-opacity delay-1000 duration-1000">
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

export default Home;