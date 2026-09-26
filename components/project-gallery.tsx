'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { showcases } from '@/lib/site';
import { ArchitectureShowcase } from '@/components/architecture-demo';

const scenes: Record<string, { image: string; label: string; caption: string }> = {
  identity: { image: '/possibilities/brand-strategy.webp', label: 'STRATEGIE & IDENTITÄT', caption: 'Klarheit beginnt im Gespräch.' },
  social: { image: '/possibilities/content-production.webp', label: 'CONTENT & SOCIAL', caption: 'Ideen werden zu Inhalten.' },
  event: { image: '/possibilities/event-planning.webp', label: 'EVENT & EXPERIENCE', caption: 'Erlebnisse werden geplant.' },
};

function CampaignFilm() {
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const element = video.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) void element.play().catch(() => {});
      else element.pause();
    }, { threshold: 0.25 });
    observer.observe(element);
    return () => { observer.disconnect(); element.pause(); };
  }, []);

  return <div className="possibility-canvas possibility-film">
    <div className="possibility-top"><span>LL COLLECTIVE / POSSIBILITIES</span><span>04 / 05</span></div>
    <div className="campaign-film-layout">
      <div className="campaign-film-copy"><span>CAMPAIGNS / MOTION</span><strong>Eine Idee.<br/><em>In Bewegung.</em></strong><p>Wie eine Marke auch außerhalb des Screens sichtbar werden kann. Eine Konzeptvisualisierung für unseren eigenen Auftritt – kein Kundenprojekt.</p><small>VISUALISIERUNG / LL COLLECTIVE STUDIO</small></div>
      <div className="campaign-film-frame">
        <Image src="/media/ll-campaign-poster.jpg" alt="" fill unoptimized sizes="(max-width: 700px) 50vw, 340px" className="campaign-film-poster"/>
        <video ref={video} src="/media/ll-campaign-concept.mp4" poster="/media/ll-campaign-poster.jpg" muted loop playsInline preload="none" aria-label="Animierte Konzeptvisualisierung eines LL-Motivs auf einer Litfaßsäule"/>
      </div>
    </div>
  </div>;
}

function Visual({ kind, number }: { kind: string; number: string }) {
  if (kind === 'campaign') return <CampaignFilm/>;
  if (kind === 'web') return <ArchitectureShowcase number={number}/>;
  const scene = scenes[kind];
  if (scene) return <div className={`possibility-canvas possibility-photo possibility-${kind}`} aria-hidden="true">
    <Image src={scene.image} alt="" fill unoptimized sizes="(max-width: 700px) 88vw, 850px" className="possibility-photo-image"/>
    <div className="possibility-photo-shade"/>
    <div className="possibility-top"><span>LL COLLECTIVE / POSSIBILITIES</span><span>{number} / 05</span></div>
    <div className="possibility-photo-caption"><span>{scene.label} / KONZEPTVISUALISIERUNG</span><strong>{scene.caption}</strong></div>
  </div>;
  return <div className={`possibility-canvas possibility-${kind}`} aria-hidden="true">
    <div className="possibility-top"><span>LL COLLECTIVE / OUTPUT</span><span>{number} / 05</span></div>
  </div>;
}

export function ProjectGallery() {
  const track = useRef<HTMLDivElement>(null); const [active, setActive] = useState(0);
  const drag = useRef<{ x: number; left: number } | null>(null);
  const go = (i: number) => { const t = track.current; const card = t?.children[Math.max(0, Math.min(showcases.length - 1, i))] as HTMLElement | undefined; if (t && card) t.scrollTo({ left: card.offsetLeft - t.offsetLeft, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); };
  const scroll = () => { const t = track.current; if (!t) return; const cards = [...t.children] as HTMLElement[]; setActive(cards.reduce((best, card, i) => Math.abs(card.offsetLeft - t.offsetLeft - t.scrollLeft) < Math.abs(cards[best].offsetLeft - t.offsetLeft - t.scrollLeft) ? i : best, 0)); };
  return <section id="work" className="work-section section-pad work-v2">
    <div className="section-heading reveal"><div><span className="eyebrow">WAS DARAUS ENTSTEHEN KANN</span><h2>IDEAS BECOME<br/><em>IDENTITY.</em></h2></div><p>Fünf mögliche Ergebnisse aus unserem Angebot. Die Visualisierungen zeigen Leistungen, keine abgeschlossenen Kundenprojekte.</p></div>
    <div className="gallery-wrap"><div className="gallery" ref={track} onScroll={scroll} onPointerDown={e => { if (e.pointerType === 'mouse') drag.current = { x: e.clientX, left: e.currentTarget.scrollLeft }; }} onPointerMove={e => { if (drag.current) e.currentTarget.scrollLeft = drag.current.left - (e.clientX - drag.current.x); }} onPointerUp={() => { drag.current = null; }} onPointerCancel={() => { drag.current = null; }} onPointerLeave={() => { drag.current = null; }} aria-label="Mögliche Projektergebnisse" tabIndex={0} onKeyDown={e => { if (e.key === 'ArrowRight') { e.preventDefault(); go(active + 1); } if (e.key === 'ArrowLeft') { e.preventDefault(); go(active - 1); } }}>
      {showcases.map(item => <article className="project-card showcase-card output-card-v2" key={item.number}><div className={`project-art art-${item.tone}`}><Visual kind={item.visual} number={item.number}/></div><div className="project-info output-info-v2"><div><span className="eyebrow">{item.category}</span><h3>{item.outputTitle}</h3></div></div></article>)}
    </div></div>
    <div className="gallery-controls"><span className="gallery-hint">← DRAG / SWIPE →</span><div className="gallery-bar"><span style={{ transform: `scaleX(${(active + 1) / showcases.length})` }}/></div><span className="counter">0{active + 1} / 0{showcases.length}</span><button aria-label="Vorheriges Beispiel" onClick={() => go(active - 1)} disabled={active === 0}><ArrowLeft size={20}/></button><button aria-label="Nächstes Beispiel" onClick={() => go(active + 1)} disabled={active === showcases.length - 1}><ArrowRight size={20}/></button></div>
  </section>;
}
