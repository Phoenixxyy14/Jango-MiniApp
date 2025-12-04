"use client";

export default function Footer() {
  return (
    <footer className="mt-16 pb-12 flex items-center justify-between fade-in-up">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-linear-to-r from-purple-500 to-purple-600 flex items-center justify-center text-sm font-bold">
          J
        </div>
        <div className="font-semibold">Jango Savings</div>
      </div>
      <div className="text-sm text-white/60">
        Built with ❤️ for the onchain future
      </div>
    </footer>
  );
}
