'use client';
import { useState } from 'react';
import { Pause, Play } from 'lucide-react';

/* Hält die automatisch wechselnden Stories im Hero an (WCAG 2.2.2). */
export function MotionToggle() {
  const [paused, setPaused] = useState(false);
  return <button type="button" className="hx-motion-toggle" onClick={e => {
    const next = !paused;
    e.currentTarget.closest('.hx-visual')?.classList.toggle('hx-paused', next);
    setPaused(next);
  }}>
    {paused ? <Play size={12} aria-hidden="true"/> : <Pause size={12} aria-hidden="true"/>}
    {paused ? 'ANIMATION FORTSETZEN' : 'ANIMATION ANHALTEN'}
  </button>;
}
