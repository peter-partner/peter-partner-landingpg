"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Problem", href: "#problem" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Vision", href: "#vision" },
  { label: "Market", href: "#market" },
  { label: "Revenue", href: "#revenue" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#08080f]/80 border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            <span className="gradient-text">Peter</span>
            <span className="text-white"> Partner</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-colors duration-200"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#10101a] border-t border-purple-900/30 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-sm px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-center transition-colors"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
