import Hero from "./Hero";
import About from "./About";
import Features from "./Features";

export default function Home() {
  return (
    <div className="grid grid-rows-2 items-center justify-items-center justify-center p-36">
      <Hero />
      <div id="features">
      </div>
      <Features />
      <About />
    </div>
  );
}
