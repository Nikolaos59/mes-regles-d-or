import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { rules } from "@/data/rules";
import { createSitemap, isIndexable, publishedPaths, siteOrigin } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return createSitemap(publishedPaths(rules, categories), isIndexable ? siteOrigin : undefined);
}
