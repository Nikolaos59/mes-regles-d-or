import type { Rule, Publication } from '@/lib/editorial-types';
// Le site reste volontairement vide jusqu’à la remise en service du stockage éditorial.
export async function getPublished():Promise<(Rule|Publication)[]> { return []; }
export async function getPublications():Promise<Publication[]> { return []; }
export async function getRules():Promise<Rule[]> { return []; }
export async function getRuleBySlug(slug:string){return (await getRules()).find(item=>item.slug===slug);}
export async function getRulesByCategory(categoryId:string){return (await getRules()).filter(item=>item.categoryId===categoryId);}
