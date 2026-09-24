export function BrandMark({ large = false }: { large?: boolean }) {
  return <svg className={`brand-symbol ${large ? 'brand-symbol-large' : ''}`} viewBox="0 0 100 82" aria-hidden="true"><path className="brand-body" d="M8 8h17v50h22v16H8V8Zm40 0h17v50h26v16H48V8Z"/><path className="brand-accent-shape" d="M70 77h21v3H70z"/></svg>;
}
