"use client";

export default function Social() {
  return (
    <section className="mt-16">
      <div className="p-6 rounded-2xl bg-white/3 border border-white/8 backdrop-blur-md max-w-3xl mx-auto flex items-center gap-6 fade-in-up pop-hover">
        <div>
          <div className="font-bold">Available as a Farcaster Mini App</div>
          <div className="text-sm text-white/70">
            Save directly from your social feed. Built for the onchain social
            economy.
          </div>
        </div>
        <div className="ml-auto">
          <button className="rounded-full px-4 py-2 bg-white/5 border border-white/10">
            Try on Farcaster →
          </button>
        </div>
      </div>
    </section>
  );
}
