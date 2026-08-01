const offers = [
  {
    name: "Landing page",
    price: "39 €",
    description:
      "Pour présenter une offre, un service ou un commerce avec une page claire et professionnelle.",
    features: [
      "1 page complète",
      "Design personnalisé",
      "Version mobile",
      "Formulaire de contact",
      "Optimisation de base",
    ],
    highlighted: false,
  },
  {
    name: "Site vitrine",
    price: "79 €",
    description:
      "Pour présenter votre activité de manière complète avec plusieurs sections ou pages.",
    features: [
      "Jusqu’à 5 pages",
      "Design sur mesure",
      "Version mobile",
      "Formulaire de devis",
      "SEO de base",
      "Mise en ligne incluse",
    ],
    highlighted: true,
  },
  {
    name: "Projet sur mesure",
    price: "Sur devis",
    description:
      "Pour les projets avec réservation, menu numérique, catalogue ou fonctionnalités spécifiques.",
    features: [
      "Fonctionnalités personnalisées",
      "Nombre de pages adapté",
      "Réservation ou rendez-vous",
      "Accompagnement complet",
      "Maintenance disponible",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="tarifs"
      className="border-y border-white/10 bg-[#091512] px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Nos tarifs
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Des offres simples et transparentes
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/60">
            Chaque projet peut être ajusté selon vos besoins, votre activité et
            les fonctionnalités souhaitées.
          </p>
        </div>

        <div className="mt-16 grid gap-7 lg:grid-cols-3 lg:items-stretch">
          {offers.map((offer) => (
            <article
              key={offer.name}
              className={`relative flex flex-col rounded-[2rem] border p-8 transition duration-300 hover:-translate-y-1 ${
                offer.highlighted
                  ? "border-emerald-400/50 bg-emerald-400/[0.08] shadow-[0_0_50px_rgba(52,211,153,0.08)]"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20"
              }`}
            >
              {offer.highlighted && (
                <span className="absolute right-6 top-6 rounded-full bg-emerald-400 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#07110f]">
                  Le plus choisi
                </span>
              )}

              <div>
                <p
                  className={`text-sm font-semibold uppercase tracking-[0.18em] ${
                    offer.highlighted
                      ? "text-emerald-300"
                      : "text-white/50"
                  }`}
                >
                  {offer.name}
                </p>

                <div className="mt-6 flex items-end gap-2">
                  <p className="text-4xl font-bold sm:text-5xl">
                    {offer.price}
                  </p>

                  {offer.price !== "Sur devis" && (
                    <span className="pb-1 text-sm text-white/45">
                      à partir de
                    </span>
                  )}
                </div>

                <p className="mt-5 leading-7 text-white/55">
                  {offer.description}
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {offer.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-white/70"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${
                        offer.highlighted
                          ? "bg-emerald-400 text-[#07110f]"
                          : "bg-emerald-400/10 text-emerald-400"
                      }`}
                    >
                      ✓
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-10 rounded-full px-6 py-4 text-center font-semibold transition ${
                  offer.highlighted
                    ? "bg-emerald-400 text-[#07110f] hover:bg-emerald-300"
                    : "border border-white/15 text-white hover:bg-white/5"
                }`}
              >
                {offer.name === "Projet sur mesure"
                  ? "Parler de mon projet"
                  : "Choisir cette offre"}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-center">
          <p className="text-sm leading-7 text-white/55">
            Les tarifs peuvent varier selon le contenu, le nombre de pages et
            les fonctionnalités. Un devis précis est envoyé avant le début du
            projet.
          </p>
        </div>
      </div>
    </section>
  );
}