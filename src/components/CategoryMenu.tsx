import Link from "next/link";
import { categories } from "@/data/categories";
import styles from "./CategoryMenu.module.css";

const categoryLinks = [
  ...categories.map(category => ({ label: category.shortName, href: category.href })),
  { label: "Tourisme & voyages", href: "/tourisme" },
];

export default function CategoryMenu({ pathname }: { pathname: string }) {
  return (
    <div className={styles.submenu}>
      <span className={styles.label}>Catégories</span>
      <nav className={styles.links} aria-label="Sous-menu des catégories">
        {categoryLinks.map(category => {
          const active = pathname === category.href || pathname.startsWith(`${category.href}/`);
          return <Link key={category.href} href={category.href} aria-current={active ? "page" : undefined} className={active ? styles.active : undefined}>{category.label}</Link>;
        })}
      </nav>
    </div>
  );
}
