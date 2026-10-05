import type { EditorialContent } from './editorial-types';
export type Content = EditorialContent;
export type RecordRow = { id: string; draft_json: string; published_json: string | null; version: number; updated_at: string; updated_by: string; deleted_at?: string | null };
export interface Statement { bind(...values: (string | number | null)[]): Statement; all<T>(): Promise<{results:T[]}>; first<T>():Promise<T|null>; run():Promise<{meta:{changes:number}}> }
export interface Database { prepare(sql:string): Statement; batch(statements:Statement[]):Promise<{meta:{changes:number}}[]> }
export type Bindings = { DB?: Database; ADMIN_LOCAL?: string; ACCESS_TEAM_DOMAIN?: string; ACCESS_AUD?: string; ADMIN_EMAIL?: string };
