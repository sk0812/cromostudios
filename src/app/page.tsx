import Hero from "@/components/sections/Hero";
import { Navbar } from "@/components/nav/Navbar";
import Services from "@/components/sections/Services";
import Offer from "@/components/sections/Offer";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative bg-black">
      <Navbar />
      <div className="w-full">
        <div className="relative">
          <Hero />
        </div>
        <Services />
        <Offer />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </main>
  );
}
