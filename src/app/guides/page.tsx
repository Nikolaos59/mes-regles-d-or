import { createPageMetadata } from "@/lib/seo";
import { publications } from "@/data/publications";
import PublicationCard from "@/components/PublicationCard";
export const metadata = createPageMetadata({title:"Guides pratiques",description:"Des méthodes à appliquer, des exemples et des listes de vérification pour préparer vos décisions.",path:"/guides"});
export default function Page() { return <main className="container-mro section-mro"><p className="eyebrow">Guides pratiques</p><h1 className="heading-display mt-7 max-w-4xl text-balance">Des principes aux situations concrètes.</h1><p className="mt-8 max-w-3xl text-xl leading-9 text-[#6B7280]">Des méthodes à appliquer, des exemples et des listes de vérification pour préparer vos décisions.</p><div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{publications.filter(item => item.kind === "guides").map(item=><PublicationCard key={item.slug} item={item}/>)}</div></main>; }
