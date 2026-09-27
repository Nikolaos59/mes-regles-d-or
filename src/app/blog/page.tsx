import { createPageMetadata } from "@/lib/seo";
import { publications } from "@/data/publications";
import PublicationCard from "@/components/PublicationCard";
export const metadata = createPageMetadata({title:"Le journal",description:"Des réflexions pour faire vivre les règles d’or dans les décisions du quotidien.",path:"/blog"});
export default function Page() { return <main className="container-mro section-mro"><p className="eyebrow">Le journal</p><h1 className="heading-display mt-7 max-w-4xl text-balance">Prendre le temps de comprendre.</h1><p className="mt-8 max-w-3xl text-xl leading-9 text-[#6B7280]">Des réflexions pour faire vivre les règles d’or dans les décisions du quotidien.</p><div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-2">{publications.filter(item => item.kind === "blog").map(item=><PublicationCard key={item.slug} item={item}/>)}</div></main>; }
