import Image from 'next/image';

export function BrandMark({ large = false }: { large?: boolean }) {
  return (
    <Image
      src="/brand/ll-logo.svg"
      alt=""
      className={`brand-symbol ${large ? 'brand-symbol-large' : ''}`}
      width={large ? 110 : 58}
      height={large ? 83 : 44}
      unoptimized
      style={{ display: 'block', height: 'auto', objectFit: 'contain' }}
    />
  );
}
