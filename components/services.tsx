import { ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site';

const services = [
  {
    number: '01', title: 'Strategie', kicker: 'Der Plan hinter allem',
    text: 'Bevor wir posten oder gestalten, klären wir: Wofür steht Ihre Marke, wen wollen Sie erreichen – und welche Kanäle lohnen sich wirklich?',
    items: ['Marken- & Wettbewerbsanalyse', 'Positionierung & Zielgruppen', 'Kanal- & Content-Strategie', 'Marketing-Plan mit klaren Zielen'],
    ideal: 'Gründung, Neustart, Rebranding',
    icon: <svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="10"/><circle cx="24" cy="24" r="2.5" fill="currentColor"/><path d="M24 2v8M24 38v8M2 24h8M38 24h8"/></svg>,
  },
  {
    number: '02', title: 'Social Media & Content', kicker: 'Sichtbar – jede Woche',
    text: 'Wir betreuen Ihre Kanäle und produzieren Inhalte, die zu Ihrer Marke passen: regelmäßig, durchdacht und mit Wiedererkennung.',
    items: ['Instagram, TikTok & LinkedIn', 'Redaktionsplan & Community', 'Foto, Video & Reels', 'Texte & Captions'],
    ideal: 'Gastronomie, Beauty, lokale Marken',
    icon: <svg viewBox="0 0 48 48"><rect x="13" y="4" width="22" height="40" rx="5"/><path d="M21 9h6"/><path d="M20 20l10 6-10 6z" fill="currentColor"/></svg>,
  },
  {
    number: '03', title: 'Kampagnen & Werbung', kicker: 'Aufmerksamkeit, die Anfragen bringt',
    text: 'Von der Idee bis zur Anzeige: Kampagnen, die auffallen und messbar wirken – online wie offline.',
    items: ['Meta & Google Ads', 'Kampagnenidee & Creatives', 'Events & Aktionen', 'Auswertung & Optimierung'],
    ideal: 'Launches, Eröffnungen, Aktionen',
    icon: <svg viewBox="0 0 48 48"><path d="M6 20v8l6 1 20 11V8L12 19z"/><path d="M12 29l3 12h6l-2-10"/><path d="M38 17c3 2 3 12 0 14M42 13c5 4 5 18 0 22"/></svg>,
  },
  {
    number: '04', title: 'Webdesign & Branding', kicker: 'Der erste Eindruck zählt',
    text: 'Websites und ein visueller Auftritt, die Ihr Angebot auf den ersten Blick erklären und Vertrauen schaffen.',
    items: ['Websites & Landingpages', 'Logo & Corporate Design', 'Mobil optimiert & schnell', 'SEO-Grundlagen'],
    ideal: 'Neue oder veraltete Websites',
    icon: <svg viewBox="0 0 48 48"><rect x="4" y="8" width="40" height="30" rx="3"/><path d="M4 15h40M9 11.5h1M13 11.5h1M17 11.5h1M16 44h16M24 38v6"/><path d="M12 22h14M12 27h9"/><rect x="30" y="21" width="8" height="10" rx="1"/></svg>,
  },
];

const ticker = ['Instagram', 'TikTok', 'Reels', 'Meta Ads', 'Google Ads', 'Websites', 'Branding', 'Foto & Video', 'Kampagnen', 'Events', 'Strategie', 'Content'];

export function Services() {
  return <section id="services" className="vx">
    <div className="vx-ticker" aria-hidden="true">
      <div>{[0, 1].map(k => <span key={k}>{ticker.map(t => <b key={t}>{t}<i>✦</i></b>)}</span>)}</div>
    </div>
    <div className="section-pad vx-inner">
      <div className="vx-head reveal">
        <div>
          <span className="eyebrow">LEISTUNGEN</span>
          <h2>VIER BEREICHE.<br/><em>Ein Ziel.</em></h2>
        </div>
        <p>Sichtbarkeit, die sich auszahlt. Wir verbinden Strategie, Content, Kampagnen und Webdesign – damit Ihre Marke überall gleich stark auftritt.</p>
      </div>
      <div className="vx-grid">
        {services.map(s => <article className="vx-card reveal" key={s.number}>
          <div className="vx-top"><span className="vx-num">{s.number}</span><span className="vx-icon" aria-hidden="true">{s.icon}</span></div>
          <span className="vx-kicker">{s.kicker}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
          <ul>{s.items.map(t => <li key={t}>{t}</li>)}</ul>
          <div className="vx-ideal"><span>IDEAL FÜR</span>{s.ideal}</div>
        </article>)}
      </div>
      <div className="vx-cta reveal">
        <p><strong>Einzeln buchbar</strong> – oder alles aus einer Hand.</p>
        <a className="pill-button dark" href={`mailto:${site.email}`}>ERSTGESPRÄCH ANFRAGEN <ArrowUpRight size={18}/></a>
      </div>
    </div>
  </section>;
}
