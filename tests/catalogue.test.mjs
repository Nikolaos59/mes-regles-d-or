import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';
const cache = new Map();
async function moduleUrl(name) {
  if (cache.has(name)) return cache.get(name);
  const source = await readFile(new URL(`../src/data/${name}.ts`, import.meta.url), 'utf8');
  let { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 } });
  for (const match of [...outputText.matchAll(/from ["']@\/data\/([^"']+)["']/g)]) {
    outputText = outputText.replace(match[0], `from "${await moduleUrl(match[1])}"`);
  }
  const url = `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`;
  cache.set(name, url);
  return url;
}
const { publications } = await import(await moduleUrl('publications'));
const { publicationTags } = await import(await moduleUrl('publication-tags'));
test('catalogue: at least 100 unique guides with usable content, sources and tags', () => {
  const guides = publications.filter(item => item.kind === 'guides');
  assert.ok(guides.length >= 100, `${guides.length} guides`);
  assert.equal(new Set(publications.map(item => `${item.kind}/${item.slug}`)).size, publications.length);
  for (const guide of guides) {
    assert.match(guide.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(guide.sections.length >= 3, guide.slug);
    assert.ok(guide.checklist.length >= 3, guide.slug);
    assert.ok(publicationTags(guide).length > 0, guide.slug);
    assert.ok(guide.sections.every(section => section.paragraphs.every(text => text.trim().length > 20)), guide.slug);
  }
});
