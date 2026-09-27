import Link from "next/link";

const footerNavigation = {
  explorer: [
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
      label: "Guides pratiques",
      href: "/guides",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  categories: [
    {
      label: "Cybersécurité",
      href: "/categories/cybersecurite",
    },
    {
      label: "IA & Numérique",
      href: "/categories/ia-numerique",
    },
    {
      label: "Management & Travail",
      href: "/categories/management-travail",
    },
    {
      label: "Argent & Consommation",
      href: "/categories/argent-consommation",
    },
    {
      label: "Entrepreneuriat",
      href: "/categories/entrepreneuriat",
    },
  ],
  informations: [
    {
      label: "À propos",
      href: "/a-propos",
    },

  ],
} as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1220] text-white">
      <div className="container-mro">
        <div className="grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C89A3D] text-[11px] font-bold tracking-[0.14em] text-[#0F172A]">
                MRO
              </span>

              <span className="font-semibold tracking-[-0.02em]">
                Mes Règles d&apos;Or
              </span>
            </Link>

            <p className="mt-7 max-w-xs text-[15px] leading-7 text-white/55">
              75 principes simples et intemporels pour prendre de meilleures
              décisions dans un monde de plus en plus complexe.
            </p>

            <div className="mt-8 h-px w-10 bg-[#C89A3D]" />
          </div>

          <FooterColumn
            title="Explorer"
            links={footerNavigation.explorer}
          />

          <FooterColumn
            title="Domaines"
            links={footerNavigation.categories}
          />

          <FooterColumn
            title="Informations"
            links={footerNavigation.informations}
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-[13px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Mes Règles d&apos;Or. Tous droits réservés.
          </p>

          <p>Des principes simples. Des décisions plus claires.</p>
        </div>
      </div>
    </footer>
  );
}

type FooterLink = {
  readonly label: string;
  readonly href: string;
};

type FooterColumnProps = {
  title: string;
  links: readonly FooterLink[];
};

function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div>
      <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C89A3D]">
        {title}
      </p>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[14px] text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}