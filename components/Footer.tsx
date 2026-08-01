const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Méthode", href: "#methode" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050c0a] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a href="#" className="text-2xl font-bold tracking-tight">
              Local<span className="text-emerald-400">Flow</span>
            </a>

            <p className="mt-4 max-w-md leading-7 text-white/50">
              Création de landing pages et de sites vitrines professionnels
              pour les commerces locaux.
            </p>

            <a
              href="mailto:artyouness4@gmail.com"
              className="mt-5 inline-block font-medium text-emerald-400 transition hover:text-emerald-300"
            >
              artyouness4@gmail.com
            </a>
            <p className="mt-3 text-white/50">
               📞 +33 7 73 58 63 24
            </p>
          </div>
          

          <div>
            <p className="font-semibold">Navigation</p>

            <nav className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-white/50 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-semibold">Nos spécialités</p>

            <ul className="mt-5 space-y-3 text-sm text-white/50">
              <li>Landing pages</li>
              <li>Sites vitrines</li>
              <li>Menus numériques</li>
              <li>Réservations en ligne</li>
              <li>Refonte de sites</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 LocalFlow. Tous droits réservés.</p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-white">
              Mentions légales
            </a>

            <a href="#" className="transition hover:text-white">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}