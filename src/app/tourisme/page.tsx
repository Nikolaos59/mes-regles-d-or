import TopicPage from "@/components/TopicPage";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({title:"Tourisme & voyages",description:"Préparer ses transports, ses réservations et ses séjours avec les bons réflexes.",path:"/tourisme"});
export default function Page(){return <TopicPage id="tourisme"/>;}
