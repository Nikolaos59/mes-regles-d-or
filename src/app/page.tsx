import { publications } from "@/data/publications";
import PublicationCard from "@/components/PublicationCard";
import { createPageMetadata, siteDescription } from "@/lib/seo";
import Link from "next/link";


import Hero from "@/components/Hero";


export const metadata = {
  ...createPageMetadata({
    title: "Mes Règles d’Or — 87 règles simples pour mieux décider",
    description: siteDescription,
    path: "/",
  }),
  title: { absolute: "Mes Règles d’Or — 87 règles simples pour mieux décider" },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="container-mro section-mro"><p className="eyebrow">Passer à la pratique</p><h2 className="heading-section mt-6">Des réponses à des situations concrètes.</h2><div className="mt-10 grid gap-6 md:grid-cols-3">{["faux-conseiller-bancaire", "colis-livre-introuvable", "proprietaire-refuse-travaux"].flatMap(slug=>publications.filter(item=>item.slug===slug && item.kind === "guides")).map(item=><PublicationCard key={item.slug} item={item}/>)}</div><Link href="/guides" className="mt-8 inline-block font-semibold underline underline-offset-4">Voir les 100 guides →</Link></section>

      <section className="container-mro pb-12" aria-labelledby="home-categories"><h2 id="home-categories" className="text-2xl font-semibold">Explorer par catégorie</h2><nav aria-label="Catégories" className="mt-6 flex flex-wrap gap-x-7 gap-y-3">{[{label:"Cybersécurité",href:"/categories/cybersecurite"},{label:"IA & Numérique",href:"/ia"},{label:"Travail",href:"/categories/management-travail"},{label:"Argent & consommation",href:"/categories/argent-consommation"},{label:"Entreprendre",href:"/categories/entrepreneuriat"},{label:"Tourisme",href:"/tourisme"}].map(item=><Link key={item.href} href={item.href} className="inline-flex min-h-11 items-center font-medium underline underline-offset-4">{item.label}</Link>)}</nav></section>

      <section className="container-mro py-5 sm:py-7">
        <div className="relative overflow-hidden rounded-[28px] bg-[#0F172A] px-7 py-16 text-white sm:rounded-[32px] sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          <div
            className="pointer-events-none absolute -right-[180px] -top-[240px] h-[540px] w-[540px] rounded-full border border-white/[0.05]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -right-[100px] -top-[160px] h-[380px] w-[380px] rounded-full border border-[#C89A3D]/10"
            aria-hidden="true"
          />

          <div className="relative z-10 grid gap-14 lg:grid-cols-[0.7fr_1.5fr] lg:items-start">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#C89A3D]">
                Règle mise en avant
              </p>
            </div>

            <div className="max-w-[850px]">
              <div className="gold-line" />

              <blockquote className="mt-8 text-balance text-[clamp(2.4rem,4.8vw,4.9rem)] font-medium leading-[1.03] tracking-[-0.05em] text-white">
                « Ne prenez jamais une décision importante sous pression. »
              </blockquote>

              <p className="mt-9 max-w-[680px] text-[17px] leading-8 text-white/60">
                L&apos;urgence réduit notre capacité à comparer, vérifier et
                réfléchir. Une décision importante mérite presque toujours un
                temps de recul.
              </p>

              <Link
                href="/regles/01-ne-jamais-decider-sous-pression"
                className="mt-10 inline-flex items-center gap-3 text-[15px] font-semibold text-[#E3C486] transition-colors hover:text-white"
              >
                Lire la règle complète
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-mro">
        <div className="container-mro">
          <div className="grid gap-10 rounded-[32px] border border-black/[0.07] bg-white px-7 py-12 shadow-[0_10px_50px_rgba(15,23,42,0.04)] sm:px-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-16 lg:py-16">
            <div className="max-w-[740px]">
              <p className="eyebrow">
                Une bibliothèque à garder près de soi
              </p>

              <h2 className="mt-5 text-balance text-[clamp(2.4rem,4.3vw,4rem)] font-medium leading-[1.02] tracking-[-0.05em] text-[#111827]">
                Comprendre, vérifier.
                <br />
                Puis agir.
              </h2>

              <p className="mt-7 max-w-[640px] text-[17px] leading-8 text-[#6B7280]">
                Des guides avec leurs sources et des checklists pour passer à l’action. Consultez les références de chaque article et leur date de vérification.
              </p>
            </div>

            <Link
              href="/regles"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#0F172A] px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#18233A] hover:shadow-xl"
            >
              Explorer les règles
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
