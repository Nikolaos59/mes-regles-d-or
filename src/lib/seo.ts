import type { Metadata, MetadataRoute } from "next";

export const siteName = "Mes Règles d’Or";
export const siteDescription = "75 principes clairs et intemporels pour mieux gérer son argent, travailler, utiliser le numérique, se protéger et entreprendre.";

export function resolveSiteOrigin(value: string | undefined): string | undefined {
  if (!value?.trim()) return undefined;
  const url = new URL(value.trim());
  if (url.protocol !== "https:" || url.username || url.password || url.search || url.hash || url.pathname !== "/") {
    throw new Error("SITE_URL doit être une origine HTTPS sans chemin, identifiants, paramètres ni fragment.");
  }
  if (["localhost", "127.0.0.1", "[::1]"].includes(url.hostname)) {
    throw new Error("SITE_URL doit désigner le domaine public du site.");
  }
  return url.origin;
}

export const siteOrigin = resolveSiteOrigin(process.env.SITE_URL);
export const isIndexable = Boolean(siteOrigin) && process.env.SITE_NOINDEX !== "true";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noindex?: boolean;
};

export function createPageMetadata({ title, description, path, type = "website", noindex = false }: PageMetadata): Metadata {
  const url = siteOrigin ? new URL(path, siteOrigin).href : undefined;
  const images = siteOrigin ? [{ url: `${siteOrigin}/share-card.png`, width: 1200, height: 630, alt: "Mes Règles d’Or — 75 règles simples pour mieux décider" }] : undefined;
  return {
    title,
    description,
    alternates: url && !noindex ? { canonical: url } : undefined,
    robots: { index: isIndexable && !noindex, follow: true },
    openGraph: { type, title, description, url, siteName, locale: "fr_FR", images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export function publishedPaths(
  rules: readonly { slug: string }[],
  categories: readonly { href: string }[],
): string[] {
  return ["/", "/regles", "/categories", "/a-propos", ...categories.map((category) => category.href), ...rules.map((rule) => `/regles/${rule.slug}`)];
}

export function createSitemap(paths: readonly string[], origin: string | undefined): MetadataRoute.Sitemap {
  if (!origin) return [];
  return [...new Set(paths)].map((path) => ({ url: new URL(path, origin).href }));
}
