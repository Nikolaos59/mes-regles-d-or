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
  { id: "management", name: "Management", shortName: "Management", description: "Les contenus de cette catégorie seront bientôt disponibles.", href: "/categories/management", icon: "briefcase", number: "04" },
  { id: "travail", name: "Travail", shortName: "Travail", description: "Les contenus de cette catégorie seront bientôt disponibles.", href: "/categories/travail", icon: "briefcase", number: "05" },
  { id: "argent", name: "Argent", shortName: "Argent", description: "Les contenus de cette catégorie seront bientôt disponibles.", href: "/categories/argent", icon: "wallet", number: "06" },
  { id: "consommation", name: "Consommation", shortName: "Consommation", description: "Les contenus de cette catégorie seront bientôt disponibles.", href: "/categories/consommation", icon: "wallet", number: "07" },
  { id: "entrepreneuriat", name: "Entrepreneuriat", shortName: "Entrepreneuriat", description: "Les contenus de cette catégorie seront bientôt disponibles.", href: "/categories/entrepreneuriat", icon: "rocket", number: "08" },
  { id: "tpe-pme", name: "TPE-PME", shortName: "TPE-PME", description: "Les contenus de cette catégorie seront bientôt disponibles.", href: "/categories/tpe-pme", icon: "rocket", number: "09" },
  { id: "tourisme", name: "Tourisme", shortName: "Tourisme", description: "Les contenus de cette catégorie seront bientôt disponibles.", href: "/categories/tourisme", icon: "spark", number: "10" },
  { id: "voyages", name: "Voyages", shortName: "Voyages", description: "Les contenus de cette catégorie seront bientôt disponibles.", href: "/categories/voyages", icon: "spark", number: "11" },
];
