import Image from 'next/image';
import { Lines } from '@/components/lines';

const services = [
  {
    number: '01', title: 'Strategie', kicker: 'Der Plan hinter allem',
    text: 'Bevor wir posten oder gestalten, klären wir: Wofür steht Ihre Marke, wen wollen Sie erreichen – und welche Kanäle lohnen sich wirklich?',
    items: ['Marken- & Wettbewerbsanalyse', 'Positionierung & Zielgruppen', 'Kanal- & Content-Strategie', 'Marketing-Plan mit klaren Zielen'],
    ideal: 'Gründung, Neustart, Rebranding',
  },
  {
    number: '02', title: 'Social Media & Content', kicker: 'Sichtbar – jede Woche',
    text: 'Wir betreuen Ihre Kanäle und produzieren Inhalte, die zu Ihrer Marke passen: regelmäßig, durchdacht und mit Wiedererkennung.',
    items: ['Instagram, TikTok & LinkedIn', 'Redaktionsplan & Community', 'Foto, Video & Reels', 'Texte & Captions'],
    ideal: 'Gastronomie, Beauty, lokale Marken',
  },
  {
    number: '03', title: 'Kampagnen & Werbung', kicker: 'Aufmerksamkeit, die Anfragen bringt',
    text: 'Von der Idee bis zur Anzeige: Kampagnen, die auffallen und messbar wirken – online wie offline.',
    items: ['Meta & Google Ads', 'Kampagnenidee & Creatives', 'Events & Aktionen', 'Auswertung & Optimierung'],
    ideal: 'Launches, Eröffnungen, Aktionen',
  },
  {
    number: '04', title: 'Webdesign & Branding', kicker: 'Der erste Eindruck zählt',
    text: 'Websites und ein visueller Auftritt, die Ihr Angebot auf den ersten Blick erklären und Vertrauen schaffen.',
    items: ['Websites & Landingpages', 'Logo & Corporate Design', 'Mobil optimiert & schnell', 'SEO-Grundlagen'],
    ideal: 'Neue oder veraltete Websites',
  },
];

export function Services() {
  return <section id="services" className="vx section-pad">
    <div className="vx-aside">
      <span className="eyebrow reveal">Leistungen</span>
      <Lines lines={['Vier Bereiche.', <em key="e">Ein Ziel.</em>]}/>
      <p className="reveal">Sichtbarkeit, die sich auszahlt. Wir verbinden Strategie, Content, Kampagnen und Webdesign – damit Ihre Marke überall gleich stark auftritt.</p>
      <figure className="vx-media img-reveal">
        <div className="vx-img" data-parallax="-0.06"><Image src="/possibilities/brand-strategy.webp" alt="" fill unoptimized sizes="(max-width: 1000px) 100vw, 40vw"/></div>
      </figure>
    </div>
    <ol className="vx-list">
      {services.map(s => <li className="vx-item reveal" key={s.number}>
        <span className="vx-num">{s.number}</span>
        <div className="vx-body">
          <span className="vx-kicker">{s.kicker}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
          <ul>{s.items.map(t => <li key={t}>{t}</li>)}</ul>
          <div className="vx-ideal"><span>Ideal für</span>{s.ideal}</div>
        </div>
      </li>)}
    </ol>
  </section>;
}
