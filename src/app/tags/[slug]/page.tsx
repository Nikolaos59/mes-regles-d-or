export const dynamic="force-dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublications } from "@/lib/content-store";
import { tags, publicationTags } from "@/data/publication-tags";
import PublicationCard from "@/components/PublicationCard";
import { createPageMetadata } from "@/lib/seo";

type Props = {params: Promise<{slug:string}>};
export async function generateMetadata({params}: Props) {
  const publications=await getPublications(); const usedTags=tags.filter(tag=>publications.some(item=>publicationTags(item).some(t=>t.slug===tag.slug)));
  const {slug}=await params; const tag=usedTags.find(t=>t.slug===slug); if(!tag)notFound();
  return createPageMetadata({title:"#"+tag.label,description:"Tous nos articles associés au tag #"+tag.label+".",path:"/tags/"+slug});
}
export default async function Page({params}: Props) {
  const publications=await getPublications(); const usedTags=tags.filter(tag=>publications.some(item=>publicationTags(item).some(t=>t.slug===tag.slug)));
  const {slug}=await params; const tag=usedTags.find(t=>t.slug===slug); if(!tag)notFound();
  const items=publications.filter(item=>publicationTags(item).some(t=>t.slug===slug));
  return <main className="container-mro section-mro">
    <nav aria-label="Fil d’Ariane" className="mb-8 flex flex-wrap gap-3 text-sm"><Link href="/">Accueil</Link><span aria-hidden="true">/</span><Link href="/guides">Guides</Link><span aria-hidden="true">/</span><span aria-current="page">#{tag.label}</span></nav>
    <p className="eyebrow">Explorer par mot-clé</p><h1 className="heading-section mt-6 break-words">#{tag.label}</h1>
    <p className="mt-5 text-lg text-[#6B7280]">{items.length} {items.length>1?"articles pour approfondir ce sujet":"article pour approfondir ce sujet"}.</p>
    <nav aria-label="Autres tags" className="my-8 flex flex-wrap gap-3">{usedTags.map(t=><Link key={t.slug} href={"/tags/"+t.slug} aria-current={t.slug===slug?"page":undefined} className={"rounded-full border px-4 py-2 text-sm "+(t.slug===slug?"bg-[#0F172A] text-white":"bg-white hover:bg-[#E6F3F1]")}>#{t.label}</Link>)}</nav>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{items.map(item=><PublicationCard key={item.kind+item.slug} item={item}/>)}</div>
  </main>;
}
