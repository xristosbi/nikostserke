import { useEffect, useRef, useState, type FormEvent } from 'react';
import { CtaBlock } from '../components/CtaBlock';
import { useLang } from '../lib/i18n';

export function Contact() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');
  const { t } = useLang();

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

    const subject = encodeURIComponent(`${t({ el: 'Νέο μήνυμα από', en: 'New message from' })} ${name}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:tserkezidisnicos@gmail.com?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  return (
    <div className="page">
      <div className="finale">
        <video ref={videoRef} className="finale__bg" src="/video/hero.webm" muted playsInline preload="auto" />
        <div className="finale__content">
          <div className="eyebrow">{t({ el: 'Επικοινωνία', en: 'Contact' })}</div>
          <h1 className="finale__heading">
            {t({
              el: 'Ας συζητήσουμε την επόμενη επιχειρηματική ή επενδυτική ευκαιρία',
              en: 'Let’s discuss the next business or investment opportunity',
            })}
          </h1>
          <div className="contact-links">
            <a className="contact-link" href="mailto:tserkezidisnicos@gmail.com">
              tserkezidisnicos@gmail.com
            </a>
            <a className="contact-link" href="tel:+306946564165">
              (+30) 694-6564-165
            </a>
          </div>
          <p className="contact-meta">{t({ el: 'Νικήτη, Χαλκιδική', en: 'Nikiti, Chalkidiki' })}</p>
        </div>
      </div>

      <section className="section contact-detail">
        <div className="container contact-detail__grid">
          <div className="contact-detail__form-wrap">
            <div className="eyebrow">{t({ el: 'Στείλτε μας μήνυμα', en: 'Send us a message' })}</div>
            <h2 className="section-title contact-detail__title">
              {t({ el: 'Ξεκινήστε μια', en: 'Start a' })}{' '}
              <span className="gold-text">{t({ el: 'Συνεργασία', en: 'Partnership' })}</span>
            </h2>

            {status === 'sent' ? (
              <p className="contact-form__sent">
                {t({
                  el: 'Ανοίξαμε το email σας με το μήνυμά σας συμπληρωμένο — πατήστε αποστολή εκεί για να μας το στείλετε.',
                  en: 'We’ve opened your email app with your message filled in — press send there to deliver it to us.',
                })}
              </p>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <label className="contact-form__field">
                  <span>{t({ el: 'Όνομα', en: 'Name' })}</span>
                  <input type="text" name="name" required placeholder={t({ el: 'Το ονοματεπώνυμό σας', en: 'Your full name' })} />
                </label>
                <label className="contact-form__field">
                  <span>Email</span>
                  <input type="email" name="email" required placeholder="you@example.com" />
                </label>
                <label className="contact-form__field">
                  <span>{t({ el: 'Μήνυμα', en: 'Message' })}</span>
                  <textarea name="message" required rows={5} placeholder={t({ el: 'Πείτε μας για το έργο σας…', en: 'Tell us about your project…' })} />
                </label>
                <button type="submit" className="contact-form__submit">
                  {t({ el: 'Αποστολή', en: 'Send' })}
                </button>
              </form>
            )}
          </div>

          <div className="contact-detail__photo">
            <img src="/images/contact/contact-photo.jpg" alt={t({ el: 'Νίκος Τσερκεζίδης', en: 'Nikos Tserkezidis' })}
              style={{ objectPosition: '50% 30%' }} />
          </div>
        </div>
      </section>

      <CtaBlock />

      <footer className="footer">
        <span className="footer__copy">© {new Date().getFullYear()} {t({ el: 'Νίκος Τσερκεζίδης', en: 'Nikos Tserkezidis' })}</span>
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
