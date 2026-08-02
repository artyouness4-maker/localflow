import Link from "next/link";

const menuItems = [
  {
    name: "Burrata des Pouilles",
    description: "Tomates anciennes, pesto maison et basilic frais.",
    price: "13 €",
  },
  {
    name: "Tagliatelle al ragù",
    description: "Pâtes fraîches, bœuf mijoté et parmesan affiné.",
    price: "19 €",
  },
  {
    name: "Pizza Bella Napoli",
    description: "Tomate, fior di latte, jambon cru et roquette.",
    price: "17 €",
  },
  {
    name: "Tiramisù maison",
    description: "Mascarpone, café espresso et cacao.",
    price: "8 €",
  },
];

const reviews = [
  {
    name: "Sophie M.",
    text: "Une vraie belle adresse. Les pâtes sont excellentes et le service très chaleureux.",
  },
  {
    name: "Thomas R.",
    text: "Très belle ambiance, produits frais et réservation simple depuis le site.",
  },
  {
    name: "Nadia L.",
    text: "La pizza est délicieuse. Nous reviendrons sans hésiter.",
  },
];

export default function RestaurantDemoPage() {
  return (
    <main className="min-h-screen bg-[#f4eadc] text-[#241811]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4eadc]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="text-sm font-semibold text-black/60">
            ← Retour à LocalFlow
          </Link>

          <div className="text-center">
            <p className="font-serif text-2xl font-bold">Bella Napoli</p>
            <p className="text-[10px] uppercase tracking-[0.28em] text-black/45">
              Ristorante italiano
            </p>
          </div>

          <a
            href="#reservation"
            className="rounded-full bg-[#8d2f24] px-5 py-3 text-sm font-semibold text-white"
          >
            Réserver
          </a>
        </div>
      </header>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9c3d2d]">
              Cuisine italienne authentique
            </p>

            <h1 className="mt-5 max-w-3xl font-serif text-5xl font-bold leading-[0.98] sm:text-7xl">
              Le goût de l’Italie, au cœur de votre ville.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-black/60">
              Pâtes fraîches, pizzas au feu de bois et recettes familiales
              préparées chaque jour avec des produits sélectionnés.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#reservation"
                className="rounded-full bg-[#8d2f24] px-7 py-4 text-center font-semibold text-white"
              >
                Réserver une table
              </a>

              <a
                href="#menu"
                className="rounded-full border border-black/15 px-7 py-4 text-center font-semibold"
              >
                Découvrir le menu
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-5 text-sm text-black/55">
              <span>★ 4,9/5</span>
              <span>Paris 11e</span>
              <span>Ouvert 7j/7</span>
            </div>
          </div>

          <div className="relative min-h-[560px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#7d241c] via-[#bc5a3d] to-[#e7af72] p-8">
            <div className="absolute left-10 top-10 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold">
              Plat signature
            </div>

            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border-[18px] border-[#f8efe3] bg-[#d69b57] shadow-2xl">
              <div className="absolute inset-7 rounded-full bg-[#c9492d]" />
              <div className="absolute left-1/2 top-1/2 h-20 w-40 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-full bg-[#f4d98e]" />
              <div className="absolute left-16 top-20 h-5 w-5 rounded-full bg-[#315d36]" />
              <div className="absolute bottom-20 right-16 h-5 w-5 rounded-full bg-[#315d36]" />
              <div className="absolute right-20 top-16 h-4 w-4 rounded-full bg-[#f8efe3]" />
            </div>

            <div className="absolute inset-x-8 bottom-8 rounded-3xl bg-white/90 p-6">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="font-serif text-2xl font-bold">
                    Tagliatelle maison
                  </p>
                  <p className="mt-2 text-sm text-black/50">
                    Tomate, basilic, parmesan
                  </p>
                </div>

                <p className="text-2xl font-bold text-[#8d2f24]">19 €</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="border-y border-black/10 bg-[#efe0cf] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9c3d2d]">
              Notre carte
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
              Des recettes simples, généreuses et faites maison
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {menuItems.map((item) => (
              <article
                key={item.name}
                className="rounded-3xl border border-black/10 bg-white/45 p-7"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="font-serif text-2xl font-bold">{item.name}</h3>
                    <p className="mt-3 leading-7 text-black/55">
                      {item.description}
                    </p>
                  </div>

                  <p className="shrink-0 text-xl font-bold text-[#8d2f24]">
                    {item.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="rounded-[2.5rem] bg-[#2f5b3c] p-10 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/65">
              Notre histoire
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold sm:text-5xl">
              Une cuisine inspirée par les repas de famille
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Bella Napoli est née d’une envie simple : partager une cuisine
              italienne sincère, conviviale et accessible, dans une ambiance
              chaleureuse.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="min-h-64 rounded-[2rem] bg-gradient-to-br from-[#c66a45] to-[#f0bd82]" />
            <div className="min-h-64 rounded-[2rem] bg-gradient-to-br from-[#375c42] to-[#9bb47d]" />
            <div className="col-span-2 min-h-56 rounded-[2rem] bg-gradient-to-br from-[#8e352a] to-[#de8d5d]" />
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#efe0cf] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9c3d2d]">
              Avis clients
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
              Ils parlent de leur expérience
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-3xl border border-black/10 bg-white/50 p-7"
              >
                <p className="text-[#b26a24]">★★★★★</p>
                <p className="mt-5 leading-7 text-black/65">“{review.text}”</p>
                <p className="mt-6 font-semibold">{review.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reservation" className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] bg-[#241811] p-8 text-white sm:p-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e8a16e]">
              Réservation
            </p>

            <h2 className="mt-5 font-serif text-4xl font-bold sm:text-5xl">
              Réservez votre table
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-white/60">
              Choisissez votre date, l’heure et le nombre de personnes. Notre
              équipe vous confirmera la réservation.
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/60">
              <p>12 rue des Saveurs, Paris 11e</p>
              <p>01 42 00 00 00</p>
              <p>contact@bellanapoli.fr</p>
            </div>
          </div>

          <form className="grid gap-5 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Nom"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none"
            />
            <input
              type="date"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none"
            />
            <input
              type="time"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none"
            />
            <select
              defaultValue=""
              className="rounded-2xl border border-white/10 bg-[#2d211b] px-4 py-4 outline-none sm:col-span-2"
            >
              <option value="" disabled>
                Nombre de personnes
              </option>
              <option>1 personne</option>
              <option>2 personnes</option>
              <option>3 personnes</option>
              <option>4 personnes</option>
              <option>5 personnes ou plus</option>
            </select>

            <button
              type="button"
              className="rounded-full bg-[#d36a45] px-6 py-4 font-semibold sm:col-span-2"
            >
              Envoyer la demande
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-black/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Bella Napoli — Exemple de design LocalFlow.</p>
          <Link href="/" className="font-semibold text-[#8d2f24]">
            Créé par LocalFlow
          </Link>
        </div>
      </footer>
    </main>
  );
}