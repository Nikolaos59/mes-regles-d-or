export const dynamic="force-dynamic";
import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RuleCard from "@/components/RuleCard";
import { categories } from "@/data/categories";
import { getRuleBySlug, getRulesByCategory } from "@/lib/content-store";

type Props = { params: Promise<{ slug: string }> };



export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const rule = await getRuleBySlug(slug);
  if (!rule) notFound();
  return createPageMetadata({ title: rule.title, description: rule.summary, path: `/regles/${rule.slug}`, type: "article" });
}

export default async function RulePage({ params }: Props) {
  const { slug } = await params;
  const rule = await getRuleBySlug(slug);
  if (!rule) notFound();
  const category = categories.find((item) => item.id === rule.categoryId);
  if (!category) notFound();
  const related = (await getRulesByCategory(rule.categoryId)).filter((item) => item.id !== rule.id).slice(0, 3);
  return (
    <main className="container-mro section-mro">
      <nav aria-label="Fil d’Ariane" className="mb-10 flex flex-wrap gap-2 text-sm text-[#6B7280]">
        <Link href="/regles">Les règles</Link><span aria-hidden="true">/</span>
        <Link href={category.href}>{category.shortName}</Link><span aria-hidden="true">/</span>
        <span aria-current="page">{rule.title}</span>
      </nav>
      <article className="max-w-4xl">
        <p className="eyebrow">{category.shortName}</p>
        <h1 className="mt-7 text-balance text-[clamp(2.5rem,5.5vw,5.5rem)] font-medium leading-[1.05] tracking-[-0.05em]">{rule.title}</h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-[#6B7280]">{rule.summary}</p>
        <section className="mt-12 rounded-[28px] border border-black/[0.07] bg-white p-7 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">Passer à l’action</h2>
          <p className="mt-5 whitespace-pre-line text-lg leading-9">{rule.detail}</p>
        </section>
      </article>
      <Link href={category.href} className="mt-10 inline-block font-semibold underline underline-offset-4">Explorer les règles de ce domaine →</Link>
      <section className="mt-16">
        <h2 className="heading-section">Dans le même domaine</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">{related.map((item) => <RuleCard key={item.id} rule={item} />)}</div>
      </section>
    </main>
  );
}
