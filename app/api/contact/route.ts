import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactData = {
  name?: string;
  email?: string;
  business?: string;
  project?: string;
  budget?: string;
  message?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "La clé Resend n’est pas configurée." },
        { status: 500 },
      );
    }

    const body = (await request.json()) as ContactData;

    const name = clean(body.name);
    const email = clean(body.email);
    const business = clean(body.business) || "Non précisé";
    const project = clean(body.project) || "Non précisé";
    const budget = clean(body.budget) || "Non précisé";
    const message = clean(body.message);

    if (!name || !email || !message) {
      return Response.json(
        { error: "Le nom, l’email et le message sont obligatoires." },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return Response.json(
        { error: "L’adresse email n’est pas valide." },
        { status: 400 },
      );
    }

    const result = await resend.emails.send({
      from: "LocalFlow <onboarding@resend.dev>",
      to: ["artyouness4@gmail.com"],
      replyTo: email,
      subject: `Nouvelle demande LocalFlow — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; color: #111827;">
          <h1 style="margin-bottom: 24px;">Nouvelle demande LocalFlow</h1>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0;"><strong>Nom</strong></td>
              <td style="padding: 8px 0;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Email</strong></td>
              <td style="padding: 8px 0;">${escapeHtml(email)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Commerce</strong></td>
              <td style="padding: 8px 0;">${escapeHtml(business)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Projet</strong></td>
              <td style="padding: 8px 0;">${escapeHtml(project)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Budget</strong></td>
              <td style="padding: 8px 0;">${escapeHtml(budget)}</td>
            </tr>
          </table>

          <h2 style="margin-top: 28px;">Message</h2>

          <div style="padding: 18px; background: #f3f4f6; border-radius: 12px; white-space: pre-wrap;">
            ${escapeHtml(message)}
          </div>

          <p style="margin-top: 24px; color: #6b7280;">
            Réponds directement à cet email pour contacter le client.
          </p>
        </div>
      `,
    });

    if (result.error) {
      console.error("Erreur Resend :", result.error);

      return Response.json(
        { error: "L’email n’a pas pu être envoyé." },
        { status: 500 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Erreur API contact :", error);

    return Response.json(
      { error: "Une erreur est survenue pendant l’envoi." },
      { status: 500 },
    );
  }
}