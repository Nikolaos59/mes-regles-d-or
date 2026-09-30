"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const navigation = [
  { label: "Tourisme", href: "/tourisme" },
  { label: "IA", href: "/ia" },
  { label: "Recherche", href: "/recherche" },
  {
    label: "Les 75 règles",
    href: "/regles",
  },
  {
    label: "Catégories",
    href: "/categories",
  },
  {
    label: "Guides",
    href: "/guides",
  },
  {
    label: "Journal",
    href: "/blog",
  },
  {
    label: "À propos",
    href: "/a-propos",
  },
] as const;

export default function Header() {
  const pathname = usePathname();
  const active = (href: string) => pathname === href || pathname.startsWith(href + "/");
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#F7F6F3]/90 backdrop-blur-xl">
      <div className={styles.brandRow}>
        <Link href="/" className={styles.rollingLink} aria-label="Accueil" aria-current={pathname === "/" ? "page" : undefined}>
          <span className={styles.roller} aria-hidden="true"><span>Accueil</span><span>Accueil</span></span>
        </Link>
        <Link href="/" className={styles.logo} aria-label="Mes Règles d’Or — Accueil">
          <Image src="/images/accueil/logo-original.png" alt="Mes Règles d’Or" width={598} height={259} unoptimized />
        </Link>
        <Link href="/contact" className={styles.rollingLink} aria-label="Contact">
          <span className={styles.roller} aria-hidden="true"><span>Contact</span><span>Contact</span></span>
        </Link>
      </div>
      <div className="container-mro">
        <nav
          className={styles.navigation}
          aria-label="Navigation principale"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active(item.href) ? "page" : undefined}
              className={`border-b-2 py-3 text-[15px] font-medium transition-colors ${active(item.href) ? "border-[#9B752A] text-[#0F172A]" : "border-transparent text-[#4B5563] hover:text-[#0F172A]"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>


      </div>
    </header>
  );
}
