import type { Metadata } from 'next';
export const metadata: Metadata = { alternates: { canonical: '/' } };
import Image from 'next/image';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PhoneMock } from '@/components/phone-mock';
import { Navigation } from '@/components/navigation';
import { ProjectGallery } from '@/components/project-gallery';
import { Services } from '@/components/services';
import { site } from '@/lib/site';
import { Motion } from '@/components/motion';
import { Footer } from '@/components/footer';
import { Welcome } from '@/components/welcome';
import { showcases } from '@/lib/showcases';
import { MotionToggle } from '@/components/motion-toggle';

const steps = [
  ['01', 'Gespräch', 'Wir klären Ziel, Umfang und Zeitplan.'],
  ['02', 'Umsetzung', 'Content, Kampagnen und Website aus einer Hand.'],
  ['03', 'Wachstum', 'Ergebnisse messen und laufend verbessern.'],
];

export default function Home() {
  const front = showcases[0];
  return <><Welcome/><Navigation/><main id="main">
    <section className="hx" id="top">
      <div className="hx-glow" aria-hidden="true"/>
      <div className="hx-grid">
        <div className="hx-copy">
          <p className="hx-kicker">MARKETING-AGENTUR · MÜNCHEN</p>
          <h1>MARKETING,<br/>DAS <em>wirkt.</em></h1>
          <p className="hx-lead">Strategie, Social Media, Kampagnen und Websites – wir machen Ihre Marke sichtbar und bringen Sie zu Ihren Kunden. Alles aus einer Hand.</p>
          <div className="hx-actions">
            <a className="pill-button light" href={`mailto:${site.email}`}>PROJEKT ANFRAGEN <ArrowUpRight size={18} aria-hidden="true"/></a>
            <a className="pill-button outline" href="#work">PROJEKTE ANSEHEN <ArrowDown size={18} aria-hidden="true"/></a>
          </div>
        </div>
        {front && <div className="hx-visual"><a className="hx-stage" href="#work" aria-label="Projekte ansehen">
                    <figure className="hx-frame hx-frame-front"><div className="hx-bar"><i/><i/><i/><span>{front.title}</span></div><div className="hx-shot"><Image src={front.preview} alt="" fill priority unoptimized /></div></figure>
          <PhoneMock/>
        </a><MotionToggle/></div>}
      </div>
    </section>

    <Services/>
    <ProjectGallery/>

    <section id="about" className="sx section-pad">
      <div className="sx-head reveal">
        <span className="eyebrow">ÜBER UNS</span>
        <h2>JUNGES TEAM.<br/><em>Frischer Blick.</em></h2>
      </div>
      <div className="sx-body reveal">
        <p>Wir sind zwei Marketing-Studenten aus München. Wir kennen die Kanäle, auf denen Ihre Kunden unterwegs sind – und setzen Ihr Projekt persönlich um, ohne Umwege über eine große Agentur.</p>
        <div className="sx-founders"><div><span lang="en">CO-FOUNDER</span><strong>Luis Fried</strong></div><div><span lang="en">CO-FOUNDER</span><strong>Leander Ballhausen</strong></div></div>
      </div>
      <div id="process" className="sx-steps">
        <span className="eyebrow">SO LÄUFT ES AB</span>
        <ol>{steps.map(([n, title, text]) => <li className="reveal" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
      </div>
    </section>

    <section id="contact" className="cx section-pad">
      <div className="cx-inner reveal">
        <span className="eyebrow">KONTAKT</span>
        <h2>BEREIT FÜR EINEN<br/><em>starken Auftritt?</em></h2>
        <p>Schreiben Sie uns kurz, worum es geht – wir melden uns mit einem ersten Vorschlag.</p>
        <div className="cx-actions">
          <a className="pill-button dark" href={`mailto:${site.email}`}>PROJEKT ANFRAGEN <ArrowUpRight size={18} aria-hidden="true"/></a>
          <a className="cx-mail" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </section>
  </main><Footer/><Motion/></>;
}
