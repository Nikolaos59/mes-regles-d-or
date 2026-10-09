import { env } from 'cloudflare:workers';
import type { Bindings } from './cms-types';
export function getBindings():Bindings {
 const runtime=env as Bindings;
 return {
  ADMIN_LOCAL:runtime.ADMIN_LOCAL,
  ADMIN_EMAIL:runtime.ADMIN_EMAIL,
  ACCESS_TEAM_DOMAIN:runtime.ACCESS_TEAM_DOMAIN,
  ACCESS_AUD:runtime.ACCESS_AUD,
 };
}
