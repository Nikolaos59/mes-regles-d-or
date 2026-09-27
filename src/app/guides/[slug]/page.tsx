import { notFound } from "next/navigation";
import { publications } from "@/data/publications";
import { createPageMetadata } from "@/lib/seo";
import PublicationArticle from "@/components/PublicationArticle";
type Props = {params: Promise<{slug:string}>};
const items = publications.filter(item=>item.kind === "guides");
export function generateStaticParams() {return items.map(({slug})=>({slug}));}
export async function generateMetadata({params}: Props) {const {slug}=await params;const item=items.find(p=>p.slug===slug);if(!item)notFound();return createPageMetadata({title:item.title,description:item.description,path:`/guides/${item.slug}`,type:"article"});}
export default async function Page({params}: Props) {const {slug}=await params;const item=items.find(p=>p.slug===slug);if(!item)notFound();return <PublicationArticle item={item}/>;}
