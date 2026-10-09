import { createPageMetadata } from "@/lib/seo";
import CategoryCard from "@/components/CategoryCard";
import { siteCategories } from "@/data/site-categories";

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
        {siteCategories.map(category => <CategoryCard key={category.id} category={category} />)}
      </div>
    </main>
  );
}
