import { WORKS, CATEGORIES, PORTRAIT, tint } from '../data/works.js';
import { useGo } from '../components/PageTransition.jsx';

const INFLUENCES = [
  ['ambient & drone', 295], ['illuminated manuscripts', 350], ['anime & manga', 230],
  ['moss, fog & coastlines', 170], ['gothic architecture', 60], ['late-night game soundtracks', 295],
];

export default function About() {
  const go = useGo();
  return (
    <section className="page">
      <h1 className="display display--xl rise"><em>about</em> <span className="gothic">lika</span></h1>

      <div className="about">
        <div className="portrait portrait--lg rise" style={{ animationDelay: '.2s' }}>
          <div className="portrait__offset" />
          <div className="portrait__img">
            {PORTRAIT ? <img src={PORTRAIT} alt="Lika" /> : <div className="art art--ph"><span className="mono">portrait of lika</span></div>}
          </div>
          <div className="portrait__mark">†</div>
        </div>

        <div className="about__copy rise" style={{ animationDelay: '.35s' }}>
          <p className="about__lead">lika is a visual artist working between the painted, the drawn and the photographed — building quiet, slightly haunted worlds.</p>
          <p className="body">Her work moves between oil and graphite, digital painting, film photography and interior design, but it always circles the same place: forests after dark, old chapels, fog over water, figures who look like they belong in a story no one finished writing.</p>
          <p className="body">She takes on commissions for original pieces, illustration, editorial photography and interior concepts for homes, studios and small hospitality spaces.</p>

          <div className="mono label about__sub">things that find their way into the work</div>
          <div className="tags mono">
            {INFLUENCES.map(([t, h]) => (
              <span key={t} className="tag" style={{ '--c': `oklch(0.8 0.08 ${h})`, '--tag-bg': `oklch(0.93 0.04 ${h})` }}>{t}</span>
            ))}
          </div>

          <div className="about__list">
            {CATEGORIES.map((c) => (
              <button key={c.name} type="button" className="about__row" data-cursor="browse" style={{ '--tint': tint(c.hue) }}
                onClick={() => go(`/works?cat=${c.name}`)}>
                <span className="about__row-name">{c.name.toLowerCase()}</span>
                <span className="mono">{WORKS.filter((w) => w.cat === c.name).length} works →</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
