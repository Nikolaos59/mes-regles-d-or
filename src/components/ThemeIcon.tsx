import type { PublicationTheme } from "@/data/publication-themes";
const paths = {
 house:"M3 11 12 3l9 8M5 10v11h14V10M9 21v-7h6v7",
 tools:"m4 20 9-9M15 3a5 5 0 0 0-4 7l3 3a5 5 0 0 0 7-4l-4 2-4-4 2-4ZM3 19l2 2",
 car:"m4 10 2-6h12l2 6M3 10h18v8H3zM6 18v3M18 18v3M6 14h2M16 14h2",
 bag:"M4 8h16l1 13H3L4 8ZM8 8V6a4 4 0 0 1 8 0v2",
 work:"M3 7h18v14H3zM8 7V3h8v4M3 12h18M10 12v3h4v-3",
 idea:"M9 18h6M9 21h6M8 15a7 7 0 1 1 8 0l-1 3H9l-1-3Z",
};
export default function ThemeIcon({theme,className="h-8 w-8"}:{theme:PublicationTheme;className?:string}) {return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[theme.icon]}/></svg>;}
