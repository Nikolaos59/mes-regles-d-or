import { headers } from "next/headers";
import Link from "next/link";
import { authenticate } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";
export const metadata = { title: "Administration", robots: { index: false, follow: false } };

export default async function AdminPage() {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "invalid";
  const actor = await authenticate(new Headers(requestHeaders), `https://${host}/admin`);
  if (!actor) {
    return <main className="container-mro section-mro"><p className="eyebrow">Espace réservé</p><h1 className="heading-display mt-7">Administration</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#6B7280]">Connectez-vous avec votre compte administrateur via Cloudflare Access.</p><a href="/cdn-cgi/access/login?returnTo=%2Fadmin" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-[#0F172A] px-7 font-semibold text-white">Se connecter →</a></main>;
  }
  return <main className="container-mro section-mro"><p className="eyebrow">Espace administrateur</p><h1 className="heading-display mt-7">Bienvenue</h1><p className="mt-6 text-lg leading-8 text-[#6B7280]">Connecté en tant que {actor}.</p><section className="mt-10 max-w-3xl rounded-[28px] border border-black/[0.07] bg-white p-8"><h2 className="text-2xl font-medium">Le site est en préparation</h2><p className="mt-4 leading-7 text-[#6B7280]">La gestion des contenus sera activée lorsque la base éditoriale sera reconnectée. Les données D1 existantes restent intactes.</p></section><Link href="/" className="mt-8 inline-block font-semibold underline underline-offset-4">Retour au site →</Link></main>;
}
