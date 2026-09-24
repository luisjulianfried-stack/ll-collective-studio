import Image from 'next/image';

export function BrandMark({ large = false }: { large?: boolean }) {
  return (
    <Image
      src="/brand/ll-balloon.svg"
      alt="LL Collective Studio"
      className={`brand-symbol ${large ? 'brand-symbol-large' : ''}`}
      width={large ? 96 : 38}
      height={large ? 96 : 38}
      unoptimized
      style={{ display: 'block', height: 'auto', objectFit: 'contain' }}
    />
  );
}
