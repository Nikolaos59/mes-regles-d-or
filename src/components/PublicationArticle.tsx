import PublicationTags from "@/components/PublicationTags";
import { publicationTheme } from "@/data/publication-themes";
import ThemeIcon from "@/components/ThemeIcon";
import Link from "next/link";

import { getRulesByCategory } from "@/data/rules";
import { readingMinutes, type Publication } from "@/data/publications";
import RuleCard from "@/components/RuleCard";
export default function PublicationArticle({ item }: { item: Publication }) {
 const theme = publicationTheme(item);
 const label = item.kind === "guides" ? "Guides pratiques" : "Le journal";

 return <main className="container-mro section-mro">
 <nav aria-label="Fil d’Ariane" className="mb-10 flex flex-wrap gap-2 text-sm text-[#6B7280]"><Link href="/">Accueil</Link><span aria-hidden="true">/</span><Link href={`/${item.kind}`}>{label}</Link><span aria-hidden="true">/</span>{item.kind === "guides" && <><Link href={`/guides#${theme.id}`}>{theme.label}</Link><span aria-hidden="true">/</span></>}<span aria-current="page">{item.title}</span></nav>
 <article><header className="rounded-[28px] border-l-[6px] p-7 sm:p-12" style={{background:theme.background,borderColor:theme.color}}><div className="flex items-center gap-4" style={{color:theme.color}}><ThemeIcon theme={theme} className="h-10 w-10"/><div><p className="text-xs font-semibold uppercase tracking-widest">{label}</p><p className="text-lg font-semibold">{theme.label}</p></div></div><h1 className="mt-7 max-w-4xl text-balance text-[clamp(2rem,4.5vw,3.8rem)] font-medium leading-[1.1] tracking-tight">{item.title}</h1><PublicationTags item={item}/><p className="mt-6 text-sm font-medium" style={{color:theme.color}}>{readingMinutes(item)} min de lecture{item.reviewedAt ? " · Sources vérifiées" : ""}</p><p className="mt-6 max-w-3xl text-lg leading-8 text-[#374151]">{item.intro}</p></header>
 <div className="mt-14 grid items-start gap-12 lg:grid-cols-[240px_minmax(0,1fr)]">
 <nav aria-label="Sommaire de l’article" className="rounded-3xl border border-black/10 p-6 lg:sticky lg:top-28"><p className="text-xs uppercase tracking-widest" style={{color:theme.color}}>{theme.label}</p><p className="mt-2 font-semibold">Dans cette lecture</p><ul className="mt-5 space-y-4 text-sm leading-6">{item.sections.map((s,i)=><li key={s.title}><a className="hover:underline" href={`#section-${i}`}>{s.title}</a></li>)}<li><a className="hover:underline" href="#a-retenir">À garder sous la main</a></li></ul></nav>
 <div className="max-w-3xl">{item.sections.map((s,i)=><section id={`section-${i}`} key={s.title} className="mb-12 scroll-mt-28"><h2 className="text-3xl font-medium tracking-tight">{s.title}</h2>{s.paragraphs.map(p=><p key={p} className="mt-5 text-lg leading-9 text-[#4B5563]">{p}</p>)}</section>)}
 <section id="a-retenir" className="scroll-mt-28 rounded-[28px] p-7 sm:p-10" style={{background:theme.background}}><h2 className="text-2xl font-semibold">À garder sous la main</h2><ul className="mt-6 list-disc space-y-4 pl-5 leading-7">{item.checklist.map(p=><li key={p}>{p}</li>)}</ul></section>
 {item.sources && <section className="mt-12 border-t border-black/10 pt-8"><h2 className="text-2xl font-semibold">Sources et vérification</h2><p className="mt-4 text-sm leading-7 text-[#4B5563]">Repères pour la France, vérifiés le <time dateTime={item.reviewedAt}>{item.reviewedAt?.split("-").reverse().join("/")}</time>. Ces informations générales ne remplacent pas l’examen de votre situation.</p><ul className="mt-5 space-y-4">{item.sources.map(source=><li key={source.url}><span className="block text-xs uppercase tracking-wider text-[#6B7280]">{source.kind === "inspiration" ? "Thème d’inspiration" : "Source de référence"}</span><a href={source.url} className="underline underline-offset-4 leading-7">{source.label}</a></li>)}</ul><p className="mt-6 text-sm leading-7 text-[#6B7280]">Rédaction originale de Mes Règles d’Or. Site indépendant des organismes cités.{item.sources.some(source => source.kind === "inspiration" && source.url.includes("rtl.fr")) && " Sans affiliation avec RTL, Julien Courbet ou l’émission Ça peut vous arriver."}</p></section>}
 <Link href={`/${item.kind}`} className="mt-10 inline-block font-semibold underline underline-offset-4">← Retour : {label}</Link></div></div></article>
 <section className="mt-20"><h2 className="heading-section">Les principes à mettre en pratique</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{getRulesByCategory(item.categoryId).slice(0,3).map(rule=><RuleCard key={rule.id} rule={rule}/>)}</div></section>
 </main>;
}
