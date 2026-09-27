import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'LL Collective Studio — Webdesign & Marketing aus München', template: '%s | LL Collective Studio' },
  description: 'Websites, Marketing und Content aus einer Hand. LL Collective Studio gestaltet Webauftritte und Social Media für Unternehmen – aus München.',
  openGraph: { title: 'LL Collective Studio — Webdesign & Marketing aus München', description: 'Websites, die Kunden gewinnen. Webdesign, Marketing und Content aus einer Hand.', type: 'website', locale: 'de_DE', images: ['/brand/ll-chrome.png'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
