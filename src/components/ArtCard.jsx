import { accent, roman } from '../data/works.js';
import { useGo } from './PageTransition.jsx';
import Art from './Art.jsx';

export const tiltHandlers = {
  onMouseMove(e) {
    const el = e.currentTarget, r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(1200px) rotateY(${(px - 0.5) * 7}deg) rotateX(${(0.5 - py) * 7}deg)`;
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
  },
  onMouseLeave(e) {
    e.currentTarget.style.transform = 'perspective(1200px) rotateY(0) rotateX(0)';
  },
};

export default function ArtCard({ work, index, ratio, compact = false }) {
  const go = useGo();
  const open = () => go(`/work/${work.slug}`);
  return (
    <article
      className={`card ${compact ? 'card--compact' : ''}`}
      data-cursor="view"
      role="link"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === 'Enter' && open()}
      {...tiltHandlers}
      style={{ '--accent': accent(work.hue) }}
    >
      <div className="card__media-wrap">
        <div className="card__offset" />
        <div className="card__media" style={{ aspectRatio: ratio || work.ratio }}>
          <div className="card__img"><Art work={work} /></div>
          <div className="card__shine" />
          <div className="card__frame" />
          <div className="card__open mono">open ↗</div>
        </div>
      </div>
      <div className="card__meta">
        <span className="card__num">{roman(index)}</span>
        <div className="card__text">
          <h3 className="card__title">{work.title.toLowerCase()}</h3>
          <div className="card__cat mono"><span className="diamond" />{work.cat.toLowerCase()} — {work.year}</div>
        </div>
      </div>
    </article>
  );
}
