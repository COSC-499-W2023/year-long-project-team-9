import Hero from "./Hero";
import About from "./About";
import Features from "./Features";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center justify-center min-h-screen min-w-full p-36">
      <Hero />
      <Features />
      <About />
    </div>
  );
}
