import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { siteCategories } from "@/data/site-categories";

export const metadata = createPageMetadata({
  title: "Les règles d’or",
  description: "Les catégories des règles d’or, bientôt disponibles.",
  path: "/regles",
});

export default function RulesPage() {
  return (
    <main className="container-mro section-mro">
      <p className="eyebrow">La collection</p>
      <h1 className="heading-display mt-7 max-w-4xl text-balance">Les règles d’or</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B7280]">Les règles seront publiées ici prochainement. En attendant, choisissez une catégorie.</p>
      <nav aria-label="Catégories des règles" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {siteCategories.map(category => <Link key={category.id} href={category.href} className="rounded-2xl border border-black/10 bg-white p-6 font-semibold transition-colors hover:border-[#C89A3D]">{category.name}<span className="mt-2 block text-sm font-normal text-[#6B7280]">Contenus à venir</span></Link>)}
      </nav>
    </main>
  );
}
