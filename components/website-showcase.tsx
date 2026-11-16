'use client';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { ArrowUpRight, X } from 'lucide-react';
import type { ShowcaseProject } from '@/lib/showcases';

function DemoModal({ project, onClose }: { project: ShowcaseProject; onClose: () => void }) {
  const dialog = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const [loaded, setLoaded] = useState(false);
  const titleId = `demo-modal-title-${project.slug}`;

  useEffect(() => {
    const root = dialog.current;
    const siblings = Array.from(document.body.children).filter(el => el !== root && !el.hasAttribute('inert')) as HTMLElement[];
    siblings.forEach(el => el.setAttribute('inert', ''));
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      siblings.forEach(el => el.removeAttribute('inert'));
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return createPortal(
    <div className="demo-modal" ref={dialog} role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <div className="demo-modal-bar">
        <div className="demo-modal-title"><span>LL Collective · Konzept-Demo</span><strong id={titleId}>{project.title}</strong></div>
        <div className="demo-modal-actions">
          <a href={project.demoUrl} target="_blank" rel="noopener">In neuem Tab <ArrowUpRight size={15} strokeWidth={1.5}/></a>
          <button ref={closeButton} type="button" onClick={onClose} aria-label="Demo schließen">Schließen <X size={16} strokeWidth={1.5}/></button>
        </div>
      </div>
      <div className="demo-modal-frame">
        {!loaded && <div className="demo-modal-loading" aria-hidden="true"><span/>Demo wird geladen</div>}
        <iframe src={project.demoUrl} title={`${project.title} – interaktive Konzept-Demo`} onLoad={() => setLoaded(true)}/>
      </div>
      <p className="demo-modal-note">{project.note}</p>
    </div>,
    document.body,
  );
}

export function WebsiteShowcase({ project, index, total }: { project: ShowcaseProject; index: number; total: number }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const pointer = useRef<number | null>(null);
  const pad = (n: number) => String(n).padStart(2, '0');

  const close = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => trigger.current?.focus({ preventScroll: true }));
  }, []);

  return <div className="pj">
    <button
      ref={trigger}
      type="button"
      className="pj-preview"
      aria-haspopup="dialog"
      onPointerDown={e => { pointer.current = e.clientX; }}
      onClick={e => {
        const moved = pointer.current !== null && e.clientX !== 0 && Math.abs(e.clientX - pointer.current) > 6;
        pointer.current = null;
        if (!moved) setOpen(true);
      }}
    >
      <Image src={project.preview} alt={project.previewAlt} fill unoptimized sizes="(max-width: 700px) 86vw, 760px" className="pj-image"/>
      <span className="pj-cta">Live-Demo öffnen <ArrowUpRight size={15} strokeWidth={1.5}/></span>
    </button>
    <div className="pj-info">
      <span className="pj-index">{pad(index + 1)} <i>/ {pad(total)}</i></span>
      <div>
        <span className="eyebrow">{project.category}</span>
        <h3>{project.title}</h3>
        <p className="pj-features">Konzept-Demo · {project.features.map((f, i) => <Fragment key={f}>{i > 0 && ' · '}{f}</Fragment>)}</p>
      </div>
    </div>
    {open && <DemoModal project={project} onClose={close}/>}
  </div>;
}
