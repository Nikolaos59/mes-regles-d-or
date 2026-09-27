import { publications } from "@/data/publications";
import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { rules } from "@/data/rules";
import { createSitemap, isIndexable, publishedPaths, siteOrigin } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return createSitemap([...publishedPaths(rules, categories), "/guides", "/blog", ...publications.map(item => `/${item.kind}/${item.slug}`)], isIndexable ? siteOrigin : undefined);
}
