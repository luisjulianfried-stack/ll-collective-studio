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
  return <section id="services" className="vx">
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
          <span className="vx-num">{s.number}</span>
          <span className="vx-kicker">{s.kicker}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
          <ul>{s.items.map(t => <li key={t}>{t}</li>)}</ul>
          <div className="vx-ideal"><span>IDEAL FÜR</span>{s.ideal}</div>
        </article>)}
      </div>
    </div>
  </section>;
}
