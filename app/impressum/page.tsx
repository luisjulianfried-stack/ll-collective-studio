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
        <p>LL Collective Studio <span className="legal-todo">[RECHTSFORM, z. B. „GbR“]</span><br />
          Edelweißstraße 10<br />82031 Grünwald<br />Deutschland</p>
        <p>Vertreten durch die Gesellschafter:<br />Luis Fried<br />Leander Ballhausen</p>
        <h2>Kontakt</h2>
        <p>E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a><br />
          Telefon Luis Fried: <a href="tel:+4917631358964">+49 176 31358964</a><br />
          Telefon Leander Ballhausen: <a href="tel:+491512695547">+49 151 2695547</a>
        </p>
        <h2>Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
          <span className="legal-todo">[USt-IdNr. EINTRAGEN – oder diesen Abschnitt entfernen, falls keine vergeben ist]</span></p>
        <h2>Verbraucherstreitbeilegung</h2>
        <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        <h2>Haftung für Links</h2>
        <p>Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese Inhalte ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.</p>
      </div>
    </main>
    <Footer />
  </>;
}
