import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { publications } from "@/data/publications";
import { publicationThemes, publicationTheme } from "@/data/publication-themes";
import PublicationCard from "@/components/PublicationCard";
import ThemeIcon from "@/components/ThemeIcon";
export const metadata = createPageMetadata({title:"Guides pratiques",description:"Trouvez un guide par situation : logement, travaux, automobile, achats, travail et entrepreneuriat.",path:"/guides"});
export default function Page() {
 const guides=publications.filter(item=>item.kind==="guides");
 const themes=publicationThemes.filter(theme=>guides.some(item=>publicationTheme(item).id===theme.id));
 return <main className="container-mro py-10 sm:py-16"><nav aria-label="Fil d’Ariane" className="mb-8 flex gap-3 text-sm"><Link href="/">Accueil</Link><span aria-hidden="true">/</span><span aria-current="page">Guides pratiques</span></nav>
 <header className="rounded-[28px] bg-[#0F172A] p-7 text-white sm:p-12"><p className="text-sm uppercase tracking-widest text-[#E3C486]">Les guides pratiques</p><h1 className="mt-5 text-[clamp(2.4rem,5vw,4rem)] font-medium leading-tight tracking-tight">Quelle situation rencontrez-vous ?</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">Choisissez un thème pour trouver les démarches, les points à vérifier et les bons réflexes.</p></header>
 <nav aria-label="Thèmes des guides" className="my-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{themes.map(theme=><a key={theme.id} href={`#${theme.id}`} className="flex items-center gap-4 rounded-2xl border border-black/10 p-5 transition-shadow hover:shadow-md" style={{background:theme.background,color:theme.color}}><ThemeIcon theme={theme}/><span className="font-semibold">{theme.label}</span><span className="ml-auto" aria-hidden="true">↓</span></a>)}</nav>
 {themes.map(theme=><section key={theme.id} id={theme.id} className="scroll-mt-28 py-9"><div className="mb-7 flex items-center gap-5 border-b border-black/10 pb-6"><span className="rounded-2xl p-4" style={{background:theme.background,color:theme.color}}><ThemeIcon theme={theme}/></span><div><h2 className="text-3xl font-medium tracking-tight">{theme.label}</h2><p className="mt-2 text-[#6B7280]">{theme.description}</p></div></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{guides.filter(item=>publicationTheme(item).id===theme.id).map(item=><PublicationCard key={item.slug} item={item}/>)}</div></section>)}
 </main>;
}
