'use client';
import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { showcases } from '@/lib/site';
import { SystemMark } from '@/components/system-mark';

function Visual({ kind, number }: { kind: string; number: string }) {
  return <div className={`possibility-canvas possibility-${kind}`} aria-hidden="true">
    <div className="possibility-top"><span>LL COLLECTIVE / LEISTUNGSBEISPIEL</span><span>{number} / 05</span></div>
    {kind === 'identity' && <div className="study-identity">
      <div className="identity-cover"><span>VISUAL IDENTITY / SYSTEM</span><SystemMark/><strong>Eine Marke.<br/>Eine klare Sprache.</strong></div>
      <div className="identity-spec"><span>STRATEGIE → GESTALTUNG</span><strong>Wiedererkennung<br/>an jedem Kontaktpunkt.</strong><div className="identity-colors"><i/><i/><i/></div><small>LOGO · FARBE · TYPOGRAFIE · TONALITÄT</small></div>
    </div>}
    {kind === 'social' && <div className="study-social">
      <div className="social-plan"><span>CONTENT STRATEGY</span><strong>Ein Thema.<br/>Viele Formate.</strong><div className="social-pillars"><div><b>01</b> Wissen</div><div><b>02</b> Einblicke</div><div><b>03</b> Haltung</div></div><small>CONTENT PILLARS → REDAKTIONSPLAN</small></div>
      <div className="social-format"><div className="format-head">LL / STUDIO <span>REEL · 01</span></div><div className="format-core"><span>BEHIND<br/>THE IDEA.</span><i>▶</i></div><div className="format-foot">EIN GEDANKE / EIN KLARES FORMAT</div></div>
    </div>}
    {kind === 'web' && <div className="study-web">
      <div className="web-chrome"><span>● &nbsp; ● &nbsp; ●</span><span>WEBSITE / EXPERIENCE</span></div>
      <div className="web-preview"><div className="web-preview-nav">LL COLLECTIVE STUDIO <span>MENU ＋</span></div><div className="web-preview-hero"><span>STRATEGY · DESIGN · CONTENT</span><strong>Built to be<br/><em>remembered.</em></strong><div>Klare Nutzerführung.<br/>Eine eindeutige nächste Handlung. <span>↗</span></div></div></div>
      <div className="web-flow"><span>USER FLOW</span><strong>Orientieren</strong><i>→</i><strong>Verstehen</strong><i>→</i><strong>Handeln</strong></div>
    </div>}
    {kind === 'campaign' && <div className="study-campaign">
      <div className="campaign-head"><span>KEY MESSAGE / CREATIVE CONCEPT</span><strong>Eine Idee.<br/>Überall erkennbar.</strong></div>
      <div className="campaign-outputs"><div className="campaign-poster"><small>PLAKAT / OOH</small><b>MAKE<br/>IT<br/>MATTER.</b><span>01 / MOTIV</span></div><div className="campaign-digital"><small>SOCIAL / DIGITAL</small><b>MAKE IT<br/>MATTER.</b><span>02 / FORMAT</span></div><div className="campaign-detail"><span>01</span> BOTSCHAFT<br/><span>02</span> GESTALTUNG<br/><span>03</span> KANÄLE</div></div>
    </div>}
    {kind === 'event' && <div className="study-event">
      <div className="event-copy"><span>EVENT EXPERIENCE / PR</span><strong>Ein Erlebnis.<br/>Von Anfang<br/>bis Nachhall.</strong><small>EINLADUNG → ERLEBNIS → CONTENT</small></div>
      <div className="event-plan"><div className="event-plan-head">ABLAUF / KOMMUNIKATION <span>LL / 05</span></div><div className="event-plan-flow"><div><b>01</b><strong>Vorher</strong><span>Einladung & Story</span></div><div><b>02</b><strong>Vor Ort</strong><span>Erlebnis & Content</span></div><div><b>03</b><strong>Danach</strong><span>PR & Nachbereitung</span></div></div><div className="event-plan-foot">EIN KONZEPT ÜBER ALLE PHASEN</div></div>
    </div>}
  </div>;
}
export function ProjectGallery() {
  const track = useRef<HTMLDivElement>(null); const [active, setActive] = useState(0);
  const drag = useRef<{ x: number; left: number } | null>(null);
  const go = (i: number) => { const t = track.current; const card = t?.children[Math.max(0, Math.min(showcases.length - 1, i))] as HTMLElement | undefined; if (t && card) t.scrollTo({ left: card.offsetLeft - t.offsetLeft, behavior: 'smooth' }); };
  const scroll = () => { const t = track.current; if (!t) return; const cards = [...t.children] as HTMLElement[]; setActive(cards.reduce((best, card, i) => Math.abs(card.offsetLeft - t.offsetLeft - t.scrollLeft) < Math.abs(cards[best].offsetLeft - t.offsetLeft - t.scrollLeft) ? i : best, 0)); };
  return <section id="work" className="work-section section-pad"><div className="section-heading reveal"><div><span className="eyebrow">01 / POSSIBILITIES</span><h2>What we can<br/><em>create together.</em></h2></div><p>Keine erfundenen Projekte. Ein konkreter Blick darauf, welche Ergebnisse wir für eine Marke entwickeln können.</p></div><div className="gallery-wrap"><div className="gallery" ref={track} onScroll={scroll} onPointerDown={e => { if (e.pointerType === 'mouse') drag.current = { x: e.clientX, left: e.currentTarget.scrollLeft }; }} onPointerMove={e => { if (drag.current) e.currentTarget.scrollLeft = drag.current.left - (e.clientX - drag.current.x); }} onPointerUp={() => { drag.current = null; }} onPointerLeave={() => { drag.current = null; }} aria-label="Leistungsbeispiele" tabIndex={0} onKeyDown={e => { if (e.key === 'ArrowRight') { e.preventDefault(); go(active + 1); } if (e.key === 'ArrowLeft') { e.preventDefault(); go(active - 1); } }}>
    {showcases.map(item => <article className="project-card showcase-card" key={item.number}><div className={`project-art art-${item.tone}`}><Visual kind={item.visual} number={item.number}/></div><div className="project-info"><div><span className="eyebrow">{item.number} / {item.category}</span><h3>{item.title}</h3><p>{item.description}</p></div></div><div className="deliverables"><span>DAS KANN ENTSTEHEN</span><ul>{item.deliverables.map(d => <li key={d}>{d}</li>)}</ul><p>{item.outcome}</p></div></article>)}
  </div></div><div className="gallery-controls"><span className="gallery-hint">← DRAG / SWIPE TO EXPLORE →</span><div className="gallery-bar"><span style={{ transform: `scaleX(${(active + 1) / showcases.length})` }}/></div><span className="counter">0{active + 1} / 0{showcases.length}</span><button aria-label="Vorheriger Bereich" onClick={() => go(active - 1)} disabled={active === 0}><ArrowLeft size={20}/></button><button aria-label="Nächster Bereich" onClick={() => go(active + 1)} disabled={active === showcases.length - 1}><ArrowRight size={20}/></button></div></section>;
}
