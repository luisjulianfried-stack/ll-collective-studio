import Image from 'next/image';

export function SystemMark({ active = 0 }: { active?: number }) {
  return (
    <Image
      key={active}
      src="/brand/ll-balloon.svg"
      alt="LL Collective Studio Monogram"
      className="system-mark"
      width={512}
      height={512}
      unoptimized
    />
  );
}
