const steps = [
  {
    number: "01",
    title: "Découverte du projet",
    description:
      "Nous discutons de votre activité, de vos objectifs, de vos clients et du style que vous souhaitez.",
    duration: "30 à 45 min",
  },
  {
    number: "02",
    title: "Maquette et direction visuelle",
    description:
      "Nous préparons la structure du site, les couleurs, les textes principaux et une première proposition visuelle.",
    duration: "2 à 4 jours",
  },
  {
    number: "03",
    title: "Création du site",
    description:
      "Nous développons un site rapide, responsive et adapté aux téléphones, tablettes et ordinateurs.",
    duration: "5 à 10 jours",
  },
  {
    number: "04",
    title: "Validation et mise en ligne",
    description:
      "Après vos retours, nous finalisons les derniers détails, connectons le domaine et mettons le site en ligne.",
    duration: "1 à 2 jours",
  },
];

export default function Process() {
  return (
    <section id="methode" className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Notre méthode
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
              Un processus simple, clair et sans stress
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              Vous savez toujours où en est votre projet. Chaque étape est
              organisée pour avancer rapidement sans sacrifier la qualité.
            </p>

            <div className="mt-8 rounded-[2rem] border border-emerald-400/20 bg-emerald-400/[0.06] p-6">
              <p className="text-sm font-semibold text-emerald-300">
                Un seul interlocuteur
              </p>

              <p className="mt-3 leading-7 text-white/60">
                Vous échangez directement avec la personne qui conçoit votre
                site. Pas d’intermédiaire, pas de communication compliquée.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-emerald-400/35 hover:bg-white/[0.05] sm:p-8"
              >
                <div className="grid gap-6 sm:grid-cols-[auto_1fr_auto] sm:items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 font-semibold text-emerald-300">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">{step.title}</h3>

                    <p className="mt-3 max-w-2xl leading-7 text-white/55">
                      {step.description}
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/55">
                    {step.duration}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute bottom-0 left-[3.45rem] hidden h-5 w-px translate-y-full bg-white/10 sm:block" />
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-5 rounded-[2rem] border border-white/10 bg-[#091512] p-7 sm:grid-cols-3 sm:p-9">
          <div>
            <p className="text-3xl font-bold text-emerald-400">100 %</p>
            <p className="mt-2 text-sm text-white/55">
              adapté aux mobiles
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-emerald-400">7 à 14 jours</p>
            <p className="mt-2 text-sm text-white/55">
              pour une livraison moyenne
            </p>
          </div>

          <div>
            <p className="text-3xl font-bold text-emerald-400">1 interlocuteur</p>
            <p className="mt-2 text-sm text-white/55">
              du début à la mise en ligne
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}