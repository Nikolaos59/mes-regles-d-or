import type { Publication } from "@/data/publications";
import { publicationTheme } from "@/data/publication-themes";

export const tags = [
  {slug:"budget",label:"Budget"}, {slug:"promotions",label:"Promotions"},
  {slug:"courses",label:"Courses"}, {slug:"cybersecurite",label:"Cybersécurité"},
  {slug:"donnees-personnelles",label:"DonnéesPersonnelles"}, {slug:"arnaques",label:"Arnaques"},
  {slug:"logement",label:"Logement"}, {slug:"travaux",label:"Travaux"},
  {slug:"automobile",label:"Automobile"}, {slug:"achats",label:"Achats"},
  {slug:"recours",label:"Recours"}, {slug:"travail",label:"Travail"},
  {slug:"decisions",label:"Décisions"}, {slug:"entreprendre",label:"Entreprendre"},
  {slug:"ia",label:"IA"},
] as const;
export type TagSlug = typeof tags[number]["slug"];
const extras: Record<string, readonly TagSlug[]> = {
  "formats-familiaux-prix-kilo":["budget","courses"],
  "carte-fidelite-cagnotte":["budget","promotions"],
  "produits-date-courte":["courses","budget"],
  "promotions-comparer-prix":["promotions","budget"],
  "fuite-donnees-personnelles":["donnees-personnelles","arnaques"],
  "usurpation-identite-reagir":["donnees-personnelles","recours"],
  "faux-conseiller-bancaire":["arnaques","recours"],
  "message-suspect-hameconnage":["arnaques"],
  "boite-mail-piratee":["donnees-personnelles"],
  "ia-verifier-proteger":["ia","donnees-personnelles"],
  "artisan-abandon-chantier":["recours"],
  "proprietaire-refuse-travaux":["travaux","recours"],
  "depot-garantie-restitution":["logement","recours"],
  "etat-lieux-entree":["logement"],
  "mediation-consommation":["recours"],
  "appareil-panne-garantie":["recours"],
  "colis-livre-introuvable":["recours"],
  "achat-retractation":["recours"],
  "teletravail-bons-reperes":["travail"],
  "reunion-qui-aboutit":["travail"],
  "tresorerie-anticiper":["budget"],
};
export function publicationTags(item: Publication) {
  const themeTags: Record<string, TagSlug> = {logement:"logement",travaux:"travaux",automobile:"automobile",achats:"achats",numerique:"cybersecurite",travail:"decisions",projets:"entreprendre"};
  const base = item.categoryId === "ia-numerique" ? "ia" : themeTags[publicationTheme(item).id];
  const slugs = new Set<TagSlug>([base, ...(extras[item.slug] ?? [])]);
  return tags.filter(tag=>slugs.has(tag.slug));
}
