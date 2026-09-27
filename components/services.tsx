const services = [
  { number: '01', title: 'Webdesign', text: 'Moderne Websites, die Ihr Angebot auf den ersten Blick erklären – schnell, mobil und bei Google auffindbar.', tags: ['Website', 'Relaunch', 'Landingpage'] },
  { number: '02', title: 'Marketing', text: 'Social Media und Kampagnen, die Ihre Marke sichtbar machen – und aus Interessenten Kunden.', tags: ['Social Media', 'Kampagnen', 'Strategie'] },
  { number: '03', title: 'Content', text: 'Fotos, Videos und Texte, die zu Ihrer Marke passen – für einen Auftritt mit Wiedererkennung.', tags: ['Foto & Video', 'Texte', 'Branding'] },
];

export function Services() {
  return <section id="services" className="vx section-pad">
    <div className="vx-head reveal">
      <span className="eyebrow">LEISTUNGEN</span>
      <h2>DREI DINGE.<br/><em>Richtig gemacht.</em></h2>
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
