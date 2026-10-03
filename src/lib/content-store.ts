import { cache } from 'react';
import { getBindings } from '@/lib/platform';
import { rules as seedRules, type Rule } from '@/data/rules';
import { publications as seedPublications, type Publication } from '@/data/publications';
import type { Content } from './cms-types';
export const getPublished = cache(async ():Promise<Content[]> => {
 const db=getBindings().DB;
 if(!db)return [...seedRules,...seedPublications];
 const {results}=await db.prepare('SELECT published_json FROM content WHERE published_json IS NOT NULL AND deleted_at IS NULL').all<{published_json:string}>();
 return results.map(row=>JSON.parse(row.published_json) as Content).sort((a,b)=>(a.order??0)-(b.order??0)||a.title.localeCompare(b.title,'fr'));
});
export async function getPublications():Promise<Publication[]> {return (await getPublished()).filter((item):item is Publication=>'kind' in item);}
export async function getRules():Promise<Rule[]> {return (await getPublished()).filter((item):item is Rule=>!('kind' in item));}
export async function getRuleBySlug(slug:string){return (await getRules()).find(item=>item.slug===slug);}
export async function getRulesByCategory(categoryId:string){return (await getRules()).filter(item=>item.categoryId===categoryId);}
