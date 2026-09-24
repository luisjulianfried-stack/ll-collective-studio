export function SystemMark({ active = 0 }: { active?: number }) {
  return (
    <img
      key={active}
      src="/brand/ll-balloon.svg"
      alt="LL Collective Studio Monogram"
      className="system-mark"
      width={512}
      height={512}
      style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain' }}
    />
  );
}
