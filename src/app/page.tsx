import Link from "next/link";
import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";
import { createPageMetadata, siteDescription } from "@/lib/seo";
import Hero from "@/components/Hero";

export const metadata = {
  ...createPageMetadata({ title: "Mes Règles d’Or — des repères pour mieux décider", description: siteDescription, path: "/" }),
  title: { absolute: "Mes Règles d’Or — des repères pour mieux décider" },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section aria-labelledby="home-categories" className="container-mro section-mro border-t border-black/[0.07] pt-12">
        <p className="eyebrow">Explorer</p>
        <h2 id="home-categories" className="heading-section mt-4">Les catégories</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(category => <CategoryCard key={category.id} category={category} />)}
          <Link href="/tourisme" className="group flex min-h-[350px] flex-col rounded-[28px] border border-black/[0.07] bg-[#F4F1E9] p-8 transition-all hover:-translate-y-1 hover:shadow-lg"><span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#9B752A]">06</span><div className="mt-auto"><h3 className="text-[27px] font-semibold">Tourisme & voyages</h3><p className="mt-4 text-[15px] leading-7 text-[#6B7280]">Cette catégorie sera bientôt disponible.</p><span className="mt-7 inline-block text-sm font-semibold">Explorer →</span></div></Link>
        </div>
      </section>
    </main>
  );
}
