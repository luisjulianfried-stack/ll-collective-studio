'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { site } from '@/lib/site';
import { BrandMark } from '@/components/brand-mark';

const links = [['Leistungen', '#services'], ['Projekte', '#work'], ['Studio', '#about'], ['Kontakt', '#contact']];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const dialog = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  // Sprungziel für „Zum Inhalt springen“ auf jeder Seite, auch wenn <main> keine id hat.
  useEffect(() => { const main = document.querySelector<HTMLElement>('main'); if (main) { main.id ||= 'main'; main.tabIndex = -1; } }, []);
  useEffect(() => { const update = () => { const d = document.documentElement; setProgress(d.scrollTop / Math.max(1, d.scrollHeight - d.clientHeight) * 100); }; window.addEventListener('scroll', update, { passive: true }); update(); return () => window.removeEventListener('scroll', update); }, []);
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
    <a className="skip-link" href="#main">Zum Inhalt springen</a>
    <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />
    <header className="site-header"><Link className="brand" href="/" aria-label="LL Collective Studio, Startseite"><BrandMark/><span className="brand-name">COLLECTIVE<br/>STUDIO</span></Link><span className="header-center">MARKETING & WEBDESIGN <span>—</span> MÜNCHEN</span><div className="header-actions"><a className="header-cta" href={`mailto:${site.email}`}>PROJEKT ANFRAGEN <ArrowUpRight size={15} aria-hidden="true"/></a><button ref={trigger} className="menu-trigger" aria-expanded={open} aria-haspopup="dialog" onClick={() => setOpen(true)}><span lang="en">MENU</span> <Menu size={18} strokeWidth={1.5} aria-hidden="true"/></button></div></header>
    {open && <div className="menu-overlay" ref={dialog} role="dialog" aria-modal="true" aria-label="Hauptmenü"><div className="menu-top"><Link href="/" className="brand" aria-label="LL Collective Studio, Startseite" onClick={() => setOpen(false)}><BrandMark/><span className="brand-name">COLLECTIVE<br/>STUDIO</span></Link><button className="menu-trigger" aria-label="Close – Menü schließen" onClick={() => setOpen(false)}><span lang="en">CLOSE</span> <X size={18} strokeWidth={1.5} aria-hidden="true"/></button></div><div className="menu-content"><p className="eyebrow">LL COLLECTIVE STUDIO / MÜNCHEN</p><nav aria-label="Hauptnavigation">{links.map(([label, href], i) => <Link key={href} href={`/${href}`} onClick={() => setOpen(false)} className="menu-link" style={{ animationDelay: `${i * 65}ms` }}><span>{String(i + 1).padStart(2, '0')}</span><span className="menu-link-label">{label}</span><ArrowUpRight size={24} strokeWidth={1} aria-hidden="true"/></Link>)}</nav></div><div className="menu-bottom"><Link href="/#contact" onClick={() => setOpen(false)}>PROJEKT ANFRAGEN <span aria-hidden="true">↗</span></Link><div>{site.instagram && <a href={site.instagram} target="_blank" rel="noreferrer">INSTAGRAM<span className="sr-only"> (öffnet in neuem Tab)</span></a>}{site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer">LINKEDIN<span className="sr-only"> (öffnet in neuem Tab)</span></a>}<Link href="/impressum" onClick={() => setOpen(false)}>IMPRESSUM</Link><Link href="/datenschutz" onClick={() => setOpen(false)}>DATENSCHUTZ</Link></div></div></div>}
  </>;
}
