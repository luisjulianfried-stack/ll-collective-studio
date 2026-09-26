'use client';

import { useEffect, useRef } from 'react';
import type { PointerEvent } from 'react';
import { SystemMark } from '@/components/system-mark';

export function AboutVisual() {
  const visual = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
    const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const element = visual.current;
      if (!element) return;
      element.style.setProperty('--mark-x', `${((x - .5) * 16).toFixed(1)}px`);
      element.style.setProperty('--mark-y', `${((y - .5) * 12).toFixed(1)}px`);
      element.style.setProperty('--light-x', `${(x * 100).toFixed(1)}%`);
      element.style.setProperty('--light-y', `${(y * 100).toFixed(1)}%`);
    });
  }

  function reset() {
    cancelAnimationFrame(frame.current);
    visual.current?.style.removeProperty('--mark-x');
    visual.current?.style.removeProperty('--mark-y');
    visual.current?.style.removeProperty('--light-x');
    visual.current?.style.removeProperty('--light-y');
  }

  return <div ref={visual} className="about-visual reveal" onPointerMove={move} onPointerLeave={reset}>
    <div className="about-visual-top"><span>LL COLLECTIVE</span><span>MUNICH / GERMANY</span></div>
    <div className="about-mark-stage"><SystemMark/></div>
    <div className="about-visual-caption">WEBDESIGN / MARKETING / CONTENT</div>
  </div>;
}
