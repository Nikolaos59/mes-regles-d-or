export type RuleCategoryId =
  | "cybersecurite"
  | "ia"
  | "numerique"
  | "travaux"
  | "voiture"
  | "banque"
  | "consommation"
  | "voyage"
  | "ia-numerique"
  | "management-travail"
  | "argent-consommation"
  | "entrepreneuriat";

export type Rule = {
  order?: number;
  subcategory?: string;
  homeRank?: number;
  id: number;
  number: string;
  slug: string;
  title: string;
  summary: string;
  detail: string;
  categoryId: RuleCategoryId;
};

export type Publication = {
  order?: number;
  homeRank?: number;
  subcategory?: string;
  tagSlugs?: string[];
  kind: "guides" | "blog";
  slug: string;
  title: string;
  description: string;
  categoryId: RuleCategoryId;
  themeId?: string;
  intro: string;
  sections: { title: string; paragraphs: string[] }[];
  checklist: string[];
  reviewedAt?: string;
  sources?: { label: string; url: string; kind: "inspiration" | "reference" }[];
};

export type EditorialContent = (Rule | Publication) & {
  order?: number;
  subcategory?: string;
  homeRank?: number;
  tagSlugs?: string[];
};
