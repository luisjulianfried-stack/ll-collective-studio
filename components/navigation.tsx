'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { site } from '@/lib/site';
import { BrandMark } from '@/components/brand-mark';

const links = [['Leistungen', '#services'], ['Beispiele', '#work'], ['Studio', '#about'], ['Ablauf', '#process'], ['Kontakt', '#contact']];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const dialog = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
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
    return () => { document.body.style.overflow = old; document.removeEventListener('keydown', key); triggerButton?.focus(); };
  }, [open]);
  return <>
    <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />
    <header className="site-header"><Link className="brand" href="/" aria-label="LL Collective Studio, Startseite"><BrandMark/><span className="brand-name">COLLECTIVE<br/>STUDIO</span></Link><span className="header-center">INDEPENDENT CREATIVE STUDIO <span>—</span> MUNICH</span><button ref={trigger} className="menu-trigger" aria-label="Menü öffnen" aria-expanded={open} onClick={() => setOpen(true)}>MENU <Menu size={18} strokeWidth={1.5}/></button></header>
    {open && <div className="menu-overlay" ref={dialog} role="dialog" aria-modal="true" aria-label="Hauptmenü"><div className="menu-top"><Link href="/" className="brand" onClick={() => setOpen(false)}><BrandMark/><span className="brand-name">COLLECTIVE<br/>STUDIO</span></Link><button className="menu-trigger" aria-label="Menü schließen" onClick={() => setOpen(false)}>CLOSE <X size={18} strokeWidth={1.5}/></button></div><div className="menu-content"><p className="eyebrow">LL COLLECTIVE STUDIO / MUNICH</p><nav aria-label="Hauptnavigation">{links.map(([label, href], i) => <Link key={href} href={`/${href}`} onClick={() => setOpen(false)} className="menu-link" style={{ animationDelay: `${i * 65}ms` }}><span>{String(i + 1).padStart(2, '0')}</span>{label}<ArrowUpRight size={24} strokeWidth={1}/></Link>)}</nav></div><div className="menu-bottom"><Link href="/#contact" onClick={() => setOpen(false)}>PROJEKT STARTEN ↗</Link><div>{site.instagram && <a href={site.instagram} target="_blank" rel="noreferrer">INSTAGRAM</a>}{site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>}<Link href="/impressum" onClick={() => setOpen(false)}>IMPRESSUM</Link><Link href="/datenschutz" onClick={() => setOpen(false)}>DATENSCHUTZ</Link></div></div></div>}
  </>;
}
