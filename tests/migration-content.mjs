import { readFile } from 'node:fs/promises';

const unquote = value => value.slice(1, -1).replace(/''/g, "'");

export async function loadMigrationContent() {
  const rows = new Map();
  for (const filename of ['0002_initial_content.sql', '0003_deduplicated_rules.sql']) {
    const sql = await readFile(new URL(`../migrations/${filename}`, import.meta.url), 'utf8');
    for (const line of sql.split(/\r?\n/)) {
      if (!line.startsWith('INSERT OR IGNORE INTO content')) continue;
      const values = line.match(/VALUES\(('(?:''|[^'])*'),('(?:''|[^'])*'),('(?:''|[^'])*'),/);
      if (!values) continue;
      rows.set(unquote(values[1]), JSON.parse(unquote(values[2])));
    }
    if (filename === '0003_deduplicated_rules.sql') {
      for (const match of sql.matchAll(/UPDATE content SET draft_json=json_set\(draft_json,'\$\.detail','((?:''|[^'])*)'\)[\s\S]*?WHERE id='([^']+)'/g)) {
        const content = rows.get(match[2]);
        if (content) content.detail = unquote(`'${match[1]}'`);
      }
    }
  }
  return [...rows.entries()].map(([id, content]) => ({ id, content }));
}
