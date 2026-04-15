import { ArrowRight, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#08080f]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Glow bg */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[300px] rounded-full bg-purple-700/15 blur-[100px]" />
          </div>

          <div className="relative glass-card rounded-3xl border border-purple-500/25 px-8 py-16">
            <div className="flex justify-center mb-6">
              <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-widest uppercase">
                Partner With Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ready to Turn Your Product
              <br />
              Into a{" "}
              <span className="gradient-text">Digital Brand?</span>
            </h2>

            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Whether you&apos;re a manufacturer sitting on quality inventory or a
              brand looking for a true digital partner — let&apos;s build something
              that sells.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="mailto:hello@peterpartner.co.th"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-base transition-all duration-300 shadow-lg shadow-purple-900/40"
              >
                <Mail size={18} />
                Email Us
                <ArrowRight size={16} />
              </a>
              <a
                href="https://line.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-gray-700 hover:border-purple-500 text-gray-300 hover:text-white font-semibold text-base transition-all duration-300"
              >
                <MessageSquare size={18} />
                Message on LINE
              </a>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              {[
                { value: "1M+ THB", label: "Monthly GMV Goal" },
                { value: "TikTok #2", label: "Platform in Thailand" },
                { value: "Full", label: "Digital Ownership" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-xl font-bold gradient-text">{s.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
