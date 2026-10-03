import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLang, type Lang } from '../lib/i18n';

const LINKS = [
  { to: '/', label: { el: 'Αρχική', en: 'Home' } },
  { to: '/viografiko', label: { el: 'Βιογραφικό', en: 'Biography' } },
  { to: '/etaireies', label: { el: 'Οι Εταιρείες', en: 'Companies' } },
  { to: '/vraveuseis', label: { el: 'Βραβεύσεις', en: 'Awards' } },
  { to: '/epikoinonia', label: { el: 'Επικοινωνία', en: 'Contact' } },
];

const LANGS: Lang[] = ['el', 'en'];

export function Nav() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  return (
    <nav className="nav">
      <NavLink to="/" className="nav__brand" onClick={() => setOpen(false)}>
        {t({ el: 'Ν', en: 'N' })} <span>{t({ el: 'Τσερκεζίδης', en: 'Tserkezidis' })}</span>
      </NavLink>
      <ul className={`nav__links ${open ? 'open' : ''}`}>
        {LINKS.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              {t(link.label)}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="nav__actions">
        <div className="lang-toggle" role="group" aria-label={t({ el: 'Γλώσσα', en: 'Language' })}>
          {LANGS.map((l, i) => (
            <span key={l} className="lang-toggle__item">
              {i > 0 && <span className="lang-toggle__sep">|</span>}
              <button
                type="button"
                className={`lang-toggle__btn ${lang === l ? 'active' : ''}`}
                aria-pressed={lang === l}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            </span>
          ))}
        </div>
        <button
          type="button"
          className="nav__toggle"
          aria-label={t({ el: 'Μενού', en: 'Menu' })}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}
