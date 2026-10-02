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
        <h2>1. Verantwortlicher</h2>
        <p>Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
        <p>LL Collective Studio<br />
          Luis Fried und Leander Ballhausen<br />
          Edelweißstraße 10, 82031 Grünwald, Deutschland<br />
          E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a><br />
          Telefon: <a href="tel:+4917631358964">+49 176 31358964</a></p>
        <p>Ein Datenschutzbeauftragter ist nicht benannt, da hierzu keine gesetzliche Pflicht besteht.</p>

        <h2>2. Überblick</h2>
        <p>Diese Website ist eine statische Informationsseite. Sie verwendet keine Cookies, keine Analyse- oder Marketingdienste, keine Social-Media-Plugins und kein Kontaktformular. Schriften, Bilder, Videos und die gezeigten Konzept-Demos werden vom selben Server ausgeliefert wie die Website selbst; Inhalte von Drittanbietern werden nicht nachgeladen.</p>

        <h2>3. Hosting und Server-Logdateien</h2>
        <p>Die Website wird über GitHub Pages bereitgestellt. Anbieter ist die GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Zur Auslieferung setzt GitHub ein Content Delivery Network ein.</p>
        <p>Beim Aufruf der Website übermittelt Ihr Browser automatisch Daten an den Server, insbesondere Ihre IP-Adresse, Datum und Uhrzeit des Abrufs, die aufgerufene Seite, die zuvor besuchte Seite (Referrer) sowie Browsertyp und Betriebssystem. GitHub speichert die IP-Adresse nach eigenen Angaben, um die Sicherheit des Dienstes zu gewährleisten. Ohne diese Verarbeitung kann die Website nicht ausgeliefert werden.</p>
        <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren und zuverlässigen Bereitstellung der Website. Wir selbst werten diese Daten nicht aus. Die Speicherdauer bestimmt GitHub; nähere Informationen finden Sie in der <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer">Datenschutzerklärung von GitHub</a>.</p>
        <p>Dabei können Daten in die USA übermittelt werden. GitHub, Inc. ist nach dem EU-US Data Privacy Framework zertifiziert. Für die Übermittlung besteht damit ein Angemessenheitsbeschluss der Europäischen Kommission (Art. 45 DSGVO).</p>

        <h2>4. SSL- bzw. TLS-Verschlüsselung</h2>
        <p>Diese Website nutzt eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an „https://“ in der Adresszeile Ihres Browsers.</p>

        <h2>5. Speicherung im Browser (Session Storage)</h2>
        <p>Beim ersten Aufruf der Startseite wird eine kurze Eröffnungsanimation gezeigt. Damit sie innerhalb derselben Sitzung nicht erneut erscheint, legen wir im Session Storage Ihres Browsers den Eintrag „ll-welcome-seen“ mit dem Wert „1“ ab. Der Eintrag enthält keine personenbezogenen Daten, wird nicht an uns oder Dritte übermittelt und wird automatisch gelöscht, sobald Sie den Browser-Tab schließen.</p>
        <p>Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG, da die Speicherung für die von Ihnen aufgerufene Darstellung der Website erforderlich ist. Sie können die Speicherung jederzeit über die Einstellungen Ihres Browsers verhindern; die Website bleibt vollständig nutzbar.</p>

        <h2>6. Kontakt per E-Mail oder Telefon</h2>
        <p>Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben (zum Beispiel Name, E-Mail-Adresse, Telefonnummer und den Inhalt Ihrer Anfrage), um Ihr Anliegen zu bearbeiten.</p>
        <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage mit einem Vertrag oder der Anbahnung eines Vertrags zusammenhängt. In allen anderen Fällen ist Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in der Beantwortung der an uns gerichteten Anfragen.</p>
        <p>Für unser E-Mail-Postfach nutzen wir Gmail. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Dabei kann eine Übermittlung an die Google LLC in den USA erfolgen, die nach dem EU-US Data Privacy Framework zertifiziert ist (Art. 45 DSGVO).</p>
        <p>Wir löschen Ihre Anfrage, sobald sie abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Für Geschäftsbriefe gelten insbesondere die Aufbewahrungsfristen nach § 257 HGB und § 147 AO.</p>

        <h2>7. Links zu sozialen Netzwerken</h2>
        <p>Auf unser Instagram-Profil verweisen wir lediglich mit einem einfachen Link. Beim Aufruf unserer Website werden dadurch keine Daten an Instagram übermittelt. Erst wenn Sie den Link anklicken, gelangen Sie zum Angebot der Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland. Dort gilt deren Datenschutzerklärung.</p>

        <h2>8. Ihre Rechte</h2>
        <p>Sie haben nach Maßgabe der gesetzlichen Voraussetzungen das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO) und Datenübertragbarkeit (Art. 20 DSGVO). Wenden Sie sich dazu einfach an die oben genannte Kontaktadresse.</p>
        <p><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Soweit wir Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeiten, können Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen diese Verarbeitung einlegen.</p>
        <p>Außerdem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren (Art. 77 DSGVO). Für uns zuständig ist das Bayerische Landesamt für Datenschutzaufsicht, Promenade 18, 91522 Ansbach, <a href="https://www.lda.bayern.de" target="_blank" rel="noreferrer">www.lda.bayern.de</a>.</p>

        <h2>9. Pflicht zur Bereitstellung und automatisierte Entscheidungen</h2>
        <p>Sie sind nicht verpflichtet, uns personenbezogene Daten bereitzustellen. Ohne die technisch übermittelten Verbindungsdaten kann die Website jedoch nicht angezeigt werden, und ohne Kontaktdaten können wir Ihre Anfrage nicht beantworten. Eine automatisierte Entscheidungsfindung einschließlich Profiling findet nicht statt.</p>

        <p className="legal-note">Stand: Oktober 2026</p>
      </div>
    </main>
    <Footer />
  </>;
}
