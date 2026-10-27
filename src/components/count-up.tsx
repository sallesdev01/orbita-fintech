"use client";

import { useEffect, useRef, useState } from "react";

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

// Conta de 0 até o valor quando o número aparece na tela.
export function CountUp({ value, duration = 1600, className }: { value: number; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setShown(value * (1 - Math.pow(1 - t, 3)));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      setShown(0);
      raf = requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {brl.format(shown)}
    </span>
  );
}
