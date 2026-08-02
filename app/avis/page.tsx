"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function AvisPage() {
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/avis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          business: formData.get("business"),
          rating,
          comment: formData.get("comment"),
        }),
      });

      const contentType = response.headers.get("content-type");

      if (!contentType?.includes("application/json")) {
        throw new Error("La route d’envoi des avis n’est pas encore configurée.");
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "L’envoi de l’avis a échoué.");
      }

      form.reset();
      setRating(5);
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
    <main className="min-h-screen bg-[#07110f] px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Local<span className="text-emerald-400">Flow</span>
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/5"
          >
            ← Retour au site
          </Link>
        </header>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Votre avis compte
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
              Comment s’est passée votre expérience avec LocalFlow ?
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
              Votre retour nous aide à améliorer nos services. Les avis sont
              vérifiés avant une éventuelle publication sur le site.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-2xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#091512] p-7 shadow-2xl sm:p-10">
            {sent ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-400 text-3xl font-bold text-[#07110f]">
                  ✓
                </div>

                <h2 className="mt-7 text-3xl font-bold">
                  Merci pour votre avis !
                </h2>

                <p className="mt-4 max-w-md leading-7 text-white/55">
                  Votre commentaire a bien été envoyé. Il sera vérifié avant
                  toute publication sur le site.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setError("");
                  }}
                  className="mt-8 rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:bg-white/5"
                >
                  Laisser un autre avis
                </button>

                <Link
                  href="/"
                  className="mt-4 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  Retourner à l’accueil
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <p className="text-center text-sm font-medium text-white/65">
                    Votre note
                  </p>

                  <div
                    className="mt-4 flex justify-center gap-2"
                    onMouseLeave={() => setHoveredRating(0)}
                  >
                    {[1, 2, 3, 4, 5].map((star) => {
                      const active = star <= (hoveredRating || rating);

                      return (
                        <button
                          key={star}
                          type="button"
                          aria-label={`${star} étoile${star > 1 ? "s" : ""}`}
                          onMouseEnter={() => setHoveredRating(star)}
                          onClick={() => setRating(star)}
                          className={`text-5xl transition hover:scale-110 ${
                            active ? "text-yellow-400" : "text-white/15"
                          }`}
                        >
                          ★
                        </button>
                      );
                    })}
                  </div>

                  <p className="mt-3 text-center text-sm text-white/45">
                    {rating}/5
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-medium text-white/75">
                      Nom *
                    </span>

                    <input
                      type="text"
                      name="name"
                      required
                      maxLength={80}
                      placeholder="Votre nom"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-emerald-400/50"
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
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-emerald-400/50"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-medium text-white/75">
                    Entreprise ou type de commerce
                  </span>

                  <input
                    type="text"
                    name="business"
                    maxLength={100}
                    placeholder="Restaurant, boutique, artisan..."
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-emerald-400/50"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-white/75">
                    Votre commentaire *
                  </span>

                  <textarea
                    name="comment"
                    required
                    minLength={10}
                    maxLength={1500}
                    rows={7}
                    placeholder="Parlez-nous de votre expérience avec LocalFlow..."
                    className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-emerald-400/50"
                  />
                </label>

                <label className="flex items-start gap-3 text-sm leading-6 text-white/50">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 accent-emerald-400"
                  />

                  <span>
                    J’accepte que mon avis soit vérifié et éventuellement publié
                    sur le site LocalFlow.
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
                  {loading ? "Envoi en cours..." : "Envoyer mon avis"}
                </button>

                <p className="text-center text-xs leading-5 text-white/35">
                  Tous les avis sont reçus par email et ne sont pas publiés
                  automatiquement.
                </p>
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}