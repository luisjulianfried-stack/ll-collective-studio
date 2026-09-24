import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Impressum',
  alternates: { canonical: '/impressum' },
  robots: { index: false, follow: true },
};

export default function Impressum() {
  return <>
    <Navigation />
    <main className="legal-page">
      <Link href="/" className="eyebrow">← ZURÜCK ZUR STARTSEITE</Link>
      <span className="eyebrow">LEGAL / 01</span>
      <h1>Impressum<span>.</span></h1>
      <div className="legal-content">
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>LL Collective Studio<br />Luis Fried und Leander Ballhausen</p>
        <p>Kontaktanschrift Luis Fried:<br />Edelweißstraße 10<br />82031 Grünwald<br />Deutschland</p>
        <h2>Kontakt</h2>
        <p>E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a><br />
          Luis Fried: <a href="tel:+4917631358964">+49 176 31358964</a><br />
          Leander Ballhausen: <a href="tel:+491512695547">+49 151 2695547</a>
        </p>
      </div>
    </main>
    <Footer />
  </>;
}
