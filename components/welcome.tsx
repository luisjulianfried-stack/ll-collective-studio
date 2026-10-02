'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export function Welcome() {
  const [phase, setPhase] = useState<'enter' | 'leave' | 'done'>('enter');
  const timers = useRef<number[]>([]);
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
    const leave = window.setTimeout(() => setPhase('leave'), 3000);
    const done = window.setTimeout(finish, 3850);
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
    <div className="welcome-progress" aria-hidden="true"/>
    <span className="welcome-count" aria-hidden="true"/>
    <button type="button" className="welcome-skip" onClick={finish}>ÜBERSPRINGEN <span aria-hidden="true">↗</span></button>
  </section>;
}
