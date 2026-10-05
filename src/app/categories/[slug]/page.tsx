export const dynamic="force-dynamic";
import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RuleCard from "@/components/RuleCard";
import { categories } from "@/data/categories";
import { getRulesByCategory } from "@/lib/content-store";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => item.id === slug);
  if (!category) notFound();
  return createPageMetadata({ title: category.name, description: category.description, path: category.href });
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((item) => item.id === slug);
  if (!category) notFound();
  const rules = await getRulesByCategory(category.id);
  return (
    <main className="container-mro section-mro">
      <nav aria-label="Fil d’Ariane" className="mb-10 text-sm text-[#6B7280]"><Link href="/categories">Catégories</Link><span aria-hidden="true"> / </span><span aria-current="page">{category.shortName}</span></nav>
      <p className="eyebrow">{rules.length} règles à explorer</p>
      <h1 className="heading-display mt-7 max-w-5xl text-balance">{category.name}</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B7280]">{category.description}</p>
      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {rules.map((rule) => <RuleCard key={rule.id} rule={rule} />)}
      </div>
      <Link href="/regles" className="mt-12 inline-block font-semibold underline underline-offset-4">Explorer toutes les règles →</Link>
    </main>
  );
}
