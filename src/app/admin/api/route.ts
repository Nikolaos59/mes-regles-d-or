import { getBindings } from '@/lib/platform';
import { authenticate, sameOrigin } from '@/lib/admin-auth';
import { validateContent } from '@/lib/cms-validation';
import type { Rule, Publication } from '@/lib/editorial-types';
import type { RecordRow, Content } from '@/lib/cms-types';
export const dynamic='force-dynamic';
const json=(data:unknown,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'private, no-store','X-Robots-Tag':'noindex, nofollow'}});
export async function GET(request:Request){
 if(!await authenticate(request.headers,request.url))return json({error:'Accès réservé à l’administrateur.'},403);
 const db=getBindings().DB;if(!db)return json({error:'Base D1 indisponible. Utilisez l’aperçu Cloudflare.'},503);
 const url=new URL(request.url),id=url.searchParams.get('id'),includeArchived=url.searchParams.get('archived')==='1';
 if(id){const row=await db.prepare('SELECT * FROM content WHERE id=?'+(includeArchived?'':' AND deleted_at IS NULL')).bind(id).first<RecordRow>();if(!row)return json({error:'Contenu introuvable.'},404);const history=await db.prepare('SELECT id,version,action,actor,created_at FROM revisions WHERE content_id=? ORDER BY version DESC LIMIT 30').bind(id).all();return json({row,history:history.results});}
 const rows=await db.prepare('SELECT id,draft_json,published_json,version,updated_at,updated_by,deleted_at FROM content '+(includeArchived?'':'WHERE deleted_at IS NULL ')+'ORDER BY id').all<RecordRow>();return json({rows:rows.results});
}
export async function POST(request:Request){
 const actor=await authenticate(request.headers,request.url);if(!actor)return json({error:'Accès refusé.'},403);
 if(!sameOrigin(request))return json({error:'Origine de la demande refusée.'},403);
 const db=getBindings().DB;if(!db)return json({error:'Base indisponible.'},503);
 try{
  const raw=await request.text();if(raw.length>200000)return json({error:'Contenu trop volumineux.'},413);
  const body=JSON.parse(raw);
  if(body.action==='create'){
   if(!['rule','guides','blog'].includes(body.type)||typeof body.title!=='string'||!body.title.trim()||body.title.length>250)return json({error:'Type ou titre invalide.'},400);
   const slug=body.title.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/['’]/g,'-').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,70);if(!slug)return json({error:'Le titre doit contenir des lettres ou des chiffres.'},400);
   let id:string,content:Content;
   if(body.type==='rule'){
    const existing=await db.prepare("SELECT draft_json FROM content WHERE id LIKE 'regles/%'").all<{draft_json:string}>();const next=Math.max(0,...existing.results.map(r=>Number((JSON.parse(r.draft_json) as {id?:number}).id)||0))+1;const number=String(next).padStart(2,'0'),ruleSlug=`${number}-${slug}`;id=`regles/${ruleSlug}`;
    const original:Rule={id:next,number,slug:ruleSlug,title:body.title.trim(),summary:'Résumé à rédiger.',detail:'Texte éditorial à rédiger.',categoryId:'cybersecurite',order:next-1,homeRank:0};content=validateContent(original,original);
   }else{
    id=`${body.type}/${slug}`;const original:Publication={kind:body.type,themeId:'numerique',slug,title:body.title.trim(),description:'Résumé à rédiger.',categoryId:'ia-numerique',intro:'Introduction à rédiger.',sections:[{title:'À compléter',paragraphs:['Texte à rédiger.']}],checklist:[],sources:[],order:9999,homeRank:0,tagSlugs:[]};content=validateContent(original,original);
   }
   const now=new Date().toISOString(),change=crypto.randomUUID(),draft=JSON.stringify(content);
   try{await db.batch([db.prepare('INSERT INTO content(id,draft_json,published_json,version,updated_at,updated_by,last_change,deleted_at) VALUES(?,?,NULL,1,?,?,?,NULL)').bind(id,draft,now,actor,change),db.prepare('INSERT INTO revisions(id,content_id,version,snapshot_json,action,actor,created_at) VALUES(?,?,1,?,?,?,?)').bind(change,id,draft,'create',actor,now)]);}catch{return json({error:'Un contenu portant cette adresse existe déjà.'},409);}
   return json({ok:true,id,version:1},201);
  }
  if(typeof body.id!=='string'||!Number.isInteger(body.version)||!['save','publish','restore','unpublish','archive','unarchive'].includes(body.action))return json({error:'Demande invalide.'},400);
  const row=await db.prepare('SELECT * FROM content WHERE id=?').bind(body.id).first<RecordRow>();if(!row)return json({error:'Contenu introuvable.'},404);
  if(row.version!==body.version)return json({error:'Ce contenu a été modifié ailleurs. Rechargez avant de continuer.'},409);
  if(body.action==='archive'||body.action==='unarchive'){
   const archived=body.action==='archive',now=new Date().toISOString(),change=crypto.randomUUID();
   const result=await db.batch([db.prepare('UPDATE content SET deleted_at=?,version=version+1,updated_at=?,updated_by=?,last_change=? WHERE id=? AND version=? AND ((?=1 AND deleted_at IS NULL) OR (?=0 AND deleted_at IS NOT NULL))').bind(archived?now:null,now,actor,change,row.id,row.version,archived?1:0,archived?1:0),db.prepare('INSERT INTO revisions(id,content_id,version,snapshot_json,action,actor,created_at) SELECT ?,id,version,draft_json,?,?,? FROM content WHERE id=? AND last_change=?').bind(change,body.action,actor,now,row.id,change)]);
   if(!result[0].meta.changes)return json({error:'Modification concurrente ou état déjà changé.'},409);return json({ok:true,version:row.version+1});
  }
  let content:Content=JSON.parse(row.draft_json);
  if(body.action==='restore'){
   const revision=await db.prepare('SELECT snapshot_json FROM revisions WHERE id=? AND content_id=?').bind(String(body.revisionId),row.id).first<{snapshot_json:string}>();if(!revision)return json({error:'Version introuvable.'},404);content=validateContent(JSON.parse(revision.snapshot_json),content);
  }else if(body.action!=='unpublish')content=validateContent(body.content,content);
  const draft=JSON.stringify(content),published=body.action==='publish'?draft:body.action==='unpublish'?null:row.published_json;
  const now=new Date().toISOString(),change=crypto.randomUUID();
  const result=await db.batch([
   db.prepare('UPDATE content SET draft_json=?,published_json=?,version=version+1,updated_at=?,updated_by=?,last_change=? WHERE id=? AND version=? AND deleted_at IS NULL').bind(draft,published,now,actor,change,row.id,row.version),
   db.prepare('INSERT INTO revisions (id,content_id,version,snapshot_json,action,actor,created_at) SELECT ?,id,version,draft_json,?,?,? FROM content WHERE id=? AND last_change=?').bind(change,body.action,actor,now,row.id,change)
  ]);
  if(!result[0].meta.changes)return json({error:'Modification concurrente. Rechargez le contenu.'},409);
  return json({ok:true,version:row.version+1});
 }catch(error){return json({error:error instanceof Error && !/SQL|D1|database/i.test(error.message)?error.message:'Impossible d’enregistrer le contenu.'},400);}
}
