"use client"

import About from "@/components/About";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowTo from "@/components/HowTo";
import { ArrowBigDownIcon } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

export default function Home(){


  useEffect(() => {
    AOS.init({ once: true });
  })

  return (
    <div className="grid items-center justify-items-center justify-center min-h-screen min-w-full p-36">
      <Hero />

      <div
        id="features"
        className="opacity-0 animate-fadeIn transition-opacity delay-1000 duration-1000"
      >
        <div
          className="grid grid-cols-2 gap-2 pt-16 delay-1000 pl-24"
          id="features"
        >
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
