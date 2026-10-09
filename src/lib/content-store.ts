import type { Rule, Publication } from '@/lib/editorial-types';
import type { Content, RecordRow } from '@/lib/cms-types';
import { getBindings } from '@/lib/platform';

function orderContent(a: Content, b: Content) {
  return (a.order ?? 9999) - (b.order ?? 9999) || a.title.localeCompare(b.title, 'fr');
}

export async function getPublished(): Promise<(Rule | Publication)[]> {
  const db = getBindings().DB;
  if (!db) return [];
  const { results } = await db.prepare(
    'SELECT id,published_json FROM content WHERE deleted_at IS NULL AND published_json IS NOT NULL ORDER BY id',
  ).all<Pick<RecordRow, 'id' | 'published_json'>>();
  return results.flatMap(row => {
    if (!row.published_json) return [];
    try { return [JSON.parse(row.published_json) as Content]; }
    catch { return []; }
  }).sort(orderContent);
}

export async function getPublications(): Promise<Publication[]> {
  return (await getPublished()).filter((item): item is Publication => 'kind' in item);
}

export async function getRules(): Promise<Rule[]> {
  return (await getPublished()).filter((item): item is Rule => !('kind' in item));
}

export async function getRuleBySlug(slug: string) {
  return (await getRules()).find(item => item.slug === slug);
}

export async function getRulesByCategory(categoryId: string) {
  return (await getRules()).filter(item => item.categoryId === categoryId);
}
