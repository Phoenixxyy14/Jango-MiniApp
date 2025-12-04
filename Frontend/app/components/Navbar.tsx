"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-linear-to-r from-purple-500 to-purple-600 flex items-center justify-center text-sm font-bold">
          J
        </div>
        <span className="font-semibold text-lg">Jango</span>
      </div>
      <motion.button
        whileHover={{ scale: 1.03 }}
        className="rounded-full px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm text-sm hover:scale-105 transition"
      >
        Launch App
      </motion.button>
    </nav>
  );
}
