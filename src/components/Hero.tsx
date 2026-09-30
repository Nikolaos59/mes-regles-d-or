import Link from "next/link";
import styles from "./Hero.module.css";

// Photographs and expanding-panel interaction recovered from the original PHP homepage.
const panels = [
  { title: "Chantier", description: "Choisir un artisan, suivre ses travaux.", href: "/guides#travaux", image: "/images/accueil/plans_construction.webp" },
  { title: "Voiture", description: "Acheter et louer avec les bons réflexes.", href: "/guides#automobile", image: "/images/accueil/vente_automobile.webp" },
  { title: "Voyage", description: "Transports, réservations et séjours : préparer son départ.", href: "/tourisme", image: "/images/accueil/voyage.webp" },
  { title: "Achats en ligne", description: "Acheter en ligne et connaître ses recours.", href: "/guides#achats", image: "https://images.unsplash.com/photo-1548407260-da850faa41e3?auto=format&fit=crop&w=1200&q=80" },
  { title: "Journal", description: "Prendre du recul sur ses décisions.", href: "/blog", image: "https://images.unsplash.com/photo-1548506923-99f6e89852fe?auto=format&fit=crop&w=1200&q=80" },
] as const;

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="home-title">
      <div className="container-mro">
        <div className={styles.intro}>
          <div>
            <p className="eyebrow">Les bons réflexes, au bon moment</p>
            <h1 id="home-title" className={styles.title}>Les bons réflexes pour éviter les pièges du quotidien.</h1>
          </div>
          <div className={styles.lead}>
            <p>Arnaque, achat, logement : trouvez les démarches à suivre et les points à vérifier avant d’agir.</p>
            <Link href="/guides" className={styles.allRules}>Parcourir les 100 guides <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <form action="/recherche" method="get" role="search" className={styles.search}>
          <label htmlFor="home-search">Quelle situation rencontrez-vous ?</label>
          <div className={styles.searchFields}><input id="home-search" name="q" type="search" maxLength={200} placeholder="Ex. : colis, faux conseiller, loyer…" /><button type="submit">Rechercher</button></div>
        </form>
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
