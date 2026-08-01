export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Agence web pour commerces locaux
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Un site professionnel qui transforme vos visiteurs en
            <span className="text-emerald-400"> clients.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
            Nous créons des landing pages et des sites vitrines modernes pour
            les restaurants, cafés, spas, salons, boutiques et artisans.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-emerald-400 px-7 py-4 text-center font-semibold text-[#07110f] transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Créer mon site
            </a>

            <a
              href="#realisations"
              className="rounded-full border border-white/15 px-7 py-4 text-center font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/5"
            >
              Voir nos réalisations
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 text-sm text-white/55 sm:grid-cols-3">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              Design sur mesure
            </div>

            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              Compatible mobile
            </div>

            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              Livraison rapide
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl">
            <div className="overflow-hidden rounded-[1.5rem] bg-[#f4ecdf] text-[#201d19]">
              <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
                <div>
                  <p className="font-serif text-xl font-bold">Bella Vita</p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-black/45">
                    Ristorante italiano
                  </p>
                </div>

                <div className="hidden items-center gap-4 text-xs font-medium sm:flex">
                  <span>Accueil</span>
                  <span>Menu</span>
                  <span>À propos</span>
                  <span>Contact</span>
                </div>

                <button className="rounded-full bg-[#7c241b] px-4 py-2 text-xs font-semibold text-white">
                  Réserver
                </button>
              </div>

              <div className="grid gap-5 p-5 sm:grid-cols-[1.05fr_0.95fr]">
                <div className="flex flex-col justify-center py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9c392c]">
                    Cuisine italienne authentique
                  </p>

                  <h2 className="mt-4 font-serif text-4xl font-bold leading-[1.05] sm:text-5xl">
                    L’Italie dans votre assiette.
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-black/60">
                    Pâtes fraîches, pizzas au feu de bois et recettes
                    traditionnelles préparées avec des produits sélectionnés.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button className="rounded-full bg-[#7c241b] px-5 py-3 text-sm font-semibold text-white">
                      Réserver une table
                    </button>

                    <button className="rounded-full border border-black/15 px-5 py-3 text-sm font-semibold">
                      Voir le menu
                    </button>
                  </div>

                  <div className="mt-6 flex items-center gap-4 text-xs text-black/50">
                    <span>★ 4,9/5</span>
                    <span>•</span>
                    <span>Paris 11e</span>
                    <span>•</span>
                    <span>Ouvert ce soir</span>
                  </div>
                </div>

                <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-[#8e392b]">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-orange-200/40" />

                  <div className="absolute left-6 top-6 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold">
                    Menu du chef
                  </div>

                  <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border-[14px] border-[#f5eee5] bg-[#d79a58] shadow-2xl">
                    <div className="absolute inset-5 rounded-full bg-[#c94d2f]" />
                    <div className="absolute left-1/2 top-1/2 h-16 w-28 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-full bg-[#f5d98d]" />
                    <div className="absolute left-12 top-16 h-4 w-4 rounded-full bg-[#335c36]" />
                    <div className="absolute bottom-14 right-12 h-4 w-4 rounded-full bg-[#335c36]" />
                    <div className="absolute right-16 top-12 h-3 w-3 rounded-full bg-[#f5eee5]" />
                  </div>

                  <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/90 p-4 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-serif text-lg font-bold">
                          Tagliatelle maison
                        </p>
                        <p className="mt-1 text-xs text-black/50">
                          Tomate, basilic, parmesan
                        </p>
                      </div>

                      <p className="text-lg font-bold text-[#7c241b]">18 €</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 border-t border-black/10 bg-white/35">
                <div className="p-4 text-center">
                  <p className="text-lg font-bold">12+</p>
                  <p className="text-[10px] uppercase tracking-wider text-black/45">
                    Plats maison
                  </p>
                </div>

                <div className="border-x border-black/10 p-4 text-center">
                  <p className="text-lg font-bold">4,9</p>
                  <p className="text-[10px] uppercase tracking-wider text-black/45">
                    Avis clients
                  </p>
                </div>

                <div className="p-4 text-center">
                  <p className="text-lg font-bold">7j/7</p>
                  <p className="text-[10px] uppercase tracking-wider text-black/45">
                    Réservation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-4 rounded-2xl border border-white/10 bg-[#0d1916] px-5 py-4 shadow-xl">
            <p className="text-xs text-white/50">Site optimisé</p>
            <p className="mt-1 font-semibold text-white">
              Mobile • SEO • Réservation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}