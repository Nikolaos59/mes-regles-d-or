import type { Publication } from "@/data/publications";
export const publicationThemes = [
 {id:"logement",label:"Logement & assurance",description:"Habiter, louer et réagir à un sinistre.",color:"#235F75",background:"#E7F1F4",icon:"house"},
 {id:"travaux",label:"Travaux & artisans",description:"Préparer un chantier et faire face aux difficultés.",color:"#904727",background:"#F7EDE5",icon:"tools"},
 {id:"automobile",label:"Automobile",description:"Vérifier un véhicule avant de s’engager.",color:"#3B518C",background:"#EBEFF9",icon:"car"},
 {id:"achats",label:"Achats & budget",description:"Comparer, vérifier et acheter avec du recul.",color:"#38624C",background:"#EAF2EB",icon:"bag"},
 {id:"travail",label:"Travail & décisions",description:"Mieux échanger et structurer ses choix.",color:"#715180",background:"#F1EBF5",icon:"work"},
 {id:"projets",label:"Entreprendre",description:"Tester ses idées et apprendre de ses décisions.",color:"#72591D",background:"#F5F0DF",icon:"idea"},
] as const;
export type PublicationTheme = typeof publicationThemes[number];
export function publicationTheme(item: Publication): PublicationTheme {
 const slugs: Record<string, PublicationTheme["id"]> = {
 "degat-des-eaux-bons-reflexes":"logement", "proprietaire-refuse-travaux":"logement",
 "artisan-abandon-chantier":"travaux", "choisir-un-artisan":"travaux",
 "acheter-une-voiture-occasion":"automobile", "acheter-en-ligne-avec-methode":"achats", "preparer-une-decision-importante":"achats",
 };
 const id=slugs[item.slug] ?? (item.categoryId === "entrepreneuriat" ? "projets" : "travail");
 return publicationThemes.find(theme=>theme.id===id)!;
}
