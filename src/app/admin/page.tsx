import { headers } from 'next/headers';
import { authenticate } from '@/lib/admin-auth';
import AdminEditor from '@/components/AdminEditor';
export const dynamic='force-dynamic';
export const metadata={title:'Administration',robots:{index:false,follow:false}};
export default async function Page(){
 const h=await headers();const host=h.get('host')??'invalid';
 const actor=await authenticate(new Headers(h),`https://${host}/admin`);
 if(!actor)return <main className="container-mro section-mro"><h1 className="text-3xl font-semibold">Administration protégée</h1><p className="mt-5">Connectez-vous via Cloudflare Access avec l’adresse autorisée. Si l’accès n’est pas encore configuré, l’administration reste fermée.</p></main>;
 return <AdminEditor actor={actor}/>;
}
