import type { CategoryIcon } from "@/data/categories";

export type SiteCategory = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  href: string;
  icon: CategoryIcon;
  number: string;
};

export const siteCategories: readonly SiteCategory[] = [
  { id: "cybersecurite", name: "Cybersécurité", shortName: "Cybersécurité", description: "Les contenus de cette catégorie seront bientôt disponibles.", href: "/categories/cybersecurite", icon: "shield", number: "01" },
  { id: "ia", name: "IA", shortName: "IA", description: "Les contenus de cette catégorie seront bientôt disponibles.", href: "/categories/ia", icon: "spark", number: "02" },
  { id: "numerique", name: "Numérique", shortName: "Numérique", description: "Les contenus de cette catégorie seront bientôt disponibles.", href: "/categories/numerique", icon: "spark", number: "03" },
  { id: "travaux", name: "Travaux", shortName: "Travaux", description: "Les contenus de cette catégorie seront bientôt disponibles.", href: "/categories/travaux", icon: "briefcase", number: "04" },
  { id: "voiture", name: "Voiture", shortName: "Voiture", description: "Les contenus de cette catégorie seront bientôt disponibles.", href: "/categories/voiture", icon: "wallet", number: "05" },
  { id: "banque", name: "Banque", shortName: "Banque", description: "Les contenus de cette catégorie seront bientôt disponibles.", href: "/categories/banque", icon: "wallet", number: "06" },
  { id: "consommation", name: "Consommation", shortName: "Consommation", description: "Les contenus de cette catégorie seront bientôt disponibles.", href: "/categories/consommation", icon: "wallet", number: "07" },
  { id: "voyage", name: "Voyage", shortName: "Voyage", description: "Les contenus de cette catégorie seront bientôt disponibles.", href: "/categories/voyage", icon: "spark", number: "08" },
];
