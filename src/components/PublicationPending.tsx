import Link from "next/link";

type PublicationPendingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PublicationPending({ eyebrow, title, description }: PublicationPendingProps) {
  return (
    <main className="container-mro section-mro">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="heading-display mt-7 max-w-4xl text-balance">{title}</h1>
      <p className="mt-8 max-w-2xl text-xl leading-9 text-[#6B7280]">{description}</p>
      <section className="mt-12 max-w-3xl rounded-[28px] border border-black/[0.07] bg-white p-8 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#6B7280]">Prochainement</p>
        <h2 className="mt-5 text-3xl font-medium tracking-tight">En attendant, trouvez votre premier repère.</h2>
        <p className="mt-5 text-lg leading-8 text-[#6B7280]">Les 82 règles sont déjà disponibles. Explorez-les par domaine ou partez d’un sujet qui vous concerne.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/regles" className="inline-flex rounded-full bg-[#0F172A] px-6 py-4 font-semibold text-white">Explorer les règles →</Link>
          <Link href="/recherche" className="inline-flex rounded-full border border-black/15 px-6 py-4 font-semibold">Rechercher un sujet</Link>
        </div>
      </section>
    </main>
  );
}
