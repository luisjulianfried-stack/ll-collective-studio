'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, X } from 'lucide-react';
import { site } from '@/lib/site';
import { BrandMark } from '@/components/brand-mark';

const links = [['Leistungen', '#services'], ['Projekte', '#work'], ['Studio', '#about'], ['Kontakt', '#contact']];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const dialog = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => { const update = () => { const d = document.documentElement; setProgress(d.scrollTop / Math.max(1, d.scrollHeight - d.clientHeight) * 100); setScrolled(d.scrollTop > 40); }; window.addEventListener('scroll', update, { passive: true }); update(); return () => window.removeEventListener('scroll', update); }, []);
  useEffect(() => {
    if (!open) return;
    const old = document.body.style.overflow; const triggerButton = trigger.current; document.body.style.overflow = 'hidden';
    dialog.current?.querySelector<HTMLElement>('a,button')?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key !== 'Tab' || !dialog.current) return;
      const els = [...dialog.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled])')];
      const first = els[0], last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', key);
    return () => { document.body.style.overflow = old; document.removeEventListener('keydown', key); triggerButton?.focus({ preventScroll: true }); };
  }, [open]);
  return <>
    <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="header-links" aria-label="Bereiche">{links.slice(0, 3).map(([label, href]) => <Link key={href} href={`/${href}`}>{label}</Link>)}</nav>
      <Link className="brand" href="/" aria-label="LL Collective Studio, Startseite"><BrandMark/><span className="brand-name">Collective Studio</span></Link>
      <div className="header-actions"><Link className="header-cta" href="/#contact">Projekt anfragen</Link><button ref={trigger} className="menu-trigger" aria-label="Menü öffnen" aria-expanded={open} onClick={() => setOpen(true)}><span>Menü</span><i aria-hidden="true"/></button></div>
    </header>
    {open && <div className="menu-overlay" ref={dialog} role="dialog" aria-modal="true" aria-label="Hauptmenü"><div className="menu-top"><Link href="/" className="brand" onClick={() => setOpen(false)}><BrandMark/><span className="brand-name">Collective Studio</span></Link><button className="menu-trigger menu-close" aria-label="Menü schließen" onClick={() => setOpen(false)}><span>Schließen</span><X size={18} strokeWidth={1.25}/></button></div><div className="menu-content"><p className="eyebrow">LL Collective Studio · München</p><nav aria-label="Hauptnavigation">{links.map(([label, href], i) => <Link key={href} href={`/${href}`} onClick={() => setOpen(false)} className="menu-link" style={{ animationDelay: `${120 + i * 90}ms` }}><span>{String(i + 1).padStart(2, '0')}</span><span className="menu-link-label">{label}</span><ArrowUpRight size={22} strokeWidth={1}/></Link>)}</nav></div><div className="menu-bottom"><Link href="/#contact" onClick={() => setOpen(false)}>Projekt anfragen ↗</Link><div>{site.instagram && <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>}{site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}<Link href="/impressum" onClick={() => setOpen(false)}>Impressum</Link><Link href="/datenschutz" onClick={() => setOpen(false)}>Datenschutz</Link></div></div></div>}
  </>;
}
