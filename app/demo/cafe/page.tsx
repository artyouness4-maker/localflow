import Link from "next/link";

const drinks = [
  { name: "Espresso", price: "2,50 €" },
  { name: "Cappuccino", price: "4,50 €" },
  { name: "Latte vanille", price: "5,20 €" },
  { name: "Cold brew", price: "5,50 €" },
];

export default function CafeDemoPage() {
  return (
    <main className="min-h-screen bg-[#f3eadc] text-[#2e2118]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f3eadc]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="text-sm font-semibold text-black/55">
            ← Retour à LocalFlow
          </Link>

          <div className="text-center">
            <p className="text-2xl font-bold">Coffee Corner</p>
            <p className="text-[10px] uppercase tracking-[0.28em] text-black/40">
              Specialty coffee
            </p>
          </div>

          <a
            href="#carte"
            className="rounded-full bg-[#5d3a24] px-5 py-3 text-sm font-semibold text-white"
          >
            Voir la carte
          </a>
        </div>
      </header>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5b35]">
              Café de spécialité
            </p>

            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl">
              Le bon café, au bon moment.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-black/55">
              Cafés de spécialité, pâtisseries artisanales et une ambiance
              chaleureuse pour travailler, discuter ou simplement faire une
              pause.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#carte"
                className="rounded-full bg-[#5d3a24] px-7 py-4 text-center font-semibold text-white"
              >
                Découvrir la carte
              </a>

              <a
                href="#adresse"
                className="rounded-full border border-black/15 px-7 py-4 text-center font-semibold"
              >
                Nous trouver
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-5 text-sm text-black/50">
              <span>★ 4,9/5</span>
              <span>Wi-Fi gratuit</span>
              <span>Ouvert dès 7 h 30</span>
            </div>
          </div>

          <div className="relative min-h-[560px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#4c2e1f] via-[#9a6136] to-[#e3b276] p-8">
            <div className="absolute right-8 top-8 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold">
              Torréfié localement
            </div>

            <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f4eadc] shadow-2xl">
              <div className="absolute inset-8 rounded-full bg-[#6f4229]" />
              <div className="absolute left-1/2 top-1/2 h-20 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dfb780]" />
              <div className="absolute inset-x-6 bottom-[-110px] rounded-3xl bg-white/90 p-5">
                <p className="text-sm text-black/45">Boisson signature</p>
                <p className="mt-1 text-xl font-bold">Latte noisette</p>
                <p className="mt-2 font-semibold text-[#5d3a24]">5,20 €</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="carte"
        className="border-y border-black/10 bg-[#ead9c4] px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5b35]">
              Notre carte
            </p>

            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Des boissons préparées avec soin
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {drinks.map((drink) => (
              <article
                key={drink.name}
                className="rounded-3xl border border-black/10 bg-white/55 p-7"
              >
                <div className="flex items-center justify-between gap-6">
                  <h3 className="text-xl font-semibold">{drink.name}</h3>
                  <p className="text-lg font-bold text-[#5d3a24]">
                    {drink.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2.5rem] bg-[#5d3a24] p-10 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
              Notre ambiance
            </p>

            <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
              Un lieu pensé pour ralentir
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              Une lumière douce, des matières naturelles et du café fraîchement
              moulu toute la journée.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="min-h-64 rounded-[2rem] bg-gradient-to-br from-[#7c4e2e] to-[#d7a873]" />
            <div className="min-h-64 rounded-[2rem] bg-gradient-to-br from-[#b78559] to-[#f0d8b9]" />
            <div className="col-span-2 min-h-56 rounded-[2rem] bg-gradient-to-br from-[#3f2c20] to-[#95633e]" />
          </div>
        </div>
      </section>

      <section
        id="adresse"
        className="border-t border-black/10 bg-[#2e2118] px-6 py-20 text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d7aa7a]">
              Venez nous voir
            </p>

            <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
              Votre prochain café vous attend
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-white/60">
              Sur place ou à emporter, passez nous voir toute la semaine.
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/60">
              <p>8 rue du Marché, Bordeaux</p>
              <p>05 56 00 00 00</p>
              <p>bonjour@coffeecorner.fr</p>
              <p>Lun–Sam : 7 h 30 – 19 h</p>
            </div>
          </div>

          <div className="min-h-80 rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="flex h-full min-h-64 items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/[0.04] text-center text-white/45">
              Emplacement Google Maps
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-black/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Coffee Corner — Exemple LocalFlow.</p>
          <Link href="/" className="font-semibold text-[#5d3a24]">
            Créé par LocalFlow
          </Link>
        </div>
      </footer>
    </main>
  );
}