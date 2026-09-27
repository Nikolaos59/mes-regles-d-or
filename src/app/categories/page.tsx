import { createPageMetadata } from "@/lib/seo";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";

export const metadata = createPageMetadata({
  title: "Les cinq catégories",
  description: "Explorez les 75 règles d’or à travers cinq domaines essentiels de la vie personnelle et professionnelle.",
  path: "/categories",
  noindex: false,
});

export default function CategoriesPage() {
  return (
    <main className="container-mro section-mro">
      <p className="eyebrow">Les cinq domaines</p>
      <h1 className="heading-display mt-7 max-w-4xl text-balance">Cinq domaines. Une même philosophie.</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B7280]">Choisissez le domaine qui vous concerne. Chaque collection réunit quinze principes pour prendre du recul et agir avec méthode.</p>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => <CategoryCard key={category.id} category={category} />)}
      </div>
    </main>
  );
}
