import type { Publication } from "./editorial-types";

export function readingMinutes(item: Publication) {
  const words = [
    item.intro,
    ...item.sections.flatMap((section) => [section.title, ...section.paragraphs]),
    ...item.checklist,
  ].join(" ").split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 180));
}
