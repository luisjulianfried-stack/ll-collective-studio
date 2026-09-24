'use client';
import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { showcases } from '@/lib/site';

const scenes: Record<string, { image: string; label: string; caption: string }> = {
  identity: { image: '/possibilities/brand-strategy.webp', label: 'STRATEGIE & IDENTITÄT', caption: 'Klarheit beginnt im Gespräch.' },
  social: { image: '/possibilities/content-production.webp', label: 'CONTENT & SOCIAL', caption: 'Ideen werden zu Inhalten.' },
  campaign: { image: '/possibilities/campaign-planning.webp', label: 'KAMPAGNENKONZEPT', caption: 'Eine Idee. Viele Kontaktpunkte.' },
  event: { image: '/possibilities/event-planning.webp', label: 'EVENT & EXPERIENCE', caption: 'Erlebnisse werden geplant.' },
};

function Visual({ kind, number }: { kind: string; number: string }) {
  const scene = scenes[kind];
  if (scene) return <div className={`possibility-canvas possibility-photo possibility-${kind}`} aria-hidden="true">
    <Image src={scene.image} alt="" fill unoptimized sizes="(max-width: 700px) 88vw, 850px" className="possibility-photo-image"/>
    <div className="possibility-photo-shade"/>
    <div className="possibility-top"><span>LL COLLECTIVE / POSSIBILITIES</span><span>{number} / 05</span></div>
    <div className="possibility-photo-caption"><span>{scene.label} / KONZEPTVISUALISIERUNG</span><strong>{scene.caption}</strong></div>
  </div>;
  return <div className={`possibility-canvas possibility-${kind}`} aria-hidden="true">
    <div className="possibility-top"><span>LL COLLECTIVE / OUTPUT</span><span>{number} / 05</span></div>
    {kind === 'web' && <div className="study-web"><div className="web-chrome"><span>● &nbsp; ● &nbsp; ●</span><span>WEBSITE / EXPERIENCE</span></div><div className="web-preview"><div className="web-preview-nav">LL COLLECTIVE STUDIO <span>MENU ＋</span></div><div className="web-preview-hero"><span>STRATEGY · DESIGN · CONTENT</span><strong>Built to be<br/><em>remembered.</em></strong><div>Klare Nutzerführung.<br/>Eine eindeutige nächste Handlung. <span>↗</span></div></div></div><div className="web-flow"><span>USER FLOW</span><strong>Orientieren</strong><i>→</i><strong>Verstehen</strong><i>→</i><strong>Handeln</strong></div></div>}
  </div>;
}

export function ProjectGallery() {
  const track = useRef<HTMLDivElement>(null); const [active, setActive] = useState(0);
  const drag = useRef<{ x: number; left: number } | null>(null);
  const go = (i: number) => { const t = track.current; const card = t?.children[Math.max(0, Math.min(showcases.length - 1, i))] as HTMLElement | undefined; if (t && card) t.scrollTo({ left: card.offsetLeft - t.offsetLeft, behavior: 'smooth' }); };
  const scroll = () => { const t = track.current; if (!t) return; const cards = [...t.children] as HTMLElement[]; setActive(cards.reduce((best, card, i) => Math.abs(card.offsetLeft - t.offsetLeft - t.scrollLeft) < Math.abs(cards[best].offsetLeft - t.offsetLeft - t.scrollLeft) ? i : best, 0)); };
  return <section id="work" className="work-section section-pad work-v2">
    <div className="section-heading reveal"><div><span className="eyebrow">WAS DARAUS ENTSTEHEN KANN</span><h2>IDEAS BECOME<br/><em>IDENTITY.</em></h2></div><p>Fünf mögliche Ergebnisse aus unserem Angebot. Die Visualisierungen zeigen Leistungen, keine abgeschlossenen Kundenprojekte.</p></div>
    <div className="gallery-wrap"><div className="gallery" ref={track} onScroll={scroll} onPointerDown={e => { if (e.pointerType === 'mouse') drag.current = { x: e.clientX, left: e.currentTarget.scrollLeft }; }} onPointerMove={e => { if (drag.current) e.currentTarget.scrollLeft = drag.current.left - (e.clientX - drag.current.x); }} onPointerUp={() => { drag.current = null; }} onPointerLeave={() => { drag.current = null; }} aria-label="Mögliche Projektergebnisse" tabIndex={0} onKeyDown={e => { if (e.key === 'ArrowRight') { e.preventDefault(); go(active + 1); } if (e.key === 'ArrowLeft') { e.preventDefault(); go(active - 1); } }}>
      {showcases.map(item => <article className="project-card showcase-card output-card-v2" key={item.number}><div className={`project-art art-${item.tone}`}><Visual kind={item.visual} number={item.number}/></div><div className="project-info output-info-v2"><div><span className="eyebrow">{item.category}</span><h3>{item.outputTitle}</h3></div></div></article>)}
    </div></div>
    <div className="gallery-controls"><span className="gallery-hint">← DRAG / SWIPE →</span><div className="gallery-bar"><span style={{ transform: `scaleX(${(active + 1) / showcases.length})` }}/></div><span className="counter">0{active + 1} / 0{showcases.length}</span><button aria-label="Vorheriges Beispiel" onClick={() => go(active - 1)} disabled={active === 0}><ArrowLeft size={20}/></button><button aria-label="Nächstes Beispiel" onClick={() => go(active + 1)} disabled={active === showcases.length - 1}><ArrowRight size={20}/></button></div>
  </section>;
}
