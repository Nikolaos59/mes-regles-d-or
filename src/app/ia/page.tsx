export const dynamic="force-dynamic";
import TopicPage from "@/components/TopicPage";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({title:"Intelligence artificielle",description:"Vérifier les réponses de l’IA, protéger ses données et utiliser ces outils avec méthode.",path:"/ia"});
export default function Page(){return <TopicPage id="ia"/>;}
