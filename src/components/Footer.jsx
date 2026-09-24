import { EMAIL, SOCIALS } from '../data/works.js';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__star" aria-hidden="true">✦</div>
      <div className="mono label label--light">iv. — contact</div>
      <p className="footer__lead">let’s make something strange &amp; beautiful.</p>
      <div className="footer__row">
        <a href={`mailto:${EMAIL}`} className="footer__mail" data-cursor="write">{EMAIL}</a>
        <div className="footer__socials mono">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label} ↗</a>
          ))}
        </div>
      </div>
      <div className="footer__giant" aria-hidden="true">lika</div>
      <div className="footer__base mono">
        <span>© {new Date().getFullYear()} lika — all works reserved</span>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>back to top ↑</button>
      </div>
    </footer>
  );
}
