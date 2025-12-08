import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow">
      <div className="flex items-center">
        <div className="w-9 h-9 rounded-full bg-linear-to-r from-[#0096c7] to-[#005f8c] flex items-center justify-center text-sm font-bold">
          J
        </div>
        <span className="ml-2 text-xl font-semibold">Jobly</span>
      </div>
      <div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          className="rounded-full px-4 py-2 bg-[#0096c7] hover:bg-[#0077a3] text-white text-sm transition"
        >
          Launch App
        </motion.button>
      </div>
    </nav>
  );
}
