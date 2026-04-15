import { ArrowRight, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden hero-gradient">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-700/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-pink-700/8 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-amber-600/8 blur-[90px] pointer-events-none" />

      {/* Badge */}
      <div className="relative flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium">
        <TrendingUp size={14} />
        Thailand&apos;s Digital Commerce Enabler
      </div>

      {/* Headline */}
      <h1 className="relative max-w-5xl text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white mb-6">
        We Turn{" "}
        <span className="gradient-text">Great Products</span>
        <br />
        Into{" "}
        <span className="gradient-text">Digital Brands</span>
      </h1>

      {/* Subheadline */}
      <p className="relative max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
        Peter Partner bridges the gap between world-class Thai manufacturers and
        the TikTok-driven generation. We own your entire digital lifecycle — so
        you focus on perfecting the product.
      </p>

      {/* CTAs */}
      <div className="relative flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#contact"
          className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-base transition-all duration-300 shadow-lg shadow-purple-900/40"
        >
          Become a Partner
          <ArrowRight size={18} />
        </a>
        <a
          href="#what-we-do"
          className="px-8 py-4 rounded-full border border-gray-700 hover:border-purple-500 text-gray-300 hover:text-white font-semibold text-base transition-all duration-300"
        >
          How It Works
        </a>
      </div>

      {/* Stats row */}
      <div className="relative mt-20 grid grid-cols-3 gap-8 md:gap-16 text-center">
        {[
          { value: "1M+ THB", label: "Monthly GMV Target" },
          { value: "70%", label: "Gen Z via TikTok" },
          { value: "#2", label: "TikTok Shop in Thailand" },
        ].map((s) => (
          <div key={s.label}>
            <p className="text-3xl md:text-4xl font-extrabold gradient-text">{s.value}</p>
            <p className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-purple-500" />
        <div className="w-2 h-2 rounded-full bg-purple-500" />
      </div>
    </section>
  );
}
