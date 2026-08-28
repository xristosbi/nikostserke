import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { VideoScrubSection } from '../lib/VideoScrubSection';
import { CtaBlock } from '../components/CtaBlock';

gsap.registerPlugin(ScrollTrigger);

const COMPANIES = [
  {
    name: 'Recycle Greece',
    logo: '/images/logos/recycle-greece.svg',
    desc: 'Ανακύκλωση και κυκλική οικονομία από το 2003, με πιστοποιημένα υλικά και επισκέψιμο πάρκο ανακύκλωσης.',
  },
  {
    name: 'DELOS Energy',
    logo: '/images/logos/delos-energy.svg',
    desc: 'Διαχείριση μη επικίνδυνων στερεών αποβλήτων και πράσινη ενεργειακή αξιοποίηση.',
  },
  {
    name: 'MYAETOS Luxury Housing',
    logo: '/images/logos/myaetos.svg',
    desc: 'Ανάπτυξη πολυτελών κατοικιών στη Χαλκιδική, με Golden Visa και τεχνική καθετοποίηση από το εργοτάξιο έως την παράδοση.',
  },
];

export function Companies() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = cardsRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('.company-card');
    const tween = gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: { trigger: el, start: 'top 75%' },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div className="page">
      <VideoScrubSection id="companies-hero" src="/video/closer.webm" scrollLengthVh={220}>
        <div className="eyebrow">Οι Εταιρείες</div>
        <h1 className="kinetic-title kinetic-title--sm">
          ΤΡΕΙΣ ΕΤΑΙΡΕΙΕΣ,
          <br />
          ΜΙΑ ΟΡΑΜΑΤΙΚΗ ΠΟΡΕΙΑ
        </h1>
      </VideoScrubSection>

      <section className="section">
        <div className="container company-cards" ref={cardsRef}>
          {COMPANIES.map((c, i) => (
            <div className="company-card" key={c.name}>
              <div className="company-card__index">{String(i + 1).padStart(2, '0')}</div>
              <img className="company-card__logo" src={c.logo} alt={`Λογότυπο ${c.name}`} />
              <h3 className="company-card__name">{c.name}</h3>
              <p className="company-card__desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
