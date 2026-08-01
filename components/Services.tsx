const services = [
  {
    number: "01",
    title: "Landing page",
    description:
      "Une page claire et persuasive pour présenter votre activité et transformer les visiteurs en clients.",
    features: [
      "Design personnalisé",
      "Compatible mobile",
      "Formulaire de contact",
    ],
  },
  {
    number: "02",
    title: "Site vitrine",
    description:
      "Un site complet pour présenter votre entreprise, vos services, votre équipe et vos coordonnées.",
    features: [
      "Plusieurs pages",
      "Navigation professionnelle",
      "Optimisation SEO",
    ],
  },
  {
    number: "03",
    title: "Menu numérique",
    description:
      "Un menu moderne accessible depuis un téléphone ou un QR code dans votre établissement.",
    features: [
      "Catégories organisées",
      "Prix faciles à modifier",
      "Accès par QR code",
    ],
  },
  {
    number: "04",
    title: "Réservation en ligne",
    description:
      "Permettez à vos clients de réserver une table, un rendez-vous ou une prestation simplement.",
    features: [
      "Réservation simplifiée",
      "Disponibilités visibles",
      "Confirmation automatique",
    ],
  },
  {
    number: "05",
    title: "Refonte de site",
    description:
      "Modernisez un ancien site pour améliorer son apparence, sa vitesse et son efficacité.",
    features: [
      "Nouveau design",
      "Meilleure version mobile",
      "Contenu réorganisé",
    ],
  },
  {
    number: "06",
    title: "Maintenance",
    description:
      "Gardez votre site à jour, sécurisé et performant grâce à un accompagnement régulier.",
    features: [
      "Mises à jour",
      "Corrections techniques",
      "Assistance continue",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Nos services
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Tout ce qu’il faut pour développer votre présence en ligne
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-white/60 lg:justify-self-end">
            Nous créons des sites rapides, modernes et pensés pour vos
            objectifs : attirer de nouveaux clients, présenter vos services et
            recevoir plus de demandes.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.05]"
            >
              <span className="absolute right-6 top-4 text-6xl font-bold text-white/[0.04] transition group-hover:text-emerald-400/10">
                {service.number}
              </span>

              <div className="relative">
                <p className="text-sm font-semibold text-emerald-400">
                  {service.number}
                </p>

                <h3 className="mt-5 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-white/55">
                  {service.description}
                </p>

                <ul className="mt-7 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-white/70"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/10 text-xs text-emerald-400">
                        ✓
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition hover:gap-3"
                >
                  En savoir plus
                  <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}