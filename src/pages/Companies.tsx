import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { VideoScrubSection } from '../lib/VideoScrubSection';
import { CtaBlock } from '../components/CtaBlock';
import { useLang } from '../lib/i18n';

gsap.registerPlugin(ScrollTrigger);

const COMPANIES = [
  {
    name: 'Recycle Greece',
    logo: '/images/logos/recycle-greece.svg',
    desc: {
      el: 'Ανακύκλωση και κυκλική οικονομία από το 2003, με πιστοποιημένα υλικά και επισκέψιμο πάρκο ανακύκλωσης.',
      en: 'Recycling and circular economy since 2003, with certified materials and a recycling park open to visitors.',
    },
  },
  {
    name: 'DELOS Energy',
    logo: '/images/logos/delos-energy.svg',
    desc: {
      el: 'Διαχείριση μη επικίνδυνων στερεών αποβλήτων και πράσινη ενεργειακή αξιοποίηση.',
      en: 'Management of non-hazardous solid waste and green energy recovery.',
    },
  },
  {
    name: 'MYAETOS Luxury Housing',
    logo: '/images/logos/myaetos.svg',
    desc: {
      el: 'Ανάπτυξη πολυτελών κατοικιών στη Χαλκιδική, με Golden Visa και τεχνική καθετοποίηση από το εργοτάξιο έως την παράδοση.',
      en: 'Luxury residential development in Chalkidiki, with Golden Visa eligibility and full in-house delivery from construction site to handover.',
    },
  },
];

export function Companies() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

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
        <div className="eyebrow">{t({ el: 'Οι Εταιρείες', en: 'The Companies' })}</div>
        <h1 className="kinetic-title kinetic-title--sm">
          {t({ el: 'ΤΡΕΙΣ ΕΤΑΙΡΕΙΕΣ,', en: 'THREE COMPANIES,' })}
          <br />
          {t({ el: 'ΜΙΑ ΟΡΑΜΑΤΙΚΗ ΠΟΡΕΙΑ', en: 'ONE VISIONARY JOURNEY' })}
        </h1>
      </VideoScrubSection>

      <section className="section">
        <div className="container company-cards" ref={cardsRef}>
          {COMPANIES.map((c, i) => (
            <div className="company-card" key={c.name}>
              <div className="company-card__index">{String(i + 1).padStart(2, '0')}</div>
              <img className="company-card__logo" src={c.logo} alt={`${t({ el: 'Λογότυπο', en: 'Logo' })} ${c.name}`} />
              <h3 className="company-card__name">{c.name}</h3>
              <p className="company-card__desc">{t(c.desc)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container companies-note">
          <div className="section-head">
            <div className="eyebrow">{t({ el: 'Το Όραμα', en: 'The Vision' })}</div>
            <h2 className="section-title">
              {t({ el: 'Τρεις Εταιρείες,', en: 'Three Companies,' })}{' '}
              <span className="gold-text">{t({ el: 'Ένα Όραμα', en: 'One Vision' })}</span>
            </h2>
          </div>
          <p className="companies-note__text">
            {t({
              el: 'Οι τρεις εταιρείες συνθέτουν μια ενιαία επιχειρηματική φιλοσοφία — από την ανακύκλωση και την κυκλική οικονομία, έως την πράσινη ενέργεια και την πολυτελή κατοικία — με κοινό άξονα τη βιώσιμη ανάπτυξη και τη μακροπρόθεσμη αξία.',
              en: 'Together, the three companies form a single business philosophy — from recycling and the circular economy to green energy and luxury housing — united by sustainable growth and long-term value.',
            })}
          </p>
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
