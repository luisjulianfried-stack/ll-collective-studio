import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Datenschutz', alternates: { canonical: '/datenschutz' }, robots: { index: false, follow: true } };

export default function Datenschutz() {
  return <>
    <Navigation />
    <main className="legal-page">
      <Link href="/" className="eyebrow">← ZURÜCK ZUR STARTSEITE</Link>
      <span className="eyebrow">LEGAL / 02</span>
      <h1>Datenschutz<span>.</span></h1>
      <div className="legal-content">
        <p className="legal-warning">Entwurf für die private Vorschau. Vor einer öffentlichen Freigabe müssen Hosting-Angaben und Speicherdauer anhand der tatsächlichen Bereitstellung ergänzt werden.</p>
        <h2>Verantwortliche Stelle</h2>
        <p>LL Collective Studio – Luis Fried und Leander Ballhausen<br />Kontaktanschrift Luis Fried: Edelweißstraße 10, 82031 Grünwald<br /><a href={`mailto:${site.email}`}>{site.email}</a></p>
        <h2>Aufruf dieser Website</h2>
        <p>Beim Besuch der Website werden technisch notwendige Verbindungsdaten durch den Hosting-Anbieter verarbeitet. [Hosting-Anbieter, Empfänger, Speicherdauer und Rechtsgrundlage anhand der tatsächlichen Bereitstellung ergänzen.]</p>
        <h2>Kontakt per E-Mail</h2>
        <p>Wenn Sie uns eine E-Mail schreiben, verarbeiten wir die darin enthaltenen Angaben, um Ihre Nachricht zu beantworten. [Rechtsgrundlage, E-Mail-Anbieter, Empfänger und Aufbewahrungsdauer ergänzen.]</p>
        <h2>Cookies und Analyse</h2>
        <p>Die Website setzt in dieser Fassung keine Analyse- oder Marketingcookies und keinen externen Tracker ein. Bei späteren Erweiterungen ist dieser Abschnitt anzupassen.</p>
        <h2>Ihre Rechte</h2>
        <p>Nach den gesetzlichen Voraussetzungen können Sie Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch verlangen. Außerdem können Sie eine erteilte Einwilligung widerrufen und sich bei einer Datenschutzaufsichtsbehörde beschweren.</p>
        <p className="legal-note">Diese Seite muss vor dem öffentlichen Betrieb auf die tatsächlich eingesetzten Dienste und Datenverarbeitungen abgestimmt werden.</p>
      </div>
    </main>
    <Footer />
  </>;
}
