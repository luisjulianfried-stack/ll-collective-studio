'use client';
import { useEffect } from 'react';

/*
 * Scroll-Animationen, bewusst ruhig gehalten:
 * - .reveal / .reveal-lines / .img-reveal blenden einmalig ein, sobald sie sichtbar werden
 * - [data-parallax="0.1"] verschiebt Elemente sanft gegen die Scrollrichtung
 * - [data-parallax-x="0.1"] schiebt Elemente beim Scrollen leicht seitwärts (--px)
 * - .hx bekommt --hero (0–1) für das Ausklingen des Heros
 * Bei „Bewegung reduzieren“ bleibt alles statisch und sofort sichtbar.
 */
export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    root.classList.add('motion-ready');

    const reveals = document.querySelectorAll<HTMLElement>('.reveal, .reveal-lines, .img-reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(el => observer.observe(el));

    const layers = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
    const sideways = [...document.querySelectorAll<HTMLElement>('[data-parallax-x]')];
    const hero = document.querySelector<HTMLElement>('.hx');
    const small = window.matchMedia('(max-width: 700px)');
    let frame = 0;
    const update = () => {
      frame = 0;
      const h = window.innerHeight;
      const damp = small.matches ? .5 : 1;
      for (const el of layers) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > h + 200) continue;
        const speed = Number(el.dataset.parallax) || 0;
        const offset = (r.top + r.height / 2 - h / 2) * speed * damp;
        el.style.setProperty('--py', `${offset.toFixed(1)}px`);
      }
      for (const el of sideways) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > h + 200) continue;
        const offset = (r.top - h) * (Number(el.dataset.parallaxX) || 0) * damp;
        el.style.setProperty('--px', `${offset.toFixed(1)}px`);
      }
      if (hero) {
        const p = Math.min(1, Math.max(0, window.scrollY / Math.max(1, hero.offsetHeight)));
        hero.style.setProperty('--hero', p.toFixed(3));
      }
    };
    const request = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
      if (frame) cancelAnimationFrame(frame);
      root.classList.remove('motion-ready');
    };
  }, []);
  return null;
}
