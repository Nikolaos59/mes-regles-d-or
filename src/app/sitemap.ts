export const dynamic="force-dynamic";
import { getPublications, getRules } from "@/lib/content-store";
import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";

import { createSitemap, isIndexable, publishedPaths, siteOrigin } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
 const [rules,publications]=await Promise.all([getRules(),getPublications()]);
  return createSitemap([...publishedPaths(rules, categories), "/guides", "/blog", "/tourisme", "/ia", ...publications.map(item => `/${item.kind}/${item.slug}`)], isIndexable ? siteOrigin : undefined);
}
