import { VideoScrubSection } from '../lib/VideoScrubSection';
import { StagedReveal } from '../components/StagedReveal';
import { CtaBlock } from '../components/CtaBlock';

const STAGES = [
  {
    year: '1997',
    title: 'Το Ξεκίνημα από το Μηδέν',
    text: [
      'Το 1997, ο Νίκος Τσερκεζίδης ξεκινά από το μηδέν, στη Νικήτη της Χαλκιδικής. Χωρίς κεφάλαιο, χωρίς έτοιμο δρόμο — μόνο διάθεση για δουλειά.',
      'Ό,τι ακολούθησε χτίστηκε βήμα-βήμα, με τα χέρια και την επιμονή, όχι με κληρονομημένα προνόμια.',
    ],
  },
  {
    year: '→',
    title: 'Τεχνική Θεμελίωση',
    text: [
      'Τα πρώτα βήματα γίνονται σε μια τεχνική εταιρεία χωματουργικών εργασιών — σκληρή, πρακτική δουλειά στο πεδίο.',
      'Εκεί χτίζεται η τεχνική γνώση και η αντοχή που θα στηρίξουν κάθε επόμενο βήμα της πορείας του.',
    ],
  },
  {
    year: '+',
    title: 'Recycle Greece & MYAETOS',
    text: [
      'Η τεχνική εμπειρία εξελίσσεται στη Recycle Greece, με επίκεντρο την ανακύκλωση και την κυκλική οικονομία.',
      'Λίγο αργότερα, το όραμα επεκτείνεται και στην πολυτελή κατοικία, με την ίδρυση της MYAETOS Luxury Housing.',
    ],
  },
  {
    year: '✓',
    title: 'Ο Άνθρωπος Πίσω Από τις Εταιρείες',
    text: [
      'Σήμερα, ο όμιλος αναλαμβάνει και δημόσια έργα — αποτύπωμα της τεχνικής, περιβαλλοντικής και κατασκευαστικής εμπειρίας που συσσωρεύτηκε στα χρόνια.',
      'Πίσω από τις εταιρείες, παραμένει ο ίδιος άνθρωπος: πειθαρχία, επαγγελματισμός και όραμα, σε κάθε βήμα της πορείας του.',
    ],
  },
];

export function Bio() {
  return (
    <div className="page">
      <section className="bio-photo">
        <div className="bio-photo__frame">
          <img className="bio-photo__img" src="/images/bio/bio-photo.jpg" alt="Νίκος Τσερκεζίδης στο γραφείο του" />
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container section-head">
          <div className="eyebrow">Βιογραφικό</div>
          <h2 className="section-title">
            Μια Πορεία <span className="gold-text">Δύο Δεκαετιών</span>
          </h2>
        </div>
      </section>

      <VideoScrubSection id="bio-scrub" src="/video/builder.webm" scrollLengthVh={STAGES.length * 100 + 60}>
        <StagedReveal triggerId="bio-scrub" count={STAGES.length}>
          {(i, ref) => (
            <div className="bio-stage-overlay" ref={ref} key={STAGES[i].title}>
              <div className="container bio-stage__inner">
                <div className="bio-stage__year">{STAGES[i].year}</div>
                <h2 className="bio-stage__title">{STAGES[i].title}</h2>
                {STAGES[i].text.map((t) => (
                  <p className="bio-stage__text" key={t}>
                    {t}
                  </p>
                ))}
              </div>
            </div>
          )}
        </StagedReveal>
      </VideoScrubSection>

      <section className="section bio-intro">
        <div className="container bio-intro__grid">
          <div className="bio-intro__text">
            <div className="eyebrow">Ο Άνθρωπος</div>
            <h2 className="section-title bio-intro__title">
              Πέρα Από <span className="gold-text">Την Επιχείρηση</span>
            </h2>
            <p className="bio-intro__paragraph">
              [Placeholder κείμενο] Ο Νίκος Τσερκεζίδης συνδυάζει την τεχνική του καταγωγή με ένα διαρκές όραμα για
              βιώσιμη ανάπτυξη, συνδυάζοντας πειθαρχία, εξειδίκευση και κοινωνική ευαισθησία σε κάθε βήμα της πορείας
              του.
            </p>
            <p className="bio-intro__paragraph">
              [Placeholder κείμενο] Πέρα από τους αριθμούς και τις διακρίσεις, παραμένει προσηλωμένος στις αξίες που
              έθεσαν τα θεμέλια της επιχειρηματικής του πορείας από το 2003 μέχρι σήμερα.
            </p>
          </div>
          <div className="bio-intro__photo">
            <img src="/images/awards/hero-institutional.jpg" alt="Νίκος Τσερκεζίδης" />
          </div>
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
