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

const moments = [
  ['/possibilities/campaign-planning.webp', 'Kampagnen', 'Zwei Personen planen eine Kampagne an einer Wand mit Plakatentwürfen'],
  ['/possibilities/content-production.webp', 'Content-Produktion', 'Video-Dreh für Social Media in einem hellen Studio'],
  ['/possibilities/event-planning.webp', 'Events & Aktionen', 'Team bespricht Unterlagen für ein Event an einem festlich gedeckten Tisch'],
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
        <h1 className="hx-title">
          <span className="ln"><span>Marketing,</span></span>{' '}
          <span className="ln"><span>das <em>wirkt.</em></span></span>
        </h1>
        <div className="hx-copy">
          <p className="hx-lead">Strategie, Social Media, Kampagnen und Websites – wir machen Ihre Marke sichtbar und bringen Sie zu Ihren Kunden. Alles aus einer Hand.</p>
          <div className="hx-actions">
            <a className="btn btn-dark btn-small" href="#contact">Projekt anfragen <ArrowUpRight size={14} strokeWidth={1.5}/></a>
            <a className="text-link" href="#work">Projekte ansehen <ArrowDown size={14} strokeWidth={1.5}/></a>
          </div>
        </div>
      </div>
    </section>

    <section className="bx" aria-label="Einblicke in unsere Arbeit">
      {moments.map(([src, label, alt], i) => <figure className="bx-item img-reveal" style={{ ['--d' as string]: i }} key={src}>
        <div className="bx-img" data-parallax={i === 1 ? '-0.05' : '0.04'}><Image src={src} alt={alt} fill unoptimized sizes="(max-width: 700px) 100vw, 33vw"/></div>
        <figcaption><span>{String(i + 1).padStart(2, '0')}</span>{label}</figcaption>
      </figure>)}
    </section>

    <section className="ix section-pad" aria-label="Unser Anspruch">
      <span className="eyebrow reveal">LL Collective Studio</span>
      <Lines as="p" className="ix-statement" lines={[
        <>Marken, die man <em>sieht,</em></>,
        <><em>versteht</em> und sich <em>merkt.</em></>,
      ]}/>
      <p className="ix-text reveal">Wir verbinden Strategie, Content, Kampagnen und Webdesign – damit Ihre Marke überall gleich stark auftritt.</p>
      <ul className="ix-pillars">{pillars.map(([a, b], i) => <li className="reveal" style={{ ['--d' as string]: i }} key={a}>{a}<br/>{b}</li>)}</ul>
    </section>

    <Services/>
    <ProjectGallery/>

    <section id="about" className="sx">
      <div className="sx-copy section-pad">
        <span className="eyebrow reveal">Über uns</span>
        <Lines lines={['Junges Team.', <em key="e">Frischer Blick.</em>]}/>
        <p className="sx-text reveal">Wir sind zwei Marketing-Studenten aus München. Wir kennen die Kanäle, auf denen Ihre Kunden unterwegs sind – und setzen Ihr Projekt persönlich um, ohne Umwege über eine große Agentur.</p>
        <div className="sx-founders reveal"><div><span>Co-Founder</span><strong>Luis Fried</strong></div><div><span>Co-Founder</span><strong>Leander Ballhausen</strong></div></div>
      </div>
      <figure className="sx-media img-reveal">
        <div className="sx-img" data-parallax="-0.08"><Image src="/media/ll-campaign-poster.jpg" alt="Plakat von LL Collective Studio mit dem LL-Monogramm an einer Litfaßsäule in der Stadt" fill unoptimized sizes="(max-width: 1000px) 100vw, 45vw"/></div>
        <figcaption>LL Collective Studio · Kampagnenmotiv</figcaption>
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
