import { VideoScrubSection } from '../lib/VideoScrubSection';
import { StagedReveal } from '../components/StagedReveal';
import { CtaBlock } from '../components/CtaBlock';

const STAGES = [
  {
    year: '2003',
    title: 'Τεχνική Καταγωγή στη Νικήτη Χαλκιδικής',
    text: [
      'Η επιχειρηματική πορεία του Νίκου Τσερκεζίδη ξεκινά το 2003, με τεχνική δραστηριότητα στη Νικήτη Χαλκιδικής.',
      'Τα πρώτα χρόνια χτίζουν τις βάσεις γνώσης, πειθαρχίας και τεχνικής εξειδίκευσης που θα καθορίσουν την πορεία των επόμενων δύο δεκαετιών.',
    ],
  },
  {
    year: '→',
    title: 'Η Εξέλιξη σε Recycle Greece',
    text: [
      'Η τεχνική εμπειρία εξελίσσεται σε ολοκληρωμένη επιχειρηματική δραστηριότητα ανακύκλωσης και κυκλικής οικονομίας.',
      'Η Recycle Greece αναδεικνύεται σε σημείο αναφοράς, με πιστοποιημένα υλικά και επισκέψιμο πάρκο ανακύκλωσης.',
    ],
  },
  {
    year: '+',
    title: 'Πράσινη Ενέργεια & Πολυτελής Κατοικία',
    text: [
      'Η επιχειρηματική δραστηριότητα επεκτείνεται στη διαχείριση αποβλήτων και πράσινη ενεργειακή αξιοποίηση, μέσω της DELOS Energy.',
      'Παράλληλα, η MYAETOS Luxury Housing αναπτύσσει πολυτελείς κατοικίες στη Χαλκιδική, με πρόγραμμα Golden Visa και πλήρη τεχνική καθετοποίηση.',
    ],
  },
  {
    year: '32',
    title: 'Διεθνές Προφίλ',
    text: [
      'Συμμετοχή σε 32 διεθνή συνέδρια, ανάμεσά τους το London 2018 Summit και συναντήσεις στα Δυτικά Βαλκάνια.',
      'Η παρουσία σε περιβάλλοντα υψηλού κύρους ενισχύει τη διεθνή αναγνώριση της επιχειρηματικής δράσης.',
    ],
  },
  {
    year: '✓',
    title: 'Πιστοποιήσεις & Γλώσσες',
    text: [
      'Ολοκληρωμένο προφίλ τεχνικών και επιχειρηματικών πιστοποιήσεων, σε συνδυασμό με γνώση ξένων γλωσσών.',
      'Ένα θεμέλιο που στηρίζει τη συνεχή ανάπτυξη και διεθνή δραστηριότητα.',
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
