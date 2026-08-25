import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export function KineticTitle({ text, className = '', delay = 0.2 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const chars = el.querySelectorAll('.char');
    gsap.fromTo(
      chars,
      { yPercent: 120, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, ease: 'power4.out', stagger: 0.035, delay },
    );
  }, [text, delay]);

  return (
    <h1 ref={ref} className={`kinetic-title ${className}`}>
      {text.split('').map((c, i) => (
        <span className="char-mask" key={i}>
          <span className="char">{c === ' ' ? ' ' : c}</span>
        </span>
      ))}
    </h1>
  );
}
