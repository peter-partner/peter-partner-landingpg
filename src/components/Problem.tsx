import { Package, Wifi, AlertTriangle } from "lucide-react";

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-6 bg-[#08080f]">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-widest uppercase">
            The Problem
          </span>
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-6">
          The{" "}
          <span className="gradient-text">Digital Bottleneck</span>
        </h2>

        <p className="text-center max-w-2xl mx-auto text-gray-400 text-lg mb-16 leading-relaxed">
          Traditional manufacturers are world-class at building products — but
          the language of TikTok&apos;s algorithm is a foreign tongue. Great products
          sit in warehouses while the digital market surges past them.
        </p>

        {/* Main visual split */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Left — the manufacturer side */}
          <div className="glass-card rounded-2xl p-8 border border-amber-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center">
                <Package size={20} className="text-amber-400" />
              </div>
              <span className="text-amber-400 font-bold text-lg">The Producer</span>
            </div>
            <ul className="space-y-4 text-gray-300">
              {[
                "Expert craftspeople & manufacturers",
                "High-quality, locally sourced materials",
                "Warehouses stocked with great inventory",
                "Zero digital marketing know-how",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — the digital side */}
          <div className="glass-card rounded-2xl p-8 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center">
                <Wifi size={20} className="text-purple-400" />
              </div>
              <span className="text-purple-400 font-bold text-lg">The Digital World</span>
            </div>
            <ul className="space-y-4 text-gray-300">
              {[
                "TikTok Shop — Thailand's #2 e-commerce platform",
                "70% of Gen Z buy through content discovery",
                "Algorithm-driven impulse purchasing behaviour",
                "Winning requires creative velocity & data fluency",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gap callout */}
        <div className="flex items-start gap-4 p-6 rounded-2xl border border-red-500/20 bg-red-500/5">
          <AlertTriangle size={22} className="text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-gray-300">
            <span className="text-red-400 font-semibold">The gap: </span>
            High-quality T-shirts, gadgets, and lifestyle goods are invisible
            online — not because they&apos;re bad products, but because their makers
            have never been taught to speak the language of the feed.
          </p>
        </div>
      </div>
    </section>
  );
}
