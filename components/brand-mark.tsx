import { LOGO_PATH, LOGO_VIEWBOX } from '@/lib/logo';

// Das LL-Logo als Inline-SVG: übernimmt die Textfarbe (currentColor) der Umgebung.
export function BrandMark({ large = false }: { large?: boolean }) {
  return <svg className={`brand-symbol${large ? ' brand-symbol-large' : ''}`} viewBox={LOGO_VIEWBOX} aria-hidden="true" focusable="false">
    <path d={LOGO_PATH} fill="currentColor" fillRule="evenodd"/>
  </svg>;
}
