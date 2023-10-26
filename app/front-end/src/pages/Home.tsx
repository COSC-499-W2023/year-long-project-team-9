import Hero from "./Hero";
import Features from "./Features";

export default function Home() {
  return (
    <div className="grid grid-rows-3 items-center justify-items-center justify-center">
      <Hero />
      <Features />
      {/* TODO: Call to Action */}
    </div>
  );
}
