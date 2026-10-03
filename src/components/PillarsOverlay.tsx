import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '../lib/i18n';

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    eyebrow: { el: '01 — Ανακύκλωση', en: '01 — Recycling' },
    name: 'Recycle Greece',
    desc: {
      el: 'Ανακύκλωση, κυκλική οικονομία, πιστοποιημένα υλικά.',
      en: 'Recycling, circular economy, certified materials.',
    },
  },
  {
    eyebrow: { el: '02 — Πράσινη Ενέργεια', en: '02 — Green Energy' },
    name: 'DELOS Energy',
    desc: {
      el: 'Διαχείριση αποβλήτων, πράσινη ενεργειακή αξιοποίηση.',
      en: 'Waste management and green energy recovery.',
    },
  },
  {
    eyebrow: { el: '03 — Πολυτελής Κατοικία', en: '03 — Luxury Housing' },
    name: 'MYAETOS Luxury Housing',
    desc: {
      el: 'Πολυτελείς κατοικίες, Golden Visa, τεχνική ανάπτυξη.',
      en: 'Luxury residences, Golden Visa, technical development.',
    },
  },
];

export function PillarsOverlay({ triggerId }: { triggerId: string }) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const { t } = useLang();

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
          const isLast = i === PILLARS.length - 1;
          let opacity: number;
          if (isLast && self.progress > center) {
            opacity = 1;
          } else {
            const dist = Math.abs(self.progress - center);
            opacity = Math.max(0, 1 - dist / (seg * 0.65));
          }
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
          <div className="eyebrow pillar__eyebrow">{t(p.eyebrow)}</div>
          <h3 className="pillar__name">{p.name}</h3>
          <p className="pillar__desc">{t(p.desc)}</p>
        </div>
      ))}
    </>
  );
}
