const navigation = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Méthode", href: "#methode" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Landing page",
  "Site vitrine",
  "Site sur mesure",
  "Refonte de site",
  "Maintenance",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050d0b] px-6">
      <div className="mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <a href="#" className="text-2xl font-bold tracking-tight">
              Local<span className="text-emerald-400">Flow</span>
            </a>

            <p className="mt-5 max-w-md leading-7 text-white/50">
              Nous créons des sites modernes et professionnels pour aider les
              commerces locaux à présenter leur activité et attirer davantage
              de clients.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex rounded-full bg-emerald-400 px-6 py-3 font-semibold text-[#07110f] transition hover:bg-emerald-300"
            >
              Demander un devis
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-white">Navigation</h3>

            <nav className="mt-5 flex flex-col gap-3">
              {navigation.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-white/50 transition hover:text-emerald-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-white">Services</h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-white/50">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-10 h-px bg-white/10" />

        <div className="flex flex-col justify-between gap-5 text-sm text-white/35 sm:flex-row sm:items-center">
          <p>© 2026 LocalFlow. Tous droits réservés.</p>

          <div className="flex flex-wrap gap-6">
            <a href="#" className="transition hover:text-white/70">
              Mentions légales
            </a>

            <a href="#" className="transition hover:text-white/70">
              Politique de confidentialité
            </a>

            <a href="#" className="transition hover:text-white/70">
              Conditions générales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}