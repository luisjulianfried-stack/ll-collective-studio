'use client';

import { useEffect, useState } from 'react';
import { SystemMark } from '@/components/system-mark';

export function Welcome() {
  const [phase, setPhase] = useState<'enter' | 'leave' | 'done'>('enter');
  const visible = phase !== 'done';

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        window.location.hash || window.sessionStorage.getItem('ll-welcome-seen')) {
      setPhase('done');
      return;
    }

    window.sessionStorage.setItem('ll-welcome-seen', '1');
    const leave = window.setTimeout(() => setPhase('leave'), 2400);
    const done = window.setTimeout(() => setPhase('done'), 3250);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPhase('done');
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(done);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = oldOverflow; };
  }, [visible]);

  if (phase === 'done') return null;

  return <div className={`welcome-screen ${phase === 'leave' ? 'welcome-leaving' : ''}`} aria-label="Willkommen bei LL Collective Studio">
    <div className="welcome-inner">
      <span className="welcome-eyebrow">WELCOME TO</span>
      <div className="welcome-emblem"><SystemMark/></div>
      <div className="welcome-rule" aria-hidden="true"/>
      <span className="welcome-name">COLLECTIVE STUDIO</span>
      <span className="welcome-detail">STRATEGY · DESIGN · CONTENT · DIGITAL</span>
    </div>
    <button type="button" className="welcome-skip" onClick={() => setPhase('done')}>ÜBERSPRINGEN <span aria-hidden="true">↗</span></button>
  </div>;
}
