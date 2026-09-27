import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import RuleCard from "@/components/RuleCard";
import SearchBar from "@/components/SearchBar";
import { categories } from "@/data/categories";
import { rules } from "@/data/rules";
import { readSearchParam, searchRules } from "@/lib/search";

export const metadata = createPageMetadata({
  title: "Rechercher une règle",
  description: "Trouvez le bon repère parmi les 75 règles d’or, par mot-clé ou par domaine.",
  path: "/recherche",
  noindex: true,
});

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

export default async function SearchPage({ searchParams }: Props) {
  const params = await searchParams;
  const query = readSearchParam(params.q);
  const requestedCategory = readSearchParam(params.categorie);
  const categoryId = categories.find((category) => category.id === requestedCategory)?.id ?? "";
  const results = searchRules(rules, categories, query, categoryId);
  const hasFilters = Boolean(query || categoryId);
  return (
    <main className="container-mro section-mro">
      <p className="eyebrow">Trouver le bon repère</p>
      <h1 className="heading-display mt-7 max-w-4xl text-balance">Une question. Des principes utiles.</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B7280]">Partez de ce qui vous préoccupe, puis choisissez les règles à explorer.</p>
      <div className="mt-10"><SearchBar key={`${query}:${categoryId}`} query={query} categoryId={categoryId} /></div>
      {requestedCategory && !categoryId && <p className="mt-5 text-[#6B7280]">Ce domaine n’existe pas. La recherche porte sur tous les domaines.</p>}
      <section className="mt-14" aria-labelledby="results-heading">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 id="results-heading" className="text-2xl font-semibold tracking-tight">{results.length} {results.length > 1 ? "règles trouvées" : "règle trouvée"}</h2>
          {hasFilters && <Link href="/recherche" className="text-base font-medium underline underline-offset-4">Effacer les filtres</Link>}
        </div>
        {results.length ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{results.map((rule) => <RuleCard key={rule.id} rule={rule} />)}</div>
        ) : (
          <div className="mt-8 rounded-[28px] border border-black/[0.07] bg-white p-8 sm:p-12">
            <h3 className="text-2xl font-medium">Essayons autrement.</h3>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[#6B7280]">Utilisez un mot plus général, retirez un terme ou choisissez un autre domaine.</p>
            <Link href="/regles" className="mt-7 inline-block font-semibold underline underline-offset-4">Parcourir les 75 règles →</Link>
          </div>
        )}
      </section>
    </main>
  );
}
