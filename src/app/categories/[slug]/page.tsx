import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map(category => ({ slug: category.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find(item => item.id === slug);
  if (!category) notFound();
  return createPageMetadata({ title: category.name, description: category.description, path: category.href });
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find(item => item.id === slug);
  if (!category) notFound();
  return (
    <main className="container-mro section-mro">
      <nav aria-label="Fil d’Ariane" className="mb-10 text-sm text-[#6B7280]"><Link href="/categories">Catégories</Link><span aria-hidden="true"> / </span><span aria-current="page">{category.shortName}</span></nav>
      <p className="eyebrow">Catégorie {category.number}</p>
      <h1 className="heading-display mt-7 max-w-5xl text-balance">{category.name}</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B7280]">{category.description}</p>
      <section className="mt-14 rounded-[28px] border border-black/[0.07] bg-white p-8 sm:p-12">
        <h2 className="text-2xl font-medium">Les contenus arrivent bientôt.</h2>
        <p className="mt-4 text-lg leading-8 text-[#6B7280]">Cette page est prête à accueillir les règles de cette catégorie.</p>
      </section>
      <Link href="/categories" className="mt-10 inline-block font-semibold underline underline-offset-4">Voir toutes les catégories →</Link>
    </main>
  );
}
