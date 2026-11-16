import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/cormorant-garamond/wght.css';
import '@fontsource-variable/cormorant-garamond/wght-italic.css';
import '@fontsource-variable/jost/wght.css';
import './globals.css';
import './phone.css';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'LL Collective Studio — Marketing-Agentur aus München', template: '%s | LL Collective Studio' },
  description: 'Marketing aus einer Hand: Strategie, Social Media, Content, Kampagnen und Webdesign. LL Collective Studio macht Marken sichtbar – aus München.',
  openGraph: { title: 'LL Collective Studio — Marketing, das wirkt.', description: 'Strategie, Social Media, Kampagnen und Webdesign aus einer Hand – aus München.', type: 'website', locale: 'de_DE', images: ['/brand/og-image.png'] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#f4efe7' };

// Läuft vor dem ersten Zeichnen: markiert, dass JavaScript aktiv ist (erst dann
// starten Einblend-Animationen), und ob die Eröffnung übersprungen wird.
const boot = `(function(){var d=document.documentElement;d.classList.add('js');try{if(sessionStorage.getItem('ll-welcome-seen')==='1'||location.hash||matchMedia('(prefers-reduced-motion: reduce)').matches)d.classList.add('intro-skip')}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de" suppressHydrationWarning>
    <head><script dangerouslySetInnerHTML={{ __html: boot }}/></head>
    <body>{children}</body>
  </html>;
}
