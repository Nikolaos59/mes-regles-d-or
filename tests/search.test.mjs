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

test("collection: 75 unique rules, 15 per official category", () => {
  assert.equal(rules.length, 75);
  assert.equal(new Set(rules.map((rule) => rule.slug)).size, 75);
  assert.deepEqual(rules.map((rule) => rule.id), Array.from({ length: 75 }, (_, i) => i + 1));
  assert.equal(categories.length, 5);
  for (const category of categories) assert.equal(ids("", category.id).length, 15);
  assert.equal(rules[0].slug, "01-ne-jamais-decider-sous-pression");
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
  assert.equal(ids("cybersecurite").length, 15);
  assert.ok(ids("gestionnaire").includes(3));
});

test("internal identifiers are not searchable rule numbers", () => {
  assert.deepEqual(ids("01"), []);
  assert.deepEqual(ids("75"), []);
  assert.ok(ids("pression").includes(1));
});

test("empty search returns everything; unknown terms and categories return nothing", () => {
  assert.equal(ids("   ").length, 75);
  assert.deepEqual(ids("xyzintrouvable"), []);
  assert.deepEqual(ids("", "inconnu"), []);
});

test("URL parameters are bounded and repeated parameters use the first value", () => {
  assert.equal(readSearchParam(undefined), "");
  assert.equal(readSearchParam([]), "");
  assert.equal(readSearchParam([" budget ", "fraude"]), "budget");
  assert.equal(readSearchParam("x".repeat(500)).length, MAX_QUERY_LENGTH);
});
