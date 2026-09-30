"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./CategoryMenu.module.css";
const groups = [
 {title:"Argent & consommation",links:[["Achats et budget","/guides#achats"],["Banque et arnaques","/guides/faux-conseiller-bancaire"]]},
 {title:"Logement & travaux",links:[["Louer et se loger","/guides#logement"],["Travaux et artisans","/guides#travaux"]]},
 {title:"Voiture",links:[["Acheter","/guides/acheter-une-voiture-occasion"],["Entretenir et réparer","/guides/garage-ordre-reparation"],["Louer","/guides/location-voiture-etat"]]},
 {title:"Voyages & tourisme",links:[["Tous les guides voyage","/tourisme"],["Avion et train","/guides/train-retard-reclamation"]]},
 {title:"Numérique & cybersécurité",links:[["Comptes et arnaques","/guides#numerique"],["Données personnelles","/tags/donnees-personnelles"]]},
 {title:"Intelligence artificielle",links:[["Utiliser et vérifier l’IA","/ia"]]},
 {title:"Travail & entreprise",links:[["Vie professionnelle","/guides#travail"],["Créer et gérer son activité","/guides#projets"]]},
];
export default function CategoryMenu(){
 const [open,setOpen]=useState(false);
 const root=useRef<HTMLDivElement>(null),button=useRef<HTMLButtonElement>(null),timer=useRef<ReturnType<typeof setTimeout>|null>(null);
 const cancel=()=>{if(timer.current)clearTimeout(timer.current);};
 const close=()=>{cancel();setOpen(false);};
 useEffect(()=>{const outside=(e:PointerEvent)=>{if(!root.current?.contains(e.target as Node))setOpen(false);};document.addEventListener("pointerdown",outside);return()=>{document.removeEventListener("pointerdown",outside);if(timer.current)clearTimeout(timer.current);};},[]);
 return <div ref={root} className={styles.root} onPointerEnter={e=>{if(e.pointerType==="mouse"){cancel();setOpen(true);}}} onPointerLeave={e=>{if(e.pointerType==="mouse"){cancel();timer.current=setTimeout(()=>{if(!root.current?.contains(document.activeElement))setOpen(false);},220);}}} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget as Node))close();}} onKeyDown={e=>{if(e.key==="Escape"){e.preventDefault();close();button.current?.focus();}}}>
 <button ref={button} type="button" className={styles.trigger} aria-expanded={open} aria-controls="category-panel" onClick={()=>{cancel();setOpen(!open);}} onKeyDown={e=>{if(e.key==="ArrowDown"){e.preventDefault();setOpen(true);requestAnimationFrame(()=>root.current?.querySelector<HTMLAnchorElement>("a")?.focus());}}}>Catégories <span aria-hidden="true">{open ? "−" : "+"}</span></button>
 <div id="category-panel" className={styles.panel} hidden={!open}>
 <Link href="/categories" className={styles.all} onClick={close}>Voir toutes les catégories →</Link>
 <div className={styles.grid}>{groups.map(group=><section key={group.title}><h2>{group.title}</h2><ul>{group.links.map(([label,href])=><li key={href}><Link href={href} onClick={close}>{label}</Link></li>)}</ul></section>)}</div>
 </div></div>;
}
