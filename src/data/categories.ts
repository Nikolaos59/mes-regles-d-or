import type { RuleCategoryId } from "@/data/rules";

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
  ruleCount: number;
  number: string;
};

export const categories: readonly Category[] = [
  {
    id: "cybersecurite",
    name: "Cybersécurité",
    shortName: "Cybersécurité",
    description:
      "Se protéger des fraudes, des arnaques et des mauvaises pratiques numériques.",
    href: "/categories/cybersecurite",
    icon: "shield",
    ruleCount: 15,
    number: "01",
  },
  {
    id: "ia-numerique",
    name: "IA & Numérique",
    shortName: "IA & Numérique",
    description:
      "Utiliser la technologie et l'intelligence artificielle avec méthode et discernement.",
    href: "/categories/ia-numerique",
    icon: "spark",
    ruleCount: 15,
    number: "02",
  },
  {
    id: "management-travail",
    name: "Management & Travail",
    shortName: "Management & Travail",
    description:
      "Mieux communiquer, collaborer, décider et avancer dans son environnement professionnel.",
    href: "/categories/management-travail",
    icon: "briefcase",
    ruleCount: 15,
    number: "03",
  },
  {
    id: "argent-consommation",
    name: "Argent & Consommation",
    shortName: "Argent & Consommation",
    description:
      "Acheter, négocier et gérer son argent avec davantage de recul et de méthode.",
    href: "/categories/argent-consommation",
    icon: "wallet",
    ruleCount: 15,
    number: "04",
  },
  {
    id: "entrepreneuriat",
    name: "Entrepreneuriat & TPE-PME",
    shortName: "Entrepreneuriat",
    description:
      "Créer, piloter et développer une activité en gardant une vision simple et pragmatique.",
    href: "/categories/entrepreneuriat",
    icon: "rocket",
    ruleCount: 15,
    number: "05",
  },
] as const;