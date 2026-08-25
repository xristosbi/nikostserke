import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function StatCounter({ target, suffix = '', duration = 1.6 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { val: 0 };
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + suffix;
          },
        });
      },
    });
    return () => st.kill();
  }, [target, suffix, duration]);

  return (
    <span ref={ref} className="stat__num">
      0{suffix}
    </span>
  );
}
