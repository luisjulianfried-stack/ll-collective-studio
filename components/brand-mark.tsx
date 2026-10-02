import Image from 'next/image';

export function BrandMark({ large = false }: { large?: boolean }) {
  return (
    <Image
      src="/brand/ll-mark.svg"
      alt=""
      className={`brand-symbol ${large ? 'brand-symbol-large' : ''}`}
      width={large ? 110 : 58}
      height={large ? 110 : 58}
      unoptimized
      style={{ display: 'block', height: 'auto', objectFit: 'contain' }}
    />
  );
}
