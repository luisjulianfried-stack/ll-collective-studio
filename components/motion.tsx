'use client';
import { useEffect } from 'react';
export function Motion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const selectors = ['.section-heading', '.project-card', '.service-card-v2', '.about-heading', '.about-visual', '.about-copy', '.founders', '.footer-v2-brand'];
    const reveals = document.querySelectorAll<HTMLElement>(`${selectors.join(',')}, .reveal`);
    reveals.forEach(el => el.classList.add('reveal'));
    document.documentElement.classList.add('motion-ready');
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });
    reveals.forEach(el => observer.observe(el));
    const sections = [...document.querySelectorAll<HTMLElement>('.hero, .services-section, .work-section, .about-section, .process-section, .contact-section, .growth-section')];
    // Repeating details run only while their section is on screen.
    const visibility = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle('motion-in-view', entry.isIntersecting));
    }, { threshold: 0.01 });
    sections.forEach(section => visibility.observe(section));
    const targets = new Map<HTMLElement, number>(); const values = new Map<HTMLElement, number>();
    let frame = 0;
    const tick = () => { let moving = false; for (const section of sections) { const target = targets.get(section) ?? 0; const old = values.get(section) ?? target; const next = old + (target - old) * .16; values.set(section, next); section.style.setProperty('--section-progress', next.toFixed(3)); if (Math.abs(target - next) > .002) moving = true; } frame = moving ? requestAnimationFrame(tick) : 0; };
    const sample = () => { const h = window.innerHeight; for (const section of sections) { const r = section.getBoundingClientRect(); targets.set(section, Math.min(1, Math.max(0, (h - r.top) / (h + r.height)))); } if (!frame) frame = requestAnimationFrame(tick); };
    sample(); window.addEventListener('scroll', sample, { passive: true }); window.addEventListener('resize', sample);
    return () => { observer.disconnect(); visibility.disconnect(); sections.forEach(section => section.classList.remove('motion-in-view')); window.removeEventListener('scroll', sample); window.removeEventListener('resize', sample); if (frame) cancelAnimationFrame(frame); document.documentElement.classList.remove('motion-ready'); };
  }, []);
  return null;
}
