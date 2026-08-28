import { Link } from 'react-router-dom';

export function CtaBlock() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <h2 className="cta__heading">
          Επικοινωνήστε μαζί μας για το <span className="gold-text">επόμενο έργο</span>
        </h2>
        <Link to="/epikoinonia" className="cta__button">
          Επικοινωνία
        </Link>
      </div>
    </section>
  );
}
