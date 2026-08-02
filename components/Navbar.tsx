"use client";

import { useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Méthode", href: "#methode" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07110f]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#" className="text-2xl font-bold tracking-tight">
          Local<span className="text-emerald-400">Flow</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/65 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#realisations"
            className="rounded-full px-5 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/5 hover:text-white"
          >
            Voir nos projets
          </a>

          <a
            href="#contact"
            className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-[#07110f] transition hover:bg-emerald-300"
          >
            Demander un devis
          </a>
        </div>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
        >
          <span className="sr-only">Menu</span>

          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-current transition ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#07110f] px-6 py-6 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-full bg-emerald-400 px-5 py-4 text-center font-semibold text-[#07110f]"
            >
              Demander un devis
            </a>
            <a href="/avis">Avis</a>
          </nav>
        </div>
      )}
    </header>
    
  );
}