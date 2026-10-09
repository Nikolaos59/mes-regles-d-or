import { editorialCategories } from '@/data/categories';
import { publicationThemes } from '@/data/publication-themes';
import { tags } from '@/data/publication-tags';
import type { Content } from './cms-types';
export function validateContent(value:unknown, original:Content):Content {
 if(!value || typeof value!=='object' || Array.isArray(value))throw Error('Contenu invalide.');
 const obj=value as Record<string,unknown>;
 const text=(v:unknown,max:number,required=true):string=>{if(typeof v!=='string'||v.length>max||(required&&!v.trim()))throw Error('Un texte est vide ou trop long.');return v.trim();};
 const title=text(obj.title,250), categoryId=text(obj.categoryId,80);
 if(!editorialCategories.some(c=>c.id===categoryId))throw Error('Domaine inconnu.');
 const order=obj.order??0,homeRank=obj.homeRank??0;
 if(!Number.isInteger(order)||Number(order)<0||Number(order)>10000||!Number.isInteger(homeRank)||Number(homeRank)<0||Number(homeRank)>100)throw Error('Ordre invalide.');
 if(obj.slug!==original.slug || ('kind' in original ? obj.kind!==original.kind : obj.id!==original.id))throw Error('L’adresse et le type ne peuvent pas être modifiés.');
 const shared={...original,title,categoryId:categoryId as Content['categoryId'],order:Number(order),homeRank:Number(homeRank),subcategory:text(obj.subcategory??'',80,false)};
 if(!('kind' in original))return {...shared,summary:text(obj.summary,1500),detail:text(obj.detail,12000)} as Content;
 if(!publicationThemes.some(t=>t.id===obj.themeId))throw Error('Catégorie inconnue.');
 const arr=(v:unknown,max:number):unknown[]=>{if(!Array.isArray(v)||v.length>max)throw Error('Liste invalide.');return v;};
 const sections=arr(obj.sections,30).map(v=>{if(!v||typeof v!=='object')throw Error('Section invalide.');const s=v as Record<string,unknown>;return {title:text(s.title,200),paragraphs:arr(s.paragraphs,30).map(p=>text(p,12000))};});
 if(!sections.length)throw Error('Ajoutez au moins une section.');
 const sources=arr(obj.sources??[],30).map(v=>{if(!v||typeof v!=='object')throw Error('Source invalide.');const s=v as Record<string,unknown>;const url=text(s.url,2000);const parsed=new URL(url);if(parsed.protocol!=='https:'||parsed.username||parsed.password)throw Error('Une source doit être une adresse HTTPS.');if(s.kind!=='reference'&&s.kind!=='inspiration')throw Error('Type de source invalide.');return {label:text(s.label,300),url,kind:s.kind};});
 const tagSlugs=arr(obj.tagSlugs??[],30).map(v=>text(v,80));if(tagSlugs.some(s=>!tags.some(t=>t.slug===s)))throw Error('Hashtag inconnu.');
 const reviewedAt=text(obj.reviewedAt??'',10,false);if(reviewedAt&&!/^\d{4}-\d{2}-\d{2}$/.test(reviewedAt))throw Error('Date invalide.');
 return {...shared,themeId:obj.themeId,description:text(obj.description,1500),intro:text(obj.intro,12000),sections,checklist:arr(obj.checklist,40).map(v=>text(v,2000)),sources,tagSlugs,reviewedAt:reviewedAt||undefined} as Content;
}
