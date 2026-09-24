export function SystemMark({ active = 0 }: { active?: number }) {
  return (
    <img
      key={active}
      src="/brand/ll-monogram.webp"
      alt="LL Collective Studio Monogram"
      className="system-mark"
      width={1254}
      height={1254}
      style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain' }}
    />
  );
}
