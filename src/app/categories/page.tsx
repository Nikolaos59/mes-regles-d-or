import { createPageMetadata } from "@/lib/seo";
import CategoryCard from "@/components/CategoryCard";
import { getActiveCategories } from "@/lib/category-store";

export const metadata = createPageMetadata({
  title: "Les catégories",
  description: "Explorez les catégories de Mes Règles d’Or.",
  path: "/categories",
});

export const dynamic = "force-dynamic";

export default async function CategoriesPage() {
  const categories = await getActiveCategories();
  return (
    <main className="container-mro section-mro">
      <p className="eyebrow">Explorer par catégorie</p>
      <h1 className="heading-display mt-7 max-w-4xl text-balance">Les catégories</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B7280]">Parcourez les règles et articles publiés par thème.</p>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categories.map(category => <CategoryCard key={category.id} category={category} />)}
      </div>
    </main>
  );
}
