import Link from "next/link";
import type { Publication } from "@/lib/editorial-types";
import { publicationTags } from "@/data/publication-tags";

export default function PublicationTags({item}: {item: Publication}) {
  return <ul aria-label="Tags de l’article" className="mt-5 flex flex-wrap gap-2">
    {publicationTags(item).map(tag=><li key={tag.slug}><Link href={"/tags/"+tag.slug} className="inline-flex min-h-9 items-center rounded-full border border-black/15 bg-white px-3 py-1 text-sm font-medium text-[#176565] transition-colors hover:bg-[#E6F3F1]">#{tag.label}</Link></li>)}
  </ul>;
}
