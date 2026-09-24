import { useSearchParams } from 'react-router-dom';
import { WORKS, CATEGORIES } from '../data/works.js';
import ArtCard from '../components/ArtCard.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Works() {
  const [params, setParams] = useSearchParams();
  const filter = params.get('cat') || 'All';
  const list = filter === 'All' ? WORKS : WORKS.filter((w) => w.cat === filter);
  const names = ['All', ...CATEGORIES.map((c) => c.name)];

  return (
    <section className="page">
      <div className="page__head">
        <h1 className="display display--xl rise"><em>the</em> <span className="gothic">archive</span></h1>
        <div className="mono label rise" style={{ animationDelay: '.15s' }}>{list.length} / {WORKS.length} works</div>
      </div>

      <div className="filters mono rise" style={{ animationDelay: '.25s' }}>
        {names.map((n) => (
          <button key={n} type="button" className={`filter split-hover ${filter === n ? 'is-active' : ''}`}
            onClick={() => setParams(n === 'All' ? {} : { cat: n }, { replace: true })}>
            {n.toLowerCase()}<sup>{n === 'All' ? WORKS.length : WORKS.filter((w) => w.cat === n).length}</sup>
          </button>
        ))}
      </div>

      <div className="grid" key={filter}>
        {list.map((w, i) => (
          <Reveal key={w.slug} delay={(i % 3) * 100} className="grid__item" style={{ marginTop: i % 3 === 1 ? 70 : 0 }}>
            <ArtCard work={w} index={WORKS.indexOf(w)} compact />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
