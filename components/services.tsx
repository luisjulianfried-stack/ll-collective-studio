'use client';
import { useEffect, useRef, useState } from 'react';
import { SystemMark } from '@/components/system-mark';

const capabilities = [
  { name: 'Strategy', line: 'DIRECTION BEFORE DESIGN.', title: 'Klarheit, bevor etwas sichtbar wird.', description: 'Bevor Gestaltung, Content oder Kampagnen entstehen, definieren wir die strategische Richtung. Wir analysieren Zielgruppe, Wettbewerb und Customer Journey und entwickeln daraus eine klare Positionierung mit einer verständlichen Value Proposition.', terms: ['Positionierung', 'Zielgruppensegmentierung', 'Ideal Customer Profile', 'Value Proposition', 'Customer Journey', 'Markenstrategie'], result: 'Eine klare Grundlage für alle weiteren Entscheidungen.' },
  { name: 'Identity', line: 'RECOGNITION BY DESIGN.', title: 'Eine Identität, die wiedererkannt wird.', description: 'Wir übersetzen die strategische Richtung in ein konsistentes visuelles und sprachliches System. So entsteht ein Auftritt, der über alle relevanten Touchpoints hinweg eindeutig zur Marke gehört.', terms: ['Visual Identity', 'Brand System', 'Tone of Voice', 'Key Visual', 'Markenarchitektur', 'Brand Consistency'], result: 'Ein Markenauftritt mit Charakter und Wiedererkennungswert.' },
  { name: 'Content', line: 'RELEVANCE NEEDS STRUCTURE.', title: 'Content mit System statt einzelner Posts.', description: 'Wir entwickeln feste Content Pillars, relevante Formate und eine klare Creative Direction. Dadurch entstehen Inhalte, die zur Marke passen, kontinuierlich produziert werden können und nicht nach jedem Beitrag neu erfunden werden müssen.', terms: ['Content Strategy', 'Content Pillars', 'Creative Direction', 'Editorial Planning', 'Social Media', 'Community Management'], result: 'Ein konsistentes Content-System für dauerhafte Relevanz.' },
  { name: 'Digital', line: 'TURN ATTENTION INTO ACTION.', title: 'Digitale Experiences, die verständlich führen.', description: 'Wir verbinden hochwertige Gestaltung mit einer klaren Informationsarchitektur und einem durchdachten User Flow. Websites und Landingpages sollen nicht nur beeindrucken, sondern Besucher gezielt zur gewünschten Handlung führen.', terms: ['User Experience', 'User Interface', 'Information Architecture', 'User Flow', 'Responsive Design', 'Conversion Rate Optimization'], result: 'Eine digitale Präsenz, die Aufmerksamkeit in Handlung überführt.' },
  { name: 'Activation', line: 'CREATE MOMENTUM.', title: 'Ideen, die in Bewegung kommen.', description: 'Wir aktivieren Marken über Kampagnen, Social Media, Events und relevante Kommunikationskanäle. Key Message, Creative Concept und Media Mix werden dabei auf ein gemeinsames Kampagnenziel ausgerichtet.', terms: ['Creative Concept', 'Key Message', 'Media Mix', 'Campaign Activation', 'Event Marketing', 'Performance Creative'], result: 'Eine abgestimmte Aktivierung mit klaren Zielen und messbaren KPIs.' },
] as const;

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rows = [...section.querySelectorAll<HTMLElement>('.capability-row')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
    rows.forEach(row => observer.observe(row));
    let frame = 0;
    const update = () => {
      frame = 0;
      const center = window.innerHeight * 0.48;
      let index = 0;
      rows.forEach((row, i) => { if (row.getBoundingClientRect().top <= center) index = i; });
      setActive(index);
      const start = rows[0]?.getBoundingClientRect().top ?? center;
      const end = rows[rows.length - 1]?.getBoundingClientRect().bottom ?? center;
      setProgress(Math.max(0, Math.min(1, (center - start) / Math.max(1, end - start))));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    section.classList.add('capabilities-motion');
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
      section.classList.remove('capabilities-motion');
    };
  }, []);

  return <section id="services" ref={sectionRef} className="services-section section-pad" aria-labelledby="capabilities-title">
    <div className="capabilities-intro">
      <span className="eyebrow">02 / CAPABILITIES</span>
      <h2 id="capabilities-title"><span className="capabilities-heading-line reveal">ONE BRAND.</span><span className="capabilities-heading-line reveal"><em>FIVE</em> SYSTEMS.</span></h2>
      <p>Wir entwickeln keine isolierten Einzelmaßnahmen. Strategie, Identität, Content, digitale Experience und Aktivierung werden zu einem konsistenten Markensystem verbunden.</p>
    </div>
    <div className="capabilities-layout">
      <div className="capabilities-aside" aria-hidden="true">
        <span className="capabilities-aside-label">THE LL SYSTEM</span>
        <div className="capabilities-monogram">
          <div className="system-grid" aria-hidden="true"><span/><span/><span/><span/></div>
          <div className="system-corners" aria-hidden="true"><i/><i/><i/><i/></div>
          <SystemMark active={active}/>
          <div className="system-sequence">{capabilities.map((item, i) => <span className={active === i ? 'selected' : ''} key={item.name}>{item.name}</span>)}</div>
          <div className="system-pulse" key={active} aria-hidden="true"/>
        </div>
        <div className="capabilities-aside-bottom">
          <div className="capabilities-current"><span>0{active + 1}<small> / 05</small></span><strong>{capabilities[active].name}</strong></div>
          <div className="capabilities-track"><span style={{ transform: 'scaleY(' + progress + ')' }}/></div>
        </div>
      </div>
      <div className="capabilities-list">
        {capabilities.map((capability, i) => <article className={'capability-row ' + (active === i ? 'is-active' : '')} key={capability.name}>
          <div className="capability-meta"><span>0{i + 1} / 05</span><span>{capability.line}</span></div>
          <h3>{capability.name}</h3>
          <p className="capability-title">{capability.title}</p>
          <p className="capability-description">{capability.description}</p>
          <span className="capability-terms-label">FACHGEBIETE / {capability.name.toUpperCase()}</span>
          <ul className="capability-terms" aria-label={'Fachgebiete ' + capability.name}>{capability.terms.map((term, termIndex) => <li key={term} style={{ animationDelay: (0.22 + termIndex * 0.045) + 's' }}>{term}</li>)}</ul>
          <p className="capability-result"><span>ERGEBNIS</span>{capability.result}</p>
        </article>)}
      </div>
    </div>
    <div className="capabilities-end"><span className="eyebrow">THE LL SYSTEM</span><p>THE SYSTEM WORKS<br/><em>WHEN EVERYTHING CONNECTS.</em></p><span>Die stärkste Wirkung entsteht, wenn Strategie, Gestaltung und Kommunikation gemeinsam gedacht werden.</span></div>
  </section>;
}
