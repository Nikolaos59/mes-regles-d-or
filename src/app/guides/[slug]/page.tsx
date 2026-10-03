export const dynamic="force-dynamic";
import { notFound } from "next/navigation";
import { getPublications } from "@/lib/content-store";
import { createPageMetadata } from "@/lib/seo";
import PublicationArticle from "@/components/PublicationArticle";
type Props = {params: Promise<{slug:string}>};
export async function generateMetadata({params}: Props) {const {slug}=await params;const item=(await getPublications()).filter(p=>p.kind==="guides").find(p=>p.slug===slug);if(!item)notFound();return createPageMetadata({title:item.title,description:item.description,path:`/guides/${item.slug}`,type:"article"});}
export default async function Page({params}: Props) {const {slug}=await params;const item=(await getPublications()).filter(p=>p.kind==="guides").find(p=>p.slug===slug);if(!item)notFound();return <PublicationArticle item={item}/>;}
