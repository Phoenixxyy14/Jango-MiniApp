import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen py-12">
      <motion.h1
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="font-extrabold text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight"
      >
        Save 1% Daily.
        <br />
        <span className="bg-clip-text text-transparent bg-linear-to-r from-[#0096c7] to-[#005f8c]">
          Onchain.
        </span>
      </motion.h1>
      <motion.button
        whileHover={{ y: -6, scale: 1.02 }}
        className="rounded-full px-6 py-3 bg-[#0096c7] hover:bg-[#0077a3] text-white font-semibold shadow-lg transition"
      >
        Start Saving
      </motion.button>
    </div>
  );
}
