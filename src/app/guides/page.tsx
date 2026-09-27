import { createPageMetadata } from "@/lib/seo";
import PublicationPending from "@/components/PublicationPending";

export const metadata = createPageMetadata({
  title: "Guides pratiques",
  description: "Des guides pratiques pour appliquer les règles d’or aux situations du quotidien. Bientôt disponibles.",
  path: "/guides",
  noindex: true,
});

export default function GuidesPage() {
  return <PublicationPending eyebrow="Les guides pratiques" title="Des principes aux situations concrètes." description="Achat d’une voiture, choix d’un artisan, achats en ligne : nos guides vous aideront à poser les bonnes questions et à préparer vos décisions. Ils seront disponibles prochainement." />;
}
