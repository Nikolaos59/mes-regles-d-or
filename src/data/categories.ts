import type { RuleCategoryId } from "@/lib/editorial-types";

export type CategoryIcon =
  | "shield"
  | "spark"
  | "briefcase"
  | "wallet"
  | "rocket";

export type Category = {
  id: RuleCategoryId;
  name: string;
  shortName: string;
  description: string;
  href: string;
  icon: CategoryIcon;
  number: string;
};

// Categories currently offered to readers and editors.
export const categories: readonly Category[] = [
  { id: "cybersecurite", name: "Cybersécurité", shortName: "Cybersécurité", description: "Se protéger des fraudes, des arnaques et des mauvaises pratiques numériques.", href: "/categories/cybersecurite", icon: "shield", number: "01" },
  { id: "ia", name: "IA", shortName: "IA", description: "Utiliser l’intelligence artificielle avec méthode et discernement.", href: "/categories/ia", icon: "spark", number: "02" },
  { id: "numerique", name: "Numérique", shortName: "Numérique", description: "Mieux choisir et utiliser les outils et services numériques.", href: "/categories/numerique", icon: "spark", number: "03" },
  { id: "travaux", name: "Travaux", shortName: "Travaux", description: "Préparer et suivre des travaux avec méthode.", href: "/categories/travaux", icon: "briefcase", number: "04" },
  { id: "voiture", name: "Voiture", shortName: "Voiture", description: "Prendre des décisions éclairées autour de la voiture et des déplacements.", href: "/categories/voiture", icon: "wallet", number: "05" },
  { id: "banque", name: "Banque", shortName: "Banque", description: "Gérer son budget, ses services bancaires et ses engagements financiers.", href: "/categories/banque", icon: "wallet", number: "06" },
  { id: "consommation", name: "Consommation", shortName: "Consommation", description: "Acheter, comparer et faire valoir ses droits de consommateur.", href: "/categories/consommation", icon: "wallet", number: "07" },
  { id: "voyage", name: "Voyage", shortName: "Voyage", description: "Préparer ses déplacements et connaître les bons réflexes en voyage.", href: "/categories/voyage", icon: "spark", number: "08" },
];

// Retained only so editors can review and reclassify existing content safely.
export const legacyCategories: readonly Category[] = [
  { id: "ia-numerique", name: "Ancienne catégorie : IA & Numérique", shortName: "Ancienne catégorie : IA & Numérique", description: "Contenus à reclasser.", href: "/categories/ia-numerique", icon: "spark", number: "90" },
  { id: "management-travail", name: "Ancienne catégorie : Management & Travail", shortName: "Ancienne catégorie : Management & Travail", description: "Contenus à reclasser.", href: "/categories/management-travail", icon: "briefcase", number: "91" },
  { id: "argent-consommation", name: "Ancienne catégorie : Argent & Consommation", shortName: "Ancienne catégorie : Argent & Consommation", description: "Contenus à reclasser.", href: "/categories/argent-consommation", icon: "wallet", number: "92" },
  { id: "entrepreneuriat", name: "Ancienne catégorie : Entrepreneuriat & TPE-PME", shortName: "Ancienne catégorie : Entrepreneuriat & TPE-PME", description: "Contenus à reclasser.", href: "/categories/entrepreneuriat", icon: "rocket", number: "93" },
];

export const editorialCategories: readonly Category[] = [...categories, ...legacyCategories];
