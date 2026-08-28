import { useState } from 'react';
import { CtaBlock } from '../components/CtaBlock';

const SLIDES = [
  {
    category: 'Κοινωνική Προσφορά',
    caption: 'Στήριξη ιδρυμάτων, κοινωνικών φορέων και ανθρωπιστικών δράσεων.',
    boxes: ['Ίδρυμα «Ελπίδα»'],
    img: '/images/awards/hero-social.jpg',
  },
  {
    category: 'Διεθνείς Επαφές',
    caption: 'Αναγνώριση σε περιβάλλοντα υψηλού κύρους στην Ελλάδα και το εξωτερικό.',
    boxes: ['AHEPA Hellas'],
    img: '/images/awards/hero-international.jpg',
  },
  {
    category: 'Περιβάλλον & Επιχειρηματικότητα',
    caption: 'Βράβευση επιχειρηματικής αριστείας από το Επιμελητήριο Χαλκιδικής.',
    boxes: ['Επιμελητήριο Χαλκιδικής', 'Recycle Greece'],
    img: '/images/awards/hero-environment.jpg',
  },
  {
    category: 'Θεσμική Στήριξη',
    caption: 'Τιμητική διάκριση από την Ελληνική Αστυνομία, Διεύθυνση Χαλκιδικής.',
    boxes: ['Ελληνική Αστυνομία', 'Διεύθυνση Χαλκιδικής'],
    img: '/images/awards/hero-institutional.jpg',
  },
];

const GALLERY_PHOTOS = [
  '/images/awards/gallery-01.jpg',
  '/images/awards/gallery-02.jpg',
  '/images/awards/gallery-03.jpg',
  '/images/awards/gallery-04.jpg',
  '/images/awards/gallery-05.jpg',
  '/images/awards/gallery-06.jpg',
  '/images/awards/gallery-07.jpg',
  '/images/awards/gallery-08.jpg',
  '/images/awards/gallery-09.jpg',
  '/images/awards/gallery-10.jpg',
  '/images/awards/gallery-11.jpg',
  '/images/awards/gallery-12.jpg',
];

const PER_PAGE = 3;
const GALLERY_PAGES = Array.from({ length: Math.ceil(GALLERY_PHOTOS.length / PER_PAGE) }, (_, i) =>
  GALLERY_PHOTOS.slice(i * PER_PAGE, i * PER_PAGE + PER_PAGE),
);

export function Awards() {
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(0);

  const go = (dir: number) => {
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
  };

  const goPage = (dir: number) => {
    setPage((p) => (p + dir + GALLERY_PAGES.length) % GALLERY_PAGES.length);
  };

  return (
    <div className="page">
      <div className="gallery">
        {SLIDES.map((s, i) => (
          <div className={`gallery__slide ${i === index ? 'active' : ''}`} key={s.category}>
            <img className="gallery__img" src={s.img} alt={s.category} />
            <div className="gallery__scrim" />
            <div className="gallery__content">
              <div className="eyebrow">{s.category}</div>
              <h2 className="gallery__caption">{s.caption}</h2>
              <div className="gallery__boxes">
                {s.boxes.map((b) => (
                  <div className="gallery__box" key={b}>
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="gallery__dots">
          {SLIDES.map((s, i) => (
            <button
              key={s.category}
              type="button"
              className={`gallery__dot ${i === index ? 'active' : ''}`}
              aria-label={s.category}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <div className="gallery__nav">
          <button type="button" aria-label="Προηγούμενο" onClick={() => go(-1)}>
            ‹
          </button>
          <button type="button" aria-label="Επόμενο" onClick={() => go(1)}>
            ›
          </button>
        </div>
      </div>

      <section className="section carousel-section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Φωτογραφικό Αρχείο</div>
            <h2 className="section-title">
              Στιγμές & <span className="gold-text">Βραβεύσεις</span>
            </h2>
          </div>

          <div className="carousel">
            <div className="carousel__viewport">
              <div className="carousel__track" style={{ transform: `translateX(-${page * 100}%)` }}>
                {GALLERY_PAGES.map((photos, pi) => (
                  <div className="carousel__page" key={pi}>
                    {photos.map((photo, pj) => (
                      <figure className="carousel__item" key={photo}>
                        <img className="carousel__img" src={photo} alt={`Φωτογραφία ${pi * PER_PAGE + pj + 1}`} />
                        <figcaption className="carousel__caption">Τίτλος φωτογραφίας</figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel__controls">
              <button type="button" aria-label="Προηγούμενες φωτογραφίες" onClick={() => goPage(-1)}>
                ‹
              </button>
              <div className="carousel__pagination">
                {page + 1} / {GALLERY_PAGES.length}
              </div>
              <button type="button" aria-label="Επόμενες φωτογραφίες" onClick={() => goPage(1)}>
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
