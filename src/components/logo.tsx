export function OrbitMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden fill="none">
      <circle cx="16" cy="16" r="6" fill="currentColor" />
      <ellipse cx="16" cy="16" rx="14" ry="6.5" stroke="currentColor" strokeWidth="2" transform="rotate(-28 16 16)" />
      <circle cx="28.2" cy="9.6" r="2.6" fill="var(--color-mint)" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 text-xl font-semibold tracking-tight ${className}`}>
      <OrbitMark className="size-8 text-orbit" />
      órbita
    </span>
  );
}
