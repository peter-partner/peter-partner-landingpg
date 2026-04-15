import { Video, BarChart3, ShoppingBag, Megaphone, Repeat, Shield } from "lucide-react";

const services = [
  {
    icon: <Video size={22} />,
    title: "Creative Content Production",
    desc: "TikTok-native scripts, filming, editing, and publishing. We create content that rides the algorithm, not fights it.",
    color: "purple",
  },
  {
    icon: <Megaphone size={22} />,
    title: "Paid & Organic Amplification",
    desc: "Targeted ad campaigns and creator collaborations that convert views into sales — not just impressions.",
    color: "pink",
  },
  {
    icon: <ShoppingBag size={22} />,
    title: "TikTok Shop Management",
    desc: "Full storefront setup, product listing optimisation, live-stream commerce, and order fulfilment coordination.",
    color: "amber",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Performance Analytics",
    desc: "Real-time dashboards tracking GMV, ROAS, and engagement. Data-driven decisions on every campaign.",
    color: "purple",
  },
  {
    icon: <Repeat size={22} />,
    title: "Brand Lifecycle Strategy",
    desc: "From product launch to repeat-purchase ecosystem — we map and manage the entire customer journey.",
    color: "pink",
  },
  {
    icon: <Shield size={22} />,
    title: "Full Digital Ownership",
    desc: "We take complete responsibility for your online presence. You make the product. We make it sell.",
    color: "amber",
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  purple: {
    bg: "bg-purple-500/10",
    icon: "text-purple-400",
    border: "border-purple-500/20 hover:border-purple-500/50",
  },
  pink: {
    bg: "bg-pink-500/10",
    icon: "text-pink-400",
    border: "border-pink-500/20 hover:border-pink-500/50",
  },
  amber: {
    bg: "bg-amber-500/10",
    icon: "text-amber-400",
    border: "border-amber-500/20 hover:border-amber-500/50",
  },
};

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 px-6 bg-[#0a0a13]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-widest uppercase">
            What We Do
          </span>
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-6">
          The{" "}
          <span className="gradient-text">Digital Lifecycle</span>
          , Fully Owned
        </h2>

        <p className="text-center max-w-2xl mx-auto text-gray-400 text-lg mb-16 leading-relaxed">
          We operate at the intersection of Creative Content and Operational
          Excellence — so our partners can remain silent on digital and deafening
          on quality.
        </p>

        {/* Model diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 mb-16">
          <div className="glass-card rounded-2xl border border-amber-500/25 px-8 py-6 text-center w-64">
            <p className="text-amber-400 font-bold text-lg mb-1">Partner</p>
            <p className="text-gray-400 text-sm">Perfects the physical product</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center my-3 md:my-0 md:mx-0">
            <div className="w-px h-8 md:w-16 md:h-px bg-gradient-to-r from-amber-500 to-purple-500" />
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-600/30 to-purple-600/30 border border-purple-500/30 text-white text-xs font-semibold whitespace-nowrap mx-2">
              Peter Partner
            </div>
            <div className="w-px h-8 md:w-16 md:h-px bg-gradient-to-r from-purple-500 to-pink-500" />
          </div>
          <div className="glass-card rounded-2xl border border-purple-500/25 px-8 py-6 text-center w-64">
            <p className="text-purple-400 font-bold text-lg mb-1">Market</p>
            <p className="text-gray-400 text-sm">Full digital lifecycle delivered</p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const c = colorMap[s.color];
            return (
              <div
                key={s.title}
                className={`glass-card rounded-2xl p-6 border transition-all duration-300 ${c.border}`}
              >
                <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center ${c.icon} mb-4`}>
                  {s.icon}
                </div>
                <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
