import Link from "next/link";
import styles from "./Hero.module.css";

// Keep the original photo-led homepage while linking only to empty category pages.
const panels = [
  // Photos gratuites sous licence Unsplash : Dan Nelson (cybersécurité) et Nguyễn Duy Hưng (numérique).
  { title: "Cybersécurité", description: "Une catégorie prête à accueillir ses règles.", href: "/categories/cybersecurite", image: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=1200&q=80" },
  { title: "Numérique", description: "Une catégorie bientôt disponible.", href: "/categories/numerique", image: "https://images.unsplash.com/photo-1768224656445-33d078c250b7?auto=format&fit=crop&w=1200&q=80" },
  { title: "Travaux", description: "Une catégorie bientôt disponible.", href: "/categories/travaux", image: "/images/accueil/plans_construction.webp" },
  { title: "Voiture", description: "Une catégorie bientôt disponible.", href: "/categories/voiture", image: "/images/accueil/vente_automobile.webp" },
  { title: "Voyage", description: "Une catégorie bientôt disponible.", href: "/categories/voyage", image: "/images/accueil/voyage.webp" },
] as const;

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="home-title">
      <div className="container-mro">
        <div className={styles.intro}>
          <div>
            <p className="eyebrow">Mes Règles d’Or</p>
            <h1 id="home-title" className={styles.title}>Des repères pour mieux décider.</h1>
          </div>
          <div className={styles.lead}>
            <p>Le site se prépare. Les règles et les articles seront publiés ici prochainement.</p>
            <Link href="/alertes" className={styles.allRules}>Être averti des nouveautés <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <nav className={styles.panels} aria-label="Explorer les catégories">
          {panels.map(panel => (
            <Link key={panel.title} href={panel.href} className={styles.panel}>
              <span className={styles.photo} style={{ backgroundImage: 'url(' + panel.image + ')' }} aria-hidden="true" />
              <span className={styles.shade} aria-hidden="true" />
              <span className={styles.copy}>
                <span className={styles.panelTitle}>{panel.title}</span>
                <span className={styles.description}>{panel.description}</span>
              </span>
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
        <div className={styles.footer}><span>Des repères pour la vie quotidienne.</span><Link href="/categories">Voir toutes les catégories →</Link></div>
      </div>
    </section>
  );
}
