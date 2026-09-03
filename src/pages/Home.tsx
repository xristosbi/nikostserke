import { Link } from 'react-router-dom';
import { VideoScrubSection } from '../lib/VideoScrubSection';
import { KineticTitle } from '../components/KineticTitle';
import { StatCounter } from '../components/StatCounter';
import { PillarsOverlay } from '../components/PillarsOverlay';
import { CtaBlock } from '../components/CtaBlock';

const STATS = [
  { target: 2003, suffix: '', label: 'Αρχή Επιχειρηματικής Πορείας στη Νικήτη Χαλκιδικής' },
  { target: 3, suffix: '', label: 'Επιχειρηματικοί Άξονες: Ανακύκλωση, Πράσινη Ενέργεια, Πολυτελής Κατοικία' },
  { target: 20, suffix: '+', label: 'Χρόνια Τεχνικής, Επιχειρηματικής και Κοινωνικής Δράσης' },
];

const AWARD_HIGHLIGHTS = [
  {
    img: '/images/awards/gallery-01.jpg',
    category: 'Κοινωνική Προσφορά',
    caption: 'Στήριξη ιδρυμάτων και κοινωνικών φορέων — τιμητική αναγνώριση από το Ίδρυμα «Ελπίδα».',
  },
  {
    img: '/images/awards/gallery-06.jpg',
    category: 'Θεσμική Στήριξη',
    caption: 'Τιμητική διάκριση από την Ελληνική Αστυνομία, Διεύθυνση Χαλκιδικής.',
  },
];

export function Home() {
  return (
    <div className="page">
      <VideoScrubSection id="hero" src="/video/hero.webm" scrollLengthVh={320}>
        <KineticTitle text="ΝΙΚΟΣ ΤΣΕΡΚΕΖΙΔΗΣ" />
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
          <div className="eyebrow">Οι Πυλώνες</div>
          <h2 className="section-title">
            Τρεις Άξονες <span className="gold-text">Επιχειρηματικότητας</span>
          </h2>
        </div>
      </section>

      <VideoScrubSection id="pillars-trigger" src="/video/builder.webm" scrollLengthVh={320} overlayClassName="pillars-overlay">
        <PillarsOverlay triggerId="pillars-trigger" />
      </VideoScrubSection>

      <section className="section awards-teaser">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Βραβεύσεις</div>
            <h2 className="section-title">
              Αναγνώριση & <span className="gold-text">Διακρίσεις</span>
            </h2>
          </div>
          <div className="awards-teaser__grid">
            {AWARD_HIGHLIGHTS.map((h) => (
              <div className="awards-teaser__card" key={h.category}>
                <img className="awards-teaser__img" src={h.img} alt={h.category} />
                <div className="awards-teaser__scrim" />
                <div className="awards-teaser__content">
                  <div className="eyebrow">{h.category}</div>
                  <p className="awards-teaser__caption">{h.caption}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="awards-teaser__link">
            <Link className="text-link" to="/vraveuseis">
              Δες όλες τις Βραβεύσεις →
            </Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Νούμερα</div>
            <h2 className="section-title">
              Μερικά <span className="gold-text">Στατιστικά</span>
            </h2>
          </div>
          <div className="stats__grid">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <StatCounter target={s.target} suffix={s.suffix} />
                <p className="stat__label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
