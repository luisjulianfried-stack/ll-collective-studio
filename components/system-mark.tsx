import { useId } from 'react';

export function SystemMark({ active = 0 }: { active?: number }) {
  const id = useId().replaceAll(':', '');
  const shape = 'M54 36V226H160 M180 36V226H298';
  return <svg className="system-mark" viewBox="0 0 350 275" aria-hidden="true">
    <defs>
      <linearGradient id={`metal-${id}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f6f3eb"/>
        <stop offset=".34" stopColor="#a6a49f"/>
        <stop offset=".55" stopColor="#f2eee4"/>
        <stop offset="1" stopColor="#8d8b86"/>
      </linearGradient>
      <linearGradient id={`light-${id}`}><stop stopColor="#fff" stopOpacity="0"/><stop offset=".5" stopColor="#fff" stopOpacity=".72"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient>
      <mask id={`shape-${id}`}><path d={shape} stroke="white" strokeWidth="26" fill="none" strokeLinejoin="miter" strokeLinecap="square"/></mask>
    </defs>
    <path className="system-mark-depth" d={shape} fill="none" stroke="#000" strokeWidth="30" strokeLinejoin="miter" strokeLinecap="square"/>
    <path className="system-mark-guide" d={shape} fill="none" stroke="#c9c3b7" strokeOpacity=".34" strokeWidth="1" strokeLinejoin="miter" strokeLinecap="square"/>
    <path key={active} className="system-mark-body" d={shape} fill="none" stroke={`url(#metal-${id})`} strokeWidth="26" strokeLinejoin="miter" strokeLinecap="square"/>
    <path className="system-mark-edge" d="M43 36V238H160 M169 36V238H298" fill="none" stroke="#fff" strokeOpacity=".46" strokeWidth="1" strokeLinecap="square"/>
    <g key={active} mask={`url(#shape-${id})`} transform="rotate(-18 175 137)"><rect className="system-mark-glint" x="-150" y="-90" width="90" height="490" fill={`url(#light-${id})`}/></g>
  </svg>;
}
