import type { ReactNode } from 'react';

// Überschrift, deren Zeilen beim Hineinscrollen einzeln aus einer Maske gleiten.
export function Lines({ as: Tag = 'h2', lines, className = '' }: { as?: 'h1' | 'h2' | 'h3' | 'p'; lines: ReactNode[]; className?: string }) {
  return <Tag className={`lines reveal-lines ${className}`.trim()}>
    {lines.map((line, i) => <span className="ln" key={i} style={{ ['--ln' as string]: i }}><span>{line}</span></span>)}
  </Tag>;
}
