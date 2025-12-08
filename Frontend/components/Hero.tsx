"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [streak, setStreak] = useState(2);

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
    <section className="flex flex-col-reverse sm:flex-row items-center gap-8 sm:gap-16 pt-8">
      <div className="flex-1 text-center sm:text-left">
        <div className="inline-flex items-center gap-3 mb-4" data-aos="fade-up">
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
          <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-500 to-purple-600">
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
            className="rounded-full px-6 py-3 bg-linear-to-r from-purple-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transform transition"
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

      <div className="w-full sm:w-80" data-aos="fade-left">
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white/3 border border-white/8 backdrop-blur-md rounded-2xl p-5 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-linear-to-r from-purple-500 to-purple-600 flex items-center justify-center">
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
            <div className="text-center font-bold py-3 bg-linear-to-r from-purple-500 to-purple-600">
              $10.00
            </div>
            <div className="text-xs text-white/70 text-center py-2">
              1% of balance
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-lg py-2 bg-linear-to-r from-purple-500 to-purple-600 text-white font-semibold"
          >
            Save Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
