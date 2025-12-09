"use client";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HowItWorks from "../components/HowItWorks";
import WhyJango from "../components/WhyJango";
import Social from "../components/Social";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#222] antialiased">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 pb-20">
        <Hero />
        <HowItWorks />
        {/* <WhyJango /> */}
        <Social />
        <Footer />
      </main>
    </div>
  );
}
