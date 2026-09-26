'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { ArrowUpRight, X } from 'lucide-react';

export const ARCHITECTURE_DEMO_URL = '/showcase/architektur/';

function DemoModal({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const [loaded, setLoaded] = useState(false);

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
    <div className="demo-modal" ref={dialog} role="dialog" aria-modal="true" aria-labelledby="demo-modal-title">
      <div className="demo-modal-bar">
        <div className="demo-modal-title"><span>LL COLLECTIVE / KONZEPT-DEMO</span><strong id="demo-modal-title">Architektur-Website</strong></div>
        <div className="demo-modal-actions">
          <a href={ARCHITECTURE_DEMO_URL} target="_blank" rel="noopener">IN NEUEM TAB <ArrowUpRight size={16} strokeWidth={1.5}/></a>
          <button ref={closeButton} type="button" onClick={onClose} aria-label="Demo schließen">CLOSE <X size={18} strokeWidth={1.5}/></button>
        </div>
      </div>
      <div className="demo-modal-frame">
        {!loaded && <div className="demo-modal-loading" aria-hidden="true"><span/>DEMO WIRD GELADEN</div>}
        <iframe src={ARCHITECTURE_DEMO_URL} title="Architektur-Website – interaktive Konzept-Demo" onLoad={() => setLoaded(true)}/>
      </div>
      <p className="demo-modal-note">Konzept-Demo von LL Collective Studio für ein fiktives Architektur- und Bauunternehmen. Visualisierungen und Inhalte sind Beispiele, kein Kundenprojekt.</p>
    </div>,
    document.body,
  );
}

export function ArchitectureShowcase({ number }: { number: string }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const pointer = useRef<number | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => trigger.current?.focus({ preventScroll: true }));
  }, []);

  return <div className="possibility-canvas possibility-web possibility-web-demo">
    <div className="possibility-top"><span>LL COLLECTIVE / OUTPUT</span><span>{number} / 05</span></div>
    <div className="study-web study-web-demo">
      <div className="web-chrome"><span aria-hidden="true">● &nbsp; ● &nbsp; ●</span><span>ARCHITEKTUR-WEBSITE / KONZEPT-DEMO</span></div>
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
        <Image src="/showcase/architektur-preview.webp" alt="Startseite der Architektur-Website: Villa mit Pool und der Headline „Räume für ein Leben mit Anspruch.“" fill unoptimized sizes="(max-width: 700px) 88vw, 820px" className="web-demo-image"/>
        <span className="web-demo-shade" aria-hidden="true"/>
        <span className="web-demo-cta">LIVE-DEMO ÖFFNEN <ArrowUpRight size={16} strokeWidth={1.5}/></span>
      </button>
      <div className="web-flow web-demo-flow"><span>INTERAKTIV</span><strong>Hausführung</strong><i>·</i><strong>Grundriss</strong><i>·</i><strong>Materialien</strong></div>
    </div>
    {open && <DemoModal onClose={close}/>}
  </div>;
}
