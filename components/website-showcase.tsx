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
        <div className="demo-modal-title"><span>LL COLLECTIVE / KONZEPT-DEMO</span><strong id={titleId}>{project.title}</strong></div>
        <div className="demo-modal-actions">
          <a href={project.demoUrl} target="_blank" rel="noopener">IN NEUEM TAB <ArrowUpRight size={16} strokeWidth={1.5}/></a>
          <button ref={closeButton} type="button" onClick={onClose} aria-label="Demo schließen">CLOSE <X size={18} strokeWidth={1.5}/></button>
        </div>
      </div>
      <div className="demo-modal-frame">
        {!loaded && <div className="demo-modal-loading" aria-hidden="true"><span/>DEMO WIRD GELADEN</div>}
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

  return <div className="possibility-canvas possibility-web possibility-web-demo">
    <div className="possibility-top"><span>LL COLLECTIVE / PROJEKT</span><span>{pad(index + 1)} / {pad(total)}</span></div>
    <div className="study-web study-web-demo">
      <div className="web-chrome"><span aria-hidden="true">● &nbsp; ● &nbsp; ●</span><span>{project.chromeLabel}</span></div>
      <button
        ref={trigger}
        type="button"
        className="web-demo-preview"
        aria-haspopup="dialog"
        onPointerDown={e => { pointer.current = e.clientX; }}
        onClick={e => {
          const moved = pointer.current !== null && e.clientX !== 0 && Math.abs(e.clientX - pointer.current) > 6;
          pointer.current = null;
          if (!moved) setOpen(true);
        }}
      >
        <Image src={project.preview} alt={project.previewAlt} fill unoptimized sizes="(max-width: 700px) 88vw, 820px" className="web-demo-image"/>
        <span className="web-demo-shade" aria-hidden="true"/>
        <span className="web-demo-cta">LIVE-DEMO ÖFFNEN <ArrowUpRight size={16} strokeWidth={1.5}/></span>
      </button>
      <div className="web-flow web-demo-flow"><span>INTERAKTIV</span>{project.features.map((f, i) => <Fragment key={f}>{i > 0 && <i>·</i>}<strong>{f}</strong></Fragment>)}</div>
    </div>
    {open && <DemoModal project={project} onClose={close}/>}
  </div>;
}
