'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { SystemMark } from '@/components/system-mark';

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
    const leave = window.setTimeout(() => setPhase('leave'), 2400);
    const done = window.setTimeout(finish, 3250);
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

  return <div className={`welcome-screen ${phase === 'leave' ? 'welcome-leaving' : ''}`} aria-label="Willkommen bei LL Collective Studio">
    <div className="welcome-inner">
      <span className="welcome-eyebrow">WELCOME TO</span>
      <div className="welcome-emblem"><SystemMark/></div>
      <div className="welcome-rule" aria-hidden="true"/>
      <span className="welcome-name">COLLECTIVE STUDIO</span>
      <span className="welcome-detail">STRATEGY · DESIGN · CONTENT · DIGITAL</span>
    </div>
    <button type="button" className="welcome-skip" onClick={finish}>ÜBERSPRINGEN <span aria-hidden="true">↗</span></button>
  </div>;
}
