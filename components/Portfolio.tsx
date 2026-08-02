const projects = [
  {
    category: "Restaurant italien",
    title: "Bella Napoli",
    description:
      "Un site chaleureux avec menu, réservation, galerie photo et localisation.",
    features: ["Menu en ligne", "Réservation", "Google Maps"],
    visual: "from-red-950 via-red-700 to-orange-300",
    href: "/demo/restaurant",
  },
  {
    category: "Salon de coiffure",
    title: "Studio Élégance",
    description:
      "Un site moderne avec prestations, tarifs, galerie et prise de rendez-vous.",
    features: ["Prestations", "Rendez-vous", "Galerie"],
    visual: "from-fuchsia-950 via-violet-700 to-pink-300",
    href: "/demo/coiffeur",
  },
  {
    category: "Café",
    title: "Coffee Corner",
    description:
      "Une présence en ligne simple pour présenter les boissons, les horaires et l’ambiance.",
    features: ["Carte", "Horaires", "Réseaux sociaux"],
    visual: "from-amber-950 via-yellow-800 to-orange-300",
    href: "/demo/cafe",
  },
];

export default function Portfolio() {
  return (
    <section
      id="realisations"
      className="border-y border-white/10 bg-[#091512] px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Exemples de designs
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Découvrez nos démonstrations
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-white/60">
            Cliquez sur un modèle pour découvrir un exemple complet de site web.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-emerald-400/40"
            >
              <div className="p-4">
                <div
                  className={`relative min-h-[330px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${project.visual}`}
                >
                  <div className="absolute inset-x-5 top-5 flex items-center justify-between rounded-full border border-white/20 bg-black/20 px-4 py-3 backdrop-blur">
                    <span className="font-semibold text-white">
                      {project.title}
                    </span>

                    <span className="text-xs text-white/70">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-white/20 bg-black/30 p-5 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                      Démonstration
                    </p>

                    <p className="mt-2 text-2xl font-bold text-white">
                      Cliquez pour visiter
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-7 pb-8">
                <p className="text-sm font-semibold text-emerald-400">
                  {project.category}
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-white/55">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/60"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 font-semibold text-emerald-400">
                  Voir la démo →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}