import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const source = await readFile(new URL("../src/lib/seo.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 } });
async function loadSeo(siteUrl = "", noindex = "false") {
  const originalUrl = process.env.SITE_URL;
  const originalNoindex = process.env.SITE_NOINDEX;
  try {
    process.env.SITE_URL = siteUrl;
    process.env.SITE_NOINDEX = noindex;
    const code = outputText + `\n// ${siteUrl} ${noindex}`;
    return await import(`data:text/javascript;base64,${Buffer.from(code).toString("base64")}`);
  } finally {
    if (originalUrl === undefined) delete process.env.SITE_URL;
    else process.env.SITE_URL = originalUrl;
    if (originalNoindex === undefined) delete process.env.SITE_NOINDEX;
    else process.env.SITE_NOINDEX = originalNoindex;
  }
}
const local = await loadSeo();
const live = await loadSeo("https://example.com");
const preview = await loadSeo("https://example.com", "true");
const page = { title: "Un principe utile", description: "Un conseil concret", path: "/regles/un-principe" };

test("public origin is optional and normalized; invalid configurations fail", () => {
  assert.equal(local.resolveSiteOrigin("  "), undefined);
  assert.equal(local.resolveSiteOrigin("https://example.com/"), "https://example.com");
  for (const value of ["http://example.com", "https://example.com/path", "https://example.com?q=1", "https://example.com#x", "https://user:password@example.com", "https://localhost", "invalid"]) {
    assert.throws(() => local.resolveSiteOrigin(value));
  }
});

test("unconfigured builds never publish localhost canonicals or sitemap entries", () => {
  const metadata = local.createPageMetadata(page);
  assert.equal(metadata.robots.index, false);
  assert.equal(metadata.alternates, undefined);
  assert.equal(metadata.openGraph.images, undefined);
  assert.deepEqual(local.createSitemap(["/"], undefined), []);
});

test("published pages have their own canonical, title, image and locale", () => {
  const metadata = live.createPageMetadata({ ...page, type: "article" });
  assert.equal(metadata.robots.index, true);
  assert.equal(metadata.alternates.canonical, "https://example.com/regles/un-principe");
  assert.equal(metadata.openGraph.type, "article");
  assert.equal(metadata.openGraph.locale, "fr_FR");
  assert.equal(metadata.openGraph.title, page.title);
  assert.equal(metadata.openGraph.images[0].url, "https://example.com/share-card.png");
  assert.equal(metadata.twitter.card, "summary_large_image");
});

test("search and pending content remain noindex without inherited home canonicals", () => {
  const metadata = live.createPageMetadata({ ...page, path: "/recherche", noindex: true });
  assert.equal(metadata.robots.index, false);
  assert.equal(metadata.robots.follow, true);
  assert.equal(metadata.alternates, undefined);
});

test("preview environment remains noindex even with a configured domain", () => {
  assert.equal(preview.isIndexable, false);
  assert.equal(preview.createPageMetadata(page).robots.index, false);
});

test("sitemap covers published content only and deduplicates URLs", () => {
  const paths = live.publishedPaths([{ slug: "un-principe" }], [{ href: "/categories/cybersecurite" }]);
  assert.equal(paths.length, 6);
  for (const path of ["/recherche", "/guides", "/blog"]) assert.ok(!paths.includes(path));
  const sitemap = live.createSitemap([...paths, "/"], "https://example.com");
  assert.equal(sitemap.length, 6);
  assert.ok(sitemap.every((entry) => entry.url.startsWith("https://example.com/")));
  assert.ok(sitemap.every((entry) => entry.lastModified === undefined));
});
