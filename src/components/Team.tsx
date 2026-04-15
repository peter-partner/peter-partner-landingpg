import { Crown, DollarSign, Settings, CalendarCheck } from "lucide-react";

const roles = [
  {
    icon: <Crown size={22} />,
    title: "Chief Executive Officer",
    color: "amber",
    responsibilities: [
      "Set strategic goals and key performance metrics",
      "Lead the team toward shared objectives with clarity",
      "Maintain team alignment, morale, and accountability",
    ],
  },
  {
    icon: <DollarSign size={22} />,
    title: "Chief Finance Officer",
    color: "purple",
    responsibilities: [
      "Track revenue and expenses across all revenue streams",
      "Align project budgets with strategic goals and plans",
      "Report financial health and surface growth opportunities",
    ],
  },
  {
    icon: <Settings size={22} />,
    title: "Chief Operation Officer",
    color: "pink",
    responsibilities: [
      "Coordinate with Product Owners on task execution",
      "Monitor and track individual team member performance",
      "Streamline day-to-day operations across all projects",
    ],
  },
  {
    icon: <CalendarCheck size={22} />,
    title: "Content & Planning Lead",
    color: "amber",
    responsibilities: [
      "Plan all tasks aligned with PR timelines and strategic goals",
      "Assign briefs and build production plans for Talents",
      "Ensure on-camera talent is prepared and on-schedule",
    ],
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string; dot: string }> = {
  purple: { bg: "bg-purple-500/10", icon: "text-purple-400", border: "border-purple-500/20 hover:border-purple-400/40", dot: "bg-purple-400" },
  pink: { bg: "bg-pink-500/10", icon: "text-pink-400", border: "border-pink-500/20 hover:border-pink-400/40", dot: "bg-pink-400" },
  amber: { bg: "bg-amber-500/10", icon: "text-amber-400", border: "border-amber-500/20 hover:border-amber-400/40", dot: "bg-amber-400" },
};

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-[#0a0a13]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-semibold tracking-widest uppercase">
            The Team
          </span>
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-6">
          Four Roles,{" "}
          <span className="gradient-text">One Engine</span>
        </h2>

        <p className="text-center max-w-2xl mx-auto text-gray-400 text-lg mb-16 leading-relaxed">
          A lean, specialised leadership structure designed to move fast,
          stay aligned, and execute with precision across every dimension of
          the business.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {roles.map((r) => {
            const c = colorMap[r.color];
            return (
              <div
                key={r.title}
                className={`glass-card rounded-2xl p-8 border transition-all duration-300 ${c.border}`}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center ${c.icon}`}>
                    {r.icon}
                  </div>
                  <h3 className="text-white font-bold text-base leading-tight">{r.title}</h3>
                </div>

                <ul className="space-y-3">
                  {r.responsibilities.map((resp) => (
                    <li key={resp} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
                      {resp}
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
