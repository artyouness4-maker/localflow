const projects = [
  {
    category: "Restaurant",
    title: "Bella Vita",
    description:
      "Une landing page élégante pour présenter le menu, l’ambiance et faciliter les réservations.",
    features: ["Menu en ligne", "Réservation", "Version mobile"],
    visual:
      "from-red-950 via-red-700 to-orange-300",
  },
  {
    category: "Spa & bien-être",
    title: "Élégance Spa",
    description:
      "Un site calme et premium pour mettre en valeur les soins, les tarifs et la prise de rendez-vous.",
    features: ["Catalogue de soins", "Prise de rendez-vous", "Avis clients"],
    visual:
      "from-emerald-950 via-emerald-700 to-stone-300",
  },
  {
    category: "Artisan",
    title: "Maison Dupont",
    description:
      "Un site chaleureux pour présenter le savoir-faire, les réalisations et recevoir des demandes de devis.",
    features: ["Galerie de projets", "Présentation du métier", "Formulaire de devis"],
    visual:
      "from-amber-950 via-amber-700 to-yellow-300",
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
              Nos réalisations
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Des exemples conçus pour convaincre vos futurs clients
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-white/60">
            Chaque projet est pensé pour refléter l’identité du commerce,
            rassurer les visiteurs et les guider vers une action claire.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40"
            >
              <div className="relative p-4">
                <div
                  className={`relative min-h-[330px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${project.visual}`}
                >
                  <div className="absolute inset-x-5 top-5 flex items-center justify-between rounded-full border border-white/20 bg-black/20 px-4 py-3 backdrop-blur">
                    <span className="text-sm font-semibold text-white">
                      {project.title}
                    </span>

                    <span className="text-xs text-white/70">Menu</span>
                  </div>

                  <div className="absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-white/20 bg-black/30 p-5 backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                      {project.category}
                    </p>

                    <p className="mt-2 text-2xl font-bold text-white">
                      Une présence en ligne moderne
                    </p>

                    <div className="mt-4 h-2 w-24 rounded-full bg-white/50" />
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
                  Découvrir le projet
                  <span className="transition group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-7 py-4 font-semibold transition hover:border-emerald-400/40 hover:bg-white/5"
          >
            Discuter de votre projet
          </a>
        </div>
      </div>
    </section>
  );
}