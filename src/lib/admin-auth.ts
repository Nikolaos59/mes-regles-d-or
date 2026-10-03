import { createRemoteJWKSet, jwtVerify } from 'jose';
import { getBindings } from '@/lib/platform';
import type { Bindings } from './cms-types';
export async function authenticate(headers:Headers, url:string, bindings:Bindings=getBindings()):Promise<string|null> {
 const hostname=new URL(url).hostname;
 if(bindings.ADMIN_LOCAL==='true' && ['localhost','127.0.0.1','[::1]'].includes(hostname))return 'local-editor';
 const {ACCESS_TEAM_DOMAIN:team,ACCESS_AUD:aud,ADMIN_EMAIL:email}=bindings;
 if(!team || !aud || !email || !/^[a-z0-9-]+\.cloudflareaccess\.com$/.test(team))return null;
 const token=headers.get('cf-access-jwt-assertion');
 if(!token)return null;
 try {
  const {payload}=await jwtVerify(token,createRemoteJWKSet(new URL(`https://${team}/cdn-cgi/access/certs`)),{issuer:`https://${team}`,audience:aud,algorithms:['RS256'],requiredClaims:['exp','iat','email','sub']});
  return typeof payload.email==='string' && payload.email.toLowerCase()===email.toLowerCase()?payload.email:null;
 }catch{return null;}
}
export function sameOrigin(request:Request){return request.headers.get('origin')===new URL(request.url).origin && request.headers.get('content-type')?.split(';')[0]==='application/json';}
