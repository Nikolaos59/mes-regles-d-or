import { env } from 'cloudflare:workers';
import type { Bindings } from './cms-types';
export function getBindings():Bindings { return env as Bindings; }
