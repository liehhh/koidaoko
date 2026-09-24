import { useParams } from 'react-router-dom';
import { WORKS, EMAIL, accent, roman } from '../data/works.js';
import { useGo } from '../components/PageTransition.jsx';
import Art from '../components/Art.jsx';
import ArrowLink from '../components/ArrowLink.jsx';

export default function Work() {
  const { slug } = useParams();
  const go = useGo();
  const idx = Math.max(0, WORKS.findIndex((w) => w.slug === slug));
  const work = WORKS[idx];
  const prev = WORKS[(idx - 1 + WORKS.length) % WORKS.length];
  const next = WORKS[(idx + 1) % WORKS.length];

  return (
    <section className="page page--work" style={{ '--accent': accent(work.hue) }}>
      <button type="button" className="back mono rise" data-cursor="back" onClick={() => go('/works')}><span>←</span> back to the archive</button>

      <div className="work">
        <div className="work__media rise" style={{ animationDelay: '.1s' }}>
          <div className="work__box" style={{ aspectRatio: work.ratio }}>
            <div className="work__offset" />
            <div className="work__img"><Art work={work} fit="contain" /></div>
          </div>
        </div>

        <div className="work__info rise" style={{ animationDelay: '.3s' }}>
          <div className="mono work__kicker"><span className="diamond" />{roman(idx)} — {work.cat.toLowerCase()}, {work.year}</div>
          <h1 className="work__title">{work.title.toLowerCase()}</h1>
          <dl className="specs mono">
            <div><dt>medium</dt><dd>{work.medium}</dd></div>
            <div><dt>dimensions</dt><dd>{work.size}</dd></div>
            <div><dt>year</dt><dd>{work.year}</dd></div>
          </dl>
          <p className="body">{work.desc}</p>
          <p className="body body--note">{work.note}</p>
          <ArrowLink as="a" className="arrow-link--md" data-cursor="write"
            href={`mailto:${EMAIL}?subject=${encodeURIComponent('Inquiry — ' + work.title)}`}>inquire about this piece</ArrowLink>
        </div>
      </div>

      <nav className="pager">
        <button type="button" className="pager__item" data-cursor="prev" onClick={() => go(`/work/${prev.slug}`)}>
          <span className="mono label">← previous</span>
          <span className="pager__title">{prev.title.toLowerCase()}</span>
        </button>
        <button type="button" className="pager__item pager__item--next" data-cursor="next" onClick={() => go(`/work/${next.slug}`)}>
          <span className="mono label">next →</span>
          <span className="pager__title">{next.title.toLowerCase()}</span>
        </button>
      </nav>
    </section>
  );
}
