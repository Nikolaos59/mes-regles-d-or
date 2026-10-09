import { categories as defaults, type Category } from '@/data/categories';
import { getBindings } from '@/lib/platform';

const icons = new Set<Category['icon']>(['shield', 'spark', 'briefcase', 'wallet', 'rocket']);

export async function getActiveCategories(): Promise<Category[]> {
  const db = getBindings().DB;
  if (!db) return [...defaults];
  const { results } = await db.prepare(
    'SELECT id,name,description,icon,sort_order FROM categories WHERE is_active=1 ORDER BY sort_order,id',
  ).all<{ id: string; name: string; description: string; icon: string; sort_order: number }>();
  if (!results.length) return [...defaults];
  return results.map((row, index) => {
    const fallback = defaults.find(category => category.id === row.id);
    return {
      id: row.id,
      name: row.name,
      shortName: row.name,
      description: row.description && !row.description.includes('bientôt disponibles')
        ? row.description
        : fallback?.description ?? '',
      href: `/categories/${row.id}`,
      icon: icons.has(row.icon as Category['icon']) ? row.icon as Category['icon'] : fallback?.icon ?? 'spark',
      number: String(row.sort_order).padStart(2, '0') || String(index + 1).padStart(2, '0'),
    };
  });
}
