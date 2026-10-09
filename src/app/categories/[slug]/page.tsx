import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getActiveCategories } from "@/lib/category-store";
import { getPublications, getRulesByCategory } from "@/lib/content-store";
import RuleCard from "@/components/RuleCard";
import PublicationCard from "@/components/PublicationCard";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = (await getActiveCategories()).find(item => item.id === slug);
  if (!category) notFound();
  return createPageMetadata({ title: category.name, description: category.description, path: category.href });
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = (await getActiveCategories()).find(item => item.id === slug);
  if (!category) notFound();
  const [rules, publications] = await Promise.all([getRulesByCategory(slug), getPublications()]);
  const guides = publications.filter(item => item.categoryId === slug && item.kind === "guides");
  const articles = publications.filter(item => item.categoryId === slug && item.kind === "blog");
  return (
    <main className="container-mro section-mro">
      <nav aria-label="Fil d’Ariane" className="mb-10 text-sm text-[#6B7280]"><Link href="/categories">Catégories</Link><span aria-hidden="true"> / </span><span aria-current="page">{category.shortName}</span></nav>
      <p className="eyebrow">Catégorie {category.number}</p>
      <h1 className="heading-display mt-7 max-w-5xl text-balance">{category.name}</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B7280]">{category.description}</p>
      <section className="mt-14 rounded-[28px] border border-black/[0.07] bg-white p-8 sm:p-12">
        <h2 className="text-2xl font-medium">Les règles d’or ({rules.length})</h2>
        {rules.length ? <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{rules.map(rule => <RuleCard key={rule.slug} rule={rule}/>)}</div> : <p className="mt-4 text-lg leading-8 text-[#6B7280]">Aucune règle publiée dans cette catégorie pour le moment.</p>}
      </section>
      {guides.length > 0 && <section className="mt-10"><h2 className="mb-6 text-2xl font-medium">Guides pratiques</h2><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{guides.map(item => <PublicationCard key={item.slug} item={item}/>)}</div></section>}
      {articles.length > 0 && <section className="mt-10"><h2 className="mb-6 text-2xl font-medium">Articles</h2><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{articles.map(item => <PublicationCard key={item.slug} item={item}/>)}</div></section>}
      <Link href="/categories" className="mt-10 inline-block font-semibold underline underline-offset-4">Voir toutes les catégories →</Link>
    </main>
  );
}
