import { useEffect, useMemo, useState } from 'react';
import { CtaBlock } from '../components/CtaBlock';
import { useLang, type Tr } from '../lib/i18n';

const GENERIC_CAPTION: Tr = { el: 'Στιγμιότυπο', en: 'Snapshot' };

const AHEPA: Tr = { el: 'Βράβευση AHEPA Hellas', en: 'AHEPA Hellas award' };
const EXPO_2026: Tr = { el: 'Στην Έκθεση Θεσσαλονίκης 2026', en: 'At the Thessaloniki International Fair 2026' };

// ---- Captions for the 11 photos added after the first triad (easy to edit in one place) ----
// "Έκθεση Εφοπλιστών" / "Κατάδυση" are best guesses from the source file names (not client-confirmed).
const SHIPOWNERS_EXPO: Tr = { el: 'Έκθεση Εφοπλιστών', en: "Shipowners' Exhibition" };
const ND_CONFERENCE: Tr = { el: 'Συνέδριο Νέας Δημοκρατίας', en: 'New Democracy Conference' };
const WITH_PIERRAKAKIS: Tr = {
  el: 'Με τον Υπουργό Οικονομίας Κυριάκο Πιερρακάκη',
  en: 'With Minister of Economy Kyriakos Pierrakakis',
};
const WITH_DENDIAS: Tr = { el: 'Με τον Νίκο Δένδια', en: 'With Nikos Dendias' };
const SFAKIANAKIS: Tr = {
  el: 'Με τον αγαπητό φίλο Μανώλη Σφακιανάκη, αντιστράτηγο εν αποστρατεία της Ελληνικής Αστυνομίας, ιδρυτή και πρώην επικεφαλής της Δίωξης Ηλεκτρονικού Εγκλήματος.\n\nΥπηρέτησε στην Ελληνική Αστυνομία για 34 χρόνια, από τα οποία τα 23 ασχολήθηκε με τη διερεύνηση ηλεκτρονικών εγκλημάτων. Συνέδεσε το όνομά του με την αντιμετώπιση του διαδικτυακού εγκλήματος και την ενημέρωση των πολιτών για την ασφαλή χρήση του διαδικτύου.\n\nΕίναι επίσης ιδρυτής του Διεθνούς Ινστιτούτου Κυβερνοασφάλειας — CSI Institute, με εκπαιδευτικούς και κοινωφελείς σκοπούς, ιδιαίτερα στην πρόληψη και την προστασία από τους κινδύνους του διαδικτύου.',
  en: 'With my dear friend Manolis Sfakianakis, retired Lieutenant General of the Hellenic Police, founder and former head of the Cyber Crime Unit.\n\nHe served in the Hellenic Police for 34 years, 23 of which were devoted to investigating cybercrime. His name is associated with combating online crime and informing citizens about the safe use of the internet.\n\nHe is also the founder of the International Cyber Security Institute — CSI Institute, with educational and charitable purposes, particularly in the prevention of and protection from internet risks.',
};
const DIVE: Tr = { el: 'Κατάδυση', en: 'Dive' };
const JERUSALEM: Tr = { el: 'Πανάγιος Τάφος, Ιεροσόλυμα', en: 'Holy Sepulchre, Jerusalem' };

const p = (n: number, caption: Tr = GENERIC_CAPTION) => ({
  src: `/images/awards/gallery-${String(n).padStart(2, '0')}.jpg`,
  caption,
  long: false,
});

// New photos use their own file names (not the gallery-NN numbering) to avoid renumbering existing files.
const g = (file: string, caption: Tr, long = false) => ({
  src: `/images/awards/${file}.jpg`,
  caption,
  long,
});

const GALLERY_PHOTOS = [
  p(1, AHEPA),
  p(2, {
    el: 'Βράβευση από την AHEPA Hellas και τον Ροταριανό Όμιλο, παρουσία πρώην επικεφαλής ισραηλινής υπηρεσίας',
    en: 'Award from AHEPA Hellas and the Rotary Club, in the presence of a former head of an Israeli agency',
  }),
  p(3),
  // ---- 11 new photos, inserted after the first triad (start of triad 2) ----
  g('gallery-new-01', SHIPOWNERS_EXPO),
  g('gallery-new-02', SHIPOWNERS_EXPO),
  g('gallery-new-03', SHIPOWNERS_EXPO),
  g('gallery-new-04', ND_CONFERENCE),
  g('gallery-new-05', ND_CONFERENCE),
  g('gallery-new-06', WITH_PIERRAKAKIS),
  g('gallery-new-07', WITH_DENDIAS),
  g('gallery-new-08', SFAKIANAKIS, true),
  g('gallery-new-09', DIVE),
  g('gallery-new-10', JERUSALEM),
  g('gallery-new-11', JERUSALEM),
  // ---- existing photos continue in their original relative order ----
  p(4),
  p(5, { el: 'Με το Επιμελητήριο Χαλκιδικής', en: 'With the Chalkidiki Chamber of Commerce' }),
  p(6, { el: 'Με στελέχη της ΕΜΑΚ', en: 'With members of EMAK (Special Disaster Response Unit)' }),
  p(7, AHEPA),
  p(8, {
    el: 'Economist Croatia Business Summit – συνάντηση με τον Πρόεδρο της Κροατίας',
    en: 'Economist Croatia Business Summit – meeting with the President of Croatia',
  }),
  p(9, { el: 'Τελετή βράβευσης AHEPA Hellas', en: 'AHEPA Hellas award ceremony' }),
  p(10, { el: 'Ροταριανός Όμιλος Θεσσαλονίκης', en: 'Rotary Club of Thessaloniki' }),
  p(11, { el: 'Βράβευση AHEPA Hellas, Παράρτημα Μαρουσίου', en: 'AHEPA Hellas award, Marousi Chapter' }),
  p(12, AHEPA),
  p(13),
  p(14),
  p(15),
  p(16, { el: 'Με τον Άδωνη Γεωργιάδη', en: 'With Adonis Georgiadis' }),
  p(17),
  p(18, {
    el: 'Συνέδριο Economist – The World Ahead Gala Dinner 2021',
    en: 'Economist Conference – The World Ahead Gala Dinner 2021',
  }),
  p(19),
  p(20),
  p(21),
  p(22, { el: 'Συνέδριο Economist – 15th Cyprus Summit', en: 'Economist Conference – 15th Cyprus Summit' }),
  p(23),
  p(24),
  p(25),
  p(26),
  p(27),
  p(28, { el: 'Με τον Ιταλό Πρωθυπουργό Ματέο Ρέντσι', en: 'With Italian Prime Minister Matteo Renzi' }),
  p(29),
  p(30),
  p(31, { el: 'Με τον Βαγγέλη Μαρινάκη', en: 'With Evangelos Marinakis' }),
  p(32),
  p(33),
  p(34),
  p(35),
  p(36),
  p(37),
  p(39, { el: 'Με τον Υπουργό Χρυσοχοΐδη', en: 'With Minister Michalis Chrysochoidis' }),
  p(40, EXPO_2026),
  p(41, EXPO_2026),
  p(42, { el: 'Έκθεση Θεσσαλονίκης 2026', en: 'Thessaloniki International Fair 2026' }),
];

function chunk<T>(items: T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) pages.push(items.slice(i, i + size));
  return pages;
}

const MOBILE_QUERY = '(max-width: 640px)';

const DISTINCTIONS: Tr[] = [
  {
    el: 'Βράβευση από την AHEPA Hellas, District Chapter 53, Marousi',
    en: 'Award from AHEPA Hellas, District Chapter 53, Marousi',
  },
  {
    el: 'Τιμητική αναγνώριση από το Ίδρυμα «Ελπίδα» για την κοινωνική προσφορά',
    en: 'Honorary recognition from the “Elpida” Foundation for social contribution',
  },
  {
    el: 'Βράβευση Επιχειρηματικής Αριστείας από το Επιμελητήριο Χαλκιδικής',
    en: 'Business Excellence Award from the Chalkidiki Chamber of Commerce',
  },
  {
    el: 'Τιμητική διάκριση από την Ελληνική Αστυνομία, Διεύθυνση Χαλκιδικής',
    en: 'Honorary distinction from the Hellenic Police, Chalkidiki Directorate',
  },
  {
    el: 'Συμμετοχή στο The Economist «The World Ahead» Gala Dinner 2021',
    en: 'Participation in The Economist “The World Ahead” Gala Dinner 2021',
  },
  {
    el: 'Συμμετοχή στο 15ο Cyprus Summit του The Economist, υπό την αιγίδα της Bank of Cyprus',
    en: 'Participation in The Economist’s 15th Cyprus Summit, under the auspices of the Bank of Cyprus',
  },
  {
    el: 'Συμμετοχή στο The Economist Croatia Business Summit, παρουσία του Προέδρου της Κροατίας',
    en: 'Participation in The Economist Croatia Business Summit, in the presence of the President of Croatia',
  },
  {
    el: 'Συνάντηση με τον Ιταλό Πρωθυπουργό Ματέο Ρέντσι',
    en: 'Meeting with Italian Prime Minister Matteo Renzi',
  },
];

export function Awards() {
  const { t } = useLang();
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(() => (window.matchMedia(MOBILE_QUERY).matches ? 1 : 3));

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => setItemsPerPage(mq.matches ? 1 : 3);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const GALLERY_PAGES = useMemo(() => chunk(GALLERY_PHOTOS, itemsPerPage), [itemsPerPage]);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const goPage = (dir: number) => {
    setPage((p) => (p + dir + GALLERY_PAGES.length) % GALLERY_PAGES.length);
  };

  return (
    <div className="page">
      <section className="awards-hero">
        <img className="awards-hero__bg" src="/images/awards/hero-environment.jpg" alt="" aria-hidden="true" />
        <div className="awards-hero__scrim" />
        <div className="container awards-hero__content">
          <div className="eyebrow">{t({ el: 'Βραβεύσεις', en: 'Awards' })}</div>
          <h1 className="awards-hero__title">
            {t({ el: 'Αναγνώριση &', en: 'Recognition &' })}{' '}
            <span className="gold-text">{t({ el: 'Διακρίσεις', en: 'Distinctions' })}</span>
          </h1>
          <p className="awards-hero__text">
            {t({
              el: 'Βραβεύσεις και τιμητικές διακρίσεις για την επιχειρηματική αριστεία, την κοινωνική προσφορά και τη θεσμική στήριξη.',
              en: 'Awards and honorary distinctions for business excellence, social contribution and institutional support.',
            })}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">{t({ el: 'Φωτογραφικό Αρχείο', en: 'Photo Archive' })}</div>
            <h2 className="section-title">
              {t({ el: 'Στιγμές &', en: 'Moments &' })}{' '}
              <span className="gold-text">{t({ el: 'Βραβεύσεις', en: 'Awards' })}</span>
            </h2>
          </div>

          <div className="carousel">
            <div className="carousel__viewport">
              <div className="carousel__track" style={{ transform: `translateX(-${page * 100}%)` }}>
                {GALLERY_PAGES.map((photos, pi) => (
                  <div className="carousel__page" key={pi}>
                    {photos.map((photo) => (
                      <figure className="carousel__item" key={photo.src}>
                        <img className="carousel__img" src={photo.src} alt={t(photo.caption)} />
                        <figcaption className={`carousel__caption${photo.long ? ' carousel__caption--long' : ''}`}>
                          {t(photo.caption)}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel__controls">
              <button type="button" aria-label={t({ el: 'Προηγούμενες φωτογραφίες', en: 'Previous photos' })} onClick={() => goPage(-1)}>
                ‹
              </button>
              <div className="carousel__pagination">
                {page + 1} / {GALLERY_PAGES.length}
              </div>
              <button type="button" aria-label={t({ el: 'Επόμενες φωτογραφίες', en: 'Next photos' })} onClick={() => goPage(1)}>
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">{t({ el: 'Διακρίσεις', en: 'Distinctions' })}</div>
            <h2 className="section-title">
              {t({ el: 'Βραβεία &', en: 'Awards &' })}{' '}
              <span className="gold-text">{t({ el: 'Αναγνωρίσεις', en: 'Recognitions' })}</span>
            </h2>
          </div>
          <div className="awards-list__grid">
            {DISTINCTIONS.map((d, i) => (
              <div className="awards-list__item" key={d.el}>
                <span className="awards-list__num">{String(i + 1).padStart(2, '0')}.</span>
                <span className="awards-list__title">{t(d)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
