const projects = [
  {
    category: "Restaurant italien",
    title: "Bella Napoli",
    description:
      "Un site chaleureux avec menu, réservation, galerie photo et localisation.",
    features: ["Menu en ligne", "Réservation", "Google Maps"],
    visual: "from-red-950 via-red-700 to-orange-300",
  },
  {
    category: "Salon de coiffure",
    title: "Studio Élégance",
    description:
      "Un site moderne avec prestations, tarifs, galerie et prise de rendez-vous.",
    features: ["Prestations", "Rendez-vous", "Galerie"],
    visual: "from-fuchsia-950 via-violet-700 to-pink-300",
  },
  {
    category: "Café",
    title: "Coffee Corner",
    description:
      "Une présence en ligne simple pour présenter les boissons, les horaires et l’ambiance.",
    features: ["Carte des boissons", "Horaires", "Réseaux sociaux"],
    visual: "from-amber-950 via-yellow-800 to-orange-300",
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
              Des modèles adaptés à différents commerces
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-white/60">
            Ces exemples illustrent le style de sites que nous pouvons créer et
            personnaliser selon votre activité, vos couleurs et vos besoins.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40"
            >
              <div className="p-4">
                <div
                  className={`relative min-h-[330px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${project.visual}`}
                >
                  <div className="absolute inset-x-5 top-5 flex items-center justify-between rounded-full border border-white/20 bg-black/20 px-4 py-3 backdrop-blur">
                    <span className="text-sm font-semibold text-white">
                      {project.title}
                    </span>

                    <span className="text-xs text-white/70">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-white/20 bg-black/30 p-5 backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                      Exemple de design
                    </p>

                    <p className="mt-2 text-2xl font-bold text-white">
                      Un site moderne et prêt à être personnalisé
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-7 pb-8 pt-3">
                <p className="text-sm font-semibold text-emerald-400">
                  {project.category}
                </p>

                <h3 className="mt-2 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-white/55">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/65"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-white transition group-hover:text-emerald-400"
                >
                  Créer un site similaire
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-6 text-white/40">
          Les noms et contenus présentés sont des exemples fictifs utilisés pour
          illustrer les types de sites proposés par LocalFlow.
        </p>
      </div>
    </section>
  );
}