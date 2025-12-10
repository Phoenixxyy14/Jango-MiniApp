"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <span className="font-semibold text-lg">Jango</span>
      <motion.button
        whileHover={{ scale: 1.03 }}
        className="rounded-full px-4 py-2 bg-[#0096c7] border border-white text-white backdrop-blur-sm text-sm hover:scale-105 transition"
      >
        Launch App
      </motion.button>
    </nav>
  );
}
