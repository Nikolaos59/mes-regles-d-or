import fs from 'node:fs/promises';
import ts from 'typescript';
const cache=new Map();
async function moduleUrl(name){
 if(cache.has(name))return cache.get(name);
 let {outputText}=ts.transpileModule(await fs.readFile(new URL('../src/data/'+name+'.ts',import.meta.url),'utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2020}});
 for(const m of [...outputText.matchAll(/from ["']@\/data\/([^"']+)["']/g)])outputText=outputText.replace(m[0],`from "${await moduleUrl(m[1])}"`);
 const url='data:text/javascript;base64,'+Buffer.from(outputText).toString('base64');cache.set(name,url);return url;
}
const {rules}=await import(await moduleUrl('rules'));
const {publications}=await import(await moduleUrl('publications'));
const {publicationTheme}=await import(await moduleUrl('publication-themes'));
const {publicationTags}=await import(await moduleUrl('publication-tags'));
const quote=v=>"'"+v.replaceAll("'","''")+"'";
const now=new Date().toISOString();
const statements=[];
for(const [index,item] of [...rules,...publications].entries()){
 const kind=item.kind??'regles',id=kind+'/'+item.slug;
 const content={...item,order:index,subcategory:'',homeRank:0};
 if(item.kind){content.themeId=publicationTheme(item).id;content.tagSlugs=publicationTags(item).map(t=>t.slug);const featured=['faux-conseiller-bancaire','colis-livre-introuvable','proprietaire-refuse-travaux'];content.homeRank=featured.indexOf(item.slug)+1;if(item.slug==='acheter-une-voiture-occasion')content.subcategory='Acheter';}
 const json=JSON.stringify(content);
 statements.push(`INSERT OR IGNORE INTO content(id,draft_json,published_json,version,updated_at,updated_by) VALUES(${quote(id)},${quote(json)},${quote(json)},1,${quote(now)},'migration');`);
 statements.push(`INSERT OR IGNORE INTO revisions(id,content_id,version,snapshot_json,action,actor,created_at) VALUES(${quote('initial/'+id)},${quote(id)},1,${quote(json)},'migration','migration',${quote(now)});`);
}
await fs.writeFile(new URL('../migrations/0002_initial_content.sql',import.meta.url),statements.join('\n')+'\n');
console.log(`Migration préparée : ${rules.length} règles et ${publications.length} publications. INSERT OR IGNORE protège les modifications existantes.`);
