"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [streak, setStreak] = useState(2);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });
  }, []);

  useEffect(() => {
    let i = 0;
    const t = window.setInterval(() => {
      setStreak((s) => Math.min(47, s + 1));
      i++;
      if (i > 18) clearInterval(t);
    }, 40);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050409] via-[#12051a] to-[#050409] text-white antialiased">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-sm font-bold">
            J
          </div>
          <span className="font-semibold text-lg">Jango</span>
        </div>
        <button className="rounded-full px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm text-sm hover:scale-105 transition">
          Launch App
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pb-20">
        {/* HERO */}
        <section className="flex flex-col-reverse sm:flex-row items-center gap-8 sm:gap-16 pt-8">
          <div className="flex-1 text-center sm:text-left">
            <div
              className="inline-flex items-center gap-3 mb-4"
              data-aos="fade-up"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/70">Now live on Base</span>
            </div>

            <motion.h1
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="font-extrabold text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight"
            >
              Save 1% Daily.
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
                Onchain.
              </span>
            </motion.h1>

            <p
              className="mt-6 text-lg text-white/70 max-w-xl"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              Automated savings streaks and daily financial insights.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <motion.button
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transform transition"
              >
                Start Saving
              </motion.button>

              <div
                className="flex items-center gap-3 mt-2 sm:mt-0"
                data-aos="fade-up"
                data-aos-delay="160"
              >
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> USDC
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-600" /> Base
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-500" /> Aave
                </div>
              </div>
            </div>
          </div>

          {/* Hero mock / mini-app */}
          <div className="w-full sm:w-80" data-aos="fade-left">
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/3 border border-white/8 backdrop-blur-md rounded-2xl p-5 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M7 2v2M17 2v2M3 8h18"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold">Day {streak}</div>
                  <div className="text-sm text-white/70">Current Streak</div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden mb-4">
                <div className="text-center font-bold py-3 bg-gradient-to-r from-purple-500 to-purple-600">
                  $10.00
                </div>
                <div className="text-xs text-white/70 text-center py-2">
                  1% of balance
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-lg py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold"
              >
                Save Now
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* HOW IT WORKS */}
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
              className="p-6 rounded-2xl bg-white/3 border border-white/8 backdrop-blur-md"
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
              className="p-6 rounded-2xl bg-white/3 border border-white/8 backdrop-blur-md"
              data-aos="fade-up"
              data-aos-delay="160"
            >
              <div className="text-6xl font-extrabold text-white/5">02</div>
              <h3 className="mt-2 font-bold text-lg">Save Daily</h3>
              <p className="mt-2 text-white/70">
                Automatically save 1% of your balance daily. Set it and forget
                it.
              </p>
            </div>

            <div
              className="p-6 rounded-2xl bg-white/3 border border-white/8 backdrop-blur-md"
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

        {/* WHY JANGO */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center" data-aos="fade-up">
            Why Jango?
          </h2>
          <p
            className="mt-4 text-center text-white/70 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            Built for the future of finance. Transparent, secure, and
            decentralized.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div
              className="p-5 rounded-xl bg-white/3 border border-white/8 backdrop-blur-md flex items-start gap-4"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                🔗
              </div>
              <div>
                <div className="font-semibold">Onchain</div>
                <div className="text-sm text-white/70">
                  Every transaction is transparent and verifiable on Base.
                </div>
              </div>
            </div>

            <div
              className="p-5 rounded-xl bg-white/3 border border-white/8 backdrop-blur-md flex items-start gap-4"
              data-aos="fade-up"
              data-aos-delay="160"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                🛡️
              </div>
              <div>
                <div className="font-semibold">Self-Custody</div>
                <div className="text-sm text-white/70">
                  You control your keys. Your funds never leave your wallet.
                </div>
              </div>
            </div>

            <div
              className="p-5 rounded-xl bg-white/3 border border-white/8 backdrop-blur-md flex items-start gap-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                ⚙️
              </div>
              <div>
                <div className="font-semibold">Aave-Powered</div>
                <div className="text-sm text-white/70">
                  Earn yield on your savings with battle-tested DeFi protocols.
                </div>
              </div>
            </div>

            <div
              className="p-5 rounded-xl bg-white/3 border border-white/8 backdrop-blur-md flex items-start gap-4"
              data-aos="fade-up"
              data-aos-delay="240"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                📈
              </div>
              <div>
                <div className="font-semibold">Daily Insights</div>
                <div className="text-sm text-white/70">
                  Track your progress with beautiful analytics and streaks.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social / Farcaster */}
        <section className="mt-16">
          <div className="p-6 rounded-2xl bg-white/3 border border-white/8 backdrop-blur-md max-w-3xl mx-auto flex items-center gap-6 fade-in-up pop-hover">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center font-bold">
              f
            </div>
            <div>
              <div className="font-bold">Available as a Farcaster Mini App</div>
              <div className="text-sm text-white/70">
                Save directly from your social feed. Built for the onchain
                social economy.
              </div>
            </div>
            <div className="ml-auto">
              <button className="rounded-full px-4 py-2 bg-white/5 border border-white/10">
                Try on Farcaster →
              </button>
            </div>
          </div>
        </section>

        <footer className="mt-16 pb-12 flex items-center justify-between fade-in-up">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-sm font-bold">
              J
            </div>
            <div className="font-semibold">Jango Savings</div>
          </div>
          <div className="text-sm text-white/60">
            Built with ❤️ for the onchain future
          </div>
        </footer>
      </main>
    </div>
  );
}
