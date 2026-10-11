'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { LOGO_PATH, LOGO_VIEWBOX } from '@/lib/logo';

export function Welcome() {
  const [phase, setPhase] = useState<'enter' | 'leave' | 'done'>('enter');
  const timers = useRef<number[]>([]);
  const logo = useRef<HTMLDivElement>(null);
  const visible = phase !== 'done';

  const finish = useCallback(() => {
    timers.current.forEach(id => window.clearTimeout(id));
    timers.current = [];
    setPhase('done');
  }, []);

  useEffect(() => {
    let seen = false;
    try { seen = window.sessionStorage.getItem('ll-welcome-seen') === '1'; } catch {}
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        window.location.hash || seen) {
      finish();
      return;
    }

    try { window.sessionStorage.setItem('ll-welcome-seen', '1'); } catch {}
    // Zum Abschluss fliegt das Logo an seinen Platz oben links im Header.
    const leave = window.setTimeout(() => {
      const target = document.querySelector('.site-header .brand-symbol')?.getBoundingClientRect();
      const from = logo.current?.getBoundingClientRect();
      if (target && from && logo.current && from.width) {
        logo.current.style.setProperty('--fly-x', `${target.left + target.width / 2 - (from.left + from.width / 2)}px`);
        logo.current.style.setProperty('--fly-y', `${target.top + target.height / 2 - (from.top + from.height / 2)}px`);
        logo.current.style.setProperty('--fly-s', `${target.width / from.width}`);
      }
      setPhase('leave');
    }, 3700);
    const done = window.setTimeout(finish, 4500);
    timers.current = [leave, done];
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') finish();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      timers.current.forEach(id => window.clearTimeout(id));
      timers.current = [];
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [finish]);

  useEffect(() => {
    if (!visible) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = oldOverflow; };
  }, [visible]);

  if (phase === 'done') return null;

  return <section className={`welcome-screen ${phase === 'leave' ? 'welcome-leaving' : ''}`} aria-label="Willkommen">
    <span className="welcome-eyebrow">LL COLLECTIVE STUDIO <span aria-hidden="true">—</span> MÜNCHEN</span>
    <div className="welcome-words" aria-hidden="true">
      <div className="welcome-track">
        <span>Strategie.</span>
        <span>Content.</span>
        <span>Webdesign.</span>
        <span>Marketing, das <em>wirkt.</em></span>
      </div>
    </div>
    <div className="welcome-logo" ref={logo} aria-hidden="true">
      <svg viewBox={LOGO_VIEWBOX}>
        <path d={LOGO_PATH} fill="#efede7" fillRule="evenodd"/>
      </svg>
    </div>
    <div className="welcome-progress" aria-hidden="true"/>
    <span className="welcome-count" aria-hidden="true"/>
    <button type="button" className="welcome-skip" onClick={finish}>ÜBERSPRINGEN <span aria-hidden="true">↗</span></button>
  </section>;
}
