import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import CategoryCard from "@/components/CategoryCard";
import ThemeIcon from "@/components/ThemeIcon";
import { categories } from "@/data/categories";
import { publications } from "@/data/publications";
import { publicationThemes, publicationTheme } from "@/data/publication-themes";

export const metadata = createPageMetadata({
 title: "Les catégories",
 description: "Explorez les règles et guides par domaine : cybersécurité, IA, travail, consommation, entrepreneuriat et tourisme.",
 path: "/categories",
});
export default function CategoriesPage() {
 const topics=publicationThemes.filter(theme=>theme.id==="ia" || theme.id==="tourisme");
 return <main className="container-mro section-mro">
 <p className="eyebrow">Explorer par catégorie</p>
 <h1 className="heading-display mt-7 max-w-4xl text-balance">À chaque domaine, ses bons réflexes.</h1>
 <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6B7280]">Choisissez le sujet qui vous concerne pour retrouver les règles d’or et les guides pratiques associés.</p>
 <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
 {categories.filter(category=>category.id!=="ia-numerique").map(category=><CategoryCard key={category.id} category={category}/>)}
 {topics.map(theme=>{
 const count=publications.filter(item=>item.kind==="guides" && publicationTheme(item).id===theme.id).length;
 return <Link key={theme.id} href={"/"+theme.id} className="group flex min-h-[350px] flex-col rounded-[28px] border border-black/[0.07] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg sm:p-8" style={{background:theme.background}}>
 <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70" style={{color:theme.color}}><ThemeIcon theme={theme} className="h-6 w-6"/></span>
 <div className="mt-auto pt-16"><p className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{color:theme.color}}>{theme.id==="ia" ? "15 règles IA & numérique · " : ""}{count} {count===1 ? "guide" : "guides"}</p>
 <h2 className="text-[27px] font-semibold leading-tight tracking-tight">{theme.id==="ia" ? "IA & Numérique" : "Tourisme & voyages"}</h2><p className="mt-4 text-[15px] leading-7 text-[#6B7280]">{theme.description}</p><p className="mt-7 text-sm font-semibold">Explorer →</p></div>
 </Link>;
 })}
 </div></main>;
}
