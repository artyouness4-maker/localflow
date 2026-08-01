const businesses = [
  {
    icon: "🍽️",
    title: "Restaurants",
    description:
      "Présentez votre menu, votre ambiance et facilitez les réservations.",
  },
  {
    icon: "☕",
    title: "Cafés",
    description:
      "Mettez en avant vos produits, vos horaires et votre univers.",
  },
  {
    icon: "✂️",
    title: "Coiffeurs",
    description:
      "Présentez vos prestations et simplifiez la prise de rendez-vous.",
  },
  {
    icon: "🌿",
    title: "Spas et instituts",
    description:
      "Créez une image élégante qui reflète la qualité de vos soins.",
  },
  {
    icon: "🛍️",
    title: "Boutiques",
    description:
      "Valorisez vos produits, vos nouveautés et votre emplacement.",
  },
  {
    icon: "🛠️",
    title: "Artisans",
    description:
      "Montrez votre savoir-faire et recevez davantage de demandes de devis.",
  },
];

export default function Businesses() {
  return (
    <section className="border-y border-white/10 bg-[#091512] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Pour tous les commerces locaux
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Un site adapté à votre activité
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/60">
            Chaque commerce est différent. Nous créons une présence en ligne
            pensée pour vos clients, vos objectifs et votre image.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {businesses.map((business) => (
            <article
              key={business.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.05]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-2xl transition group-hover:scale-105">
                {business.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {business.title}
              </h3>

              <p className="mt-3 leading-7 text-white/55">
                {business.description}
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition hover:gap-3"
              >
                Découvrir
                <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}