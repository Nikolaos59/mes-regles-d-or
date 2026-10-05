import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';
import { loadMigrationContent } from './migration-content.mjs';

const cache = new Map();
async function moduleUrl(name) {
  if (cache.has(name)) return cache.get(name);
  let { outputText } = ts.transpileModule(await readFile(new URL(`../src/data/${name}.ts`, import.meta.url), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
  });
  for (const match of [...outputText.matchAll(/from ["']@\/data\/([^"']+)["']/g)]) {
    outputText = outputText.replace(match[0], `from "${await moduleUrl(match[1])}"`);
  }
  const url = `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`;
  cache.set(name, url);
  return url;
}

const rows = await loadMigrationContent();
const content = rows.map(row => row.content);
const rules = content.filter(item => !('kind' in item));
const publications = content.filter(item => 'kind' in item);
const { publicationTags } = await import(await moduleUrl('publication-tags'));
const { publicationTheme, publicationThemes } = await import(await moduleUrl('publication-themes'));

test('D1 migrations are the source catalogue for the whole site', () => {
  assert.equal(content.length, 184);
  assert.equal(rules.length, 82);
  assert.ok(publications.length >= 100);
  assert.equal(new Set(rows.map(row => row.id)).size, rows.length);
  assert.equal(new Set(content.map(item => `${'kind' in item ? item.kind : 'regles'}/${item.slug}`)).size, content.length);
});

test('the database rules retain categories, distinct URLs, and all 12 editorial ideas', () => {
  assert.deepEqual([...rules].sort((a, b) => a.id - b.id).map(rule => rule.id), Array.from({ length: 82 }, (_, index) => index + 1));
  const counts = Object.groupBy(rules, rule => rule.categoryId);
  assert.deepEqual(Object.fromEntries(Object.entries(counts).map(([key, value]) => [key, value.length])), {
    cybersecurite: 21, 'ia-numerique': 16, 'management-travail': 15, 'argent-consommation': 15, entrepreneuriat: 15,
  });
  for (const rule of rules) {
    assert.ok(rule.title.trim());
    assert.ok(rule.summary.trim());
    assert.ok(rule.detail.trim());
  }
  for (const id of [1, 2, 17, 18, 76, 82]) {
    const rule = rules.find(item => item.id === id);
    assert.match(rule.detail, /Le bon réflexe :/);
    assert.match(rule.detail, /Règle d'Or\s*:/);
  }
});

test('D1 publications keep their theme, sources, and tags', () => {
  const guides = publications.filter(item => item.kind === 'guides');
  assert.ok(guides.length >= 100);
  const slugs = new Set();
  for (const guide of guides) {
    assert.ok(!slugs.has(guide.slug));
    slugs.add(guide.slug);
    assert.ok(publicationThemes.some(theme => theme.id === guide.themeId));
    assert.equal(publicationTheme(guide).id, guide.themeId);
    assert.ok(guide.sections.length >= 3);
    assert.ok(guide.checklist.length >= 3);
    if (guide.reviewedAt) assert.match(guide.reviewedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok((guide.sources ?? []).every(source => new URL(source.url).protocol === 'https:'));
    if (guide.sources?.length) assert.ok(guide.sources.some(source => source.kind === 'reference'));
    assert.ok(publicationTags(guide).length > 0);
  }
});
