import Hero from "./Hero";
import Features from "./Features";
import About from "./About";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center justify-center min-h-screen min-w-full p-36">
      <Hero />
      <div id="features">
      </div>
      <Features />
      <About />
    </div>
  );
}
