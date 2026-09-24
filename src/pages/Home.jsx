import { useEffect, useRef } from 'react';
import { WORKS, CATEGORIES, PORTRAIT, numberWord, tint } from '../data/works.js';
import { useGo } from '../components/PageTransition.jsx';
import ArtCard, { tiltHandlers } from '../components/ArtCard.jsx';
import Art from '../components/Art.jsx';
import Reveal from '../components/Reveal.jsx';
import ArrowLink from '../components/ArrowLink.jsx';

const LAYOUT = [
  { basis: '52%', ratio: '3/4', mt: 0 }, { basis: '38%', ratio: '3/2', mt: 200 },
  { basis: '36%', ratio: '4/5', mt: 0 }, { basis: '52%', ratio: '1/1', mt: 140 },
  { basis: '46%', ratio: '16/10', mt: 0 }, { basis: '42%', ratio: '4/5', mt: 100 },
];

const DISCIPLINES = 'painting † drawing ✦ digital painting † photography ✦ interior design † ';
const MOODS = 'moss & moonlight ·· fog over water ·· old chapels ·· ambient hours ·· elven quiet ·· ink & gold ·· 3am rooftops ·· ';

function magnetic(strength = 0.25) {
  return {
    onMouseMove(e) {
      const el = e.currentTarget, r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * strength}px, ${(e.clientY - r.top - r.height / 2) * strength}px)`;
    },
    onMouseLeave(e) { e.currentTarget.style.transform = 'translate(0,0)'; },
  };
}

export default function Home() {
  const go = useGo();
  const hero = WORKS[0];
  const parallax = useRef(null);

  useEffect(() => {
    const onScroll = () => { if (parallax.current) parallax.current.style.translate = `0 ${window.scrollY * -0.07}px`; };
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__marks mono" aria-hidden="true"><span>+</span><span>portfolio — mmxxvi</span><span>+</span></div>
        <div className="hero__side mono" aria-hidden="true">paintings · drawings · digital · photographs · rooms</div>

        <div className="hero__copy">
          <div className="mono label rise" style={{ animationDelay: '.1s' }}>— the work of</div>
          <h1 className="hero__title" aria-label="lika">
            {'lika'.split('').map((ch, i) => (
              <span key={i} className="hero__letter" style={{ animationDelay: `${0.2 + i * 0.18}s` }}>
                <span>{ch}</span>
              </span>
            ))}
          </h1>
          <p className="hero__lead rise" style={{ animationDelay: '1s' }}>
            paintings, drawings &amp; quiet worlds — made by hand, by light, and by pixel.
          </p>
          <div className="hero__ctas rise" style={{ animationDelay: '1.2s' }}>
            <ArrowLink className="arrow-link--lg" data-cursor="enter" onClick={() => go('/works')}>enter the gallery</ArrowLink>
            <button type="button" className="dash-link mono" data-cursor="read" onClick={() => go('/about')}>about the artist</button>
          </div>
        </div>

        <div className="hero__art rise" style={{ animationDelay: '.6s' }} ref={parallax}>
          <div className="hero__float">
            <div className="hero__frame hero__frame--a" />
            <div className="hero__frame hero__frame--b" />
            <div className="card hero__card" data-cursor="view" onClick={() => go(`/work/${hero.slug}`)} {...tiltHandlers}>
              <div className="card__media" style={{ position: 'absolute', inset: 0 }}>
                <div className="card__img"><Art work={hero} label="featured artwork" /></div>
                <div className="card__shine" />
                <div className="card__frame" />
              </div>
            </div>
            <div className="hero__caption">
              <span>{hero.title.toLowerCase()}</span>
              <span className="mono">{hero.medium.split(' ')[0]}, {hero.year}</span>
            </div>
            <div className="hero__star" aria-hidden="true">✦</div>
          </div>
        </div>

        <div className="scroll-cue" aria-hidden="true"><span className="mono">scroll</span><span className="scroll-cue__line" /></div>
      </section>

      {/* MARQUEES */}
      <section className="marquees" aria-hidden="true">
        <div className="marquee marquee--dark">
          <div className="marquee__track">{[0, 1].map((k) => <span key={k}>{DISCIPLINES}</span>)}</div>
        </div>
        <div className="marquee marquee--line">
          <div className="marquee__track marquee__track--rev mono">{[0, 1].map((k) => <span key={k}>{MOODS}</span>)}</div>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="section">
        <Reveal className="section__head">
          <div>
            <div className="mono label">i. — selected</div>
            <h2 className="display">
              <em>recent</em> <span className="gothic">works</span>
            </h2>
          </div>
          <p className="section__aside">a handful of recent pieces. hover to look closer, click to step inside.</p>
        </Reveal>

        <div className="featured">
          {WORKS.slice(0, 6).map((w, i) => (
            <Reveal key={w.slug} delay={(i % 2) * 100} className="featured__item" style={{ flexBasis: LAYOUT[i].basis, marginTop: LAYOUT[i].mt }}>
              <ArtCard work={w} index={i} ratio={LAYOUT[i].ratio} />
            </Reveal>
          ))}
        </div>

        <Reveal className="more">
          <div className="more__magnet" {...magnetic()}>
            <button type="button" className="more__btn" data-cursor="open" onClick={() => go('/works')}>
              <span className="more__ring" />
              <span className="more__fill" />
              <svg className="more__text" viewBox="0 0 280 280" aria-hidden="true">
                <defs><path id="more-circle" d="M140,140 m-116,0 a116,116 0 1,1 232,0 a116,116 0 1,1 -232,0" /></defs>
                <text><textPath href="#more-circle">the full archive · {numberWord(WORKS.length)} pieces · five disciplines · </textPath></text>
              </svg>
              <span className="more__label">
                <span className="gothic">more</span>
                <em>works †</em>
              </span>
            </button>
          </div>
        </Reveal>
      </section>

      {/* DISCIPLINES */}
      <section className="section">
        <Reveal className="mono label">ii. — disciplines</Reveal>
        <div className="disciplines">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.name}>
              <button type="button" className="discipline" data-cursor="browse" style={{ '--tint': tint(c.hue) }}
                onClick={() => go(`/works?cat=${c.name}`)}>
                <span className="discipline__bg" />
                <span className="mono discipline__num">0{i + 1}</span>
                <span className="discipline__name">{c.name.toLowerCase()}</span>
                <span className="discipline__line">{c.line}</span>
                <span className="mono discipline__count">{WORKS.filter((w) => w.cat === c.name).length} works →</span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="section teaser">
        <Reveal className="portrait">
          <div className="portrait__offset" />
          <div className="portrait__img">
            {PORTRAIT ? <img src={PORTRAIT} alt="Lika" /> : <div className="art art--ph"><span className="mono">portrait of lika</span></div>}
          </div>
          <div className="portrait__mark">†</div>
        </Reveal>
        <Reveal className="teaser__copy" delay={120}>
          <div className="mono label">iii. — the artist</div>
          <p className="quote">“i paint the hour after the music stops — when the forest is still humming and nobody is looking.”</p>
          <ArrowLink className="arrow-link--md" data-cursor="read" onClick={() => go('/about')}>more about lika</ArrowLink>
        </Reveal>
      </section>
    </>
  );
}
