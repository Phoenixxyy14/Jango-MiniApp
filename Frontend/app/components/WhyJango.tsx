"use client";

export default function WhyJango() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-center" data-aos="fade-up">
        Why Jango?
      </h2>
      <p
        className="mt-4 text-center text-white/70 max-w-2xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="80"
      >
        Built for the future of finance. Transparent, secure, and decentralized.
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
  );
}
