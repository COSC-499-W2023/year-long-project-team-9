import Hero from "./Hero";
import Features from "./Features";
import { ArrowBigDownDash } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-rows-2 items-center justify-items-center justify-center p-64">
      <Hero />
      <div id="features" className=" min-h-screen grid grid-cols-2 gap-5 justify-self-center pl-36 top-0">
        <h1 className="text-xl font-extrabold">Features (TODO)</h1>
        <ArrowBigDownDash
          className="animate-bounce justify-self-start"
          size={50}
        />
        <Features />
      </div>
      {/* TODO: Call to Action */}
    </div>
  );
}
