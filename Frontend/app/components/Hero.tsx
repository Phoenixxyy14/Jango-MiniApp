import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen py-12">
      <motion.h1
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="font-extrabold text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight text-[#222]"
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

      <div className="w-full sm:w-80" data-aos="fade-left">
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white/70 border border-[#0096c7]/20 backdrop-blur-md rounded-2xl p-5 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-linear-to-r from-[#0096c7] to-[#005f8c] flex items-center justify-center">
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
              <div className="text-xl font-bold text-[#0096c7]">
                Day {streak}
              </div>
              <div className="text-sm text-[#0077b6]">Current Streak</div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden mb-4">
            <div className="text-center font-bold py-3 bg-linear-to-r from-[#0096c7] to-[#005f8c] text-white">
              $10.00
            </div>
            <div className="text-xs text-[#0077b6] text-center py-2">
              1% of balance
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-lg py-2 bg-[#0096c7] hover:bg-[#0077a3] text-white font-semibold"
          >
            Save Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
