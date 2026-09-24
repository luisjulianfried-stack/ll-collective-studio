import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'LL Collective Studio — Marken mit Richtung', template: '%s | LL Collective Studio' },
  description: 'LL Collective Studio entwickelt Markenauftritte, Social-Media-Content, Kampagnen und digitale Erlebnisse für Unternehmen in München und darüber hinaus.',
  openGraph: { title: 'LL Collective Studio — Built to be remembered.', description: 'Strategie, Design und Content für Marken, die im Gedächtnis bleiben.', type: 'website', locale: 'de_DE', images: ['/brand/ll-chrome.png'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
