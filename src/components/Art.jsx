import { soft } from '../data/works.js';

/** Artwork image, or a striped placeholder when no image is set. */
export default function Art({ work, fit = 'cover', label }) {
  if (work.image) {
    return <img className="art" src={work.image} alt={work.title} style={{ objectFit: fit }} loading="lazy" />;
  }
  return (
    <div className="art art--ph" style={{ '--ph': soft(work.hue) }}>
      <span className="mono">{label || `${work.title.toLowerCase()} — ${work.cat.toLowerCase()}`}</span>
    </div>
  );
}
