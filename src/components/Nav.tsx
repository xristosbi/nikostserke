import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const LINKS = [
  { to: '/', label: 'Αρχική' },
  { to: '/viografiko', label: 'Βιογραφικό' },
  { to: '/etaireies', label: 'Οι Εταιρείες' },
  { to: '/vraveuseis', label: 'Βραβεύσεις' },
  { to: '/epikoinonia', label: 'Επικοινωνία' },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <NavLink to="/" className="nav__brand" onClick={() => setOpen(false)}>
        Ν <span>Τσερκεζίδης</span>
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
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <button type="button" className="nav__toggle" aria-label="Μενού" onClick={() => setOpen((v) => !v)}>
        {open ? '✕' : '☰'}
      </button>
    </nav>
  );
}
