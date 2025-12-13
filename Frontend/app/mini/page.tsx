"use client";

import { useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";
import ConnectMenu from "@/components/ConnectMenu";

export default function MiniApp() {
  useEffect(() => {
    async function init() {
      await sdk.actions.ready();
    }
    init();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-[#e0f7ff] to-[#0096c7] text-[#222] flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white/80 rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6">
        <h1 className="text-2xl font-bold text-[#0096c7] mb-2">
          Jango Mini App
        </h1>
        <button className="bg-[#0096c7] hover:bg-[#0077a3] text-white rounded-lg px-6 py-3 font-semibold transition">
          <ConnectMenu />
        </button>
        <div className="w-full bg-white/60 rounded-xl p-4 flex flex-col items-center gap-2 border border-[#0096c7]/20">
          <div className="text-lg font-semibold text-[#0096c7]">
            Streak: <span className="font-bold text-[#005f8c]">0</span> days
          </div>
          <div className="text-sm text-[#0077b6]">
            Start saving daily to build your streak!
          </div>
        </div>
        <button className="w-full rounded-lg py-2 bg-[#0096c7] hover:bg-[#0077a3] text-white font-semibold mt-4 transition">
          Save Now
        </button>
      </div>
    </div>
  );
}
