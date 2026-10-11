import Image from 'next/image';

export function SystemMark({ active = 0 }: { active?: number }) {
  return (
    <Image
      key={active}
      src="/brand/ll-logo.svg"
      alt="LL Collective Studio Monogram"
      className="system-mark"
      width={815}
      height={615}
      unoptimized
    />
  );
}
