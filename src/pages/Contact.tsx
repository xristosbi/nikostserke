import { useEffect, useRef } from 'react';

export function Contact() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onLoaded = () => {
      v.currentTime = (v.duration || 0) * 0.5;
    };
    v.addEventListener('loadedmetadata', onLoaded);
    return () => v.removeEventListener('loadedmetadata', onLoaded);
  }, []);

  return (
    <div className="page">
      <div className="finale">
        <video ref={videoRef} className="finale__bg" src="/video/hero.webm" muted playsInline preload="auto" />
        <div className="finale__content">
          <div className="eyebrow">Επικοινωνία</div>
          <h1 className="finale__heading">Ας συζητήσουμε την επόμενη επιχειρηματική ή επενδυτική ευκαιρία.</h1>
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
