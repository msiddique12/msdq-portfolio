"use client";

import { useEffect, useMemo, useState } from "react";

// Animates mapping from "msdq" to highlighted letters in "Muhammad Siddique"
export default function HeroName() {
  const top = "msdq";
  const full = "Muhammad Siddique";

  // Precompute target indices in the full name: M(0), S(9), first d(11), q(14)
  const targets = useMemo(() => ({ M: 0, S: 9, d: 11, q: 14 }), []);

  const [phase, setPhase] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [highlight, setHighlight] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Stagger animation: reveal highlights in sequence M -> S -> d -> q
    const timeouts: number[] = [];
    timeouts.push(window.setTimeout(() => setPhase(1), 200));
    timeouts.push(window.setTimeout(() => setPhase(2), 700));
    timeouts.push(window.setTimeout(() => setPhase(3), 1100));
    timeouts.push(window.setTimeout(() => setPhase(4), 1500));
    return () => timeouts.forEach((t) => window.clearTimeout(t));
  }, []);

  useEffect(() => {
    const next = new Set<number>(highlight);
    if (phase >= 1) next.add(targets.M);
    if (phase >= 2) next.add(targets.S);
    if (phase >= 3) next.add(targets.d);
    if (phase >= 4) next.add(targets.q);
    setHighlight(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  return (
    <div className="relative">
      {/* Top: msdq */}
      <div className="flex items-end gap-4">
        {top.split("").map((ch, i) => (
          <div key={i} className="relative">
            <span className="gradient-text text-5xl sm:text-7xl font-semibold leading-none fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
              {ch}
            </span>
            {/* Down connector indicator */}
            <span className="block h-3" />
            <span className="mx-auto block h-3 w-[2px] bg-white/20 rounded" />
          </div>
        ))}
      </div>

      {/* Bottom: Full name with targeted highlights */}
      <div className="mt-3 select-none font-medium tracking-wide text-white/70">
        {full.split("").map((ch, idx) => {
          const isSpace = ch === " ";
          const isHi = highlight.has(idx);
          return (
            <span
              key={idx}
              className={
                [
                  isSpace ? "inline-block w-2" : "",
                  isHi ? "text-white glow underline underline-offset-4 decoration-white/40" : "",
                  !isHi ? "opacity-70" : "",
                  "transition-colors duration-500",
                ].join(" ")
              }
            >
              {ch}
            </span>
          );
        })}
      </div>

      <style jsx global>{`
        .glow { text-shadow: 0 0 12px rgba(255,255,255,0.45), 0 0 30px rgba(255,255,255,0.25); }
      `}</style>
    </div>
  );
}
