'use client';
import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { showcases } from '@/lib/showcases';
import { WebsiteShowcase } from '@/components/website-showcase';

export function ProjectGallery() {
  const track = useRef<HTMLDivElement>(null); const [active, setActive] = useState(0);
  const drag = useRef<{ x: number; left: number } | null>(null);
  const total = showcases.length;
  const pad = (n: number) => String(n).padStart(2, '0');
  const go = (i: number) => { const t = track.current; const card = t?.children[Math.max(0, Math.min(total - 1, i))] as HTMLElement | undefined; if (t && card) t.scrollTo({ left: card.offsetLeft - t.offsetLeft, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); };
  const scroll = () => { const t = track.current; if (!t) return; const cards = [...t.children] as HTMLElement[]; setActive(cards.reduce((best, card, i) => Math.abs(card.offsetLeft - t.offsetLeft - t.scrollLeft) < Math.abs(cards[best].offsetLeft - t.offsetLeft - t.scrollLeft) ? i : best, 0)); };
  return <section id="work" className="work-section section-pad work-v2">
    <div className="section-heading reveal"><div><span className="eyebrow">WAS DARAUS ENTSTEHEN KANN</span><h2>IDEAS BECOME<br/><em>IDENTITY.</em></h2></div><p>Beispielprojekte aus unserem Studio – zum Anklicken und Ausprobieren. Konzept-Demos sind als solche gekennzeichnet. Weitere Projekte folgen.</p></div>
    <div className={`gallery-wrap${total === 2 ? ' gallery-duo' : ''}`}><div className="gallery" ref={track} onScroll={scroll} onPointerDown={e => { if (e.pointerType === 'mouse' && total > 1) drag.current = { x: e.clientX, left: e.currentTarget.scrollLeft }; }} onPointerMove={e => { if (drag.current) e.currentTarget.scrollLeft = drag.current.left - (e.clientX - drag.current.x); }} onPointerUp={() => { drag.current = null; }} onPointerCancel={() => { drag.current = null; }} onPointerLeave={() => { drag.current = null; }} aria-label="Beispielprojekte" tabIndex={total > 1 ? 0 : undefined} onKeyDown={e => { if (e.key === 'ArrowRight') { e.preventDefault(); go(active + 1); } if (e.key === 'ArrowLeft') { e.preventDefault(); go(active - 1); } }}>
      {showcases.map((item, i) => <article className="project-card showcase-card output-card-v2" key={item.slug}><div className="project-art art-blue"><WebsiteShowcase project={item} index={i} total={total}/></div><div className="project-info output-info-v2"><div><span className="eyebrow">{item.category}</span><h3>{item.title}</h3></div></div></article>)}
    </div></div>
    {total > 1 && <div className={`gallery-controls${total === 2 ? ' gallery-controls-duo' : ''}`}><span className="gallery-hint">← DRAG / SWIPE →</span><div className="gallery-bar"><span style={{ transform: `scaleX(${(active + 1) / total})` }}/></div><span className="counter">{pad(active + 1)} / {pad(total)}</span><button aria-label="Vorheriges Projekt" onClick={() => go(active - 1)} disabled={active === 0}><ArrowLeft size={20}/></button><button aria-label="Nächstes Projekt" onClick={() => go(active + 1)} disabled={active === total - 1}><ArrowRight size={20}/></button></div>}
  </section>;
}
