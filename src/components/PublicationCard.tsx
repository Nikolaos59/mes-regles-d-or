import Link from "next/link";
import { readingMinutes, type Publication } from "@/data/publications";
import { categories } from "@/data/categories";
export default function PublicationCard({ item }: { item: Publication }) {
 return <article className="flex flex-col rounded-[28px] border border-black/[0.08] bg-white p-7 sm:p-9">
 <p className="text-xs font-semibold uppercase tracking-widest text-[#765818]">{categories.find(c => c.id === item.categoryId)?.shortName} · {readingMinutes(item)} min</p>
 <h2 className="mt-6 text-3xl font-medium leading-tight tracking-tight"><Link className="hover:underline underline-offset-4" href={`/${item.kind}/${item.slug}`}>{item.title}</Link></h2>
 <p className="mt-5 flex-1 leading-7 text-[#6B7280]">{item.description}</p>
 <Link className="mt-8 font-semibold underline underline-offset-4" href={`/${item.kind}/${item.slug}`}>Lire {item.kind === "guides" ? "le guide" : "l’article"}<span className="sr-only"> : {item.title}</span> →</Link>
 </article>;
}
