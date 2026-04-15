import { Shirt, Package, Cpu } from "lucide-react";

const tiers = [
  {
    icon: <Shirt size={26} />,
    category: "High Margin",
    example: "Streetwear & Apparel",
    color: "purple",
    badge: "Aggressive Growth",
    description:
      "High production markup unlocks aggressive marketing spending. We invest heavily in viral content and paid amplification, knowing every sale generates healthy returns for the partnership.",
    traits: [
      "High creative budget allocation",
      "Viral-first content strategy",
      "Influencer & affiliate partnerships",
      "Strong brand-building layer",
    ],
  },
  {
    icon: <Package size={26} />,
    category: "Standard Margin",
    example: "Lifestyle Goods",
    color: "pink",
    badge: "Balanced Split",
    description:
      "A balanced split between marketing spend and margin preservation. We compete efficiently in crowded markets — targeting niche audiences with precisely crafted content.",
    traits: [
      "Optimised ad spend ratios",
      "Niche community targeting",
      "Consistent creative output",
      "Price-competitive positioning",
    ],
  },
  {
    icon: <Cpu size={26} />,
    category: "High-Volume / Tech",
    example: "Electronics & Gadgets",
    color: "amber",
    badge: "Volume Wins",
    description:
      "Thin margins mean we win through sheer volume. Lower ad costs and highly specific targeting let us move units at scale — making the numbers work through velocity, not markup.",
    traits: [
      "High-volume unit strategy",
      "Low-cost ad channels",
      "Precision audience targeting",
      "Operational efficiency focus",
    ],
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string; badge: string; dot: string }> = {
  purple: {
    bg: "bg-purple-500/10",
    icon: "text-purple-400",
    border: "border-purple-500/30",
    badge: "text-purple-300 bg-purple-500/15 border-purple-500/30",
    dot: "bg-purple-400",
  },
  pink: {
    bg: "bg-pink-500/10",
    icon: "text-pink-400",
    border: "border-pink-500/30",
    badge: "text-pink-300 bg-pink-500/15 border-pink-500/30",
    dot: "bg-pink-400",
  },
  amber: {
    bg: "bg-amber-500/10",
    icon: "text-amber-400",
    border: "border-amber-500/30",
    badge: "text-amber-300 bg-amber-500/15 border-amber-500/30",
    dot: "bg-amber-400",
  },
};

export default function Revenue() {
  return (
    <section id="revenue" className="py-24 px-6 bg-[#08080f]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-widest uppercase">
            Revenue Model
          </span>
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-6">
          Three{" "}
          <span className="gradient-text">Margin Sectors</span>
        </h2>

        <p className="text-center max-w-2xl mx-auto text-gray-400 text-lg mb-16 leading-relaxed">
          Each product category demands a different financial playbook. We tailor
          our strategy to the margin structure — so the model always makes sense
          for everyone in the chain.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => {
            const c = colorMap[t.color];
            return (
              <div
                key={t.category}
                className={`glass-card rounded-2xl p-8 border ${c.border} flex flex-col gap-5 h-full`}
              >
                <div className="flex items-start justify-between">
                  <div className={`w-13 h-13 w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center ${c.icon}`}>
                    {t.icon}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${c.badge}`}>
                    {t.badge}
                  </span>
                </div>

                <div>
                  <p className="text-white font-extrabold text-xl mb-0.5">{t.category}</p>
                  <p className="text-gray-500 text-sm italic">e.g. {t.example}</p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">{t.description}</p>

                <ul className="space-y-2 mt-auto">
                  {t.traits.map((trait) => (
                    <li key={trait} className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
