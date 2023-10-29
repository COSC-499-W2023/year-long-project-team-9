import Hero from "./Hero";
import Features from "./Features";

export default function Home() {
  return (
    <div className="grid grid-rows-2 items-center justify-items-center justify-center p-36">
      <Hero />
      <div id="features">
      </div>
      <Features />
      {/* TODO: Call to Action */}
    </div>
  );
}
