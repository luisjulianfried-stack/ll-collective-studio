'use client';
import { useEffect, useRef } from 'react';

// Überschriften Zeile für Zeile einblenden, Spotlight auf den Leistungskarten, magnetische Buttons und Cursor mit Label.
export function Pep() {
  const dot = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cleanups: (() => void)[] = [];

    // 1. Überschriften: jede Zeile gleitet aus einer Maske nach oben.
    document.querySelectorAll<HTMLElement>('main h2').forEach(h => {
      if (h.dataset.split) return; h.dataset.split = '1';
      const lines: Node[][] = [[]];
      [...h.childNodes].forEach(n => n.nodeName === 'BR' ? lines.push([]) : lines[lines.length - 1].push(n));
      h.textContent = '';
      lines.forEach((nodes, i) => { const outer = document.createElement('span'); outer.className = 'ln'; const inner = document.createElement('span'); inner.className = 'ln-i'; inner.style.transitionDelay = `${.08 + i * .12}s`; nodes.forEach(n => inner.appendChild(n)); outer.appendChild(inner); h.appendChild(outer); });
    });
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('ln-in'); io.unobserve(e.target); } }), { threshold: .3 });
    document.querySelectorAll('main h2').forEach(h => io.observe(h));
    cleanups.push(() => io.disconnect());

    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return () => cleanups.forEach(f => f());

    // 2. Spotlight auf Karten
    const onCard = (e: PointerEvent) => { const c = (e.target as HTMLElement).closest<HTMLElement>('.vx-card'); if (!c) return; const r = c.getBoundingClientRect(); c.style.setProperty('--mx', `${e.clientX - r.left}px`); c.style.setProperty('--my', `${e.clientY - r.top}px`); };
    document.addEventListener('pointermove', onCard, { passive: true });
    cleanups.push(() => document.removeEventListener('pointermove', onCard));

    // 3. Magnetische Buttons
    document.querySelectorAll<HTMLElement>('.pill-button, .cx-form button[type=submit]').forEach(b => {
      const move = (e: PointerEvent) => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px,${(e.clientY - r.top - r.height / 2) * .35}px)`; };
      const leave = () => { b.style.transform = ''; };
      b.addEventListener('pointermove', move); b.addEventListener('pointerleave', leave);
      cleanups.push(() => { b.removeEventListener('pointermove', move); b.removeEventListener('pointerleave', leave); });
    });

    // 4. Cursor mit Label
    const d = dot.current; if (!d) return () => cleanups.forEach(f => f());
    document.documentElement.classList.add('has-cursor');
    let tx = -100, ty = -100, cx = tx, cy = ty, frame = 0;
    const move = (e: PointerEvent) => {
      tx = e.clientX; ty = e.clientY;
      const t = e.target as HTMLElement;
      const label = t.closest('.showcase-card') ? 'Ansehen' : t.closest('.gallery') ? 'Ziehen' : '';
      d.dataset.label = label;
      d.classList.toggle('is-label', !!label);
      d.classList.toggle('is-link', !label && !!t.closest('a, button, input, textarea, select, label'));
    };
    const tick = () => { cx += (tx - cx) * .2; cy += (ty - cy) * .2; d.style.transform = `translate3d(${cx}px,${cy}px,0)`; frame = requestAnimationFrame(tick); };
    frame = requestAnimationFrame(tick);
    document.addEventListener('pointermove', move, { passive: true });
    cleanups.push(() => { cancelAnimationFrame(frame); document.removeEventListener('pointermove', move); document.documentElement.classList.remove('has-cursor'); });
    return () => cleanups.forEach(f => f());
  }, []);
  return <div className="cursor" ref={dot} aria-hidden="true"/>;
}
