import type { Publication } from "@/lib/editorial-types";
export const publicationThemes = [
 {id:"tourisme",label:"Tourisme & voyages",description:"Préparer son séjour, ses transports et ses réservations.",color:"#096F83",background:"#E2F4F5",icon:"compass"},
 {id:"ia",label:"Intelligence artificielle",description:"Utiliser l’IA avec discernement, vérifier ses réponses et protéger ses données.",color:"#6544A0",background:"#F0EAFB",icon:"spark"},
 {id:"logement",label:"Logement & assurance",description:"Habiter, louer et réagir à un sinistre.",color:"#235F75",background:"#E7F1F4",icon:"house"},
 {id:"travaux",label:"Travaux & artisans",description:"Préparer un chantier et faire face aux difficultés.",color:"#904727",background:"#F7EDE5",icon:"tools"},
 {id:"automobile",label:"Automobile",description:"Vérifier un véhicule avant de s’engager.",color:"#3B518C",background:"#EBEFF9",icon:"car"},
 {id:"achats",label:"Achats & budget",description:"Comparer, vérifier et acheter avec du recul.",color:"#38624C",background:"#EAF2EB",icon:"bag"},
 {id:"numerique",label:"Numérique & arnaques",description:"Protéger ses comptes, ses données et ses appareils.",color:"#176565",background:"#E6F3F1",icon:"shield"},
 {id:"travail",label:"Travail & décisions",description:"Mieux échanger et structurer ses choix.",color:"#715180",background:"#F1EBF5",icon:"work"},
 {id:"projets",label:"Entreprendre",description:"Tester ses idées et apprendre de ses décisions.",color:"#72591D",background:"#F5F0DF",icon:"idea"},
] as const;
export type PublicationThemeId = typeof publicationThemes[number]["id"];
export type PublicationTheme = typeof publicationThemes[number];
export function publicationTheme(item: Publication): PublicationTheme {
 const slugs: Record<string, PublicationTheme["id"]> = {
 "degat-des-eaux-bons-reflexes":"logement", "proprietaire-refuse-travaux":"logement",
 "artisan-abandon-chantier":"travaux", "choisir-un-artisan":"travaux",
 "acheter-une-voiture-occasion":"automobile", "acheter-en-ligne-avec-methode":"achats", "preparer-une-decision-importante":"travail",
 };
 const id=item.themeId ?? slugs[item.slug] ?? (item.categoryId === "entrepreneuriat" ? "projets" : "travail");
 return publicationThemes.find(theme=>theme.id===id)!;
}
