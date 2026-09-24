import { SystemMark } from '@/components/system-mark';

const services = [
  { number: '01', title: <>BRAND STRATEGY<br/>& IDENTITY</>, description: 'Wir schärfen, wofür Ihre Marke steht, und gestalten einen Auftritt mit Wiedererkennungswert.', output: 'Positionierung · Logo · visuelles System', items: ['Positionierung','Markenstrategie','Visual Identity','Logo & Brand System'] },
  { number: '02', title: <>SOCIAL MEDIA<br/>& CONTENT</>, description: 'Wir planen Themen und Formate und entwickeln Inhalte, die Ihre Marke regelmäßig sichtbar machen.', output: 'Content-Plan · Social-Formate · Creative Direction', items: ['Content Strategy','Redaktionsplanung','Social Media','Foto & Video Konzepte'] },
  { number: '03', title: <>WEBDESIGN<br/>& DIGITAL</>, description: 'Wir gestalten digitale Auftritte, die Ihr Angebot erklären und Menschen zum nächsten Schritt führen.', output: 'Website · Landingpage · UX / UI', items: ['Webdesign','Nutzerführung','Landingpages','Responsive Design'] },
  { number: '04', title: <>CAMPAIGNS<br/>& EXPERIENCES</>, description: 'Wir verbinden Idee, Botschaft und Kanäle zu Kampagnen und Erlebnissen mit klarem Ziel.', output: 'Kampagnenkonzept · Aktivierung · Event-Kommunikation', items: ['Creative Concepts','Kampagnen','Event Marketing','PR & Aktivierung'] },
];

export function Services() {
  return <section id="services" className="services-section section-pad services-v2">
    <div className="services-v2-head reveal">
      <span className="eyebrow">WHAT WE DO</span>
      <h2>FROM STRATEGY<br/>TO <em>PRESENCE.</em></h2>
      <div className="services-v2-lead"><p>Was können wir für Sie übernehmen? Vier Bereiche, die einzeln funktionieren und zusammen einen klaren Markenauftritt ergeben.</p><SystemMark/></div>
    </div>
    <div className="service-grid-v2">
      {services.map(service => <article className="service-card-v2 reveal" key={service.number}>
        <div className="service-card-top"><span>{service.number}</span><span>LL / SERVICES</span></div>
        <h3>{service.title}</h3>
        <p className="service-card-description">{service.description}</p>
        <p className="service-card-output"><span>MÖGLICHES ERGEBNIS</span>{service.output}</p>
        <ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul>
      </article>)}
    </div>
  </section>;
}
