import Link from "next/link";

const services = [
  { name: "Coupe femme", price: "45 €" },
  { name: "Coupe homme", price: "28 €" },
  { name: "Coloration", price: "65 €" },
  { name: "Brushing", price: "30 €" },
];

export default function CoiffeurDemoPage() {
  return (
    <main className="min-h-screen bg-[#f7f2f6] text-[#241b23]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f2f6]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="text-sm font-semibold text-black/55">
            ← Retour à LocalFlow
          </Link>

          <div className="text-center">
            <p className="text-2xl font-bold">Studio Élégance</p>
            <p className="text-[10px] uppercase tracking-[0.28em] text-black/40">
              Coiffure & beauté
            </p>
          </div>

          <a
            href="#rendez-vous"
            className="rounded-full bg-[#6f3d68] px-5 py-3 text-sm font-semibold text-white"
          >
            Prendre rendez-vous
          </a>
        </div>
      </header>

      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8a4f80]">
              Salon de coiffure premium
            </p>

            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl">
              Une coiffure qui révèle votre style.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-black/55">
              Coupes, colorations et soins dans un salon élégant, chaleureux et
              attentif à chaque détail.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#rendez-vous"
                className="rounded-full bg-[#6f3d68] px-7 py-4 text-center font-semibold text-white"
              >
                Réserver un créneau
              </a>

              <a
                href="#prestations"
                className="rounded-full border border-black/15 px-7 py-4 text-center font-semibold"
              >
                Voir les prestations
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-5 text-sm text-black/50">
              <span>★ 4,8/5</span>
              <span>Conseils personnalisés</span>
              <span>Produits professionnels</span>
            </div>
          </div>

          <div className="relative min-h-[560px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#6e3c67] via-[#a56c9d] to-[#e6c8de] p-8">
            <div className="absolute left-8 top-8 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold">
              Nouvelle collection
            </div>

            <div className="absolute left-1/2 top-1/2 h-72 w-56 -translate-x-1/2 -translate-y-1/2 rounded-[8rem_8rem_3rem_3rem] bg-[#31212e] shadow-2xl">
              <div className="absolute left-1/2 top-10 h-28 w-28 -translate-x-1/2 rounded-full bg-[#d8aa93]" />
              <div className="absolute left-1/2 top-4 h-36 w-36 -translate-x-1/2 rounded-full border-[18px] border-[#4f304b]" />
              <div className="absolute inset-x-7 bottom-7 rounded-3xl bg-white/90 p-5">
                <p className="text-sm text-black/45">Forfait signature</p>
                <p className="mt-1 text-xl font-bold">Coupe + soin</p>
                <p className="mt-2 font-semibold text-[#6f3d68]">À partir de 59 €</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="prestations"
        className="border-y border-black/10 bg-white/55 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8a4f80]">
              Nos prestations
            </p>

            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Des services adaptés à chaque envie
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.name}
                className="rounded-3xl border border-black/10 bg-white p-7"
              >
                <div className="flex items-center justify-between gap-6">
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                  <p className="text-lg font-bold text-[#6f3d68]">
                    {service.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="min-h-72 rounded-[2rem] bg-gradient-to-br from-[#5c3156] to-[#d5a7cb]" />
          <div className="min-h-72 rounded-[2rem] bg-gradient-to-br from-[#d8b6cf] to-[#f2e4ee]" />
          <div className="min-h-72 rounded-[2rem] bg-gradient-to-br from-[#7a4c73] to-[#c590bc]" />
        </div>
      </section>

      <section
        id="rendez-vous"
        className="border-t border-black/10 bg-[#2d202b] px-6 py-20 text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d6a9ce]">
              Prendre rendez-vous
            </p>

            <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">
              Réservez votre prochain moment beauté
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-white/60">
              Choisissez votre prestation et votre créneau. Le salon vous
              confirmera rapidement votre rendez-vous.
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/60">
              <p>24 avenue de la Beauté, Lyon</p>
              <p>04 72 00 00 00</p>
              <p>contact@studio-elegance.fr</p>
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
            <select className="rounded-2xl border border-white/10 bg-[#3a2b37] px-4 py-4 outline-none">
              <option>Choisir une prestation</option>
              <option>Coupe femme</option>
              <option>Coupe homme</option>
              <option>Coloration</option>
              <option>Brushing</option>
            </select>
            <input
              type="date"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none"
            />

            <button
              type="button"
              className="rounded-full bg-[#c68abb] px-6 py-4 font-semibold text-[#2d202b] sm:col-span-2"
            >
              Envoyer ma demande
            </button>
          </form>
        </div>
      </section>

      <footer className="px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-black/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Studio Élégance — Exemple LocalFlow.</p>
          <Link href="/" className="font-semibold text-[#6f3d68]">
            Créé par LocalFlow
          </Link>
        </div>
      </footer>
    </main>
  );
}