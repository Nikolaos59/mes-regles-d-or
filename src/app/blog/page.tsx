import { createPageMetadata } from "@/lib/seo";
import PublicationPending from "@/components/PublicationPending";

export const metadata = createPageMetadata({
  title: "Le journal",
  description: "Le journal de Mes Règles d’Or : réflexions et éclairages pour mieux décider. Premiers articles à venir.",
  path: "/blog",
  noindex: true,
});

export default function BlogPage() {
  return <PublicationPending eyebrow="Le journal" title="Prendre le temps de comprendre." description="Des réflexions et des éclairages pour approfondir les principes de la bibliothèque. Les premiers articles sont en préparation." />;
}
