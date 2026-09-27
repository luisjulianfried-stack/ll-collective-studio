import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'LL Collective Studio — Marketing-Agentur aus München', template: '%s | LL Collective Studio' },
  description: 'Marketing aus einer Hand: Strategie, Social Media, Content, Kampagnen und Webdesign. LL Collective Studio macht Marken sichtbar – aus München.',
  openGraph: { title: 'LL Collective Studio — Marketing, das wirkt.', description: 'Strategie, Social Media, Kampagnen und Webdesign aus einer Hand – aus München.', type: 'website', locale: 'de_DE', images: ['/brand/ll-chrome.png'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
