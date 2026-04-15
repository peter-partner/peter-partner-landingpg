import { Eye, Rocket, Target } from "lucide-react";

const cards = [
  {
    icon: <Eye size={28} />,
    label: "Our Vision",
    color: "purple",
    heading: "Premier Brand-Maker of Thailand",
    body: "To become the definitive platform where any quality Thai product can reach its full market potential through the power of creative technology.",
  },
  {
    icon: <Rocket size={28} />,
    label: "Our Mission",
    color: "pink",
    heading: "Replace Marketing Struggles with a Sales Engine",
    body: "We support local producers by turning hard-pressed sellers into true brand advocates — giving them a complete digital engine they never had to build themselves.",
  },
  {
    icon: <Target size={28} />,
    label: "Our Goal",
    color: "amber",
    heading: "1M+ THB Monthly GMV",
    body: "Hit 1,000,000 THB in monthly gross merchandise value — proving the shared-model at scale and unlocking greater partnerships for every producer in our network.",
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string; glow: string; label: string }> = {
  purple: {
    bg: "bg-purple-500/10",
    icon: "text-purple-400",
    border: "border-purple-500/25",
    glow: "shadow-purple-900/30",
    label: "text-purple-400 bg-purple-500/10 border-purple-500/30",
  },
  pink: {
    bg: "bg-pink-500/10",
    icon: "text-pink-400",
    border: "border-pink-500/25",
    glow: "shadow-pink-900/30",
    label: "text-pink-400 bg-pink-500/10 border-pink-500/30",
  },
  amber: {
    bg: "bg-amber-500/10",
    icon: "text-amber-400",
    border: "border-amber-500/25",
    glow: "shadow-amber-900/30",
    label: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  },
};

export default function Vision() {
  return (
    <section id="vision" className="py-24 px-6 bg-[#08080f]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-semibold tracking-widest uppercase">
            Direction
          </span>
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-6">
          Vision, Mission &{" "}
          <span className="gradient-text">Goal</span>
        </h2>

        <p className="text-center max-w-xl mx-auto text-gray-400 text-lg mb-16 leading-relaxed">
          Three anchors that guide every decision, every campaign, and every
          partnership we take on.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => {
            const col = colorMap[c.color];
            return (
              <div
                key={c.label}
                className={`glass-card rounded-2xl p-8 border ${col.border} shadow-xl ${col.glow} flex flex-col gap-5`}
              >
                <div className={`w-14 h-14 rounded-2xl ${col.bg} flex items-center justify-center ${col.icon}`}>
                  {c.icon}
                </div>
                <span className={`self-start text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border ${col.label}`}>
                  {c.label}
                </span>
                <div>
                  <h3 className="text-white font-bold text-xl mb-3 leading-snug">{c.heading}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{c.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
