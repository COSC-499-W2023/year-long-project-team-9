import Hero from "./Hero";
import About from "./About";
import Features from "./Features";
import { ArrowBigDownDash, ArrowBigDownIcon, ArrowDownCircleIcon } from "lucide-react";
import { animate } from "framer-motion";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center justify-center min-h-screen min-w-full p-36">
      <Hero />
      <div id="features" className="opacity-0 animate-fadeIn transition-opacity delay-1000 duration-1000">
        <div
          className="grid grid-cols-2 gap-2 pt-16 delay-1000"
          id="features"
        >
          <h1 className="text-xl font-extrabold">Features</h1>
          <ArrowBigDownIcon className="stroke-primary fill-primary animate-bounce" size={25} />
        </div>
      </div>
      <Features />
      <About />
    </div>
  );
}
