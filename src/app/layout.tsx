import type { Metadata } from "next";
import { createPageMetadata, siteDescription, siteOrigin } from "@/lib/seo";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...createPageMetadata({ title: "Mes Règles d’Or — 82 règles simples pour mieux décider", description: siteDescription, path: "/" }),
  metadataBase: siteOrigin ? new URL(siteOrigin) : undefined,
  alternates: undefined,
  title: {
    default: "Mes Règles d’Or — 82 règles simples pour mieux décider",
    template: "%s | Mes Règles d’Or",
  },
  authors: [{ name: "Mes Règles d’Or" }],
  creator: "Mes Règles d’Or",
  publisher: "Mes Règles d’Or",
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <a href="#main-content" className="skip-link">Aller au contenu</a>
          <Header />

          <div id="main-content" tabIndex={-1} className="flex-1">{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}