import { Play, Users, Zap, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: <Play size={20} />,
    value: "#2",
    label: "E-Commerce Platform in Thailand",
    sub: "TikTok Shop has surged to Thailand's second largest e-commerce marketplace",
    color: "purple",
  },
  {
    icon: <Users size={20} />,
    value: "70%",
    label: "Gen Z Shop via Content",
    sub: "Seven in ten Gen Z consumers discover and buy products through content — not search",
    color: "pink",
  },
  {
    icon: <Zap size={20} />,
    value: "Impulse",
    label: "Purchase Behaviour Shift",
    sub: "Discovery-led, algorithm-powered impulse buying has replaced traditional intent-based shopping",
    color: "amber",
  },
  {
    icon: <TrendingUp size={20} />,
    value: "Surging",
    label: "Market Growth Trajectory",
    sub: "TikTok commerce in Southeast Asia is growing faster than any other digital retail channel",
    color: "purple",
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string; value: string }> = {
  purple: { bg: "bg-purple-500/10", icon: "text-purple-400", border: "border-purple-500/20", value: "gradient-text-purple" },
  pink: { bg: "bg-pink-500/10", icon: "text-pink-400", border: "border-pink-500/20", value: "text-pink-400" },
  amber: { bg: "bg-amber-500/10", icon: "text-amber-400", border: "border-amber-500/20", value: "text-amber-400" },
};

export default function Market() {
  return (
    <section id="market" className="py-24 px-6 bg-[#0a0a13]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-widest uppercase">
            Market Opportunity
          </span>
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-6">
          Thailand&apos;s{" "}
          <span className="gradient-text">TikTok Commerce</span>{" "}
          Surge
        </h2>

        <p className="text-center max-w-2xl mx-auto text-gray-400 text-lg mb-16 leading-relaxed">
          The platform has transformed how Thai consumers discover and buy. Peter
          Partner exists precisely at this inflection point — turning the
          algorithm into the most powerful salesperson our partners have ever had.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {stats.map((s) => {
            const c = colorMap[s.color];
            return (
              <div
                key={s.label}
                className={`glass-card rounded-2xl p-8 border ${c.border} flex gap-6 items-start`}
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center ${c.icon} flex-shrink-0`}>
                  {s.icon}
                </div>
                <div>
                  <p className={`text-3xl font-extrabold mb-1 ${c.value}`}>{s.value}</p>
                  <p className="text-white font-semibold mb-2">{s.label}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.sub}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight quote */}
        <div className="mt-12 p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/15 to-pink-900/10 text-center">
          <p className="text-white text-xl md:text-2xl font-semibold leading-relaxed">
            &ldquo;Gen Z no longer search for products.{" "}
            <span className="gradient-text">They discover them.</span>&rdquo;
          </p>
          <p className="text-gray-500 text-sm mt-3">
            Content-first commerce is the new standard — and TikTok owns the feed.
          </p>
        </div>
      </div>
    </section>
  );
}
