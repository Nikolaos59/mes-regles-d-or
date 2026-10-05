import type { Publication, Rule } from "@/lib/editorial-types";
import type { Category } from "@/data/categories";

export const MAX_QUERY_LENGTH = 120;

export function normalizeSearch(value: string): string {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("fr").replace(/œ/g, "oe").replace(/æ/g, "ae")
    .replace(/[^a-z0-9]+/g, " ").trim();
}

export function readSearchParam(value: string | string[] | undefined): string {
  return (Array.isArray(value) ? value[0] ?? "" : value ?? "").trim().slice(0, MAX_QUERY_LENGTH);
}

export function searchRules(
  rules: readonly Rule[],
  categories: readonly Category[],
  query: string,
  categoryId = "",
): readonly Rule[] {
  const terms = normalizeSearch(query.slice(0, MAX_QUERY_LENGTH)).split(/\s+/).filter(Boolean);
  return rules.filter((rule) => {
    if (categoryId && rule.categoryId !== categoryId) return false;
    const category = categories.find((item) => item.id === rule.categoryId);
    const text = normalizeSearch([rule.title, rule.summary, rule.detail, category?.name].join(" "));
    return terms.every((term) => text.includes(term));
  });
}

export function searchPublications(
  items: readonly Publication[],
  query: string,
  categoryId = "",
): readonly Publication[] {
  const terms = normalizeSearch(query.slice(0, MAX_QUERY_LENGTH)).split(/\s+/).filter(Boolean);
  return items.filter((item) => {
    if (categoryId && item.categoryId !== categoryId) return false;
    const text = normalizeSearch([
      item.title, item.description, item.intro,
      ...item.sections.flatMap(section => [section.title, ...section.paragraphs]),
      ...item.checklist,
    ].join(" "));
    return terms.every(term => text.includes(term));
  });
}
