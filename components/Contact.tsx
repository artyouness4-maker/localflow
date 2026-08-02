"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          business: formData.get("business"),
          project: formData.get("project"),
          budget: formData.get("budget"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "L’envoi a échoué.");
      }

      form.reset();
      setSent(true);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue pendant l’envoi.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#091512]">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative overflow-hidden border-b border-white/10 p-8 sm:p-12 lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 bg-emerald-400/[0.03]" />
              <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-[100px]" />

              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
                  Parlons de votre projet
                </p>

                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  Prêt à donner une vraie présence en ligne à votre commerce ?
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                  Expliquez-nous votre besoin. Nous vous répondrons avec une
                  proposition claire, adaptée à votre activité et à votre
                  budget.
                </p>

                <div className="mt-10 space-y-5">
                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
                      ✓
                    </span>

                    <div>
                      <p className="font-semibold">Réponse sous 24 à 48 h</p>
                      <p className="mt-1 text-sm leading-6 text-white/50">
                        Nous analysons votre demande avant de vous répondre.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
                      ✓
                    </span>

                    <div>
                      <p className="font-semibold">Devis gratuit</p>
                      <p className="mt-1 text-sm leading-6 text-white/50">
                        Aucun engagement avant la validation du projet.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
                      ✓
                    </span>

                    <div>
                      <p className="font-semibold">
                        Accompagnement personnalisé
                      </p>
                      <p className="mt-1 text-sm leading-6 text-white/50">
                        Une solution adaptée à vos objectifs et à vos clients.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 rounded-[2rem] border border-white/10 bg-black/10 p-6">
                  <p className="text-sm text-white/45">Email</p>

                  <a
                    href="mailto:artyouness4@gmail.com"
                    className="mt-2 inline-block break-all text-lg font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    artyouness4@gmail.com
                  </a>

                  <div className="mt-6">
                    <p className="text-sm text-white/45">Téléphone</p>

                    <a
                      href="tel:+33773586324"
                      className="mt-2 inline-block text-lg font-semibold text-emerald-400 hover:text-emerald-300"
                    >
                      +33 7 73 58 63 24
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-12">
              {sent ? (
                <div className="flex min-h-[600px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400 text-2xl font-bold text-[#07110f]">
                    ✓
                  </div>

                  <h3 className="mt-6 text-3xl font-bold">
                    Votre demande a bien été envoyée
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-white/55">
                    Nous avons reçu votre message et nous vous répondrons dans
                    les meilleurs délais.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setError("");
                    }}
                    className="mt-8 rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:bg-white/5"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <p className="text-2xl font-semibold">Demander un devis</p>

                    <p className="mt-2 text-sm leading-6 text-white/50">
                      Les champs marqués d’un astérisque sont obligatoires.
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium text-white/75">
                        Nom complet *
                      </span>

                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Votre nom"
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-emerald-400/50 focus:bg-white/[0.06]"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-white/75">
                        Email *
                      </span>

                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="vous@email.com"
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-emerald-400/50 focus:bg-white/[0.06]"
                      />
                    </label>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium text-white/75">
                        Type de commerce *
                      </span>

                      <select
                        name="business"
                        required
                        defaultValue=""
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0d1916] px-4 py-4 text-white outline-none transition focus:border-emerald-400/50"
                      >
                        <option value="" disabled>
                          Sélectionnez une activité
                        </option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Café">Café</option>
                        <option value="Salon de coiffure">
                          Salon de coiffure
                        </option>
                        <option value="Spa ou institut">
                          Spa ou institut
                        </option>
                        <option value="Boutique">Boutique</option>
                        <option value="Artisan">Artisan</option>
                        <option value="Autre activité">Autre activité</option>
                      </select>
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-white/75">
                        Type de projet *
                      </span>

                      <select
                        name="project"
                        required
                        defaultValue=""
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0d1916] px-4 py-4 text-white outline-none transition focus:border-emerald-400/50"
                      >
                        <option value="" disabled>
                          Choisissez une offre
                        </option>
                        <option value="Landing page">Landing page</option>
                        <option value="Site vitrine">Site vitrine</option>
                        <option value="Menu numérique">Menu numérique</option>
                        <option value="Réservation en ligne">
                          Réservation en ligne
                        </option>
                        <option value="Refonte de site">Refonte de site</option>
                        <option value="Projet sur mesure">
                          Projet sur mesure
                        </option>
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-sm font-medium text-white/75">
                      Budget estimé
                    </span>

                    <select
                      name="budget"
                      defaultValue=""
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0d1916] px-4 py-4 text-white outline-none transition focus:border-emerald-400/50"
                    >
                      <option value="" disabled>
                        Sélectionnez un budget
                      </option>
                      <option value="Moins de 500 €">Moins de 500 €</option>
                      <option value="500 € à 1 000 €">500 € à 1 000 €</option>
                      <option value="1 000 € à 2 000 €">
                        1 000 € à 2 000 €
                      </option>
                      <option value="Plus de 2 000 €">Plus de 2 000 €</option>
                      <option value="Je ne sais pas encore">
                        Je ne sais pas encore
                      </option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-white/75">
                      Parlez-nous de votre projet *
                    </span>

                    <textarea
                      name="message"
                      required
                      rows={6}
                      placeholder="Décrivez votre activité, vos objectifs et les fonctionnalités souhaitées..."
                      className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-emerald-400/50 focus:bg-white/[0.06]"
                    />
                  </label>

                  <label className="flex items-start gap-3 text-sm leading-6 text-white/50">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 accent-emerald-400"
                    />

                    <span>
                      J’accepte que mes informations soient utilisées pour
                      répondre à ma demande.
                    </span>
                  </label>

                  {error && (
                    <p className="rounded-2xl border border-red-400/25 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-emerald-400 px-7 py-4 font-semibold text-[#07110f] transition hover:-translate-y-0.5 hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Envoi en cours..." : "Envoyer ma demande"}
                  </button>

                  <p className="text-center text-xs leading-5 text-white/35">
                    Vos informations sont uniquement utilisées pour répondre à
                    votre demande.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}