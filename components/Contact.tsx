"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
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
                        Aucun engagement avant la validation de votre projet.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
                      ✓
                    </span>

                    <div>
                      <p className="font-semibold">Accompagnement personnalisé</p>
                      <p className="mt-1 text-sm leading-6 text-white/50">
                        Une solution adaptée à vos objectifs et à vos clients.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 rounded-[2rem] border border-white/10 bg-black/10 p-6">
                  <p className="text-sm text-white/45">Vous pouvez aussi écrire à</p>
                  <a
                    href="mailto:contact@localflow.fr"
                    className="mt-2 inline-block text-lg font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    contact@localflow.fr
                  </a>
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
                    Votre demande est prête
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-white/55">
                    Le formulaire fonctionne visuellement. Nous connecterons
                    ensuite un vrai service d’envoi pour recevoir les demandes.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSent(false)}
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
                        <option>Restaurant</option>
                        <option>Café</option>
                        <option>Salon de coiffure</option>
                        <option>Spa ou institut</option>
                        <option>Boutique</option>
                        <option>Artisan</option>
                        <option>Autre activité</option>
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
                        <option>Landing page</option>
                        <option>Site vitrine</option>
                        <option>Menu numérique</option>
                        <option>Réservation en ligne</option>
                        <option>Refonte de site</option>
                        <option>Projet sur mesure</option>
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
                      <option>Moins de 500 €</option>
                      <option>500 € à 1 000 €</option>
                      <option>1 000 € à 2 000 €</option>
                      <option>Plus de 2 000 €</option>
                      <option>Je ne sais pas encore</option>
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

                  <button
                    type="submit"
                    className="w-full rounded-full bg-emerald-400 px-7 py-4 font-semibold text-[#07110f] transition hover:-translate-y-0.5 hover:bg-emerald-300"
                  >
                    Envoyer ma demande
                  </button>

                  <p className="text-center text-xs leading-5 text-white/35">
                    Aucune donnée ne sera envoyée tant que nous n’aurons pas
                    connecté le formulaire à un service d’email.
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