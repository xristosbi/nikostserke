import { Link } from 'react-router-dom';
import { VideoScrubSection } from '../lib/VideoScrubSection';
import { KineticTitle } from '../components/KineticTitle';
import { StatCounter } from '../components/StatCounter';
import { PillarsOverlay } from '../components/PillarsOverlay';
import { CtaBlock } from '../components/CtaBlock';
import { useLang } from '../lib/i18n';

const STATS = [
  {
    target: 1997,
    suffix: '',
    label: {
      el: 'Αρχή Επιχειρηματικής Πορείας στη Νικήτη Χαλκιδικής',
      en: 'Start of a Business Journey in Nikiti, Chalkidiki',
    },
  },
  {
    target: 3,
    suffix: '',
    label: {
      el: 'Επιχειρηματικοί Άξονες: Ανακύκλωση, Πράσινη Ενέργεια, Πολυτελής Κατοικία',
      en: 'Business Pillars: Recycling, Green Energy, Luxury Housing',
    },
  },
  {
    target: 29,
    suffix: '+',
    label: {
      el: 'Χρόνια Τεχνικής, Επιχειρηματικής και Κοινωνικής Δράσης',
      en: 'Years of Technical, Business and Social Activity',
    },
  },
];

const AWARD_HIGHLIGHTS = [
  {
    img: '/images/awards/gallery-02.jpg',
    imgPosition: '50% 20%',
    category: { el: 'Κοινωνική Προσφορά', en: 'Social Contribution' },
    caption: {
      el: 'Βράβευση AHEPA Hellas',
      en: 'AHEPA Hellas Award',
    },
  },
  {
    img: '/images/home/teaser-book.jpg',
    imgPosition: '50% 30%',
    category: { el: 'Θεσμική Στήριξη', en: 'Institutional Support' },
    caption: {
      el: 'Διεθνής Συνάντηση',
      en: 'International Meeting',
    },
  },
];

export function Home() {
  const { t } = useLang();
  return (
    <div className="page">
      <VideoScrubSection id="hero" src="/video/hero.webm" scrollLengthVh={320}>
        <KineticTitle text={t({ el: 'ΝΙΚΟΣ ΤΣΕΡΚΕΖΙΔΗΣ', en: 'NIKOS TSERKEZIDIS' })} />
        <p className="hero-subtitle">
          Recycle Greece CEO <span className="sep">|</span> Award-Winning Entrepreneur
        </p>
        <div className="scroll-cue">
          <span className="scroll-cue__line" />
          Scroll
        </div>
      </VideoScrubSection>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container section-head">
          <div className="eyebrow">{t({ el: 'Οι Πυλώνες', en: 'The Pillars' })}</div>
          <h2 className="section-title">
            {t({ el: 'Τρεις Άξονες', en: 'Three Pillars of' })}{' '}
            <span className="gold-text">{t({ el: 'Επιχειρηματικότητας', en: 'Entrepreneurship' })}</span>
          </h2>
        </div>
      </section>

      <VideoScrubSection id="pillars-trigger" src="/video/builder.webm" scrollLengthVh={320} overlayClassName="pillars-overlay">
        <PillarsOverlay triggerId="pillars-trigger" />
      </VideoScrubSection>

      <section className="section awards-teaser">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">{t({ el: 'Βραβεύσεις', en: 'Awards' })}</div>
            <h2 className="section-title">
              {t({ el: 'Αναγνώριση &', en: 'Recognition &' })}{' '}
              <span className="gold-text">{t({ el: 'Διακρίσεις', en: 'Distinctions' })}</span>
            </h2>
          </div>
          <div className="awards-teaser__grid">
            {AWARD_HIGHLIGHTS.map((h) => (
              <div className="awards-teaser__card" key={h.category.el}>
                <img
                  className="awards-teaser__img"
                  src={h.img}
                  alt={t(h.category)}
                  style={{ objectPosition: h.imgPosition }}
                />
                <div className="awards-teaser__scrim" />
                <div className="awards-teaser__content">
                  <div className="eyebrow">{t(h.category)}</div>
                  <p className="awards-teaser__caption">{t(h.caption)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="awards-teaser__link">
            <Link className="text-link" to="/vraveuseis">
              {t({ el: 'Δες όλες τις Βραβεύσεις →', en: 'See all Awards →' })}
            </Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">{t({ el: 'Νούμερα', en: 'Numbers' })}</div>
            <h2 className="section-title">
              {t({ el: 'Μερικά', en: 'Key' })} <span className="gold-text">{t({ el: 'Στατιστικά', en: 'Figures' })}</span>
            </h2>
          </div>
          <div className="stats__grid">
            {STATS.map((s) => (
              <div className="stat" key={s.label.el}>
                <StatCounter target={s.target} suffix={s.suffix} />
                <p className="stat__label">{t(s.label)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
