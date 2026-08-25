import { useState } from 'react';

const SLIDES = [
  {
    category: 'Κοινωνική Προσφορά',
    caption: 'Στήριξη ιδρυμάτων, κοινωνικών φορέων και ανθρωπιστικών δράσεων.',
    boxes: ['Ίδρυμα «Ελπίδα»'],
    gradient: 'radial-gradient(circle at 30% 20%, #241b12 0%, #0d0b10 70%)',
  },
  {
    category: 'Διεθνείς Επαφές',
    caption: 'Αναγνώριση σε περιβάλλοντα υψηλού κύρους στην Ελλάδα και το εξωτερικό.',
    boxes: ['AHEPA Hellas'],
    gradient: 'radial-gradient(circle at 70% 30%, #201c2a 0%, #0d0b10 70%)',
  },
  {
    category: 'Περιβάλλον & Επιχειρηματικότητα',
    caption: 'Βράβευση επιχειρηματικής αριστείας από το Επιμελητήριο Χαλκιδικής.',
    boxes: ['Επιμελητήριο Χαλκιδικής', 'Recycle Greece'],
    gradient: 'radial-gradient(circle at 40% 70%, #14231a 0%, #0d0b10 70%)',
  },
  {
    category: 'Θεσμική Στήριξη',
    caption: 'Τιμητική διάκριση από την Ελληνική Αστυνομία, Διεύθυνση Χαλκιδικής.',
    boxes: ['Ελληνική Αστυνομία', 'Διεύθυνση Χαλκιδικής'],
    gradient: 'radial-gradient(circle at 60% 60%, #221a14 0%, #0d0b10 70%)',
  },
];

export function Awards() {
  const [index, setIndex] = useState(0);

  const go = (dir: number) => {
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
  };

  return (
    <div className="page">
      <div className="gallery">
        {SLIDES.map((s, i) => (
          <div className={`gallery__slide ${i === index ? 'active' : ''}`} key={s.category}>
            <div className="gallery__img" style={{ background: s.gradient }} />
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
    </div>
  );
}
