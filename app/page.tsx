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
import { HeroSilk } from '@/components/hero-silk';
import { ContactForm } from '@/components/contact-form';
import { Lines } from '@/components/lines';

const pillars = [
  ['Klare Strategie,', 'spürbare Wirkung'],
  ['Persönlich betreut,', 'ohne Umwege'],
  ['Alles aus einer Hand,', 'aus München'],
];

const steps = [
  ['01', 'Gespräch', 'Wir klären Ziel, Umfang und Zeitplan.'],
  ['02', 'Umsetzung', 'Content, Kampagnen und Website aus einer Hand.'],
  ['03', 'Wachstum', 'Ergebnisse messen und laufend verbessern.'],
];

export default function Home() {
  return <><Welcome/><Navigation/><main>
    <section className="hx" id="top">
      <div className="hx-media" aria-hidden="true"><HeroSilk tone="light"/></div>
      <div className="hx-content">
        <span className="eyebrow hx-eyebrow">LL Collective Studio</span>
        <h1 className="hx-title">
          <span className="ln"><span>Ihre Kunden scrollen.</span></span>{' '}
          <span className="ln"><span><em>Wir bringen sie zum Stoppen.</em></span></span>
        </h1>
        <div className="hx-copy">
          <p className="hx-lead">Zwei Marketing-Studenten aus München, selbst täglich dort unterwegs, wo Ihre Kunden scrollen. Wir machen Ihre Marke zu dem Moment, bei dem sie hängen bleiben.</p>
          <div className="hx-actions">
            <a className="btn btn-dark btn-small" href="#contact">Projekt anfragen <ArrowUpRight size={14} strokeWidth={1.5}/></a>
            <a className="text-link" href="#work">Projekte ansehen <ArrowDown size={14} strokeWidth={1.5}/></a>
          </div>
          <ul className="ix-pillars">{pillars.map(([a, b]) => <li key={a}>{a}<br/>{b}</li>)}</ul>
        </div>
      </div>
    </section>

    <div className="tx" aria-hidden="true">
      <span className="tx-line"/>
    </div>

    <Services/>
    <ProjectGallery/>

    <section id="about" className="sx">
      <div className="sx-copy section-pad">
        <span className="eyebrow reveal">Über uns</span>
        <Lines lines={['Junges Team.', <em key="e">Frischer Blick.</em>]}/>
        <div className="sx-text reveal">
          <p>Hinter LL Collective Studio stehen Luis Fried und Leander Ballhausen – zwei Marketing-Studenten aus München. Wir haben das Studio gegründet, weil wir täglich sehen, wie viel gute Unternehmen online verschenken: starke Produkte, aber ein Auftritt, der niemandem auffällt.</p>
          <p>Wir kennen die Kanäle, auf denen Ihre Kunden heute unterwegs sind, aus eigener Erfahrung. Was wir im Studium über Strategie und Markenführung lernen, setzen wir direkt in der Praxis um – für Gastronomie, Beauty und lokale Marken, die mehr aus sich machen wollen.</p>
          <p>Bei uns gibt es keine Weiterreichung an Junior-Teams und keine langen Abstimmungsschleifen. Sie sprechen immer direkt mit uns beiden, von der ersten Idee bis zum fertigen Ergebnis – persönlich, schnell und mit echtem Interesse an Ihrem Erfolg.</p>
        </div>
        <div className="sx-founders reveal"><div><span>Co-Founder</span><strong>Luis Fried</strong></div><div><span>Co-Founder</span><strong>Leander Ballhausen</strong></div></div>
      </div>
      <figure className="sx-media sx-seal img-reveal">
        <div className="sx-disc" data-parallax="-0.05"><Image src="/media/ll-silber.webp" alt="Silbernes Signet von LL Collective Studio mit eingeprägtem LL-Monogramm" width={866} height={866} unoptimized sizes="(max-width: 1000px) 80vw, 40vw"/></div>
        <figcaption>LL Collective Studio · Signet</figcaption>
      </figure>
    </section>

    <section id="process" className="px section-pad">
      <div className="px-head">
        <span className="eyebrow reveal">So läuft es ab</span>
        <Lines lines={['Drei Schritte.', <em key="e">Ein klarer Weg.</em>]}/>
      </div>
      <ol>{steps.map(([n, title, text], i) => <li className="reveal" style={{ ['--d' as string]: i }} key={n}><span className="px-num">{n}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
    </section>

    <section id="contact" className="cx section-pad">
      <div className="cx-inner">
        <span className="eyebrow reveal">Kontakt</span>
        <Lines lines={['Bereit für einen', <em key="e">starken Auftritt?</em>]}/>
        <p className="reveal">Schreiben Sie uns kurz, worum es geht – wir melden uns mit einem ersten Vorschlag.</p>
        <div className="cx-actions reveal">
          <span>Oder direkt per E-Mail</span>
          <a className="cx-mail" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
      <div className="cx-form reveal"><ContactForm/></div>
    </section>
  </main><Footer/><Motion/></>;
}
