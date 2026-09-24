const services = [
  { number: '01', title: <>BRAND STRATEGY<br/>& IDENTITY</>, items: ['Positionierung','Markenstrategie','Visual Identity','Logo & Brand System','Tone of Voice'] },
  { number: '02', title: <>SOCIAL MEDIA<br/>& CONTENT</>, items: ['Content Strategy','Creative Direction','Social Media','Foto & Video Konzepte','Editorial Planning'] },
  { number: '03', title: <>WEBDESIGN<br/>& DIGITAL</>, items: ['Webdesign','UX / UI','Landingpages','Digital Experiences','Conversion Optimierung'] },
  { number: '04', title: <>CAMPAIGNS<br/>& EXPERIENCES</>, items: ['Creative Concepts','Campaigns','Event Marketing','PR','Activation'] },
];

export function Services() {
  return <section id="services" className="services-section section-pad services-v2">
    <div className="services-v2-head reveal">
      <span className="eyebrow">WHAT WE DO</span>
      <h2>FROM STRATEGY<br/>TO <em>PRESENCE.</em></h2>
      <p>Wir entwickeln Markenauftritte von der strategischen Grundlage bis zur kreativen Umsetzung.</p>
    </div>
    <div className="service-grid-v2">
      {services.map(service => <article className="service-card-v2 reveal" key={service.number}>
        <div className="service-card-top"><span>{service.number}</span><span>LL / SERVICES</span></div>
        <h3>{service.title}</h3>
        <ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul>
      </article>)}
    </div>
  </section>;
}