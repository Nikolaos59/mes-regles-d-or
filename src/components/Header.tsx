import Link from "next/link";

const navigation = [
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
    label: "Blog",
    href: "/blog",
  },
  {
    label: "À propos",
    href: "/a-propos",
  },
] as const;

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-[#F7F6F3]/90 backdrop-blur-xl">
      <div className="container-mro flex h-[82px] items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Mes Règles d'Or — Accueil"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0F172A] text-[12px] font-semibold tracking-[0.14em] text-white transition-transform duration-300 group-hover:scale-105">
            MRO
          </span>

          <span className="text-[17px] font-semibold tracking-[-0.025em] text-[#111827]">
            Mes Règles d&apos;Or
          </span>
        </Link>

        <nav
          className="hidden items-center gap-5 xl:gap-8 xl:flex"
          aria-label="Navigation principale"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-[#4B5563] transition-colors duration-200 hover:text-[#0F172A]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link
            href="/regles"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#0F172A] px-7 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#18233A] hover:shadow-lg"
          >
            Explorer les règles
          </Link>
        </div>

        <details className="group relative xl:hidden">
          <summary
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-black/10 bg-white"
            aria-label="Ouvrir le menu"
          >
            <span className="relative block h-4 w-5">
              <span className="absolute left-0 top-[3px] h-[1.5px] w-5 bg-[#0F172A]" />
              <span className="absolute left-0 top-[10px] h-[1.5px] w-5 bg-[#0F172A]" />
            </span>
          </summary>

          <div className="absolute right-0 top-[58px] w-[min(320px,calc(100vw-32px))] overflow-hidden rounded-[24px] border border-black/[0.08] bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.15)]">
            <nav
              className="flex flex-col"
              aria-label="Navigation mobile"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[16px] px-4 py-3.5 text-[16px] font-medium text-[#374151] transition-colors hover:bg-[#F7F6F3] hover:text-[#0F172A]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/regles"
                className="mt-2 flex h-12 items-center justify-center rounded-[16px] bg-[#0F172A] px-4 text-[15px] font-semibold text-white"
              >
                Découvrir les 75 règles
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}