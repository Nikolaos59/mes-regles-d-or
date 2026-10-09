import Link from "next/link";
import { getPublications, getRulesByCategory } from "@/lib/content-store";
import { publicationThemes, publicationTheme } from "@/data/publication-themes";
import PublicationCard from "@/components/PublicationCard";
import ThemeIcon from "@/components/ThemeIcon";
export default async function TopicPage({id}:{id:"tourisme"|"ia"}) {
 const [publications,iaRules]=await Promise.all([getPublications(),id==="ia"?getRulesByCategory("ia"):Promise.resolve([])]);
 const theme=publicationThemes.find(theme=>theme.id===id)!;
 const guides=publications.filter(item=>item.kind==="guides" && publicationTheme(item).id===id);
 return <main className="container-mro py-10 sm:py-16">
 <nav aria-label="Fil d’Ariane" className="mb-8 flex gap-3 text-sm"><Link href="/">Accueil</Link><span aria-hidden="true">/</span><span aria-current="page">{theme.label}</span></nav>
 <header className="rounded-[28px] border-l-[6px] p-7 sm:p-12" style={{background:theme.background,borderColor:theme.color}}>
 <div style={{color:theme.color}}><ThemeIcon theme={theme} className="h-12 w-12"/></div>
 <p className="mt-6 text-sm font-semibold uppercase tracking-widest" style={{color:theme.color}}>Les dossiers de Mes Règles d’Or</p>
 <h1 className="mt-4 text-[clamp(2.5rem,5vw,4rem)] font-medium leading-tight tracking-tight">{theme.label}</h1>
 <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4B5563]">{theme.description}</p>
 <p className="mt-5 font-medium">{guides.length} {guides.length===1 ? "guide pratique" : "guides pratiques"}</p>
 </header>
 <section className="mt-12" aria-labelledby="topic-guides"><h2 id="topic-guides" className="mb-7 text-3xl font-medium">{id==="tourisme" ? "Avant de partir et pendant le voyage" : "Les bons réflexes avec l’IA"}</h2><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{guides.map(item=><PublicationCard key={item.slug} item={item}/>)}</div></section>
 {id==="ia" && <aside className="mt-10 rounded-3xl border border-black/10 p-7"><h2 className="text-2xl font-medium">Les règles d’or de l’IA et du numérique</h2><p className="mt-3 text-[#4B5563]">Retrouvez aussi {iaRules.length} principes pour utiliser les outils numériques avec méthode.</p><Link href="/categories/ia" className="mt-5 inline-block font-semibold underline underline-offset-4">Explorer les règles →</Link></aside>}
 <Link href="/guides" className="mt-12 inline-block font-semibold underline underline-offset-4">Tous les guides →</Link>
 </main>;
}
