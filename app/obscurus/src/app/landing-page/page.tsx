"use client";

import About from "@/app/landing-page/components/about";
import Features from "@/app/landing-page/components/features";
import Hero from "@/app/landing-page/components/hero";
import HowTo from "@/app/landing-page/components/how-to";
import { ArrowBigDownIcon } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  });

  return (
    <div className="container flex flex-col items-center justify-between p-36 gap-36">
      <Hero />

      <div
        id="features"
        className="opacity-0 animate-fadeIn transition-opacity delay-1000 duration-1000"
      >
        <div className="flex flex-row space-x-3 delay-1000" id="features">
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
}
