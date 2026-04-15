import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colour Palette — Peter Partner CI",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const backgrounds = [
  { name: "Base Black", hex: "#08080f", label: "Primary page background" },
  { name: "Layer Dark", hex: "#0a0a13", label: "Alternating section bg" },
  { name: "Card Surface", hex: "#10101a", label: "Card / panel background" },
  { name: "Glass Card", hex: "#10101aCC", label: "Frosted glass (80% opacity)" },
];

const purples = [
  { name: "Purple 300", hex: "#c4b5fd", shade: "300" },
  { name: "Purple 400", hex: "#a78bfa", shade: "400", label: "Light text on dark" },
  { name: "Purple 500", hex: "#8b5cf6", shade: "500", primary: true, label: "Primary brand accent" },
  { name: "Purple 600", hex: "#7c3aed", shade: "600", label: "Button fills, active" },
  { name: "Purple 700", hex: "#6d28d9", shade: "700" },
  { name: "Purple 900", hex: "#4c1d95", shade: "900", label: "Deep bg tints" },
];

const pinks = [
  { name: "Pink 300", hex: "#f9a8d4", shade: "300" },
  { name: "Pink 400", hex: "#f472b6", shade: "400", label: "Light text on dark" },
  { name: "Pink 500", hex: "#ec4899", shade: "500", primary: true, label: "Creative accent" },
  { name: "Pink 600", hex: "#db2777", shade: "600", label: "Button gradients" },
  { name: "Pink 700", hex: "#be185d", shade: "700" },
  { name: "Pink 900", hex: "#831843", shade: "900", label: "Deep bg tints" },
];

const ambers = [
  { name: "Amber 300", hex: "#fcd34d", shade: "300" },
  { name: "Amber 400", hex: "#fbbf24", shade: "400", label: "Light text on dark" },
  { name: "Amber 500", hex: "#f59e0b", shade: "500", primary: true, label: "Value / partnership accent" },
  { name: "Amber 600", hex: "#d97706", shade: "600", label: "Borders, highlights" },
  { name: "Amber 700", hex: "#b45309", shade: "700" },
  { name: "Amber 900", hex: "#78350f", shade: "900", label: "Deep bg tints" },
];

const texts = [
  { name: "Primary White", hex: "#f0f0f8", tailwind: "text-white", label: "Headlines, key labels" },
  { name: "Body", hex: "#d1d5db", tailwind: "text-gray-300", label: "Body copy, list items" },
  { name: "Secondary", hex: "#9ca3af", tailwind: "text-gray-400", label: "Descriptions, supporting" },
  { name: "Muted", hex: "#6b7280", tailwind: "text-gray-500", label: "Captions, footnotes" },
  { name: "Disabled", hex: "#374151", tailwind: "text-gray-700", label: "Dividers as text" },
];

const gradients = [
  {
    name: "Brand Gradient",
    label: "Primary — hero text, section titles",
    css: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f59e0b 100%)",
    stops: ["#8b5cf6", "#ec4899", "#f59e0b"],
  },
  {
    name: "Purple-Pink",
    label: "Secondary — sub-headings, highlights",
    css: "linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)",
    stops: ["#a78bfa", "#ec4899"],
  },
  {
    name: "CTA Button",
    label: "Primary action buttons only",
    css: "linear-gradient(to right, #7c3aed, #db2777)",
    stops: ["#7c3aed", "#db2777"],
  },
  {
    name: "Section Divider",
    label: "Thin horizontal rules between sections",
    css: "linear-gradient(to right, #f59e0b, #8b5cf6, #ec4899)",
    stops: ["#f59e0b", "#8b5cf6", "#ec4899"],
  },
];

const semantics = [
  { colour: "#8b5cf6", bg: "rgba(139,92,246,0.15)", label: "Digital / Platform", desc: "TikTok, tech, strategy" },
  { colour: "#ec4899", bg: "rgba(236,72,153,0.15)", label: "Creative / Content", desc: "Campaigns, talent, production" },
  { colour: "#f59e0b", bg: "rgba(245,158,11,0.15)", label: "Product / Revenue", desc: "Manufacturing, GMV, margins" },
  { colour: "#ef4444", bg: "rgba(239,68,68,0.12)", label: "Warning / Gap", desc: "Problem callouts only" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-800" />
      <span className="text-xs font-semibold tracking-widest uppercase text-gray-500">{children}</span>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-800" />
    </div>
  );
}

interface SwatchProps {
  hex: string;
  name: string;
  label?: string;
  primary?: boolean;
  shade?: string;
}

function Swatch({ hex, name, label, primary, shade }: SwatchProps) {
  const isLight = ["#f0f0f8", "#d1d5db", "#9ca3af", "#fcd34d", "#fbbf24", "#c4b5fd", "#f9a8d4", "#f59e0b"].includes(hex);
  return (
    <div className={`rounded-xl overflow-hidden border ${primary ? "border-white/20 ring-2 ring-white/10" : "border-white/5"} flex flex-col`}>
      <div
        className="h-20 w-full flex items-end p-2"
        style={{ background: hex }}
      >
        {primary && (
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isLight ? "bg-black/30 text-black" : "bg-white/20 text-white"}`}
          >
            PRIMARY
          </span>
        )}
      </div>
      <div className="bg-[#10101a] px-3 py-2.5 flex-1">
        <p className="text-white text-xs font-semibold leading-tight">{name}</p>
        <p className="text-gray-500 text-[11px] font-mono mt-0.5">{hex}</p>
        {label && <p className="text-gray-600 text-[10px] mt-1 leading-tight">{label}</p>}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PalettePage() {
  return (
    <div className="min-h-screen bg-[#08080f] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">
            Corporate Identity
          </p>
          <h1 className="text-5xl font-extrabold mb-4">
            <span style={{ background: "linear-gradient(135deg,#8b5cf6,#ec4899,#f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Colour Palette
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            The complete Peter Partner CI colour system — backgrounds, accents, gradients, text, and semantic usage.
          </p>
          <a href="/" className="inline-block mt-6 text-sm text-gray-500 hover:text-white transition-colors">
            ← Back to site
          </a>
        </div>

        {/* ── Gradient showcase ── */}
        <section className="mb-16">
          <SectionLabel>Gradients</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-4">
            {gradients.map((g) => (
              <div key={g.name} className="rounded-2xl overflow-hidden border border-white/5">
                {/* Gradient bar */}
                <div className="h-28" style={{ background: g.css }} />
                <div className="bg-[#10101a] p-5">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <p className="text-white font-bold">{g.name}</p>
                      <p className="text-gray-500 text-sm">{g.label}</p>
                    </div>
                    {/* Stop chips */}
                    <div className="flex gap-1.5 flex-shrink-0">
                      {g.stops.map((s) => (
                        <div
                          key={s}
                          className="w-5 h-5 rounded-full border border-white/10"
                          style={{ background: s }}
                          title={s}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-[11px] font-mono break-all">{g.css}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Accent — Purple ── */}
        <section className="mb-12">
          <SectionLabel>Purple — Digital & Strategy</SectionLabel>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {purples.map((s) => <Swatch key={s.hex} {...s} />)}
          </div>
        </section>

        {/* ── Accent — Pink ── */}
        <section className="mb-12">
          <SectionLabel>Pink / Magenta — Creativity & Content</SectionLabel>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {pinks.map((s) => <Swatch key={s.hex} {...s} />)}
          </div>
        </section>

        {/* ── Accent — Amber ── */}
        <section className="mb-12">
          <SectionLabel>Amber / Gold — Value & Partnership</SectionLabel>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {ambers.map((s) => <Swatch key={s.hex} {...s} />)}
          </div>
        </section>

        {/* ── Backgrounds ── */}
        <section className="mb-12">
          <SectionLabel>Backgrounds</SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {backgrounds.map((b) => (
              <div key={b.hex} className="rounded-xl overflow-hidden border border-white/5">
                <div className="h-20 border-b border-white/5" style={{ background: b.hex }} />
                <div className="bg-[#0a0a13] px-3 py-2.5">
                  <p className="text-white text-xs font-semibold">{b.name}</p>
                  <p className="text-gray-500 text-[11px] font-mono mt-0.5">{b.hex}</p>
                  <p className="text-gray-600 text-[10px] mt-1 leading-tight">{b.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Text colours ── */}
        <section className="mb-12">
          <SectionLabel>Text Colours</SectionLabel>
          <div className="glass-card rounded-2xl border border-white/5 divide-y divide-white/5 overflow-hidden">
            {texts.map((t) => (
              <div key={t.hex} className="flex items-center gap-5 px-6 py-4">
                <div
                  className="w-8 h-8 rounded-full flex-shrink-0 border border-white/10"
                  style={{ background: t.hex }}
                />
                <span className="text-base font-medium w-36 flex-shrink-0" style={{ color: t.hex }}>
                  Sample Text
                </span>
                <div className="flex-1 min-w-0">
                  <span className="text-white text-sm font-semibold">{t.name}</span>
                  <span className="text-gray-600 text-xs ml-2 font-mono">{t.hex}</span>
                  <span className="text-gray-600 text-xs ml-2">{t.tailwind}</span>
                </div>
                <p className="text-gray-600 text-xs text-right hidden sm:block">{t.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Semantic usage ── */}
        <section className="mb-16">
          <SectionLabel>Semantic Colour Usage</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-4">
            {semantics.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-6 flex items-center gap-5 border"
                style={{
                  background: s.bg,
                  borderColor: s.colour + "33",
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex-shrink-0"
                  style={{ background: s.colour + "33", border: `2px solid ${s.colour}66` }}
                >
                  <div className="w-full h-full rounded-xl" style={{ background: s.colour }} />
                </div>
                <div>
                  <p className="font-bold text-white">{s.label}</p>
                  <p className="text-gray-400 text-sm">{s.desc}</p>
                  <p className="text-[11px] font-mono mt-1" style={{ color: s.colour }}>{s.colour}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Live component preview ── */}
        <section className="mb-16">
          <SectionLabel>Live Component Preview</SectionLabel>
          <div className="grid sm:grid-cols-3 gap-4">
            {/* Primary CTA */}
            <div className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col gap-4">
              <p className="text-gray-500 text-xs uppercase tracking-widest">Primary CTA</p>
              <button
                className="w-full py-3 rounded-full font-bold text-sm text-white"
                style={{ background: "linear-gradient(to right, #7c3aed, #db2777)" }}
              >
                Become a Partner
              </button>
            </div>
            {/* Ghost button */}
            <div className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col gap-4">
              <p className="text-gray-500 text-xs uppercase tracking-widest">Ghost Button</p>
              <button className="w-full py-3 rounded-full font-semibold text-sm text-gray-300 border border-gray-700">
                How It Works
              </button>
            </div>
            {/* Badge row */}
            <div className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col gap-3">
              <p className="text-gray-500 text-xs uppercase tracking-widest">Badges</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold border text-purple-400 bg-purple-500/10 border-purple-500/30">Digital</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold border text-pink-400 bg-pink-500/10 border-pink-500/30">Creative</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold border text-amber-400 bg-amber-500/10 border-amber-500/30">Revenue</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold border text-red-400 bg-red-500/10 border-red-500/30">Warning</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer note */}
        <p className="text-center text-gray-700 text-sm">
          Peter Partner CI — for full guidelines see{" "}
          <span className="font-mono text-gray-600">DESIGN.md</span>
        </p>
      </div>
    </div>
  );
}
