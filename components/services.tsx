const services = [
  { number: '01', title: 'Strategie', text: 'Wir klären, wofür Ihre Marke steht, wen Sie erreichen wollen und über welche Kanäle.', tags: ['Positionierung', 'Zielgruppen', 'Marketing-Plan'] },
  { number: '02', title: 'Social Media', text: 'Wir betreuen Ihre Kanäle und produzieren Content, der zu Ihrer Marke passt.', tags: ['Redaktionsplan', 'Foto & Video', 'Texte'] },
  { number: '03', title: 'Kampagnen', text: 'Kampagnen und Anzeigen, die aus Aufmerksamkeit Anfragen machen – online wie offline.', tags: ['Ads', 'Events', 'PR'] },
  { number: '04', title: 'Webdesign', text: 'Websites und ein visueller Auftritt, die Ihr Angebot auf den ersten Blick erklären.', tags: ['Website', 'Logo', 'Branding'] },
];

export function Services() {
  return <section id="services" className="vx section-pad">
    <div className="vx-head reveal">
      <span className="eyebrow">LEISTUNGEN</span>
      <h2>VIER BEREICHE.<br/><em>Ein Ziel.</em></h2>
    </div>
    <div className="vx-grid">
      {services.map(s => <article className="vx-card reveal" key={s.number}>
        <span className="vx-num">{s.number}</span>
        <h3>{s.title}</h3>
        <p>{s.text}</p>
        <ul>{s.tags.map(t => <li key={t}>{t}</li>)}</ul>
      </article>)}
    </div>
  </section>;
}
