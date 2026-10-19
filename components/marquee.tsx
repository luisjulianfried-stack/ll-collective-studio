'use client';
import { useEffect, useRef } from 'react';

const words = ['Strategie', 'Social Media', 'Content', 'Kampagnen', 'Webdesign', 'Branding'];

// Laufband zwischen Hero und Leistungen. Läuft von selbst, wird beim Scrollen schneller und dreht mit der Scrollrichtung.
export function Marquee() {
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = track.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let x = 0, dir = -1, boost = 0, lastY = window.scrollY, frame = 0, last = performance.now();
    const onScroll = () => { const dy = window.scrollY - lastY; lastY = window.scrollY; if (dy) dir = dy > 0 ? -1 : 1; boost = Math.min(boost + Math.abs(dy) * .9, 60); };
    const tick = (now: number) => {
      const dt = Math.min(now - last, 64) / 16.7; last = now;
      boost *= .92;
      x += dir * (1.1 + boost) * dt;
      const half = el.scrollWidth / 2;
      if (x <= -half) x += half; if (x > 0) x -= half;
      el.style.transform = `translate3d(${x}px,0,0)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); };
  }, []);
  const row = words.map((w, i) => <span key={w} className={i % 2 ? 'mq-word mq-serif' : 'mq-word'}>{w}<i aria-hidden="true">✦</i></span>);
  return <div className="mq" aria-label={words.join(', ')} role="img">
    <div className="mq-track" ref={track} aria-hidden="true">{row}{row}</div>
  </div>;
}
