import Link from "next/link";
import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";
import { createPageMetadata, siteDescription } from "@/lib/seo";

export const metadata = {
  ...createPageMetadata({ title: "Mes Règles d’Or — des repères pour mieux décider", description: siteDescription, path: "/" }),
  title: { absolute: "Mes Règles d’Or — des repères pour mieux décider" },
};

export default function HomePage() {
  return (
    <main className="container-mro section-mro">
      <section className="max-w-4xl py-8 sm:py-16">
        <p className="eyebrow">Mes Règles d’Or</p>
        <h1 className="heading-display mt-7 text-balance">Des repères pour mieux décider.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B7280]">Le site se prépare. Les règles et les articles seront publiés ici prochainement.</p>
        <Link href="/alertes" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-[#0F172A] px-7 font-semibold text-white">Être averti des nouveautés →</Link>
      </section>
      <section aria-labelledby="home-categories" className="border-t border-black/[0.07] pt-12">
        <p className="eyebrow">Explorer</p>
        <h2 id="home-categories" className="heading-section mt-4">Les catégories</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(category => <CategoryCard key={category.id} category={category} />)}
          <Link href="/tourisme" className="group flex min-h-[350px] flex-col rounded-[28px] border border-black/[0.07] bg-[#F4F1E9] p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9B752A]">06</span>
            <div className="mt-auto"><h3 className="text-[27px] font-semibold">Tourisme & voyages</h3><p className="mt-4 text-[15px] leading-7 text-[#6B7280]">Les contenus de cette catégorie seront bientôt disponibles.</p><span className="mt-7 inline-block text-sm font-semibold">Explorer →</span></div>
          </Link>
        </div>
      </section>
    </main>
  );
}
