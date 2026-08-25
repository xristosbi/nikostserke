import { useLayoutEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StagedRevealProps {
  triggerId: string;
  count: number;
  children: (index: number, ref: (el: HTMLDivElement | null) => void) => ReactNode;
}

export function StagedReveal({ triggerId, count, children }: StagedRevealProps) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const trigger = document.getElementById(triggerId);
    if (!trigger) return;
    const seg = 1 / count;
    const st = ScrollTrigger.create({
      trigger,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.4,
      onUpdate: (self) => {
        for (let i = 0; i < count; i++) {
          const el = refs.current[i];
          if (!el) continue;
          const center = seg * i + seg / 2;
          const dist = Math.abs(self.progress - center);
          const opacity = Math.max(0, 1 - dist / (seg * 0.65));
          el.style.opacity = String(opacity);
          el.style.transform = `translateY(${(1 - opacity) * 16}px)`;
        }
      },
    });
    return () => st.kill();
  }, [triggerId, count]);

  return (
    <>
      {Array.from({ length: count }, (_, i) =>
        children(i, (el) => {
          refs.current[i] = el;
        }),
      )}
    </>
  );
}
