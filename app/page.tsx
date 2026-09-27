import type { Metadata } from 'next';
export const metadata: Metadata = { alternates: { canonical: '/' } };
import Image from 'next/image';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { ProjectGallery } from '@/components/project-gallery';
import { Services } from '@/components/services';
import { site } from '@/lib/site';
import { Motion } from '@/components/motion';
import { Footer } from '@/components/footer';
import { Welcome } from '@/components/welcome';
import { showcases } from '@/lib/showcases';

const offer = [['01', 'Webdesign'], ['02', 'Marketing & Social Media'], ['03', 'Content & Branding']];
const steps = [
  ['01', 'Gespräch', 'Wir klären Ziel, Umfang und Zeitplan.'],
  ['02', 'Umsetzung', 'Design, Website und Content aus einer Hand.'],
  ['03', 'Launch', 'Live gehen, sichtbar werden, weiter wachsen.'],
];

export default function Home() {
  const [front, back] = showcases;
  return <><Welcome/><Navigation/><main>
    <section className="hx" id="top">
      <div className="hx-glow" aria-hidden="true"/>
      <div className="hx-grid">
        <div className="hx-copy">
          <p className="hx-kicker">WEBDESIGN · MARKETING · CONTENT</p>
          <h1>WEBSITES, DIE<br/><em>Kunden gewinnen.</em></h1>
          <p className="hx-lead">Wir bauen Ihre Website und sorgen mit Marketing und Content dafür, dass sie gesehen wird. Alles aus einer Hand – aus München.</p>
          <div className="hx-actions">
            <a className="pill-button light" href={`mailto:${site.email}`}>PROJEKT ANFRAGEN <ArrowUpRight size={18}/></a>
            <a className="pill-button outline" href="#work">PROJEKTE ANSEHEN <ArrowDown size={18}/></a>
          </div>
        </div>
        {front && <a className="hx-stage" href="#work" aria-label="Beispielprojekte ansehen">
          {back && <figure className="hx-frame hx-frame-back"><div className="hx-bar"><i/><i/><i/></div><div className="hx-shot"><Image src={back.preview} alt="" fill unoptimized /></div></figure>}
          <figure className="hx-frame hx-frame-front"><div className="hx-bar"><i/><i/><i/><span>{front.title}</span></div><div className="hx-shot"><Image src={front.preview} alt="" fill priority unoptimized /></div></figure>
        </a>}
      </div>
      <nav className="hx-offer" aria-label="Leistungen">
        {offer.map(([n, label]) => <a href="#services" key={n}><span>{n}</span>{label}</a>)}
      </nav>
    </section>

    <Services/>
    <ProjectGallery/>

    <section id="about" className="sx section-pad">
      <div className="sx-head reveal">
        <span className="eyebrow">STUDIO</span>
        <h2>ZWEI GRÜNDER.<br/><em>Ein Ansprechpartner.</em></h2>
      </div>
      <div className="sx-body reveal">
        <p>Luis Fried und Leander Ballhausen verbinden Webdesign und Marketing. Sie sprechen direkt mit den Menschen, die Ihr Projekt umsetzen.</p>
        <div className="sx-founders"><div><span>CO-FOUNDER</span><strong>Luis Fried</strong></div><div><span>CO-FOUNDER</span><strong>Leander Ballhausen</strong></div></div>
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
          <a className="pill-button dark" href={`mailto:${site.email}`}>PROJEKT ANFRAGEN <ArrowUpRight size={18}/></a>
          <a className="cx-mail" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </section>
  </main><Footer/><Motion/></>;
}
