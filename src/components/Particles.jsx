import { useEffect, useRef } from 'react';

const COLORS = ['159,134,224', '240,160,195', '130,180,235', '140,210,185', '125,98,201'];

export default function Particles({ count = 56 }) {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current, ctx = c.getContext('2d');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mouse = { x: -999, y: -999 };
    const resize = () => {
      const d = Math.min(devicePixelRatio || 1, 2);
      c.width = innerWidth * d; c.height = innerHeight * d; ctx.setTransform(d, 0, 0, d, 0, 0);
    };
    resize();
    const parts = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * innerWidth, y: Math.random() * innerHeight, r: 0.8 + Math.random() * 2.4,
      vx: (Math.random() - 0.5) * 0.15, vy: -(0.08 + Math.random() * 0.3), t: Math.random() * 6.28,
      c: COLORS[i % COLORS.length], star: Math.random() < 0.3, ox: 0, oy: 0,
    }));
    const move = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    let raf;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      const w = innerWidth, h = innerHeight;
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        if (!reduce) {
          p.t += 0.016; p.x += p.vx + Math.sin(p.t) * 0.15; p.y += p.vy;
          const dx = p.x + p.ox - mouse.x, dy = p.y + p.oy - mouse.y, dd = dx * dx + dy * dy;
          if (dd < 18000) { const dist = Math.sqrt(dd) || 1, f = (1 - dd / 18000) * 1.8; p.ox += (dx / dist) * f; p.oy += (dy / dist) * f; }
          p.ox *= 0.94; p.oy *= 0.94;
          if (p.y < -20) { p.y = h + 20; p.x = Math.random() * w; }
          if (p.x < -20) p.x = w + 20;
          if (p.x > w + 20) p.x = -20;
        }
        const a = 0.18 + 0.32 * (0.5 + 0.5 * Math.sin(p.t * 2)), X = p.x + p.ox, Y = p.y + p.oy;
        ctx.fillStyle = ctx.strokeStyle = `rgba(${p.c},${a})`;
        if (p.star) {
          const s = p.r * 3; ctx.lineWidth = 0.8; ctx.beginPath();
          ctx.moveTo(X - s, Y); ctx.lineTo(X + s, Y); ctx.moveTo(X, Y - s); ctx.lineTo(X, Y + s); ctx.stroke();
        } else { ctx.beginPath(); ctx.arc(X, Y, p.r, 0, 6.283); ctx.fill(); }
      }
    };
    addEventListener('resize', resize); addEventListener('mousemove', move);
    loop();
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', resize); removeEventListener('mousemove', move); };
  }, [count]);

  return <canvas ref={ref} className="particles" aria-hidden="true" />;
}
