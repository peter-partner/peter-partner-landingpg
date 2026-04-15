export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#08080f] border-t border-gray-800/60 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span className="font-bold text-base">
            <span className="gradient-text">Peter</span>
            <span className="text-white"> Partner</span>
          </span>
          <span className="text-gray-700">|</span>
          <span>Thailand&apos;s Premier Brand-Maker</span>
        </div>

        <nav className="flex items-center gap-6">
          {["#problem", "#what-we-do", "#vision", "#market", "#revenue", "#team"].map((href) => {
            const label = href.replace("#", "").replace(/-/g, " ");
            return (
              <a
                key={href}
                href={href}
                className="capitalize hover:text-white transition-colors"
              >
                {label}
              </a>
            );
          })}
        </nav>

        <p>&copy; {year} Peter Partner. All rights reserved.</p>
      </div>
    </footer>
  );
}
