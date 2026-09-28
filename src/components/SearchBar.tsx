import { categories } from "@/data/categories";
import { MAX_QUERY_LENGTH } from "@/lib/search";

type SearchBarProps = { query?: string; categoryId?: string };

export default function SearchBar({ query = "", categoryId = "" }: SearchBarProps) {
  return (
    <form action="/recherche" method="get" role="search" aria-label="Rechercher dans les règles et les guides" className="rounded-[28px] border border-black/[0.08] bg-white p-6 sm:p-8">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)_auto] lg:items-end">
        <div className="min-w-0">
          <label htmlFor="rule-query" className="mb-2 block text-base font-semibold">Un mot, un sujet</label>
          <input id="rule-query" name="q" type="search" defaultValue={query} maxLength={MAX_QUERY_LENGTH} placeholder="Ex. : mot de passe, budget" aria-describedby="search-help" className="h-14 w-full min-w-0 rounded-2xl border border-black/15 bg-[#F7F6F3] px-4 text-base" />
        </div>
        <div className="min-w-0">
          <label htmlFor="rule-category" className="mb-2 block text-base font-semibold">Domaine</label>
          <select id="rule-category" name="categorie" defaultValue={categoryId} className="h-14 w-full min-w-0 rounded-2xl border border-black/15 bg-[#F7F6F3] px-4 text-base">
            <option value="">Tous les domaines</option>
            {categories.map((category) => <option key={category.id} value={category.id}>{category.shortName}</option>)}
          </select>
        </div>
        <button type="submit" className="h-14 cursor-pointer rounded-full bg-[#0F172A] px-7 text-base font-semibold text-white transition-colors hover:bg-[#24324B]">Rechercher →</button>
      </div>
      <p id="search-help" className="mt-4 text-sm leading-6 text-[#6B7280]">Explorez les 75 règles, les guides pratiques et le journal. Les accents et les majuscules ne changent pas les résultats.</p>
    </form>
  );
}
