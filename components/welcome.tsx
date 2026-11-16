'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { LOGO_PATH, LOGO_VIEWBOX } from '@/lib/logo';

/*
 * Eröffnung: Auf Creme zeichnet sich das LL-Logo von unten nach oben ein,
 * eine feine Linie läuft aus, drei Worte erscheinen nacheinander.
 * Dann hebt sich der Vorhang, das Logo gleitet an seinen Platz im Header
 * und die Startseite baut sich darunter auf. Einmal pro Sitzung, überspringbar.
 */
const LEAVE_AT = 3300;
const DONE_AT = 4700;

export function Welcome() {
  const [phase, setPhase] = useState<'enter' | 'leave' | 'done'>('enter');
  const timers = useRef<number[]>([]);
  const logo = useRef<HTMLDivElement>(null);
  const visible = phase !== 'done';

  const finish = useCallback(() => {
    timers.current.forEach(id => window.clearTimeout(id));
    timers.current = [];
    document.documentElement.classList.add('intro-done', 'intro-landed');
    setPhase('done');
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains('intro-skip')) { finish(); return; }

    try { window.sessionStorage.setItem('ll-welcome-seen', '1'); } catch {}
    const leave = window.setTimeout(() => {
      const target = document.querySelector('.site-header .brand-symbol')?.getBoundingClientRect();
      const from = logo.current?.getBoundingClientRect();
      if (target && from && logo.current && from.width) {
        logo.current.style.setProperty('--fly-x', `${target.left + target.width / 2 - (from.left + from.width / 2)}px`);
        logo.current.style.setProperty('--fly-y', `${target.top + target.height / 2 - (from.top + from.height / 2)}px`);
        logo.current.style.setProperty('--fly-s', `${target.width / from.width}`);
      }
      root.classList.add('intro-done');
      setPhase('leave');
    }, LEAVE_AT);
    const done = window.setTimeout(finish, DONE_AT);
    timers.current = [leave, done];
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') finish(); };
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

  return <section className={`welcome-screen${phase === 'leave' ? ' welcome-leaving' : ''}`} aria-label="Willkommen">
    <div className="welcome-curtain" aria-hidden="true"/>
    <span className="welcome-eyebrow">LL Collective Studio <i aria-hidden="true"/> München</span>
    <div className="welcome-center">
      <div className="welcome-logo" ref={logo} aria-hidden="true">
        <svg viewBox={LOGO_VIEWBOX}><path d={LOGO_PATH} fill="currentColor" fillRule="evenodd"/></svg>
      </div>
      <span className="welcome-line" aria-hidden="true"/>
      <p className="welcome-words" aria-hidden="true"><span>Strategie</span><span>Content</span><span>Webdesign</span></p>
    </div>
    <button type="button" className="welcome-skip" onClick={finish}>Überspringen</button>
  </section>;
}
