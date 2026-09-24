import { TLink } from './PageTransition.jsx';

export const scrollToContact = () => {
  const el = document.getElementById('contact');
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' });
};

export default function Nav() {
  return (
    <header className="nav">
      <TLink to="/" className="nav__brand" data-cursor="home">
        <span className="nav__logo">lika</span>
        <span className="mono nav__tag">† visual artist</span>
      </TLink>
      <nav className="nav__links mono">
        <TLink to="/works" className="split-hover">works</TLink>
        <TLink to="/about" className="split-hover">about</TLink>
        <button type="button" className="split-hover" onClick={scrollToContact}>contact</button>
        <span className="nav__status"><span className="nav__dot" />open for commissions</span>
      </nav>
    </header>
  );
}
