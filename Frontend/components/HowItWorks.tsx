"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-center" data-aos="fade-up">
        How It Works
      </h2>
      <p
        className="mt-4 text-center text-white/70 max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="80"
      >
        Simple, secure, and automated. Start building wealth with just three
        steps.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        <div
          className="p-6 rounded-2xl bg-white/3 border border-white/8 backdrop-blur-md cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <div className="text-6xl font-extrabold text-white/5">01</div>
          <h3 className="mt-2 font-bold text-lg">Connect Wallet</h3>
          <p className="mt-2 text-white/70">
            Link your Web3 wallet securely. Your keys, your custody, your
            control.
          </p>
        </div>

        <div
          className="p-6 rounded-2xl bg-white/3 border border-white/8 backdrop-blur-md cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="160"
        >
          <div className="text-6xl font-extrabold text-white/5">02</div>
          <h3 className="mt-2 font-bold text-lg">Save Daily</h3>
          <p className="mt-2 text-white/70">
            Automatically save 1% of your balance daily. Set it and forget it.
          </p>
        </div>

        <div
          className="p-6 rounded-2xl bg-white/3 border border-white/8 backdrop-blur-md cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text-6xl font-extrabold text-white/5">03</div>
          <h3 className="mt-2 font-bold text-lg">Earn Streak</h3>
          <p className="mt-2 text-white/70">
            Build momentum with daily streaks. Unlock rewards and insights.
          </p>
        </div>
      </div>
    </section>
  );
}
