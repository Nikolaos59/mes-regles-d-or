import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import RuleCard from "@/components/RuleCard";
import PublicationCard from "@/components/PublicationCard";
import SearchBar from "@/components/SearchBar";
import { categories } from "@/data/categories";
import { rules } from "@/data/rules";
import { publications } from "@/data/publications";
import { readSearchParam, searchRules, searchPublications } from "@/lib/search";

export const metadata = createPageMetadata({
  title: "Rechercher un guide ou une règle",
  description: "Trouvez une démarche concrète ou un principe utile par mot-clé et par domaine.",
  path: "/recherche", noindex: true,
});
type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };
export default async function SearchPage({ searchParams }: Props) {
  const params = await searchParams;
  const query = readSearchParam(params.q);
  const requestedCategory = readSearchParam(params.categorie);
  const categoryId = categories.find(category => category.id === requestedCategory)?.id ?? "";
  const results = searchRules(rules, categories, query, categoryId);
  const articles = searchPublications(publications, query, categoryId);
  const hasFilters = Boolean(query || categoryId);
  const total = results.length + articles.length;
  return <main className="container-mro section-mro">
    <p className="eyebrow">Trouver le bon repère</p>
    <h1 className="heading-display mt-7 max-w-4xl text-balance">Une question. Des pistes pour agir.</h1>
    <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B7280]">Cherchez une situation, une démarche ou un principe parmi les règles, les guides et le journal.</p>
    <div className="mt-10"><SearchBar key={query + ":" + categoryId} query={query} categoryId={categoryId} /></div>
    {requestedCategory && !categoryId && <p className="mt-5 text-[#6B7280]">Ce domaine n’existe pas. La recherche porte sur tous les domaines.</p>}
    <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
      <p role="status" className="font-semibold">{total} {total > 1 ? "résultats" : "résultat"}</p>
      {hasFilters && <Link href="/recherche" className="underline underline-offset-4">Effacer les filtres</Link>}
    </div>
    {articles.length > 0 && <section className="mt-10" aria-labelledby="publications-heading">
      <h2 id="publications-heading" className="text-2xl font-semibold">Guides et journal · {articles.length}</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{articles.map(item => <PublicationCard key={item.kind + item.slug} item={item}/>)}</div>
    </section>}
    {results.length > 0 && <section className="mt-14" aria-labelledby="results-heading">
      <h2 id="results-heading" className="text-2xl font-semibold">Règles d’or · {results.length}</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{results.map(rule => <RuleCard key={rule.id} rule={rule}/>)}</div>
    </section>}
    {total === 0 && <section className="mt-8 rounded-[28px] border border-black/10 bg-white p-8 sm:p-12">
      <h2 className="text-2xl font-medium">Essayons autrement.</h2>
      <p className="mt-4 text-lg leading-8 text-[#6B7280]">Utilisez un mot plus général, retirez un terme ou choisissez un autre domaine.</p>
      <Link href="/guides" className="mt-7 inline-block font-semibold underline underline-offset-4">Parcourir les guides par thème →</Link>
    </section>}
  </main>;
}
