import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    eyebrow: '01 — Ανακύκλωση',
    name: 'Recycle Greece',
    desc: 'Ανακύκλωση, κυκλική οικονομία, πιστοποιημένα υλικά.',
  },
  {
    eyebrow: '02 — Πράσινη Ενέργεια',
    name: 'DELOS Energy',
    desc: 'Διαχείριση αποβλήτων, πράσινη ενεργειακή αξιοποίηση.',
  },
  {
    eyebrow: '03 — Πολυτελής Κατοικία',
    name: 'MYAETOS Luxury Housing',
    desc: 'Πολυτελείς κατοικίες, Golden Visa, τεχνική ανάπτυξη.',
  },
];

export function PillarsOverlay({ triggerId }: { triggerId: string }) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const trigger = document.getElementById(triggerId);
    if (!trigger) return;
    const seg = 1 / PILLARS.length;
    const st = ScrollTrigger.create({
      trigger,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.4,
      onUpdate: (self) => {
        PILLARS.forEach((_, i) => {
          const el = refs.current[i];
          if (!el) return;
          const center = seg * i + seg / 2;
          const dist = Math.abs(self.progress - center);
          const opacity = Math.max(0, 1 - dist / (seg * 0.65));
          el.style.opacity = String(opacity);
          el.style.transform = `translateY(${(1 - opacity) * 16}px)`;
        });
      },
    });
    return () => st.kill();
  }, [triggerId]);

  return (
    <>
      {PILLARS.map((p, i) => (
        <div
          className="pillar"
          key={p.name}
          ref={(el) => {
            refs.current[i] = el;
          }}
        >
          <div className="eyebrow pillar__eyebrow">{p.eyebrow}</div>
          <h3 className="pillar__name">{p.name}</h3>
          <p className="pillar__desc">{p.desc}</p>
        </div>
      ))}
    </>
  );
}
