import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-mro section-mro">
      <p className="eyebrow">Erreur 404</p>
      <h1 className="heading-section mt-7">Ce repère reste à trouver.</h1>
      <p className="mt-7 text-lg text-[#6B7280]">Cette page n’existe pas. Retrouvez votre chemin dans la collection.</p>
      <Link href="/regles" className="mt-9 inline-flex rounded-full bg-[#0F172A] px-7 py-4 font-semibold text-white">Explorer les 82 règles</Link>
    </main>
  );
}
