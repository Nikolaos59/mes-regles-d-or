import type { PublicationTheme } from "@/data/publication-themes";
const paths = {
 compass:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM16 8l-2 6-6 2 2-6 6-2Z",
 spark:"m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z",
 shield:"M12 3 3 7v5c0 5 9 10 9 10s9-5 9-10V7l-9-4ZM8 12l3 3 5-6",
 house:"M3 11 12 3l9 8M5 10v11h14V10M9 21v-7h6v7",
 tools:"m4 20 9-9M15 3a5 5 0 0 0-4 7l3 3a5 5 0 0 0 7-4l-4 2-4-4 2-4ZM3 19l2 2",
 car:"m4 10 2-6h12l2 6M3 10h18v8H3zM6 18v3M18 18v3M6 14h2M16 14h2",
 bag:"M4 8h16l1 13H3L4 8ZM8 8V6a4 4 0 0 1 8 0v2",
 work:"M3 7h18v14H3zM8 7V3h8v4M3 12h18M10 12v3h4v-3",
 idea:"M9 18h6M9 21h6M8 15a7 7 0 1 1 8 0l-1 3H9l-1-3Z",
};
export default function ThemeIcon({theme,className="h-8 w-8"}:{theme:PublicationTheme;className?:string}) {return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[theme.icon]}/></svg>;}
