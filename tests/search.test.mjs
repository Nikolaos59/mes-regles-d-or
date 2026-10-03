import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

// These modules only import types; transpiling keeps tests independent of Node's TS support.
async function loadTypeScript(path) {
  const source = await readFile(new URL(path, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
}

const { rules } = await loadTypeScript("../src/data/rules.ts");
const { categories } = await loadTypeScript("../src/data/categories.ts");
const { searchRules, readSearchParam, MAX_QUERY_LENGTH } = await loadTypeScript("../src/lib/search.ts");
const ids = (query, category = "") => searchRules(rules, categories, query, category).map((rule) => rule.id);

test("collection: 82 unique rules, existing category distribution", () => {
  assert.equal(rules.length, 82);
  assert.equal(new Set(rules.map((rule) => rule.slug)).size, 82);
  assert.deepEqual(rules.map((rule) => rule.id), Array.from({ length: 82 }, (_, i) => i + 1));
  assert.equal(categories.length, 5);
  for (const category of categories) {
    const count = ids("", category.id).length;
    assert.equal(count, category.id === "cybersecurite" ? 21 : category.id === "ia-numerique" ? 16 : 15);
    assert.equal(category.ruleCount, count);
  }
  assert.equal(rules[0].slug, "01-ne-jamais-decider-sous-pression");
});

test("added rules include editorial text, a reflex and a final golden rule", () => {
  const addedRules = rules.slice(75);
  assert.equal(addedRules.length, 7);
  for (const rule of addedRules) {
    assert.ok(rule.title.trim());
    assert.ok(rule.summary.trim());
    assert.match(rule.detail, /Le bon réflexe :/);
    assert.match(rule.detail, /Règle d'Or\s*:/);
  }
});

test("merged articles preserve all 12 ideas without duplicate rules", () => {
  for (const id of [1, 2, 17, 18]) {
    const rule = rules.find((item) => item.id === id);
    assert.match(rule.detail, /Le bon réflexe :/);
    assert.match(rule.detail, /Règle d'Or\s*:/);
  }
});

test("search ignores accents, case, extra whitespace and apostrophe variants", () => {
  assert.deepEqual(ids("  DÉCISION   "), ids("decision"));
  assert.ok(ids("decision").includes(1));
  assert.deepEqual(ids("l’identité"), ids("l'identite"));
  assert.ok(ids("mot de passe").includes(3));
});

test("terms can match across fields and are combined with the category", () => {
  assert.ok(ids("cybersecurite pression").includes(1));
  assert.deepEqual(ids("pression", "entrepreneuriat"), []);
  assert.equal(ids("cybersecurite").length, 21);
  assert.ok(ids("gestionnaire").includes(3));
});

test("internal identifiers are not searchable rule numbers", () => {
  assert.deepEqual(ids("01"), []);
  assert.deepEqual(ids("75"), []);
  assert.ok(ids("pression").includes(1));
});

test("empty search returns everything; unknown terms and categories return nothing", () => {
  assert.equal(ids("   ").length, 82);
  assert.deepEqual(ids("xyzintrouvable"), []);
  assert.deepEqual(ids("", "inconnu"), []);
});

test("URL parameters are bounded and repeated parameters use the first value", () => {
  assert.equal(readSearchParam(undefined), "");
  assert.equal(readSearchParam([]), "");
  assert.equal(readSearchParam([" budget ", "fraude"]), "budget");
  assert.equal(readSearchParam("x".repeat(500)).length, MAX_QUERY_LENGTH);
});

const { verifiedGuides } = await loadTypeScript("../src/data/guides-verified.ts");
const { publicationTheme, publicationThemes } = await loadTypeScript("../src/data/publication-themes.ts");
const { searchPublications } = await loadTypeScript("../src/lib/search.ts");

test("guides: search finds body text, tolerates accents and respects domains", () => {
  const find = (q, domain = "") => searchPublications(verifiedGuides, q, domain).map(item => item.slug);
  assert.ok(find("COLIS introuvable").includes("colis-livre-introuvable"));
  assert.ok(find("depot garantie").includes("depot-garantie-restitution"));
  assert.ok(find("redirections").includes("boite-mail-piratee"));
  assert.deepEqual(find("redirections", "argent-consommation"), []);
  assert.deepEqual(find("termeinexistant"), []);
  assert.equal(find("").length, verifiedGuides.length);
});

test("guides: every new article has a valid theme, source and distinct URL", () => {
  const slugs = new Set();
  for (const item of verifiedGuides) {
    assert.ok(!slugs.has(item.slug));
    slugs.add(item.slug);
    assert.ok(categories.some(category => category.id === item.categoryId));
    assert.ok(publicationThemes.some(theme => theme.id === item.themeId));
    assert.equal(publicationTheme(item).id, item.themeId);
    assert.ok(item.sections.length >= 3);
    assert.ok(item.checklist.length >= 3);
    assert.match(item.reviewedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(item.sources.some(source => source.kind === "reference" && new URL(source.url).protocol === "https:"));
  }
});
