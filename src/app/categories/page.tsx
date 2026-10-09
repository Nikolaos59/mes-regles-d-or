import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";

export const metadata = createPageMetadata({
  title: "Les catégories",
  description: "Explorez les catégories de Mes Règles d’Or.",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <main className="container-mro section-mro">
      <p className="eyebrow">Explorer par catégorie</p>
      <h1 className="heading-display mt-7 max-w-4xl text-balance">Les catégories</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B7280]">Les pages sont en préparation. Les contenus seront ajoutés prochainement.</p>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categories.map(category => <CategoryCard key={category.id} category={category} />)}
        <Link href="/tourisme" className="group flex min-h-[350px] flex-col rounded-[28px] border border-black/[0.07] bg-[#F4F1E9] p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9B752A]">06</span>
          <div className="mt-auto"><h2 className="text-[27px] font-semibold">Tourisme & voyages</h2><p className="mt-4 text-[15px] leading-7 text-[#6B7280]">Cette catégorie sera bientôt disponible.</p><span className="mt-7 inline-block text-sm font-semibold">Explorer →</span></div>
        </Link>
      </div>
    </main>
  );
}
