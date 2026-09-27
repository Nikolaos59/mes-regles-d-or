import { publications } from "@/data/publications";
import PublicationCard from "@/components/PublicationCard";
import { createPageMetadata, siteDescription } from "@/lib/seo";
import Link from "next/link";

import CategoryCard from "@/components/CategoryCard";
import Hero from "@/components/Hero";
import { categories } from "@/data/categories";

export const metadata = {
  ...createPageMetadata({
    title: "Mes Règles d’Or — 75 règles simples pour mieux décider",
    description: siteDescription,
    path: "/",
  }),
  title: { absolute: "Mes Règles d’Or — 75 règles simples pour mieux décider" },
};

const intents = [
  {
    title: "Me protéger",
    description: "Fraudes, arnaques et sécurité numérique.",
    href: "/categories/cybersecurite",
  },
  {
    title: "Mieux gérer mon argent",
    description: "Acheter, négocier et consommer avec méthode.",
    href: "/categories/argent-consommation",
  },
  {
    title: "Mieux utiliser l'IA",
    description: "Comprendre et exploiter le numérique intelligemment.",
    href: "/categories/ia-numerique",
  },
  {
    title: "Mieux travailler",
    description: "Décider, communiquer et collaborer plus efficacement.",
    href: "/categories/management-travail",
  },
  {
    title: "Entreprendre",
    description: "Créer et piloter une activité avec pragmatisme.",
    href: "/categories/entrepreneuriat",
  },
] as const;

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="container-mro section-mro"><p className="eyebrow">Passer à la pratique</p><h2 className="heading-section mt-6">Un guide pour votre prochaine décision.</h2><div className="mt-10 grid gap-6 md:grid-cols-3">{publications.filter(item=>item.kind === "guides").slice(0,3).map(item=><PublicationCard key={item.slug} item={item}/>)}</div><Link href="/blog" className="mt-8 inline-block font-semibold underline underline-offset-4">Découvrir aussi le journal →</Link></section>

      <section className="section-mro">
        <div className="container-mro">
          <div className="max-w-[760px]">
            <p className="eyebrow">
              Trouver votre point de départ
            </p>

            <h2 className="heading-section text-balance mt-6 text-[#111827]">
              Qu&apos;est-ce qui vous amène ?
            </h2>

            <p className="mt-7 max-w-[650px] text-[18px] leading-8 text-[#6B7280]">
              Pas besoin de tout lire. Commencez simplement par ce qui compte
              aujourd&apos;hui pour vous.
            </p>
          </div>

          <div className="mt-16 grid overflow-hidden rounded-[28px] border border-black/[0.07] bg-white shadow-[0_8px_40px_rgba(15,23,42,0.035)] md:grid-cols-2 lg:grid-cols-5">
            {intents.map((intent, index) => (
              <Link
                key={intent.title}
                href={intent.href}
                className={`group relative min-h-[255px] p-8 transition-colors duration-300 hover:bg-[#F1EEE6] ${
                  index !== intents.length - 1
                    ? "border-b border-black/[0.07] lg:border-b-0 lg:border-r"
                    : ""
                } ${
                  index === 1
                    ? "md:border-b lg:border-b-0"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-[#0F172A] transition-all duration-300 group-hover:border-[#0F172A] group-hover:bg-[#0F172A] group-hover:text-white">
                    ↗
                  </span>
                </div>

                <div className="mt-16">
                  <h3 className="text-[22px] font-semibold leading-tight tracking-[-0.03em] text-[#111827]">
                    {intent.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-6 text-[#6B7280]">
                    {intent.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="domaines"
        className="border-y border-black/[0.05] bg-[#EFEEE9]"
      >
        <div className="container-mro section-mro">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[780px]">
              <p className="eyebrow">
                Les cinq domaines
              </p>

              <h2 className="heading-section text-balance mt-6 text-[#111827]">
                Cinq domaines.
                <br />
                Une même philosophie.
              </h2>
            </div>

            <p className="max-w-[470px] text-[17px] leading-8 text-[#6B7280]">
              Des règles conçues pour rester utiles malgré les modes, les
              outils et les changements de contexte.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
              />
            ))}
          </div>

          <div className="mt-11 flex justify-center">
            <Link
              href="/categories"
              className="inline-flex h-13 items-center justify-center rounded-full border border-[#0F172A]/15 bg-transparent px-7 text-[14px] font-semibold text-[#0F172A] transition-colors hover:bg-[#0F172A] hover:text-white"
            >
              Voir toutes les catégories
            </Link>
          </div>
        </div>
      </section>

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
                Moins de bruit.
                <br />
                Plus de principes.
              </h2>

              <p className="mt-7 max-w-[640px] text-[17px] leading-8 text-[#6B7280]">
                Les bonnes décisions ne demandent pas toujours davantage
                d&apos;informations. Elles demandent souvent de meilleurs
                repères.
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
