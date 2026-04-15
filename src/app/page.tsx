import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatWeDo from "@/components/WhatWeDo";
import Vision from "@/components/Vision";
import Market from "@/components/Market";
import Revenue from "@/components/Revenue";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#08080f]">
      <Navbar />
      <Hero />
      <Problem />
      <WhatWeDo />
      <Vision />
      <Market />
      <Revenue />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
