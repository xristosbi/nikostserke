import { Link } from 'react-router-dom';
import { useLang } from '../lib/i18n';

export function CtaBlock() {
  const { t } = useLang();
  return (
    <section className="cta">
      <div className="container cta__inner">
        <h2 className="cta__heading">
          {t({ el: 'Επικοινωνήστε μαζί μας για το', en: 'Get in touch about your' })}{' '}
          <span className="gold-text">{t({ el: 'επόμενο έργο', en: 'next project' })}</span>
        </h2>
        <Link to="/epikoinonia" className="cta__button">
          {t({ el: 'Επικοινωνία', en: 'Contact' })}
        </Link>
      </div>
    </section>
  );
}
