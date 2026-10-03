import { VideoScrubSection } from '../lib/VideoScrubSection';
import { StagedReveal } from '../components/StagedReveal';
import { CtaBlock } from '../components/CtaBlock';
import { useLang, type Tr } from '../lib/i18n';

const STAGES: { year: string; title: Tr; text: Tr<string[]> }[] = [
  {
    year: '1997',
    title: { el: 'Το Ξεκίνημα από το Μηδέν', en: 'Starting From Zero' },
    text: {
      el: [
        'Το 1997, ο Νίκος Τσερκεζίδης ξεκινά από το μηδέν, στη Νικήτη της Χαλκιδικής. Χωρίς κεφάλαιο, χωρίς έτοιμο δρόμο — μόνο διάθεση για δουλειά.',
        'Ό,τι ακολούθησε χτίστηκε βήμα-βήμα, με τα χέρια και την επιμονή, όχι με κληρονομημένα προνόμια.',
      ],
      en: [
        'In 1997, Nikos Tserkezidis starts from zero in Nikiti, Chalkidiki. No capital, no ready-made path — only a drive to work.',
        'Everything that followed was built step by step, with his own hands and persistence, not inherited privilege.',
      ],
    },
  },
  {
    year: '→',
    title: { el: 'Τεχνική Θεμελίωση', en: 'A Technical Foundation' },
    text: {
      el: [
        'Τα πρώτα βήματα γίνονται σε μια τεχνική εταιρεία χωματουργικών εργασιών — σκληρή, πρακτική δουλειά στο πεδίο.',
        'Εκεί χτίζεται η τεχνική γνώση και η αντοχή που θα στηρίξουν κάθε επόμενο βήμα της πορείας του.',
      ],
      en: [
        'His first steps are taken at a technical earthworks company — hard, hands-on work in the field.',
        'That is where he builds the technical know-how and resilience that would support every step of his journey.',
      ],
    },
  },
  {
    year: '+',
    title: { el: 'Recycle Greece & MYAETOS', en: 'Recycle Greece & MYAETOS' },
    text: {
      el: [
        'Η τεχνική εμπειρία εξελίσσεται στη Recycle Greece, με επίκεντρο την ανακύκλωση και την κυκλική οικονομία.',
        'Λίγο αργότερα, το όραμα επεκτείνεται και στην πολυτελή κατοικία, με την ίδρυση της MYAETOS Luxury Housing.',
      ],
      en: [
        'That technical experience evolves into Recycle Greece, focused on recycling and the circular economy.',
        'Soon after, the vision expands into luxury housing with the founding of MYAETOS Luxury Housing.',
      ],
    },
  },
  {
    year: '✓',
    title: { el: 'Ο Άνθρωπος Πίσω Από τις Εταιρείες', en: 'The Man Behind the Companies' },
    text: {
      el: [
        'Σήμερα, ο όμιλος αναλαμβάνει και δημόσια έργα — αποτύπωμα της τεχνικής, περιβαλλοντικής και κατασκευαστικής εμπειρίας που συσσωρεύτηκε στα χρόνια.',
        'Πίσω από τις εταιρείες, παραμένει ο ίδιος άνθρωπος: πειθαρχία, επαγγελματισμός και όραμα, σε κάθε βήμα της πορείας του.',
      ],
      en: [
        'Today, the group also undertakes public works — a reflection of the technical, environmental and construction experience gathered over the years.',
        'Behind the companies, he remains the same man: discipline, professionalism and vision, at every step of the way.',
      ],
    },
  },
];

export function Bio() {
  const { t } = useLang();
  return (
    <div className="page">
      <section className="bio-photo">
        <div className="bio-photo__frame">
          <img
            className="bio-photo__img"
            src="/images/bio/bio-photo.jpg"
            alt={t({ el: 'Νίκος Τσερκεζίδης στο γραφείο του', en: 'Nikos Tserkezidis in his office' })}
          />
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container section-head">
          <div className="eyebrow">{t({ el: 'Βιογραφικό', en: 'Biography' })}</div>
          <h2 className="section-title">
            {t({ el: 'Μια Πορεία', en: 'A Journey of' })}{' '}
            <span className="gold-text">{t({ el: 'Δύο Δεκαετιών', en: 'Two Decades' })}</span>
          </h2>
        </div>
      </section>

      <VideoScrubSection id="bio-scrub" src="/video/builder.webm" scrollLengthVh={STAGES.length * 100 + 60}>
        <StagedReveal triggerId="bio-scrub" count={STAGES.length}>
          {(i, ref) => (
            <div className="bio-stage-overlay" ref={ref} key={STAGES[i].title.el}>
              <div className="container bio-stage__inner">
                <div className="bio-stage__year">{STAGES[i].year}</div>
                <h2 className="bio-stage__title">{t(STAGES[i].title)}</h2>
                {t(STAGES[i].text).map((text) => (
                  <p className="bio-stage__text" key={text}>
                    {text}
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
            <div className="eyebrow">{t({ el: 'Ο Άνθρωπος', en: 'The Man' })}</div>
            <h2 className="section-title bio-intro__title">
              {t({ el: 'Πέρα Από', en: 'Beyond' })}{' '}
              <span className="gold-text">{t({ el: 'Την Επιχείρηση', en: 'the Business' })}</span>
            </h2>
            <p className="bio-intro__paragraph">
              {t({
                el: 'Ο Νίκος Τσερκεζίδης συνδυάζει την τεχνική του καταγωγή με ένα διαρκές όραμα για βιώσιμη ανάπτυξη, συνδυάζοντας πειθαρχία, εξειδίκευση και κοινωνική ευαισθησία σε κάθε βήμα της πορείας του.',
                en: 'Nikos Tserkezidis pairs his technical background with an enduring vision for sustainable growth, bringing discipline, expertise and social responsibility to every step of his journey.',
              })}
            </p>
            <p className="bio-intro__paragraph">
              {t({
                el: 'Πέρα από τους αριθμούς και τις διακρίσεις, παραμένει προσηλωμένος στις αξίες που έθεσαν τα θεμέλια της επιχειρηματικής του πορείας από το 2003 μέχρι σήμερα.',
                en: 'Beyond the figures and the distinctions, he remains committed to the values that laid the foundations of his business journey from 2003 to the present day.',
              })}
            </p>
          </div>
          <div className="bio-intro__photo">
            <img src="/images/awards/hero-institutional.jpg" alt={t({ el: 'Νίκος Τσερκεζίδης', en: 'Nikos Tserkezidis' })} />
          </div>
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
