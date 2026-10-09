import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Recevoir les nouvelles règles",
  description: "Préparez-vous à recevoir les nouvelles règles d’or.",
  path: "/alertes",
});

export default function AlertsPage() {
  return (
    <main className="container-mro section-mro">
      <p className="eyebrow">Rester informé</p>
      <h1 className="heading-display mt-7 max-w-4xl text-balance">Recevoir les nouvelles règles.</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B7280]">L’inscription aux alertes sera ouverte prochainement. Aucune adresse e-mail n’est collectée pour le moment.</p>
      <section className="mt-12 max-w-2xl rounded-[28px] border border-black/[0.07] bg-white p-8 sm:p-10">
        <label htmlFor="alerts-email" className="block font-semibold">Votre adresse e-mail</label>
        <input id="alerts-email" type="email" autoComplete="email" disabled placeholder="vous@exemple.fr" className="mt-3 min-h-12 w-full rounded-xl border border-black/10 bg-[#F7F6F3] px-4 text-[#6B7280] disabled:cursor-not-allowed" />
        <button type="button" disabled className="mt-5 min-h-12 rounded-full bg-[#0F172A]/40 px-7 font-semibold text-white">M’alerter des nouveautés</button>
        <p className="mt-4 text-sm leading-6 text-[#6B7280]">Le formulaire sera activé avec le service d’inscription et d’envoi des alertes.</p>
      </section>
    </main>
  );
}
