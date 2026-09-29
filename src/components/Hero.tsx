import Link from "next/link";
import styles from "./Hero.module.css";

// Photographs and expanding-panel interaction recovered from the original PHP homepage.
const panels = [
  { title: "Chantier", description: "Choisir un artisan, suivre ses travaux.", href: "/guides#travaux", image: "/images/accueil/plans_construction.webp" },
  { title: "Voiture", description: "Acheter et louer avec les bons réflexes.", href: "/guides#automobile", image: "/images/accueil/vente_automobile.webp" },
  { title: "Voyage", description: "Location de voiture : partir bien préparé.", href: "/guides/location-voiture-etat", image: "/images/accueil/voyage.webp" },
  { title: "E-commerce", description: "Acheter en ligne et connaître ses recours.", href: "/guides#achats", image: "https://images.unsplash.com/photo-1548407260-da850faa41e3?auto=format&fit=crop&w=1200&q=80" },
  { title: "Journal", description: "Prendre du recul sur ses décisions.", href: "/blog", image: "https://images.unsplash.com/photo-1548506923-99f6e89852fe?auto=format&fit=crop&w=1200&q=80" },
] as const;

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="home-title">
      <div className="container-mro">
        <div className={styles.intro}>
          <div>
            <p className="eyebrow">Les bons réflexes, au bon moment</p>
            <h1 id="home-title" className={styles.title}>Vos décisions méritent<br />des règles d’or.</h1>
          </div>
          <div className={styles.lead}>
            <p>Des guides concrets et 75 principes pour avancer avec confiance. Commencez par ce qui vous concerne.</p>
            <Link href="/regles" className={styles.allRules}>Découvrir les règles <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <nav className={styles.panels} aria-label="Explorer les sujets">
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
        <div className={styles.footer}><span>Des repères pour la vie quotidienne.</span><Link href="/guides">Tous les guides →</Link></div>
      </div>
    </section>
  );
}
