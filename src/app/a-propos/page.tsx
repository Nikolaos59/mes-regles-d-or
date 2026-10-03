import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "À propos",
  description: "La philosophie de Mes Règles d’Or : 82 principes simples pour prendre du recul et mieux décider.",
  path: "/a-propos",
  noindex: false,
});

export default function AboutPage() {
  return (
    <main className="container-mro section-mro">
      <p className="eyebrow">Notre philosophie</p>
      <h1 className="heading-display mt-7 max-w-4xl text-balance">Des repères pour les décisions qui comptent.</h1>
      <p className="mt-9 max-w-3xl text-xl leading-9 text-[#6B7280]">Mes Règles d’Or rassemble 82 principes pour mieux décider dans sa vie personnelle et professionnelle. Une bibliothèque à consulter quand une situation demande du recul.</p>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {[
          ["Prendre du recul", "Ralentir, vérifier les faits et comprendre les enjeux avant de s’engager."],
          ["Garder son jugement", "Une règle est un point de départ pour réfléchir. Son application dépend de votre contexte."],
          ["Passer à l’action", "Chaque principe s’accompagne d’un conseil concret pour faire un premier pas."],
        ].map(([title, text]) => <section key={title} className="rounded-[28px] border border-black/[0.07] bg-white p-8"><h2 className="text-2xl font-semibold tracking-tight">{title}</h2><p className="mt-5 text-lg leading-8 text-[#6B7280]">{text}</p></section>)}
      </div>
      <section className="mt-14 max-w-3xl">
        <h2 className="heading-section">Cinq domaines, un même réflexe.</h2>
        <p className="mt-7 text-lg leading-8 text-[#6B7280]">Cybersécurité, IA et numérique, management et travail, argent et consommation, entrepreneuriat : des contextes différents, avec une même invitation à décider plus consciemment.</p>
        <Link href="/regles" className="mt-8 inline-flex rounded-full bg-[#0F172A] px-7 py-4 font-semibold text-white">Explorer les 82 règles →</Link>
      </section>
    </main>
  );
}
