import { VideoScrubSection } from '../lib/VideoScrubSection';
import { KineticTitle } from '../components/KineticTitle';
import { StatCounter } from '../components/StatCounter';
import { PillarsOverlay } from '../components/PillarsOverlay';

const STATS = [
  { target: 2003, suffix: '', label: 'Αρχή Επιχειρηματικής Πορείας στη Νικήτη Χαλκιδικής' },
  { target: 3, suffix: '', label: 'Επιχειρηματικοί Άξονες: Ανακύκλωση, Πράσινη Ενέργεια, Πολυτελής Κατοικία' },
  { target: 20, suffix: '+', label: 'Χρόνια Τεχνικής, Επιχειρηματικής και Κοινωνικής Δράσης' },
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

      <section className="stats">
        <div className="container stats__grid">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <StatCounter target={s.target} suffix={s.suffix} />
              <p className="stat__label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

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
    </div>
  );
}
