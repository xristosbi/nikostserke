import { useEffect, useRef, useState, type FormEvent } from 'react';
import { CtaBlock } from '../components/CtaBlock';

export function Contact() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onLoaded = () => {
      v.currentTime = (v.duration || 0) * 0.5;
    };
    v.addEventListener('loadedmetadata', onLoaded);
    return () => v.removeEventListener('loadedmetadata', onLoaded);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`Νέο μήνυμα από ${name}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:tserkezidisnicos@gmail.com?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  return (
    <div className="page">
      <div className="finale">
        <video ref={videoRef} className="finale__bg" src="/video/hero.webm" muted playsInline preload="auto" />
        <div className="finale__content">
          <div className="eyebrow">Επικοινωνία</div>
          <h1 className="finale__heading">Ας συζητήσουμε την επόμενη επιχειρηματική ή επενδυτική ευκαιρία</h1>
          <div className="contact-links">
            <a className="contact-link" href="mailto:tserkezidisnicos@gmail.com">
              tserkezidisnicos@gmail.com
            </a>
            <a className="contact-link" href="tel:+306946564165">
              (+30) 694-6564-165
            </a>
          </div>
          <p className="contact-meta">Νικήτη, Χαλκιδική</p>
        </div>
      </div>

      <section className="section contact-detail">
        <div className="container contact-detail__grid">
          <div className="contact-detail__photo">
            <img src="/images/contact/contact-photo.jpg" alt="Νίκος Τσερκεζίδης" style={{ objectPosition: '50% 30%' }} />
          </div>

          <div className="contact-detail__form-wrap">
            <div className="eyebrow">Στείλτε μας μήνυμα</div>
            <h2 className="section-title contact-detail__title">
              Ξεκινήστε μια <span className="gold-text">Συνεργασία</span>
            </h2>

            {status === 'sent' ? (
              <p className="contact-form__sent">
                Ανοίξαμε το email σας με το μήνυμά σας συμπληρωμένο — πατήστε αποστολή εκεί για να μας το στείλετε.
              </p>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <label className="contact-form__field">
                  <span>Όνομα</span>
                  <input type="text" name="name" required placeholder="Το ονοματεπώνυμό σας" />
                </label>
                <label className="contact-form__field">
                  <span>Email</span>
                  <input type="email" name="email" required placeholder="you@example.com" />
                </label>
                <label className="contact-form__field">
                  <span>Μήνυμα</span>
                  <textarea name="message" required rows={5} placeholder="Πείτε μας για το έργο σας…" />
                </label>
                <button type="submit" className="contact-form__submit">
                  Αποστολή
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <CtaBlock />

      <footer className="footer">
        <span className="footer__copy">© {new Date().getFullYear()} Νίκος Τσερκεζίδης</span>
        <ul className="footer__social">
          <li>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              YouTube
            </a>
          </li>
          <li>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              TikTok
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
