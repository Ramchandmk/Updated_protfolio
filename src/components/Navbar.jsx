
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#080e1b]/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-1 text-2xl font-extrabold tracking-tight"
        >
          <span className="text-blue-400 transition-transform duration-300 group-hover:-rotate-12">
            {"<"}
          </span>

          <span className="text-white">
            Ram<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Chand</span>
          </span>

          <span className="text-blue-400 transition-transform duration-300 group-hover:rotate-12">
            {"/>"}
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-300 transition hover:text-blue-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 md:block"
        >
          Let's Talk ↗
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col gap-5 px-6 py-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-300 transition hover:text-blue-400"
              >
                {link.name}
              </a>
            </li>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg bg-blue-500 px-5 py-3 text-center font-semibold text-white"
          >
            Let's Talk ↗
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
