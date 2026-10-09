import { siteCategories } from "@/data/site-categories";
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
          {siteCategories.map(category => <CategoryCard key={category.id} category={category} />)}
        </div>
      </section>
    </main>
  );
}
