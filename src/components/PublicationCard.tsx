import PublicationTags from "@/components/PublicationTags";
import Link from "next/link";
import { readingMinutes } from "@/lib/editorial-utils";
import type { Publication } from "@/lib/editorial-types";
import { publicationTheme } from "@/data/publication-themes";
import ThemeIcon from "@/components/ThemeIcon";
export default function PublicationCard({ item }: { item: Publication }) {
 const theme=publicationTheme(item);
 return <article className="flex flex-col overflow-hidden rounded-[24px] border border-black/10 bg-white transition-shadow hover:shadow-lg">
 <div className="flex items-center justify-between gap-4 border-b border-black/5 px-7 py-5" style={{background:theme.background,color:theme.color}}><p className="text-sm font-semibold">{theme.label}{item.subcategory ? " · "+item.subcategory : ""}</p><ThemeIcon theme={theme}/></div>
 <div className="flex flex-1 flex-col p-7"><p className="text-xs uppercase tracking-widest text-[#6B7280]">{item.kind === "guides" ? "Guide pratique" : "Le journal"} · {readingMinutes(item)} min</p>
 <h2 className="mt-4 text-[26px] font-medium leading-tight tracking-tight"><Link className="hover:underline underline-offset-4" href={`/${item.kind}/${item.slug}`}>{item.title}</Link></h2><PublicationTags item={item}/>
 <p className="mt-4 flex-1 leading-7 text-[#6B7280]">{item.description}</p>
 <Link className="mt-7 font-semibold underline underline-offset-4" href={`/${item.kind}/${item.slug}`}>Lire {item.kind === "guides" ? "le guide" : "l’article"}<span className="sr-only"> : {item.title}</span> →</Link></div>
 </article>;
}
